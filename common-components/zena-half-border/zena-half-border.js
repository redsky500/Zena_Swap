import React from "react";
import classes from "./zena-half-border.module.css";

export default function ZenaHalfBorder({ card, isBigCard }) {
  return (
    <div className={isBigCard ? classes.bigBorderWrapper : classes.borderWrapper}>
      {card}
    </div>
  );
}
