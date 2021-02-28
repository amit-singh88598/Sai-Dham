import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../layouts/header";

function Service(props) {
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <h1>Service</h1>
      <h2>{query.get("id")}</h2>
    </div>
  );
}

export default Service;
