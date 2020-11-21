import React from "react";

// This is a footer function which contains my own css 'centre' as well as css from the internet 'footer'
//I have a title with css
//The <i> is a import from font awsome which allows you to use icons
//I have font awsome installed in my pacakge json as a dependency it is also imported in my index.js so it can be read globally
function Footer() {
  return (
    <div className="footer centre">
      <h1 className="ContactTitle">Contact Us</h1>

      <i class="fas fa-phone-square-alt"> Phone : 0800 000 000</i>

      <i class="fas fa-envelope"> Email : abeltas@nmit.com</i>

      <i class="fas fa-address-card"> Address : 22 Abel Drive, Nelson</i>
    </div>
  );
}
export default Footer;
