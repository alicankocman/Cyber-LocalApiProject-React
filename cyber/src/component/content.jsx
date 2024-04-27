import React from "react";
import ContentCheckbox from "./content-checkbox";
import "./content.css";
import SelectOptionContent from "./selectoption-content";
import ProductContent from "./product-content";
import Pagination from "./pagination";

function Content(){
    return(
   
   <div className="content">
    <ContentCheckbox/>
    <SelectOptionContent/>
    <p className="productadet">Selected Products: <p className="adet">8</p></p>
    <ProductContent/>
    <Pagination/>
    </div>
   
    )
}

export default Content;