import logo from './intuis.gif'
import "./NavbarStyle.css"

function Navbar() {
    return(
       <>
        <nav>
            <a href='./'> <img src={logo} id='logo'></img> </a>
            <div>
                <ul id='navbar'>
                    <li>
                        <a href="./intuis">intuis</a>
                    </li>
                    <li>
                        <a href="./contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
       </> 
    )
}

export default Navbar;