import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request)
{
    try
    {
            const reqBody  = await request.json();
            const {email,password} = reqBody;
            console.log("reqbody is ",reqBody);
            console.log("email is ",email);

            ///checking if user actually exits
            const user = await User.findOne({email})

            
            if(!user)
            {
                return NextResponse.json({error: "User not found"},{status:400});
            }

            ///checking password
            const validpassword  = bcryptjs.compare(password,user.password);
            if(!validpassword)
            {
                return NextResponse.json({error: "Invalid Password"},{status:400})
            }
            //// tokenData
            const tokenData =
            {
                    id: user._id,
                    username : user.username,
                    email : user.email,

            }
            /// creating token
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET,{expiresIn: "1d"})

            const response = NextResponse.json(
                {
                    message:"login successfull",
                    success:true,
                }
            )

            response.cookies.set("token",token,{httpOnly:true})
            return response;



            


    }
    
    catch (error)
    
    {
        return NextResponse.json({error: error.message},{status:500});
        
    }



}