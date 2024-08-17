import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const OurProducts = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "10px" }}>🅾🆄🆁 🅿🆁🅾🅳🆄🅲🆃🆂 </h1>
            <Box sx={{ flexGrow: 1, ml: 10, mt: 1, mr: 10, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/27729110/pexels-photo-27729110/free-photo-of-a-bedroom-with-a-bed-a-couch-and-a-small-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="green iguana"
                            />
                            <CardContent style={{ backgroundColor: "#fff1d7" }}>
                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                    Home & Décor
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div style={{ textAlign: "center" }}>
                                        <h1 style={{ color: "#581d06", fontWeight: 'bold' }}>
                                            50-60 % off
                                        </h1>
                                        <Button variant="text" style={{ color: "#581d06", fontWeight: 'bold' }}>Shop Now</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="green iguana"
                            />
                            <CardContent style={{ backgroundColor: "#fff1d7" }}>
                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                    Beauty
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div style={{ textAlign: "center" }}>
                                        <h1 style={{ color: "#581d06", fontWeight: 'bold' }}>
                                            50-60 % off
                                        </h1>
                                        <Button variant="text" style={{ color: "#581d06", fontWeight: 'bold' }}>Shop Now</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="green iguana"
                            />
                            <CardContent style={{ backgroundColor: "#fff1d7" }}>
                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                    Pets
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div style={{ textAlign: "center" }}>
                                        <h1 style={{ color: "#581d06", fontWeight: 'bold' }}>
                                            50-60 % off
                                        </h1>
                                        <Button variant="text" style={{ color: "#581d06", fontWeight: 'bold' }}>Shop Now</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="green iguana"
                            />
                            <CardContent style={{ backgroundColor: "#fff1d7" }}>
                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                    Car Accessories.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div style={{ textAlign: "center" }}>
                                        <h1 style={{ color: "#581d06", fontWeight: 'bold' }}>
                                            50-60 % off
                                        </h1>
                                        <Button variant="text" style={{ color: "#581d06", fontWeight: 'bold' }}>Shop Now</Button>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default OurProducts