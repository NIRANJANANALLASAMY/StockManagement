import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Carousel, Container } from "react-bootstrap";

const AdminHome = () => {
  return (
    <div style={{ backgroundColor: "#e6f0ff", minHeight: "100vh" }}>
      <AdminNavbar />

      <div style={mainContentStyle}>
        <h1 style={headingStyle}>SRI MARIAMMAN TRADERS</h1>
        <h1 style={headingStyle}>Welcome to the Admin Dashboard</h1>
        <p style={descriptionStyle}>
          This is a Spare Parts Stock Management Website. Here you can manage stock details, products, and orders effectively.
        </p>

        <div style={carouselContainerStyle}>
  <Carousel fade indicators={false}>
    <Carousel.Item>
      <img src="/home/1.jpeg" alt="Slide 1" style={carouselImageStyle} />
    </Carousel.Item>
    <Carousel.Item>
      <img src="/home/2.jpeg" alt="Slide 2" style={carouselImageStyle} />
    </Carousel.Item>
    <Carousel.Item>
      <img src="/home/3.jpeg" alt="Slide 3" style={carouselImageStyle} />
    </Carousel.Item>
    <Carousel.Item>
      <img src="/home/4.webp" alt="Slide 4" style={carouselImageStyle} />
    </Carousel.Item>
  </Carousel>
</div>
      </div>
    </div>
  );
};

const mainContentStyle = {
  padding: "60px 20px",
  
  textAlign: "center",
  color: "#003366"
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "15px"
};

const descriptionStyle = {
  fontSize: "1.2rem",
  marginBottom: "40px"
};

const carouselContainerStyle = {
  maxWidth: "800px",
  margin: "0 auto 40px"
};

const carouselImageStyle = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "10px"
};

const imageStyle = {
  padding: "70%",
  width: "100%",
  maxHeight: "500px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "30px"
};

export default AdminHome;
