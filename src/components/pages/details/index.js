import React from "react";
import { useLocation,useParams, } from 'react-router-dom'
import { DetailsPage } from "../../templates/DetailsPage";
import _ from "lodash"
export  const Details = function(){
    
    const [detailsObj, setDetailsObj] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(()=>{
        let url = sessionStorage.getItem("url");
        const splitVal = url.split("/");
        console.log(splitVal);
        setLoading(true);
        fetch("https://pokeapi.co/api/v2/pokemon/"+ splitVal[splitVal.length - 2])
        .then(res => res.json())
        .then(
          (result) => {
            setLoading(false);
            setDetailsObj(result);
          },
          (error) => {
            setLoading(false);
          }
        );
    }, [])




    return(
        <div className={'detail-page'}>
            {
                detailsObj ? 
                <DetailsPage {...detailsObj}     /> :
                loading ? <div>Loading...</div>  : <div>Something went wrong</div>
            }
            
        </div>
    )
} 