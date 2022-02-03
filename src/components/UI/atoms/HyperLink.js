import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export const HyperLink  = function({
    style,
    child,
    to,
    params,
    onClick
}){
    console.log(params);
    return(
        <Link 
            style={style}
            to={to}
            params={params}
            onClick={onClick}
        >
            {child}
        </Link>
    )
}