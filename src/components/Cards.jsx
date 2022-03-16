import React from "react";

function Card(props) {
    return (
        <>
            <div className={`card card${props.id}`}>
            { props.id==5? <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />:
                    <div className="card-body">
                        <h2 className={`card-title cardtitle${props.id}`}> {props.sname} </h2>
                        <p className="card-text"></p>
                    </div>
            }
            </div>
        </>
    )
};

export default Card