"use client"
import { use, useState } from "react"
import styles from "../scope.module.css"
import Image from "next/image"
import closebutton from "../../../public/home/closebutton.svg"
import sendbutton from "../../../public/home/sendimg.svg"

export default function Article1(){

  let [closeproject, setcloseproject] = useState(false)
    return(
        <>
            
            <button onClick={(e)=>setcloseproject(!closeproject)}><p className="text-center m-auto">View Your  Project Progress</p></button>
            <div className={`${styles.viewprojectmodal} ${ closeproject?  styles.isVisible : ""} absolute w-[100%] md:w-[50%]  
              h-[90px] bg-white z-10 top-10 md:top-[20%] lg:top-[42%] rounded-[10px] lg:w-[40%]  shadow-[-5px_5px_15px_rgba(255,255,255,0.2)]`}>
              <div onClick={(e)=>setcloseproject(!closeproject)} className="w-fit cursor-pointer hover:opacity-90 active:opacity-65">
                <Image
                 src={closebutton}
                 alt="close button"
                 className="bg-red-600 rounded-l-[5px] rounded-r-[5px] "
                />
                
                
              </div>
              <div className="w-full h-[50%] flex flex-col justify-center items-center">

                <div className=" w-full flex flex-row justify-center items-center">
                  <input placeholder="Enter Your Project Code" type="text" className="w-[70%] h-[36px] bg-[#3C3737] rounded-[10px] placeholder:text-[#D9D9D9] 
                placeholder:font-semibold pl-[0.75rem] text-[#D9D9D9] border-none outline-0 focus:right-0"/>

                <div className="w-fit cursor-pointer hover:opacity-90 active:opacity-65" >
                  
                { <Image
                 src={sendbutton}
                 alt="close button"
                 className=" "
                />} 
                 

                </div>

                </div>
                   
                   
                </div>
              
           
            </div>
          </>
    )
}