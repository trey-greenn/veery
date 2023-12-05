import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main className=" w-full overflow-hidden">
        <div className="">
          <span className="text-black mt-24 text-4xl text-center">
          <h2 >
            You are <span className="bg-orange-400 p-1 text-white font-bold italic">MORE</span> than a content creator.</h2>
            <h2 className="mt-2 text-orange-400 font-bold italic">You are a <span className="bg-black text-white p-1 not-italic">business!</span></h2>
            

          </span>
          
        </div>
        </main>



    
    </>
      
  )
}
