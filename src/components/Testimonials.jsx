import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GradeIcon from '@mui/icons-material/Grade';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      review: 'Great quality products! I am a repeat customer.',
      avatar: 'avatar1.jpg',
    },
    {
      name: 'Jane Smith',
      review: 'Customer service is top-notch!',
      avatar: 'avatar2.jpg',
    },
    {
      name: 'John Doe',
      review: 'Easy return policy',
      avatar: 'avatar1.jpg',
    },
    {
      name: 'Jane Smith',
      review: 'Greate product collections',
      avatar: 'avatar2.jpg',
    },
  ];

  return (
    <div style={{margin:"50px"}}>
      <h1 style={{ textAlign: "center", margin: "50px" }}>█▓▒▒░░░Customer's reviews░░░▒▒▓█</h1>
      
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index} >
            <Card style={{ backgroundColor: "whitesmoke" }}>
              <CardContent>
                <Avatar src={testimonial.avatar} />
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body1">{testimonial.review}</Typography>
                <span style={{ display: "flex", marginTop: "10px", marginLeft: "12px" }}>
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                  <StarBorderOutlinedIcon />
                </span>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  );
}