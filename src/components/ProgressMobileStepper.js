import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ProgressMobileStepper({
  activeStep,
  onStep,
  userInput,
}) {
  const theme = useTheme();

  const handleNext = () => {
    onStep((prevActiveStep) =>
      prevActiveStep < userInput - 1 ? prevActiveStep + 1 : 0
    );
  };

  const handleBack = () => {
    onStep((prevActiveStep) =>
      prevActiveStep > 0 ? prevActiveStep - 1 : userInput - 1
    );
  };

  return (
    <MobileStepper
      variant="progress"
      steps={userInput}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext}>
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
