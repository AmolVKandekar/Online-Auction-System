import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./RainEffect.css"; // Import CSS for the rain effect

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <Box className="rain-container">
      {/* Raindrop Animation */}
      <div className="rain"></div>

      {/* Centered Login Form */}
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          marginTop: "10%",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "white", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "rgba(255,255,255,0.6)", borderRadius: "5px" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
