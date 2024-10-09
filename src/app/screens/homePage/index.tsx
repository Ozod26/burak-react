import React from "react";
import Statistics from "./Statistics";
import PopulerDishes from "./PopularDishes";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes copy";
import Advetisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advetisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
