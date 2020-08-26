import React, { Fragment, useState, useEffect } from "react";
import Upload from "./Upload";
import { getPrescriptions } from "../services/data.service";

function Dashboard({ user }) {
  const [prescriptions, setPrescriptions] = useState();
  useEffect(() => {
    getPrescriptions(user).then((items) => {
      if (items) {
        console.log(items.data);
        setPrescriptions(items.data);
        return;
      }
    });
  }, [user]);
  // console.log(prescriptions);

  return (
    <Fragment>
      {user ? <Upload user={user} /> : ""}
      <h1>Dashboard</h1>
      {prescriptions
        ? prescriptions.map(({ _id, md5, patient, image }) => {
            const buffer = Buffer.from(image.data.data);
            const imgsrc = buffer.toString("base64");

            return (
              <Fragment key={_id}>
                <h4> {patient} </h4>
                <img
                  key={md5}
                  src={`data:${image.mimetype};base64,${imgsrc}`}
                  alt={image.name}
                />
              </Fragment>
            );
          })
        : "No items"}
    </Fragment>
  );
}

export default Dashboard;
