import React from 'react';
import './Footer.css';

function Footer(){
    return(
        
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Cookchum</h4>
          <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui.</p>
          <p>(219) 555-0114 or <a href="mailto:Proxyx@gmail.com">Proxyx@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Helps</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Proxy</h4>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>
      <p className="copyright">Ecobazar eCommerce © 2021. All Rights Reserved</p>
    </footer>
    )
}

export default Footer