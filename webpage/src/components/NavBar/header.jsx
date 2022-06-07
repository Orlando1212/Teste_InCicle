import './header.css'
import Logo from '../../imagem/incicle.svg'

function Header(){
    return(
<header>
    <div>
        <img className='logo' src={Logo}></img>
    </div>
</header>
    )
}

export default Header;