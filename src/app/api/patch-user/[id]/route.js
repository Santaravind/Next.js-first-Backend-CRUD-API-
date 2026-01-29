
import { NextResponse } from "next/server";
import { users } from "../../routing/route";


export async function PATCH(request ,{params}) {

    try {
       const{id}=await params;
           const userId=parseInt(id);
           const user=users.findIndex(u=>u.id===userId)

             if(user===-1){
                return NextResponse.json({
                    success:false,
                    error:"user not found"
                },
            {status:400})
             }

            //  const { name, title } = await request.json();
             
            //      if (!name || !title) {
            //        return NextResponse.json(
            //          {
            //            success: false,
            //            message: "Name or title not provided properly",
            //          },
            //          { status: 400 }
            //        );
            //      }
                 const body=await request.json();
                 users[user]={
                    ...users[user],
                    ...body,
                    id:userId
                 }
                  return NextResponse.json(
                    {
                        success:true,
                        message:"Data updated",
                        data:users[user]
                    },
                    {
                        status:200
                    }
                  )

    } catch (error) {
         return NextResponse.json(
              {
                success: false,
                message: "Data not saved properly",
              },
              { status: 500 }
            );
        
    }
    
}