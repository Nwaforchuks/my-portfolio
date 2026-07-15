"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(formData : FormData){
    const senderEmail = formData.get("email") as string;
    const messageContent = formData.get("message") as string;

    if(!senderEmail  || !messageContent){
      console.log("validation error")
      return
    }

    try{
        console.log("Email submission start ", senderEmail, messageContent)
       
         const {data,error}= await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'constantineapp11@gmail.com',
          subject: ` New Contact from ${senderEmail}`,
          html: `<p><strong>Sender:</strong> ${senderEmail}</p>
          <p><strong>Message: </strong>${messageContent}</p>`
          });

         

        
        
    }catch(error){
     
    
    }

}