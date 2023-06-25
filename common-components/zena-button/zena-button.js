import { Button } from "@material-ui/core";
import classes from "./zena-button.module.css";

export default function ZenaButton({ buttonText, buttonEvent }) {
  return (
    <Button className={classes.buttonEnter} onClick={() => buttonEvent()}>
      {buttonText}
    </Button>
  );
}
