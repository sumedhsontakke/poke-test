import React, { useEffect, } from "react";
import styled from "styled-components";
import _ from "lodash";

import { ListComponent } from "../molecules/ListComponent";
export const HomePageMain = function({
    paginationResult,
    selectedPagination,
    recorPerPage
}){

    function getResult(){ console.log(paginationResult);
        const paginationResultHtml = [];
        if(paginationResult && paginationResult.length){
            let pokeDetailsArr = paginationResult;
            // const sliceArrIndex = (selectedPagination * recorPerPage);
            // const sliceArr = (pokeDetailsArr.slice(sliceArrIndex - recorPerPage, sliceArrIndex));
    
            if(_.has(pokeDetailsArr, "length") &&  pokeDetailsArr.length > 0){
                pokeDetailsArr.map(arr =>{
                    paginationResultHtml.push(
                            <div>    
                                <ListComponent
                                    title={arr.name}
                                    url={arr.url}
                                />
                            </div>    
                        )
                    })
            } else{
                paginationResultHtml.push(<div>No result found</div>)
            }
        }

        return paginationResultHtml;
    }
    
    return(
        <Main>
            { getResult() }           
        </Main>
    )
}

const Main = styled.main`
    padding: 20px;
    height: calc(100vh - 170px);
    overflow: auto;  
`;