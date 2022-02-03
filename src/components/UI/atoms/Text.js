import React, { useEffect, } from "react";
import styled from "styled-components";

export const Text  = function({
    style,
    child,
    onClick,
    tabIndex
}){

    return(
        <TextStyle 
            style={style}
            onClick={onClick}
            tabIndex={tabIndex}
        >
            {child}
        </TextStyle>
    )
}

const TextStyle = styled.div`
    font-size: 16px;
`;