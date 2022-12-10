import React from 'react'

function LoginScreen() {
  return (
    <div className=" h-screen bg-white grid grid-col-1 lg:grid-cols-2 xl:grid-cols-5">
      <div className=" overflow-y-scroll">
        <div className=" px-10 pt-4">
        <div className=" flex items-center pt-1">
          {/* <img className=" h-14 w-14" src="" alt="LOGO of Site" /> */}
          <p className=" text-2xl font-medium text-gray-800 ">Easy Chat</p>
        </div>
        <div className=" pt-10">
            <p className="text-2xl font-medium text-gray-700 mb-4">Log in</p>
            <div className=" flex space-x-3">
                <button className=" flex items-center space-x-1 px-4 border py-[6px] w-1/2 justify-center rounded-md">
                    <img alt="google-oauth2" className=" h-5 w-5" src="//heathmont.imgix.net/bitcasino/images/google-oauth2.svg?auto=compress,format" loading="lazy" />
                        <span>Google</span>
                </button>
            </div>

        </div>
        <div className=" flex items-center space-x-2 my-4 ">
            <hr className=" border w-full" />
            <p className=" text-sm font-medium text-gray-600">or</p>
            <hr className=" border w-full" />

        </div>
        <div className=" flex flex-col  space-y-3">
            <div className=" flex flex-col space-y-2">
                <p className=" font-ligh text-gray-600 ">Email</p>
                <input className=" border rounded-md py-2" />
            </div>
            <div className=" flex flex-col space-y-2">
                <p className=" font-ligh text-gray-600 ">Password</p>
                <input className=" border rounded-md py-2" />
            </div>            
        </div>
        <div className=" mt-6">
            <button className=" py-3 rounded-md font-bold  bg-fuchsia-500 text-white w-full "> Log in</button>
        </div>
        <div className=" text-purple-500 pt-4 flex flex-col space-y-1">
            <p className=" text-sm font-medium cursor-pointer">Forgot Password?
            </p>
            
            <p className=" text-sm font-medium text-gray-800"> {`Don't have an account ?`} <span className=" text-sm font-medium hover:underline cursor-pointer text-purple-500">Create one</span></p>
            <p className=" leading-4 text-xs text-gray-500 pt-6">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
        </div>
      </div>
      <div className=" registerbanner hidden  lg:flex xl:col-span-4">
            <div  className=" flex justify-center items-center w-full bg-black/60 ">
            <div>
              <img src="https://images.wallpaperscraft.com/image/single/lawn_forest_mountains_144578_1920x1080.jpg" className=' h-full' />
            </div>
            </div>
      </div>
    </div>
  )
}

export default LoginScreen