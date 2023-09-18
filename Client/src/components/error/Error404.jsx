import React from "react";
import { Link,NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <>
        <h1>Dimension 404</h1>

        <button>
            <Link to={'/home'}>Volver</Link>
        </button>
        </>
    )
}

export default Error404