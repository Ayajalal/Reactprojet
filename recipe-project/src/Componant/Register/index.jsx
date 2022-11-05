import * as React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

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
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="username">Name</InputLabel>
        <Input
          id="username"
          value={inputFields.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          value={inputFields.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          value={inputFields.password}
          onChange={(e) => handleChange(e, "password")}
        />
      </FormControl>
    </Box>
  );
};

export default Register;
