import React, { useEffect, } from "react";
import { HomePage } from "../../templates/HomePage";
import _ from "lodash";

export const Home = function(){
    const searchField = React.useRef(null);
    const [poke, setPoke] = React.useState(null);
    const [selectedPagination, setSelectedPagination] = React.useState(1);
    const [filterValue, setFilterValue] = React.useState(null);
    //const [limit, setLimit] = React.useState(10);
    const [recorPerPage, setRecorPerPage] = React.useState(10);


    useEffect(()=>{
        callData()
    }, []);

    useEffect(()=>{
        callData()
    }, [selectedPagination, recorPerPage]);

    function callData(){
        fetch("https://pokeapi.co/api/v2/ability/?limit="+ recorPerPage +"&offset=" + selectedPagination)
        .then(res => res.json())
        .then(
          (result) => {
              setPoke(result); 
              sessionStorage.setItem("apiresult", JSON.stringify(result))
          },
          (error) => {

          }
        );
    }

    function checkForFilterResult(){
        let pokeDetailsArr = [...poke.results];
        if(filterValue && filterValue != ""){
            pokeDetailsArr = [];
            const reg = new RegExp(filterValue, "i")
            poke.results.map(pockdetail =>{
                if(pockdetail.name.search(reg) > -1){
                    pokeDetailsArr.push(pockdetail);
                }
            });
        }
        return pokeDetailsArr;
    }
    
    function applyFilter(){
        if(_.has(searchField, "current.value") && searchField.current.value !=""){
            setFilterValue(searchField.current.value);
            setSelectedPagination(1);
        }
    }

    function removeFilter(){
        searchField.current.value = "";
        setFilterValue("");
        setSelectedPagination(1);
    }

    function listupdate(val){
        setRecorPerPage(val.target.value);
    }

    function updateList(i){
        console.log(i);
        setSelectedPagination(i);
        setPoke(null)
        //setSelectedPagination(i)
    }


    return(
        <div>
            <HomePage
                fieldRef={searchField}
                applyFilterClick={applyFilter}
                applyFilterValue={'Apply Filter'}
                clearFilterClick={removeFilter}
                clearFilterValue={'Remove Filter'}
                paginationResult={_.has(poke, "results.length") && checkForFilterResult()}
                totalCout={_.has(poke, "count") &&  poke.count ||  0}
                selectedPagination={selectedPagination}
                recorPerPage={recorPerPage}
                setSelectedPagination={updateList}
                listupdate={listupdate}
            />
        </div>
    )
} 