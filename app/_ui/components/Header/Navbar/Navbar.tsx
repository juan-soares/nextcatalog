import Link from "next/link";
import { ICategory } from "@/app/_lib/interfaces";
import { getAllCategories } from "@/app/_lib/db/collections";



export async function Navbar(){
const categories:ICategory[] = await getAllCategories();

    return(
        <nav>
            {categories.map(({id,slug,title}) =>  <Link key={id} href={slug}>{title}</Link>)}
           
        </nav>
    )
}