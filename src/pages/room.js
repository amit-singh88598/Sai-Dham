import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../layouts/header";

function Room(props) {
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <nav>
        <Header name={query.get("sm")} />
      </nav>
      <h1>Room</h1>
      <h2>{query.get("id")}</h2>
      <h3></h3>
    </div>
  );
}

export default Room;
