import React from 'react'

const index = () => {
  return (
    <div className="mt-36">
         <div className="w-fit rounded-full bg-black border-2 m-2 p-2">
                <label className="bg-gray-600 p-2 rounded-full m-4 text-white" htmlFor="chatInput">Download: 
                <input
                type="text"
                value="URL"
                className=" m-2 bg-transparent"
                
                />
               
               <select name="source" id="source" placeholder='Youtube' className="text-black">
                    <option value="somevalue" className="text-black"> Youtube </option>
                    <option value="somevalue" className="text-black"> Youtube </option>
                    <option value="somevalue" className="text-black"> Youtube </option>
                    <option value="somevalue" className="text-black"> Youtube </option>

                </select>
                

                </label>
                

                </div>

      
    </div>
  )
}

export default index
