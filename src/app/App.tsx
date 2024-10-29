import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import OrdersPage from "./screens/ordersPage";
import ProductsPage from "./screens/productsPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/hearders/HomeNavbar";
import OtherNavbar from "./components/hearders/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import Test from "./screens/userPage/test";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <Test />
          {/* <HomePage /> */}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
