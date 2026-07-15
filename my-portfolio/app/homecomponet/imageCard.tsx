import Image from "next/image";
import { CardProps } from "../../lib/types";

export default function FrameworkCard({ imageSrc, altText, title, description }: CardProps) {
  return (
    <article className="flex flex-col min-w-[100px] w-[50%] overflow-hidden rounded-2xl bg-[#424040] shadow-lg relative ">
      
      {/* 1. Image Container (with custom dark gradient backdrop) */}
      <div className="relative  w-full  ">
        {/* Wrapper to handle the overlapping stacked cards aesthetic */}
        <div className="relative  w-full overflow-hidden rounded-t-xl shadow-2xl rounded-b-[10px] ">
          <Image
            src={imageSrc}
            alt={altText}
            height={155}
            width={168}
            priority
            className="object-cover object-top transform h-[155px] min-w-[i68px] rounded-b-[10px] w-full" 
          />
        </div>
      </div>

      {/* 2. Text Content Container */}
      <div className="flex flex-col p-4 text-[#D9D9D9]">
        <h3 className="text-[0.812rem] font-bold leading-tight tracking-wide text-gray-100 text-center">
          {title}
        </h3>
        <p className="mt-1 text-[0.625rem] leading-[0.8125rem] text-[#D9D9D9] font-semibold text-center ml-[0.56rem] mr-[0.56rem] mb-[0.56rem]">
          {description}
        </p>
      </div>

    </article>
  );
}