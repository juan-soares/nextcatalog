import { IFranchise } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";


export async function getAllFranchises():Promise<IFranchise[]>{
    try{
        const db = await connectToDatabase();

        return db["franchises"];
    }
catch(error) {
return []
}    
}
