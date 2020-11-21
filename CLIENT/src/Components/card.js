import React from "react";
import tourcard from "./TourCard";

function cards () {

    return(
        <div className="container-fluid d-flex justify-content-centre">
            <div className="row">

                <div className="col-md-4">
                   
                </div>
                <div className="col-md-4">
                    <tourcard/>
                </div>
                <div className="col-md-4">
                    <tourcard/>
                </div>

            </div>
        </div>
    );
}



export default cards;