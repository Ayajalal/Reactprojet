import React, { useState } from "react";
// Material-UI
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Backdrop, Button, CircularProgress } from "@mui/material";
// End of Material-UI
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import cookie from "react-cookies";

import styles from "./styles.module.css";

const Login = ({ setLoggedUser }) => {
  const [entered, setEntered] = useState(false);
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChange = (event, chooser) => {
    const input = {};
    input[chooser] = event.target.value;
    setInputFields({ ...inputFields, ...input });
  };

  const handleSubmit = async () => {
    // if (entered) return;

    for (let field in inputFields) {
      console.log(field, field.length);
      if (!inputFields[field].length) {
        toast.warning("Please enter all fields");
        return;
      }
    }

    const response = await axios.post(
      "https://gsg-recipes-backend.herokuapp.com/users/signIn",
      inputFields,
    );

    if (response.data.message !== "success") {
      toast.error(response.data.message);
      return;
    }

    setInputFields({
      email: "",
      password: "",
    });
    const decoded = jwtDecode(response.data.token);
    toast.success(`Welcome back, ${decoded.name}!`);
    setLoggedUser(decoded);
    cookie.save("user", decoded, { path: "/" });

    navigate({
      pathname: "/",
    });

    setEntered(false);
  };

  return (
    <section className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          className={styles.loginForm}
          noValidate
          autoComplete="off"
        >
          <h2>Login Form</h2>
          <FormControl variant="standard" className={styles.loginInput}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              value={inputFields.email}
              onChange={(e) => handleChange(e, "email")}
              required={true}
            />
          </FormControl>
          <FormControl variant="standard" className={styles.loginInput}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              value={inputFields.password}
              onChange={(e) => handleChange(e, "password")}
              required={true}
            />
          </FormControl>
          <Button
            variant="outlined"
            onClick={(event) => {
              event.preventDefault();
              setEntered(true);
              handleSubmit();
              handleToggle();
            }}
            disabled={entered}
          >
            Login{" "}
            {entered ? (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            ) : (
              <></>
            )}
          </Button>
        </Box>
        <div
          className={styles.loginImg}
          style={{ backgroundImage: `url('/assets/images/login.jpg')` }}
        >
          {/* <img src="/assets/images/login.jpg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
