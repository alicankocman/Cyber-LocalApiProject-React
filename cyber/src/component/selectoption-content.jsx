import React from "react";
import "./selectoption-content.css";

function SelectOptionContent(){
    return(
            <div className="option">
                <select className="my-rating">
                    <option value="Brand">By rating</option>
                    <option value="Brand1">Brand1</option>
                    <option value="Brand2">Brand2</option>
                    <option value="Brand3">Brand3</option>
                </select>
            </div> 
    )
}

export default SelectOptionContent;
            