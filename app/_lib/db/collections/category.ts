import { ICategory } from "../../interfaces";
import connectToDatabase from "../connection";

export async function getAllCategories():Promise<ICategory[]>{
    try{
        const db = await connectToDatabase();

        return db["categories"];
    }
catch(error) {
return []
}    
}