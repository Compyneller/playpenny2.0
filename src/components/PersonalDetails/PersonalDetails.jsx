import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
const PersonalDetails = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const userData = JSON.parse(localStorage.getItem("users"));
      const docRef = doc(db, "users", userData.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case

        setData(userData);
      }
    };
    fetchData();
  }, []);

  return (
    <Card className="text-dark">
      <Card.Header as="h3">Personal Details</Card.Header>
      <Card.Body>
        <div>
          <Card className="shadow-sm d-flex align-items-center justify-content-center">
            <Card.Body>
              <img
                height={150}
                width={150}
                src={
                  !data.img && !data.photoURL
                    ? "https://img.icons8.com/color/344/circled-user-female-skin-type-5.png"
                    : data.img || `${data.photoURL}`
                }
                alt=""
                style={{ objectFit: "cover" }}
              />
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="d-flex flex-column">
          <Card>
            <Card.Body>
              <b>Name : {data.name || data.displayName}</b>
              <br />
              <br />
              <b>Mobile Number : {data.mobile || "No Number"}</b>
              <br />
              <br />
              <b>Email : {data.email}</b>
            </Card.Body>
          </Card>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalDetails;
