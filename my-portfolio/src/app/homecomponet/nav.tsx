"use client";
import { useState, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';
import Image from 'next/image';
import mylogo from "../../../public/home/image_8cceab99-removebg-preview.png";
import style from "../scope.module.css";
import Link from 'next/link';



export default function Nav() {
    let [currentHash,setCurrentHash] = useState("")
    let pathname = usePathname()
    let searchParams = useParams()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if(typeof window !== 'undefined'){
          setCurrentHash(window.location.hash)
        }

    },[pathname,searchParams])

    return (
        <nav className="w-[90%] sm:flex sm:flex-col sm:items-center sm:justify-center z-50 md:w-[95%]  md:flex-row md:justify-between" >

        <div className={style.navbar}>
          <div className="flex">
             <Image
              src={mylogo}
              alt="my logo"
              className="w-[44px] h-[29px] "
              />

             <div className={style.logo_text}>
                 <p >
                  Constantine  App
                 </p>
              </div>


          </div>



            <button className={`${style.hamburger}  ${isOpen ? style.open : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>

            </button>

            </div>
        
            
                 <ul className={`${style.menuList} ${isOpen ? style.menuOpen : ''}`}>

                    <li >
                        <button onClick={() => setIsOpen(!isOpen)}><a href="/">Home</a></button> 
                    </li>

                    <li className={style.activeRow}>
                        <button onClick={() => setIsOpen(!isOpen)} ><Link href="#skills">Skills</Link></button>
                    </li>

                    <li> 
                        <button onClick={() => setIsOpen(!isOpen)}><Link href="#stack">Stack</Link></button>
                    </li>
                     <li>
                        <button onClick={() => setIsOpen(!isOpen)}><Link href="#aboutme">About me</Link></button>
                    </li>
                      <li>
                        <button onClick={() => setIsOpen(!isOpen) } className={`${pathname == "#contact"  ? style.activeLink : ""}`}><Link href="#contact">Contact</Link></button>
                    </li>

                </ul>
            
                
            
        
          
        </nav>
    );
}