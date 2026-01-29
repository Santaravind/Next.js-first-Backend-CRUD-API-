import { NextResponse } from "next/server"

   
export const users=[
    {
        id:1,
        name:"Aravind sant",
        title:"this is software engineer"

    },
    {
        id:2,
        name:"Aravind sant",
        title:"this is software engineer"

    },
    {
        id:3,
        name:"Aravind sant",
        title:"this is software engineer"

    }
]
export async function GET(request) {

try {
   
      return NextResponse.json({
        success:true,
        data:users,
        // data:user,
        status:200,
        langth:users.length
      }
       
      )
} catch (error) {
    return  NextResponse.json(
        {
          success:true, error:"some thing error to fetch data ",
          status:500 
        }
    )
    
}
}

 
