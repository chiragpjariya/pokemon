import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function GradientCover({ types, img, name }) {

  return (
    <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardCover >
        <img
          src={img}
          loading="lazy"
          style={{ height: '200px', width: '300px', objectFit: 'contain' }}
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 200px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}