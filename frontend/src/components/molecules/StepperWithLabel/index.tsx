import React from "react";
import { Box, Slider, styled } from "@mui/material";
import theme from "../../../theme";

export interface StepperProps {
  horizontalStepperValues?: string[];
  presentValue: number;
  width?: string;
  marks?: MarkType[];
}

type MarkType = {
  value: number;
  label: string;
};

interface StyledBoxProps {
  width?: string;
}

const StyledBox = styled(Box)<StyledBoxProps>(({ width }) => ({
  "display": "flex",
  "alignItems": "center",
  "width": width,
  ".MuiSlider-rail": {
    color: theme.palette.grey[100],
  },
  ".MuiSlider-mark": {
    width: "0px",
  },
  "& .MuiSlider-thumb": {
    "color": theme.palette.primary[300],
    "width": "10px",
    "height": "10px",
    ":hover": {
      boxShadow: "none",
    },
    "&.Mui-focusVisible": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-thumb .Mui-focusVisible": {
    boxShadow: "0px",
  },
  ".MuiSlider-track": {
    color: theme.palette.primary[100],
  },
  ".MuiSlider-markLabel": {
    ...theme.typography.caption,
    color: theme.palette.text.medium,
  },
  ".MuiSlider-markLabelActive": {
    ...theme.typography.caption,
    color: theme.palette.primary[500],
  },
}));

const StepperWithLabel = ({
  presentValue,
  horizontalStepperValues,
  width,
  marks = [],
}: StepperProps): React.JSX.Element | null => {
  let percentage = 0;
  if (horizontalStepperValues) {
    percentage = 100 / (horizontalStepperValues.length - 1);
    const calculatedMarks =
      marks.length > 0
        ? marks
        : horizontalStepperValues.map((item, index) => ({
            value: index * percentage,
            label: item,
          }));
    return (
      <StyledBox width={width}>
        <Slider
          marks={calculatedMarks}
          value={(presentValue - 1) * percentage}
          data-testid="horizontal-slider"
        />
      </StyledBox>
    );
  }

  return null;
};

export default StepperWithLabel;
