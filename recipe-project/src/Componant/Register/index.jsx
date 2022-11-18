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

import styles from "./styles.module.css";

const Register = () => {
  const [entered, setEntered] = useState(false);
  const [inputFields, setInputFields] = useState({
    name: "",
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

    // setEntered(true);

    const response = await axios.post(
      "https://gsg-recipes-backend.herokuapp.com/users/signUp",
      inputFields,
    );

    if (response.data.message !== "success") {
      toast.error(response.data.message);
      return;
    }

    setInputFields({
      name: "",
      email: "",
      password: "",
    });

    toast.success("Registered Successfully!");
    navigate({
      pathname: "/",
    });
    setEntered(false);
  };

  return (
    <section className={styles.registerWrapper}>
      <div className={styles.registerContainer}>
        <div
          className={styles.registerImg}
          style={{ backgroundImage: `url('/assets/images/register.jpg')` }}
        >
          {/* <img src="/assets/images/register.jpg" alt="" /> */}
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          className={styles.registerForm}
          noValidate
          autoComplete="off"
        >
          <h2>Register Form</h2>
          <FormControl variant="standard" className={styles.registerInput}>
            <InputLabel htmlFor="username">Name</InputLabel>
            <Input
              id="username"
              value={inputFields.name}
              onChange={(e) => handleChange(e, "name")}
              required={true}
            />
          </FormControl>
          <FormControl variant="standard" className={styles.registerInput}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              value={inputFields.email}
              onChange={(e) => handleChange(e, "email")}
              required={true}
            />
          </FormControl>
          <FormControl variant="standard" className={styles.registerInput}>
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
            Sign Up{" "}
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
      </div>
    </section>
  );
};

export default Register;
