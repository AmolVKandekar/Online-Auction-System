import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./RainEffect.css"; // Import the same rain effect CSS

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", userData);
  };

  return (
    <Box className="rain-container">
      {/* Raindrop Animation */}
      <div className="rain"></div>

      {/* Centered Registration Form */}
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          marginTop: "5%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "white", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            value={userData.name}
            onChange={handleChange}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            value={userData.email}
            onChange={handleChange}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            value={userData.password}
            onChange={handleChange}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            fullWidth
            margin="normal"
            value={userData.confirmPassword}
            onChange={handleChange}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Register;
