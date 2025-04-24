import { Logo } from "../Logo";
import { GlobalSearch, Navbar } from "./";

export function Header(){
    return(
        <header>
            <Logo/>
            <GlobalSearch/>
            <Navbar/>
        </header>
    )
}