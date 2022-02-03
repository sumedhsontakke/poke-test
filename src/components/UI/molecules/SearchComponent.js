import React, { useEffect, } from "react";
import { Button } from '../atoms/Button';
import { TextField } from '../atoms/TextField';
import styled from "styled-components";

export const SearchComponent = function({
    fieldRef,
    applyFilterClick,
    applyFilterValue,
    clearFilterClick,
    clearFilterValue,
    listupdate
}){

    return(
        <SearchComponentStyle>
            <TextField
                fieldRef={fieldRef}
            />
            <Button 
                clickEvent={applyFilterClick}
                value={applyFilterValue}
            /> 
            <Button 
                clickEvent={clearFilterClick}
                value={clearFilterValue}
            />            
            <select onChange={listupdate}>
                <option value="10">10 per page</option>
                <option value="20">20 per page</option>
                <option value="50">50 per page</option>
            </select>
        </SearchComponentStyle>
    )
}

const SearchComponentStyle = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 50px;
    margin-top: 15px;
    gap: 20px;
`;