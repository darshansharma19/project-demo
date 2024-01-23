import Image from 'next/image'
import Login from './Auth/Login/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15">
       <div 
            className="
                flex 
                min-h-full 
                flex-col 
                justify-center 
                py-10 
                sm:px-6 
                lg:px-8 
               bg-white
            "
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] w-full flex flex-col items-center justify-start text-lg text-black font-ubuntu">
                <h2 
                    className="
                        mt-6 
                        text-3xl 
                        tracking-tight 
                        relative
                        leading-[2.25rem] 
                        font-bold 
                        font-ubuntu 
                        text-black1 
                        text-left
                    "
                >
                <Image
                  height={48}
                  width={48}
                  className="mx-auto w-auto relative justify-center align-middle object-cover rounded-md"
                  src='/assets/tempImageR5opcn8.png'
                  alt="Logo"
                />   Flavor Trail
                </h2>
            </div>
            <Login />      
        </div>
    </main>
  )
}
