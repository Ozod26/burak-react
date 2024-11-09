import React, { useState } from "react";
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
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDeleteAll, onDelete } = useBasket();

  /** HANDLARS */

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          // setSignupOpen={setSignupOpen}
          // setLoginOpen={setLoginOpen}
          // anchorEl={anchorEl}
          // handleLogoutClick={handleLogoutClick}
          // handleCloseLogout={handleCloseLogout}
          // handleLogoutRequest={handleLogoutRequest}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          // setSignupOpen={setSignupOpen}
          // setLoginOpen={setLoginOpen}
          // anchorEl={anchorEl}
          // handleLogoutClick={handleLogoutClick}
          // handleCloseLogout={handleCloseLogout}
          // handleLogoutRequest={handleLogoutRequest}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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
          {/* <Test /> */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />

      {/* <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      /> */}
    </>
  );
}

export default App;
