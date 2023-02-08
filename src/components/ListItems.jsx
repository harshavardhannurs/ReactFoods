import React from "react";
import ListItem from "./ListItem";
import "./ListItems.css";

const ListItems = (props) => {
  return (
    <div className="items-container">
      <div className="items-wrapper">
        {props.items.map((item)=>{
          return <ListItem key={item.id} id={item.id} name={item.name} price={item.price} />
        })}
      </div>
    </div>
  );
};

export default ListItems;
