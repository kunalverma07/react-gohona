/* eslint-disable no-unused-vars */
import React from "react";

const Sidenav = () => {
  return (
    <aside className="nav-sidebar">
      <div className="nav-header">
        <a href="index.html">
          {/* <img src="assets/images/logo.png" alt="logo" /> */}
        </a>
        <button className="nav-close">
          <i className="icofont-close"></i>
        </button>
      </div>
      <div className="nav-content">
        <ul className="nav-list">
          <li>
            <a className="nav-link" href="index.html">
              <i className="icofont-home"></i>Home
            </a>
          </li>
          <li>
            <a className="nav-link dropdown-link" href="#">
              <i className="icofont-page"></i>category
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="category/food-powders.html">food powders</a>
              </li>
              <li>
                <a href="category/earthy-essence.html">earthy essence</a>
              </li>
              <li>
                <a href="category/sweets.html">sweets</a>
              </li>
              <li>
                <a href="category/sevories.html">savouries</a>
              </li>
              <li>
                <a href="category/pickles.html">pickles</a>
              </li>
              <li>
                <a href="category/dairy.html">diary</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link dropdown-link" href="#">
              <i className="icofont-bag-alt"></i>my account
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">profile</a>
              </li>
              <li>
                <a href="#">checkout</a>
              </li>
              <li>
                <a href="#">order history</a>
              </li>
              <li>
                <a href="#">order invoice</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link" href="pages/about.html">
              <i className="icofont-info-circle"></i>about us
            </a>
          </li>
          <li>
            <a className="nav-link" href="pages/faq.html">
              <i className="icofont-contacts"></i>faq
            </a>
          </li>
          <li>
            <a className="nav-link" href="pages/policy.html">
              <i className="icofont-warning"></i>policy
            </a>
          </li>
          <li>
            <a className="nav-link" href="auth/login.html">
              <i className="icofont-login"></i>login
            </a>
          </li>
        </ul>
        <div className="nav-info-group">
          <div className="nav-info">
            <i className="icofont-ui-touch-phone"></i>
            <p>
              <small>call us</small>
              <span>(+91) 924 - 679 - 9010</span>
            </p>
          </div>
          <div className="nav-info">
            <i className="icofont-phone"></i>
            <p>
              <small>call us</small>
              <span>(+91) 812 - 120 - 1010</span>
            </p>
          </div>
          <div className="nav-info">
            <i className="icofont-ui-email"></i>
            <p>
              <small>email us</small>
              <span>support@srimatreyfoods.com</span>
            </p>
          </div>
        </div>
        <div className="nav-footer">
          <p>
            All Rights Reserved by
            <a href="index.html">Gohona</a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidenav;
