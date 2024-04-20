import React from "react";
import { Checkbox as MuiCheckbox, styled } from "@mui/material";
import theme from "../../../theme";
import checkedIcon from "../../../../public/assets/icons/checkedIcon.svg";
const CheckboxComponent = styled(MuiCheckbox)({
  "width": "20px",
  "height": "20px",
  "color": theme.palette.grey[400],
  "&.Mui-checked": {
    color: theme.palette.primary?.[500],
  },
});

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}

const CheckboxAtom = (props: CheckboxProps) => {
  return (
    <CheckboxComponent
      checked={props.checked}
      {...props}
      checkedIcon={<img src={checkedIcon} alt="checkedIcon" />}
    />
  );
};

export default CheckboxAtom;
