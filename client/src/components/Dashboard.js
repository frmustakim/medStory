import React, { Fragment, useState, useEffect } from "react";
import Upload from "./Upload";
import { getPrescriptions } from "../services/data.service";
import { Container, Typography } from "@material-ui/core";

function Dashboard({ user }) {
  const [prescriptions, setPrescriptions] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    getPrescriptions(user).then((items) => {
      if (items) {
        console.log(items.data);
        setCount(items.data.length);
        setPrescriptions(items.data);
        return;
      }
    });
  }, [user, count]);
  // console.log(prescriptions);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <div style={{ minHeight: "50vh" }}>
        {user ? <Upload user={user} uploaded={increment} /> : ""}
        <Typography variant="h6" align="center" gutterBottom>
          Dashboard
        </Typography>
        {prescriptions && count === 0 ? (
          <Container align="center" style={{ marginTop: "5rem" }}>
            <Typography variant="h6" color="error">
              You currently have no Prescriptions!
            </Typography>
          </Container>
        ) : (
          ""
        )}
        {prescriptions ? (
          prescriptions.map(({ _id, md5, patient, image }) => {
            const buffer = Buffer.from(image.data.data);
            const imgsrc = buffer.toString("base64");

            return (
              <div key={_id} style={{ width: "70%", margin: "0 auto" }}>
                {/* <h4>  {patient} </h4> */}
                <img
                  key={md5}
                  src={`data:${image.mimetype};base64,${imgsrc}`}
                  alt={image.name}
                  style={{ maxWidth: "100%" }}
                />
              </div>
            );
          })
        ) : (
          <Container align="center" style={{ marginTop: "5rem" }}>
            <Typography variant="h6" color="error">
              Loading Prescriptions...
            </Typography>
          </Container>
        )}
      </div>
    </Fragment>
  );
}

export default Dashboard;
