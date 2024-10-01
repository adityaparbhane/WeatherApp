import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box flex flex-col items-center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={img_url} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature = {info.temp}</div>
            <div>humidity = {info.humidity}</div>
            <div>min temp = {info.temp_min}</div>
            <div>max temp = {info.temp_max}</div>
            <div>
              weather can be described as <i>{info.weather}</i> and it feels
              like {info.feelsLike}{" "}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
