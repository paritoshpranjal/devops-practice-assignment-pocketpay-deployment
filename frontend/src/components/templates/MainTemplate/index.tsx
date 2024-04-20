import { Grid, styled } from "@mui/material";
import React from "react";
import logo from "../../../../public/assets/icons/logo.svg";
import MuiIcon from "../../atoms/Icon";
import StepperWithLabel from "../../molecules/StepperWithLabel";
import closeIcon from "../../../../public/assets/icons/close.svg";
import arrowRight from "../../../../public/assets/icons/arrow-right.svg";
import { StyledButton } from "../../molecules/TradeAddress";
interface MainTemplateProps {
  showStepper?: boolean;
  showClose?: boolean;
  onClickBack?: () => void;
  stepperValues?: string[];
  presentValue?: number;
  children: React.ReactNode;
  showBack?: boolean;
  stepperWidth?: string;
}
const OuterLayout=styled("div")({height: "85vh"});

export const MainTemplate = (props: MainTemplateProps) => {
  return (
    <OuterLayout data-testid="mainTemplate" >
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        padding="24px 80px"
        wrap="nowrap"
      >
        <MuiIcon src={logo} alt="logo" />
        <div>
          {props.showStepper && (
            <StepperWithLabel
              horizontalStepperValues={props.stepperValues}
              presentValue={props.presentValue ?? 0}
              width={props.stepperWidth}
            />
          )}
        </div>
        <div>
          {props.showClose && <MuiIcon src={closeIcon} alt="closeIcon" />}
        </div>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnGap={10}
      >
        {props.showBack && (
          <Grid item alignSelf="flex-start">
            <StyledButton
              data-testid="back-button"
              variant="text"
              startIcon={<MuiIcon src={arrowRight} alt="arrowRight" />}
              onClick={props.onClickBack}
            />
          </Grid>
        )}
        <Grid item marginTop={'70px'}>
          <Grid container item direction="column">
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </OuterLayout>
  );
};
