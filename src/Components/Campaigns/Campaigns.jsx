import React from "react";
import Card from "../Card/Card";
import dataPoints from "../../Data/imageCardData";
import "./Campaigns.css";

const Campaigns = (props) => {
  return (
    <div>
      <div className="cardDiv">
        {dataPoints.map((dataPoint, key) => {
          return (
            <div className="cardDiv">
                  <Card
                      image={dataPoint.image}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;