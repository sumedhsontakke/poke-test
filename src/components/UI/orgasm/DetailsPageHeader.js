import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import {useNavigate} from 'react-router-dom';

export const customStyle = {
    heading: {
        fontWeight: 600,
        margin: "20px",
        fontSize: "25px"
    },
    back: {
        fontWeight: 600,
        margin: "20px",
        fontSize: "16px",
        cursor: "pointer",
        width: "100px"
    },
}

export const DetailsPageHeader = function(props){
    const navigate = useNavigate();


    return(
        <header>
            <Text
                style={customStyle.back}
                child={"< Back" }
                onClick={()=>navigate('/')}
                tabIndex={0}
            />            
            <Text
                style={customStyle.heading}
                child={props.title}
            />
        </header>
    )
}