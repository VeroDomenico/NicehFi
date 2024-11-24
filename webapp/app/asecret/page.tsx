import {auth} from "@/auth"

export default async function aSecret(){
    const session = await auth();
    if(!session){
        return <div> Not Authenticated</div>
    }
    return <h1> WELCOME TO THE SERVER</h1>
}