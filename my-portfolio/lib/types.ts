import {StaticImageData} from 'next/image';
export  interface carouselItem {
  id: number 
  name: string;
  icon: string | StaticImageData;
}

export interface CardProps {
  id:number | null;
  imageSrc: string | StaticImageData;     // e.g., "/images/frameworks.jpg"
  altText: string;      // e.g., "Modern CSS Frameworks Showcase"
  title: string;        // e.g., "Modern CSS Frameworks"
  description: string;  // e.g., "Tailwind CSS and clean UI styling..."
}

  export const frameworkImage: CardProps[] = [
  {
    id:1,
    imageSrc: "/home/react.png",
    altText: "Server-side rendering, static site design",
    title: "Next.js & React.JS",
    description: " Server-side rendering, static site generation, and optimized client components for high-converting landing pages."
  },
  {
    id:2,
    imageSrc: "/home/tailwind.png",
    altText: "Cool css design",
    title: "Modern CSS Frameworks",
    description: "Tailwind CSS and clean UI styling focused on Core Web Vitals performance benchmarks."
  },
  {
    id:3,
    imageSrc: "/home/api.png",
    altText: "Crafting clean, modular backend server picture",
    title: "Node.js & Express.js",
    description: "Crafting clean, modular backend server engines to power lightning-fast REST APIs."
  },
  {
    id:4,
    imageSrc: "/home/database.png",
    altText: "Database Management design picture",
    title: "Database Management",
    description: "Building fault-tolerant transactional workflows across relational SQL databases and flexible NoSQL MongoDB clusters."
  },

  {
    id:5,
    imageSrc: "/home/firebase.png",
    altText: "secure Firebase Authentication design picture",
    title: "Firebase Ecosystem",
    description: "Implementing real-time cloud data layers, secure Firebase Authentication pipelines, and serverless hosting assets."
  },
  {
    id:6,
    imageSrc: "/home/github.png",
    altText: "Clean repository management design picture",
    title: "GitHub Operations",
    description: "Clean repository management, branching architectures, and continuous integration (CI/CD) tooling pipelines."
  },
  {
    id:7,
    imageSrc: "/home/ai.png",
    altText: "smart context prompts and integrating modern AI design picture",
    title: "AI Prompt Engineering",
    description: "Developing smart context prompts and integrating modern AI API instances straight into web ecosystems."
  },
 
];

export interface pageProps{
  searchParams : Promise<{
    code? : string;
    state? : string
  }>

}



