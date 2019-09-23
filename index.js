/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import ServicesPage from "views/examples/ServicesPage";
import ProductPage from "views/examples/ServicesPage";
import TeamPage from "views/examples/TeamPage";
import ReviewsPage from "views/examples/ReviewsPage";
import BookPage from "views/examples/BookPage";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/ServicesPage"
        render={props => <ServicesPage {...props} />}
      />
      <Route
        path="/ProductPage"
        render={props => <ProductPage {...props} />}
      />
      <Route
        path="/TeamPage"
        render={props => <TeamPage {...props} />}
      />
      <Route
        path="/ReviewsPage"
        render={props => <ReviewsPage {...props} />}
      />
       <Route
        path="/BookPage"
        render={props => <BookPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
