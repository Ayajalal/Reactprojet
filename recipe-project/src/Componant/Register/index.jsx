import * as React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button, Paper } from "@mui/material";

import styles from "./styles.module.css";
import axios from "axios";

const Register = () => {
  const [inputFields, setInputFields] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event, chooser) => {
    const input = {};
    input[chooser] = event.target.value;
    setInputFields({ ...inputFields, ...input });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    for (let field in inputFields) {
      console.log(field, field.length);
      if (!inputFields[field].length) {
        window.alert("Please enter all fields");
        return;
      }
    }
    const response = await axios.post(
      "https://gsg-recipes-backend.herokuapp.com/users/signUp",
      inputFields,
    );

    if (response.data.message !== "success") {
      window.alert(response.data.message);
      return;
    }

    setInputFields({
      name: "",
      email: "",
      password: "",
    });
    window.alert("Registered Successfully!");
  };

  return (
    <section className={styles.registerContainer}>
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
        <Button variant="outlined" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Box>
    </section>
  );
};

export default Register;
