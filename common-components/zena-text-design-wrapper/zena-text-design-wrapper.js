import { Typography } from "@material-ui/core";
import classes from "./zena-text-design-wrapper.module.css";

export default function ZenaTextDesignWrapper({ text, fontSize }) {
  return (
    <span className={classes.zenaTextDesignWrapper}>
      <Typography variant="h1" className={classes.text} style={{fontSize: fontSize || "20px"}}>
        {text}
      </Typography>
    </span>
  );
}
