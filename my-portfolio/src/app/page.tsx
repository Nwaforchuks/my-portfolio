import  style from "./scope.module.css";
import Image from "next/image";
import SkillCarousel from "./homecomponet/carousel";
import FrameworkCard from "./homecomponet/imageCard";
import { frameworkImage } from "@/src/lib/types";
import DatabaseDropdown from "./homecomponet/skillcomponet";
import Article1 from "./homecomponet/seeProjectbutton";
import { pageProps } from "@/src/lib/types";
import { sendAuth } from "@/src/lib/gitToken";
import { handleContactForm } from "./actions";
import Link from "next/link";
import HeroImage from "../../public/home/HeroImage.png"



export default async function Home(searchParams:pageProps) {

  let authStatusMessage = await sendAuth(searchParams)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ConstantineApp - MERN Stack Web Developer",
    "image": "https://constantineapp.vercel.app/og-image.png", // Replace with your absolute image asset URL
    "description": "Professional web development services available,  global remote contracts and local businesses in Lagos, Nigeria. Specializing in complete website creation, e-commerce platforms, site migration, and Figma UI Designs.",
    "url": "https://constantineapp.vercel.app",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244", // Precise latitude coordinate for Lagos
      "longitude": "3.3792" // Precise longitude coordinate for Lagos
    },
    "knowsAbout": [
      "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Figma", "SQL", "Firebase", "HTML", "CSS", "JavaScript","RestApi", "AI Prompt Engineering", "Github Operations"
    ],
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete Website Creation & E-commerce Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Revamping, Modifications & Migration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blog Setup & Content Posting"
        }
      }
    ]
  };
  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="w-full  ">
      <main className="flex flex-col justify-center items-center " >
        {
           authStatusMessage && <p className="bg-white">
              Successfully connected to Github
           </p>
        }

        <section className={`${style.section1}`}>
          <article>

            <h1>Building Scalable Digital Products with Modern Web Ecosystems</h1>
            <p>
              I am an experienced Full-Stack Web Developer specialized in engineering 
              high-performance applications from scratch. By bridging the gap between 
              pixel-perfect ReactJS frontends and highly reliable Node.js server architectures, 
              I deliver rapid, secure, and SEO-optimized web experiences.
            </p>

              <Article1/>

          </article>


          <article className={`${style.article2}`}>
            <Image
            src={HeroImage}
            alt="hero image"
            />
          </article>
        

        </section>

        <section id="stack" className="w-full  mt-[100px] flex flex-col justify-center items-center gap-y-[7px] min-w-[350px]">
          
         <h2 className="text-[#D9D9D9] font-bold text-[0.812rem] w-[90%] ">My Technical Stack</h2>

         <div className="w-full flex flex-row justify-start">
          <SkillCarousel/>

         </div>
          
         
         
        </section>
        
        <section id="skills" className='w-full flex flex-col justify-center items-center mt-[100px] min-w-[350px]' >
          
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

        <div id="aboutme"  className=" md:flex md:flex-row mt-[100px] md:w-[95%] ">

        <section className="w-full flex flex-col justify-center items-center sm:mt-[79px] md:mt-[1rem] md:self-end">
          <article className="w-[90%] flex flex-col justify-center">
            <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] w-[70%]">
              Open Source & Contribution
            </h3>

            <p className="text-[#D9D9D9] text-[0.625rem] w-[50%] font-bold">
              Link to Your GitHub Projects and Contribution.
            </p>

            <div className="text-[#D9D9D9] text-[0.8125rem] w-[55%] font-semibold bg-[#1771B1] rounded-[5px] h-[1.75rem] text-center cursor-pointer hover:opacity-90 active:opacity-65">
              <Link 
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo`}
              target="_blank"
              >
                GitHub
              </Link>
            </div>
          </article>
        </section>

        <section className="w-full flex flex-col justify-center items-center sm:mt-10">
          <article className="w-[90%] flex flex-col justify-center mt-[1rem]">
            <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] w-[70%]">
              About My Path
            </h3>

            <p className="text-[#D9D9D9] text-[0.75rem] font-bold">
              Looking to hire a professional website developer? wether you are searching
              for expert near you in Lagos, Nigeria, or looking for remote engineer to bring
              your ideas to life, I build clean, high performance web system.
              Passionate about solving complex problems through clean design and solid 
              execution.  My experience helps brands put their best ideas forward seamlessly.
              Specializing in stable development, scalable architecture, and data-driven chart 
              design, Let's create an exceptional online presence where client can easily see 
              what your business has to offer.
            </p>
          </article>

        </section>

        </div>
        
        

        <section id="contact" className="w-full flex flex-col justify-center items-center mt-10 ">
          
          <article className=" w-[90%] flex flex-col justify-center ">
            <hr className="border-[#CEC5C5] h-[0.5px] w-full bg-[#D9D9D9]"/>

            <div className="flex flex-col justify-end w-full md:w-[24%] mt-[100px]  ">

              <h3  className="font-bold text-[0.9375rem] text-[#D9D9D9] md:text[1.375]  mt-[0.29375rem] md:mt-[1rem]">
                Get in touch to discuss your next big idea.
              </h3>

              <form action={handleContactForm}>

              <input
              type="email" 
              id="email"
              name="email"
              required

              placeholder="Enter your Email" className="h-[36px] md:h-[54px] bg-[#3C3737] min-w-full rounded-[10px] placeholder:text-[#D9D9D9] 
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

            <div className="flex flex-col justify-start w-full mt-[65px] ">
              <div className="flex flex-row w-full justify-end md:justify-start gap-2">
                <Link
                href="https://ng.linkedin.com/in/constantine-app-748623240"
                target="_blank"
                rel="noopener noreferrer"
                >

                  <Image
                   src={'/home/linkedinimg.png'}
                   alt="connect me on linkdin"
                   width={30}
                   height={30}
                  />

                </Link>

                <Link
                href={`https://wa.me/2349161219052`}
                target="_blank"
                rel="noopener noreferrer"
                >

                  <Image
                   src={'/home/whatsappimg.png'}
                   alt="connect me on whatsapp"
                   width={30}
                   height={30}
                   className="rounded-[50%]"
                   
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
    </>
  );
}
