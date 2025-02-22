import React, { useState } from "react";
import Slider from "react-slick";
import { Container, TextField, Typography, Box } from "@mui/material";
import ProductList from "../components/ProductList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample slider images (Replace with actual URLs)
const sliderImages = [
  "/images/phone.jpg",
  "/images/lap.jpg",
  "/images/text.jpg",
  "/images/2.jpg",
  "/images/t.jpg",
  "/images/j.jpg",
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets & medium screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/4.jpg')", // Ensure correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "20px",
      }}
    >
      {/* Search Bar */}
      <Box sx={{ width: "60%", mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            boxShadow: 2,
          }}
        />
      </Box>

      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
      >
        Welcome to Shop Time
      </Typography>

      {/* Image Slider (One Image Per Slide, Adjustable) */}
      <Box sx={{ width: "60%", overflow: "hidden", mb: 3 }}>
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image}
                alt={`slide-${index}`}
                style={{
                  width: "100%", // Adjusting width dynamically
                  maxHeight: "400px", // Max height for better display
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Product List */}
      <Container maxWidth="lg" sx={{ bgcolor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", padding: "20px", boxShadow: 3 }}>
        <ProductList searchQuery={searchQuery} />
      </Container>
    </Box>
  );
};

export default Home;
