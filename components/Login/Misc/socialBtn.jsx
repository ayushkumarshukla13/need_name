'use client'
import React from 'react'

const SocialBtn = () => {
  <script src="https://apis.google.com/js/platform.js" async defer>
      <meta name="google-signin-client_id" content="679730712951-jptdni4e55r5la3el36ohmivndkd8kiq.apps.googleusercontent.com"></meta>

  </script>

  return (
    <div className="flex justify-around gap-4">
        <button className="btn btn-square flex justify-center items-center">

        <img src="/facebook.png" className='h-5'/>

        </button>

        <div class="g-signin2" data-onsuccess="onSignIn">
          <button className="btn btn-square flex justify-center items-center">

          <img src="/google.png" className='h-5'/>

          </button>
        </div>


        


        <button className="btn btn-square flex justify-center items-center">
        <img src="/google.png"  className='h-5'/>
        </button>

        <button className="btn btn-square flex justify-center items-center">
        <img src="/x.png" className='h-5' />
        </button>


    </div>
  )
}

export default SocialBtn