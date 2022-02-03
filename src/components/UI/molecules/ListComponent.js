import React, { useEffect } from "react";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { HyperLink } from "../atoms/HyperLink";
import styled from "styled-components";

export const ListComponent = function({
    title,
    url
}){

    return(
        <ListComponentStyle>
          <div>
            <Text
              child={
                <HyperLink 
                  to={{pathname: 'details/'}}
                  child={title}
                  style={{fontSize: "20px", color: "#000"}}
                  onClick={() =>{ sessionStorage.setItem("url", url) }}
                />
              }
            />         
          </div>
        </ListComponentStyle>
    )
}


const ListComponentStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;  
`;
