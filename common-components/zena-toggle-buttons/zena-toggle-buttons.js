import React, { useEffect, useState } from "react";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import classes from "./zena-toggle-buttons.module.css"

export default function ZenaToggleButtons({ tableItems }) {
  const [alignment, setAlignment] = useState("Swap");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      className={classes.toggleButtonWrapper}
    >
      {tableItems.map((item) => {
        return (
          <ToggleButton value={item} key={item} className={classes.toggleButton} classes={{ selected: classes.selectedTab }}>
            {item}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
    );
}
