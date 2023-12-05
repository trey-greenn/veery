import React, { useState } from 'react';

export default function  Chat(){
  
  
  return (
    <div className="">
        <div className="bg-gray-900 grid grid-cols-5 mt-12 rounded-lg border-2 border-gray-600 h-5/6 mx-12 ">
            <div className="  bg-black">

                </div>
            <div className="grid grid-rows-3 col-start-2 col-end-5">
                <div className="">
                    <h1 className="space-x-2 p-4 m-2 flex justify-center text-orange-400 font-bold text-2xl mt-2"> 
                    <svg className="w-6 h-6 text-gray-800 dark:text-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 20">
                        <path d="M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z"/>
                    </svg>
                    Idea Generator</h1>
                </div>
                <div className="row-start-3 self-end rounded-full border-2 m-2 p-2">
                <label className="m-4 text-white" htmlFor="chatInput">Type: 
                <input
                type="text"
                value="Give me ideas for my skit channel"
                className="w-4/6 m-2 bg-transparent"
                
                />
               
                
                

                </label>

                </div>
                



            </div>
            
            
            
            


        </div>
        
        
      
    </div>
  )
}


