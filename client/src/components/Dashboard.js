import React, { useState, Fragment } from "react";
import { v1 as uuid } from "uuid";
import Upload from "./Upload";

function Dashboard() {
  const [prescriptions, setPrescriptions] = useState([
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Chicken" },
    { id: uuid(), name: "Potato" },
  ]);

  return (
    <Fragment>
      <Upload />
      <h1>Dashboard</h1>
      {prescriptions.map(({ id, name }) => (
        <h4 key={id}> {name}</h4>
      ))}
    </Fragment>
  );
}

export default Dashboard;
