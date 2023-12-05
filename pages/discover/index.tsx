import React from 'react'
import Image
 from 'next/image'
const index = () => {
  return (
    <div className="">
      <div className="flex justify-center">
      <h2 className="ml-1/2 w-fit p-2 rounded text-white text-3xl mt-24 font-bold bg-gradient-to-r from-purple-600 via-black to-purple-200">Discover</h2>
      </div>
      <div className="flex flex-row justify-center gap-2 mx-2 mt-4 border-b pb-2 ">
        <div className="bg-black rounded-xl hover:bg-purple-600">
        <h4 className="text-white font-bold p-1">Music Videos</h4></div>
        <div className="bg-black rounded-xl hover:bg-purple-600"><h4 className="text-white font-bold p-1">Short Films</h4></div>
        <div className="bg-black rounded-xl hover:bg-purple-600"><h4 className="text-white font-bold p-1">Skits</h4></div>
        <div className="bg-black rounded-xl hover:bg-purple-600"><h4 className="text-white font-bold p-1">Vlogs</h4></div>
        <div className="bg-black rounded-xl hover:bg-purple-600"><h4 className="text-white font-bold p-1">Visualizers</h4></div>
        <div className="bg-black rounded-xl hover:bg-purple-600"><h4 className="text-white font-bold p-1">Animations</h4></div>
        
      </div>
      
      
      <div className="grid xl:grid-cols-3 grid-cols-1 grid-flow-row gap-4 mx-6">
        <div className="rounded-lg h-fit grid grid-cols-5 bg-gradient-to-r from-orange-600 to-purple-600 mt-10 place-items-center">
          <div className="col-start-1 col-span-full ">
            <div className="p-0.5 text-center text-xl">
              <h2>Jimmy Buffet</h2>
            </div>
          <Image className="" alt="discover image" width={350} height={200} src='/mrbeast.jpeg'>

          </Image>
          </div>
          <div className="col-span-full m-2 ">
           
            
            <h4>Categories:
              <span> Music Videos</span>
              <span> Vlog</span>
              <span> Animations</span>
              <span> Skits</span>
            </h4>
            </div>
      
         

        </div>

      </div>
    </div>
  )
}

export default index
