import React, { useEffect, useState } from "react";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { DetailsPageHeader } from "../orgasm/DetailsPageHeader";


export const AllDetails = function(props){
    console.log(props);
    const [edit, setEdit] = useState(false);

    return(
        <>
            { !edit && <DetailsPageHeader title={props.name} />}

            <div style={customStyle.mainContainer}>
            <div>
                <Image 
                    src={props.sprites.front_default}
                    style={customStyle.bannerImage}
                />               
            </div>

                <div>
                    <div style={customStyle.flex}>
                        <Text
                            child={"name: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={props.name}
                        />
                    </div>
                    <div style={customStyle.flex}>
                        <Text
                            child={"Height: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={props.height}
                        />
                    </div> 
                    <div style={customStyle.flex}>
                        <Text
                            child={"Weight: "}
                            style={customStyle.heading}
                        />
                        <Text
                            child={props.weight}
                        />
                    </div>
                    <div style={customStyle.flex}>
                        <Text
                            child={"Abilities: "}
                            style={customStyle.heading}
                        />
                        <div>
                        {
                            props?.abilities?.length && props.abilities.map((ability)=>{
                                return(
                                    <Text
                                        child={ability.ability.name}
                                        style={{display: "block"}}
                                    />
                                )
                            })
                        }
                        </div>

                    </div>                                            
                </div>        

            
        </div>
    </>    
    )
}

export const customStyle = {
    heading: {
        fontWeight: 600,
        marginRight: "10px"
    },
    flex:{
        display: "flex",
        margin: "10px 0"
    },
    mainContainer:{
        display: "flex",
        gap: "30px",
        maxWidth: "500px",
        position: "relative"
    },
    bannerImage:{
        width: "200px"
    },
    edit: {
        fontWeight: 600,
        width: "100px",
        marginLeft: "430px",
        cursor: "pointer",
        fontSize: "18px",
        border: 0,
        background: "transparent"
    }
}