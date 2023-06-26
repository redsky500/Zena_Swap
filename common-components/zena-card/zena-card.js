import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import classes from "./zena-card.module.css";

export default function ZenaCard({ cardContent }) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.cardBackground}></div>
        <CardContent>
          <div className={classes.userImage}>
            <img className={classes.image} src={cardContent.image} />
          </div>
          <Typography
            gutterBottom
            variant="h1"
            component="h2"
            className={`${classes.title} ${classes.margin10}`}
          >
            {cardContent.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={`${classes.subTitle} ${classes.margin10}`}
          >
            {cardContent.subTitle}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={`${classes.description} ${classes.margin10}`}
          >
            {cardContent.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
