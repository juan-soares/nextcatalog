import Link from "next/link";
import { getAllFranchises } from "@/app/_lib/db/collections";

export async function FranchisesList(){
const franchises = await getAllFranchises();

if(!franchises.length) return (<p>Sem franquias na lista.</p>)

return (
    <ul>
        {franchises.map(({id, slug, logo, title}) => (
            <Link key={id} href={slug}><img src={logo} alt={`Logotipo da franquia ${title}.`}/></Link>
        ))}
    </ul>
)
}