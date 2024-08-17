import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Home = () => {
    return (
        <Box
            sx={{
                mt: {
                    xs: 7,
                    sm: 8,
                    md: 9,
                }
            }}
        >
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
                        <img
                            src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="First Image"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </Box>
                    <Carousel.Caption>
                        <h1>Get 50% off on all Home & Décor products!</h1>
                        <p>Offer Ends Soon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Box
                        sx={{
                            width: '100%',
                            height: {
                                xs: '200px',
                                sm: '300px',
                                md: '400px',
                            },
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Second Image"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </Box>
                    <Carousel.Caption>
                    <h1>Get 30% off on all Beauty products!</h1>
                    <p>Offer Ends Soon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Box
                        sx={{
                            width: '100%',
                            height: {
                                xs: '200px',
                                sm: '300px',
                                md: '400px',
                            },
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="https://images.pexels.com/photos/8434641/pexels-photo-8434641.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Third Image"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                        <Carousel.Caption>
                        <h1>Get upto 45% off on all Pet Care products!</h1>
                        <p>Offer Ends Soon</p>
                    </Carousel.Caption>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box
                        sx={{
                            width: '100%',
                            height: {
                                xs: '200px',
                                sm: '300px',
                                md: '400px',
                            },
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Third Image"
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </Box>
                    <Carousel.Caption>
                        <h1>Get upto 75% off on all Car Accessories products!</h1>
                        <p>Offer Ends Soon</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Box sx={{ flexGrow: 1 }}>
                <Grid filler spacing={2}>
                    <Grid xs={12} md={12} sx={{
                        mt: 5
                    }}>
                        <img
                            style={{
                                width: '-webkit-fill-available',
                            }}
                            src="data:image/png;base64,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" />
                    </Grid>
                </Grid>
            </Box>

        </Box>

    );
}

export default Home;
