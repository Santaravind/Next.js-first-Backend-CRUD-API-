import { NextResponse } from "next/server";
import { users } from "../../routing/route";

export async function GET(request,{params}) {

try {
    const{id}=await params;
    const userId=parseInt(id);
    const user=users.find(u=>u.id===userId)
      return NextResponse.json({
        success:true,
        // data:users,
        data:user,
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

 
