import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://constantineapp.vercel.app', // Replace with your real live domain
      lastModified: new Date(),
      changeFrequency: 'monthly',    // Changed to weekly if you update content occasionally
      priority: 1.0,                 // 1.0 means this is the most important page
    },
  ]
}
