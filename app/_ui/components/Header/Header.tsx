import { Logo } from "../Logo";
import { GlobalSearch, Navbar, UserInfo } from "./";


export function Header(){
    return(
        <header>
            <Logo/>
            <GlobalSearch/>
            <UserInfo/>
            <Navbar/>
        </header>
    )
}