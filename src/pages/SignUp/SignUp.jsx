import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import LoginBg from "../Login/LoginBg";
import { useUserAuth } from "../../context/AuthContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { userInputs } from "./formSource";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const SignUp = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const names = new Date().getTime() + file.name;
      const storageRef = ref(storage, names);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          setError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const { signUp } = useUserAuth();
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmpassword) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      const res = await signUp(data.email, data.confirmpassword);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (error) {
      setError(
        error.message
        // "Failed to create an account, Password must be above 6 character"
      );
    }
    setLoading(false);
  };
  return (
    <div className="login-wrapper">
      <div className="login-bg">
        <LoginBg />
      </div>
      <Container className="d-flex">
        <Card className="m-auto login-card">
          <Link to="/">
            <img
              className="crossImage"
              src="https://img.icons8.com/ios-glyphs/344/multiply.png"
              alt=""
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <Card.Body>
            <Card.Title as="h1">Sign Up</Card.Title>
            <br />
            <Card.Text>
              {error && <Alert variant="danger">{error}</Alert>}
              <form action="" onSubmit={handleSubmit}>
                <div className="row g-2">
                  <div className="col-4">
                    <img
                      className="w-100 "
                      src={
                        file === ""
                          ? "https://img.icons8.com/color/344/circled-user-female-skin-type-5--v1.png"
                          : URL.createObjectURL(file)
                      }
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Profile Picture</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </Form.Group>
                  </div>
                </div>
                <br />
                {userInputs.map((input) => {
                  return (
                    <div key={input.id}>
                      <label htmlFor="">{input.label}</label>
                      <InputGroup className="my-3">
                        <Form.Control
                          id={input.id}
                          placeholder={input.placeholder}
                          type={input.type}
                          required
                          className="text-light"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={handleInput}
                        />
                      </InputGroup>
                    </div>
                  );
                })}
                <Button
                  disabled={per !== null && per < 100 && loading}
                  variant="primary"
                  type="submit"
                  className="w-100"
                >
                  Sign Up
                </Button>
                <br />
                <br />{" "}
                <Link
                  to="/login"
                  className="text-info"
                  style={{ fontWeight: "bold" }}
                >
                  Login In.
                </Link>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
