import { useState } from "react";

const SearchBar = ({onSearch})=> {
   const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }
   return (
      <div><input
      type="search"
      onChange={changeHandler}
      value={id}
      placeholder="Search Character"
    />
    <button onClick={() => {
        onSearch(id);
      }}
    >Agregar</button>
    
      </div>
   );
}
 export default SearchBar