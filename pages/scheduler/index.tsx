import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <>
    
      <main className="  overflow-hidden ml-20">
        <div className="mt-12 w-fit ">
             <h2 className="ml-[40px] bg-orange-400 w-fit  text-4xl p-1 text-white font-bold italic">
              Scheduler</h2>
              <h3>
                Connect to your social media accounts
              </h3> 
            </div>
          <div className="grid grid-rows-1 grid-cols-4 gap-2 place-items-center mt-12 w-fit">
            <div className="w-fit">
            <h2 className="font-bold text-lg">Accounts: </h2></div>
            <div className="bg-red-200 rounded-full">
            <h3 className="p-1">
              Youtube
            </h3>

            </div>
            <div className="bg-green-200 rounded-full">
            <h3 className="p-1">
              TikTok
            </h3>

            </div>
            <div className="bg-purple-200  rounded-full">
            <h3 className="p-1">
              Instgram
            </h3>

            </div>
            

          </div>
          <div className="mt-12 grid grid-cols-4 grid-flex-row">
            <div className="border-2 p-2 w-fit  ">
              <h2 className="text-xs mb-2 font-bold">00/00/0000 07:00 AM GTC</h2>
              <Image className="" alt='thumbnail 1' src="/mrbeast.jpeg" width={640} height={360}>
              </Image>
              <h4 className=" text-sm mt-1"> How To Make $100 Mil in 24 Hours</h4>
              <div className="bg-red-200 rounded-lg">
                <h3 className="italics text-sm font-bold text-center ">Youtube</h3>
              </div>
              <div className="bg-black text-center text-white text-xs mt-1 grid grid-cols-3">
                <h5 className=""></h5>
                <h5 className="hover:text-purple-600 hover:font-bold">Details</h5>
                <h5 className="hover:text-purple-600 hover:font-bold">Edit</h5>

              </div>
            </div>
            <div className="flex justify-center place-items-center text-6xl">
              
              +
            </div>


          </div>

      </main>


    
    </>
  )
}

export default index
