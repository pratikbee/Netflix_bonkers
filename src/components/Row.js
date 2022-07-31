import React, { useEffect, useState } from "react";
import vertical from ".././Images/Gray_man.jpg";
import horizontal from '.././Images/Gray_landscape.jpg'
import styles from "../styles/styles.js";


const Row = ({ title ,isLargeRow}) => {
  const array = [];

  for (var i = 0; i < 10; i++) {
    array.push({ title: "gray man", img: { vertical }, img1: {horizontal} });
  }
 

  return (
    <div>
      <h1>{title}</h1>
      <div className="row" >
        {array.map((object, i) => (
          <div className="row_poster">
            <header>{object.title}</header>
            <div key={i} >
              <img
                alt={object.title}
                src={!isLargeRow?object.img.vertical:object.img1.horizontal}
                style={!isLargeRow?styles.img:styles.img1 }
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
