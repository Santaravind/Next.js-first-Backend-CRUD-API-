import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    // return NextResponse.json({
    //     message:"This is cookies"
    // })

    //get cookies by request 
    // const theme=request.cookies.get("theme");
    // console.log(theme);

    // return new Response("this is cookies",{
    //     headers:{
    //         "set-cookie":"theme=dark"
    //     }
    // })

    const cookieStore=await cookies();

    // cookieStore.set("score","100");

       cookieStore.delete("score")

    return NextResponse.json({
        message:"set cookies"
    }) 
    
}