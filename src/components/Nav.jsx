import SearchBar from './components/SearchBar.jsx';

const Nav = ({onSearch}) => {
    return (
        <>
        <SearchBar onSearch={onSearch} />
        </>
    )
}

export default Nav