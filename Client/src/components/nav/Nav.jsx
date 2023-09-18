import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = ({onSearch,randomize}) => {
    return (
        <>
        <nav>
        <SearchBar onSearch={onSearch} />

        <button onClick={randomize}>Carta Random</button>
        
        <button>
            <Link to= "/about">About</Link>
        </button>
        <button>
            <Link to='/home'>Home</Link>
        </button>
        <button>
            <Link to={"/favorites"} >Favorites</Link>
        </button>

        <button>
            <Link to={'/'}>Log Out</Link>
        </button>
        
        </nav>
        </>
    )
}

export default Nav