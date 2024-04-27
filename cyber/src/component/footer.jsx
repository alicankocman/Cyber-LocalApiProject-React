import React from "react";
import "./footer.css";

function Footer()
{
    return(
        <div className="footer">
            <p className="logo"><img src="./src/assets/footer-logo.png"></img></p>
            <p className="text_one">We are a residential interior design firm located in Portland. Our</p>
                <p className="text_two"> boutique-studio offers more than</p>


<div className="Services">
<input type="button" className="button title" value="Services"></input>
<input type="button" className="button" value="Bonus program"></input>
<input type="button" className="button" value="Gift cards"></input>
<input type="button" className="button" value="Credit and payment"></input>
<input type="button" className="button" value="Service contracts"></input>
<input type="button" className="button" value="Non-cash account"></input>
<input type="button" className="button" value="Payment"></input>
</div>

<div className="Assistancetothebuyer">
<input type="button" className="button title" value="Assistance to the buyer"></input>
<input type="button" className="button" value="Find an order"></input>
<input type="button" className="button" value="Terms of delivery"></input>
<input type="button" className="button" value="Exchange and return of goods"></input>
<input type="button" className="button" value="Guarantee"></input>
<input type="button" className="button" value="Frequently asked questions"></input>
<input type="button" className="button" value="Terms of use of the site"></input>
</div>

<div className="logos">
    <img className="logo1" src="./src/assets/logo1.png"></img>
    <img className="logo2" src="./src/assets/logo2.png"></img>
    <img className="logo3" src="./src/assets/logo3.png"></img>
    <img className="logo4" src="./src/assets/logo4.png"></img>
    </div>

        </div>
    )
}
    

export default Footer;