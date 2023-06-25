import React from "react";
import classes from "./zena-half-border.module.css";

export default function ZenaHalfBorder({ card }) {
  return <div className={classes.borderWrapper}>{card}</div>;
}
