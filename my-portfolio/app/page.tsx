import  style from "./scope.module.css";
import Image from "next/image";
import SkillCarousel from "./homecomponet/carousel";
import FrameworkCard from "./homecomponet/imageCard";
import { frameworkImage } from "@/lib/types";
import DatabaseDropdown from "./homecomponet/skillcomponet";
import Article1 from "./homecomponet/seeProjectbutton";
import { pageProps } from "@/lib/types";
import { sendAuth } from "@/lib/gitToken";
import { handleContactForm } from "./actions";
import Link from "next/link";



export default async function Home(searchParams:pageProps) {

  let authStatusMessage = await sendAuth(searchParams)
  return (
    <div className="w-full  ">
      <main className="flex flex-col justify-center items-center " >
        {
           authStatusMessage && <p className="bg-white">
              Successfully connected to Github
           </p>
        }

        <section className={`${style.section1}`}>

          <Article1/>

          <article className={`${style.article2}`}>
            
          </article>
        

        </section>

        <section id="stack" className="w-full mt-[1.75rem] flex flex-col justify-center items-center gap-y-[7px] min-w-[350px]">
          
         <h2 className="text-[#D9D9D9] font-bold text-[0.812rem] w-[90%] ">My Technical Stack</h2>

         <div className="w-full flex flex-row justify-start">
          <SkillCarousel/>

         </div>
          
         
         
        </section>
        
        <section id="skills" className='w-full flex flex-col justify-center items-center mt-[40px] min-w-[350px]' >
          
          <article className="w-[90%]"  >
            <h3 className="font-bold text-[0.8125rem] text-[#D9D9D9] mb-[20px] text-center ">Detailed Skills Section Matrix</h3>
              <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-end gap-x-5 max-w-[500] max-h-[600]">
                 <FrameworkCard {...frameworkImage[0]}/>
                 <FrameworkCard {...frameworkImage[1]}/>
              </div>
              
            </div >

          </article>

          <article className="w-[90%] mt-[1.25rem] ">

           <DatabaseDropdown/>
          </article>
        </section>

        <div id="aboutme"  className=" md:flex md:flex-row md:mt-[4.9375rem] md:w-[95%] ">

        <section className="w-full flex flex-col justify-center items-center sm:mt-[79px] md:mt-[1rem]">
          <article className="w-[90%] flex flex-col justify-center">
            <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] w-[70%]">
              Open Source & Contribution
            </h3>

            <p className="text-[#D9D9D9] text-[0.625rem] w-[50%] font-bold">
              Link to Your GitHub Projects and Contribution.
            </p>

            <div className="text-[#D9D9D9] text-[0.8125rem] w-[55%] font-semibold bg-[#1771B1] rounded-[5px] h-[1.75rem] text-center cursor-pointer hover:opacity-90 active:opacity-65">
              <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo`}>GitHub</a>
            </div>
          </article>
        </section>

        <section className="w-full flex flex-col justify-center items-center sm:mt-[1rem]">
          <article className="w-[90%] flex flex-col justify-center mt-[1rem]">
            <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] w-[70%]">
              About My Path
            </h3>

            <p className="text-[#D9D9D9] text-[0.625rem] font-bold">
              Passionate about solving complex problems through clean design and solid 
              execution.  My experience helps brands put their best ideas forward seamlessly.
              Specializing in stable development, scalable architecture, and data-driven chart 
              design.
            </p>
          </article>

        </section>

        </div>
        
        

        <section id="contact" className="w-full flex flex-col justify-center items-center mt-[1.125rem] md:mt-[6.25rem]">
          
          <article className=" w-[90%] flex flex-col justify-center">
            <hr className="border-[#CEC5C5] h-[0.5px] w-full bg-[#D9D9D9]"/>

            <div className="flex flex-col justify-end w-full md:w-[24%]  ">

              <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] md:text[1.375]  mt-[0.29375rem] md:mt-[1rem]">
                Get in touch to discuss your next big idea.
              </h3>

              <form action={handleContactForm}>

              <input
              type="email" 
              id="email"
              name="email"
              required

              placeholder="Enter your Email" className="h-[36px] md:h-[54px] bg-[#3C3737] min-w-[293px] rounded-[10px] placeholder:text-[#D9D9D9] 
                placeholder:font-semibold pl-[0.75rem] md:mt-[1.375rem] text-[#D9D9D9] border-none outline-0 focus:right-0 " />
              <textarea

              id="message"
              name="message"
              required
              placeholder="Tell us your idea" className="min-w-full h-[200px] md:w-[163px] bg-[#3C3737] rounded-[10px] placeholder:text-[#D9D9D9] 
                placeholder:font-semibold pl-[0.75rem] mt-[0.38125rem] md:mt-[0.8125rem] text-[#D9D9D9] border-none outline-0 focus:right-0 resize-none" />
              <button type="submit" className=" min-w-[293px] h-[28px] md:h-[46px] bg-[#1771B1] text-[0.8125rem] font-semibold 
              rounded-[50px] mt-[0.38125rem] md:mt-[0.6875rem] cursor-pointer hover:opacity-65 active:opacity-90 ">
                Submit
              </button>
              </form>

            </div>

            <div className="flex flex-col justify-start w-full mt-6 ">
              <div className="flex flex-row w-full justify-end md:justify-start">
                <Link
                href="https://ng.linkedin.com/in/constantine-app-748623240"
                target="_blank"
                rel="noopener noreferrer"
                >

                  <Image
                   src={'/home/linkdin.png'}
                   alt="connect me on linkdin"
                   width={80}
                   height={80}
                  />

                </Link>

                <Link
                href={`https://wa.me/2349161219052`}
                target="_blank"
                rel="noopener noreferrer"
                >

                  <Image
                   src={'/home/whatsapp.png'}
                   alt="connect me on whatsapp"
                   width={80}
                   height={80}
                   
                  />

                </Link>

              </div>

              <div className="flex flex-row mt-[0.625rem]">
                <p className="text-[0.5625rem] text-[#D9D9D9] font-semibold">&copy;Copyright - Constantine  App</p>

              </div>

            </div>
          </article>

        </section>
      
      </main>
    </div>
  );
}
