//content-checkbox.jsx
import React from "react";
import "./content-checkbox.css";

function ContentCheckbox(){ 
    return (
        <div className="content-checkbox">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi1">Brand</p>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <input type="checkbox" id="vehicle1" name="device" value="Apple" />
                        <label htmlFor="vehicle1"> Apple 110</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle2" name="device" value="Samsung" />
                        <label htmlFor="vehicle2"> Samsung 125</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle3" name="device" value="Xiaomi" />
                        <label htmlFor="vehicle3"> Xiaomi 68</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle4" name="device" value="Poco" />
                        <label htmlFor="vehicle4"> Poco 44</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle5" name="device" value="OPPO" />
                        <label htmlFor="vehicle5"> OPPO 36</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle6" name="device" value="Honor" />
                        <label htmlFor="vehicle6"> Honor 10</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle7" name="device" value="Motorola" />
                        <label htmlFor="vehicle7"> Motorola 34</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle8" name="device" value="Nokia" />
                        <label htmlFor="vehicle8"> Nokia 22</label>
                    </li>
                    <li>
                        <input type="checkbox" id="vehicle9" name="device" value="Realme" />
                        <label htmlFor="vehicle9"> Realme 35</label>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi2">Battery capacity</p>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi3">Screen type</p>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi4">Screen diagonal</p>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi5">Protection class</p>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="yazi6">Built-in memory</p>
                </button>
            </div>
        </div>
    );
}

export default ContentCheckbox;

