import React, { useEffect, } from "react";
import { HomePageHeader } from '../UI/orgasm/HomePageHeader';
import { HomePageMain } from "../UI/orgasm/HomePageMain";
import { HomePageFooter } from "../UI/orgasm/HomePageFooter";
export const HomePage = function({
    fieldRef,
    applyFilterClick,
    applyFilterValue,
    clearFilterClick,
    clearFilterValue,
    paginationResult,
    selectedPagination,
    recorPerPage,
    setSelectedPagination,
    listupdate,
    totalCout
}){
    return(
        <>
            <HomePageHeader  
                fieldRef={fieldRef}
                applyFilterClick={applyFilterClick}
                applyFilterValue={applyFilterValue}
                clearFilterClick={clearFilterClick}
                clearFilterValue={clearFilterValue}
                listupdate={listupdate}
            />            
            <HomePageMain 
                paginationResult={paginationResult}
                selectedPagination={selectedPagination}
                recorPerPage={recorPerPage}
                setSelectedPagination={setSelectedPagination}
            />
            <HomePageFooter
                paginationResult={paginationResult}
                selectedPagination={selectedPagination}
                recorPerPage={recorPerPage}
                setSelectedPagination={setSelectedPagination}    
                totalCout={totalCout}        
            />
        </>
    )
}