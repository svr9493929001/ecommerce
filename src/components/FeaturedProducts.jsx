import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';

const FeaturedProducts = () => {
  return (
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>🅵🅴🅰🆃🆄🆁🅴🅳 🅿🆁🅾🅳🆄🅲🆃🆂</h1>
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
            <img className="d-block w-100" src="https://images.pexels.com/photos/20903471/pexels-photo-20903471/free-photo-of-all-day-matte-foundation-by-nykka-commercial-photo.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First slide" style={{ maxHeight: "500px" }} />
           
            <Carousel.Caption style={{ color: "black" }}>
              <h1>nykaa Products </h1>
              <h6>Starting at <strong style={{ textDecoration: 'line-through', fontSize: "Bold" }}>$999</strong> $899</h6>
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
            <img className="d-block w-100" src="https://images.pexels.com/photos/8015774/pexels-photo-8015774.jpeg?auto=compress&cs=tinysrgb&w=600" alt='second img' style={{ maxHeight: "500px" }} />
            <Carousel.Caption>
              <h1>bath products </h1>
              <h6>Starting at <strong style={{ textDecoration: 'line-through', fontSize: "Bold" }}>$599</strong> $499</h6>
            </Carousel.Caption>
            </Box>
          </Carousel.Item>
        </Carousel>
      </div>
  )
}
export default FeaturedProducts;