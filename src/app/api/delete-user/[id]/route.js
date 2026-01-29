import { NextResponse } from "next/server";
import { users } from "../../routing/route";

export async function DELETE(request,{params}) {

    try {
        const {id}= await params;
        const userID=parseInt(id)

        const user=users.findIndex(u=>u.id===userID)

         if(user===-1){
                return NextResponse.json({
                    success:false,
                    error:"user not found"
                },
            {status:400})
             }
             
        const daleteuser=users[user];

        users.splice(user,1)
        return NextResponse.json({
            success:true,
            data:daleteuser,
            message:"User deleted successfully !!!"
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Some error",error:"user not match or not exits "
            
        })
        
    }
    
}