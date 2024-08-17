import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';

export default function SpecialOffers() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>🆂🅿🅴🅲🅸🅰🅻 🅾🅵🅵🅴🆁🆂 </h1>
      <Carousel>
        <Carousel.Item>
          <Box
            sx={{
              width: '100%',
              height: {
                xs: '200px',  // Mobile
                sm: '300px',  // Tablet
                md: '400px',  // Desktop
              },
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center', // Vertically center the image
              justifyContent: 'center', // Horizontally center the image
            }}
          >
            <img className="d-block w-100" src="https://images.pexels.com/photos/7310213/pexels-photo-7310213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First slide" style={{ maxHeight: "500px" }} />
            <Carousel.Caption>
              <h1>Special Offers </h1>
              <p>Get 50% off on Pet Food</p>
            </Carousel.Caption>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            sx={{
              width: '100%',
              height: {
                xs: '200px',  // Mobile
                sm: '300px',  // Tablet
                md: '400px',  // Desktop
              },
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center', // Vertically center the image
              justifyContent: 'center', // Horizontally center the image
            }}
          >
            <img className="d-block w-100" src="https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First slide" style={{ maxHeight: "500px" }} />
            <Carousel.Caption>
              <h1>Special Offers </h1>
              <p>Buy 1 Get 1 Free on lipstick</p>
            </Carousel.Caption>
          </Box>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}