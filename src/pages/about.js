import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 5, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About Shop Time
        </Typography>

        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img 
            src="/images/about.jpg" 
            alt="About Us" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </Box>

        <Typography variant="body1" paragraph>
          Welcome to <strong>Shop Time</strong>, your one-stop destination for all things shopping! 
          We offer a seamless and enjoyable shopping experience, with a wide range of categories 
          including electronics, fashion, home essentials, and books.
        </Typography>

        <Typography variant="h6" gutterBottom>
          🌟 Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our goal is to provide high-quality products at the best prices, ensuring customer 
          satisfaction through a smooth and reliable shopping journey.
        </Typography>

        <Typography variant="h6" gutterBottom>
          🚀 Why Choose Us?
        </Typography>
        <Typography variant="body1">
          ✔ Wide variety of products <br />
          ✔ Fast & secure checkout <br />
          ✔ 24/7 customer support <br />
          ✔ Amazing deals & discounts <br />
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
