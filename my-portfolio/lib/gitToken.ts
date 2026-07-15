import { pageProps } from "./types";

export async function sendAuth({searchParams} : pageProps){
    const params = await searchParams;
    

    const githubCode = params.code;

    let authStatusMessage = ""

    if(githubCode){
        try{
          const tokenResponse = await fetch('https://github.com',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                 Accept:'application/json',
            },
            body:JSON.stringify({
                client_id:process.env.GITHUB_CLIENT_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRET,
                code:githubCode,
            }),
          })

          const tokenData = await tokenResponse.json()

          if(tokenData.access_token){
            authStatusMessage = " Successfully connected to Github";
          }else{
            authStatusMessage = "Authentication failed : Invalid code"
          }
        }catch(error){
           console.log("GitHub Auth Error",error)
           authStatusMessage = "An error Occurred durring authentication"
           
        }
    }
     
    return authStatusMessage;

}