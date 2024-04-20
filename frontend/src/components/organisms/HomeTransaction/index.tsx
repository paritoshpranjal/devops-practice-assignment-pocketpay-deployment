import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import expandIcon from "../../../../public/assets/icons/chevron-up.svg";
import sendIcon from "../../../../public/assets/icons/send-icon.svg";
import chevronDown from "../../../../public/assets/icons/chevron-down.svg";
import MuiIcon from "../../atoms/Icon";
import TabsComponent from "../../molecules/MuiTabs";
import shareIcon from "../../../../public/assets/icons/share.svg";
import { StyledButton } from "../../molecules/TradeAddress";
import helpIcon from "../../../../public/assets/icons/helpcircle.svg";
import { TransactionStepper } from "../../molecules/TransactionStepper";
import { MuiModal } from "../../molecules/Modal";
import ShareTrackingModal from "../../molecules/ShareTrackingCard";
import CancelTransferModal from "../CancelTranseferModal";
import {
  CANCEL_TRANSFER_HEADER,
  CANCEL_TRANSFER_SUBTEXT,
  HomeTabs,
} from "../../../constants";
import {
  addHoursToDate,
  addMinutesToDate,
  formatDate,
} from "../../utils/functions";
export interface TransactionDetailsProps {
  recipientCode: string;
  sendCode: string;
  createdAt: Date;
  username: string;
  transferNumber: string;
  accounts: string[];
  isCancel?: boolean;
  handleCancelTransfer?: () => void;
}
interface HomeTransactionProps extends TransactionDetailsProps {
  senderName: string;
  sendAmount: number;
  recipientAmount: number;
}
const StyledAccordion = styled(Accordion)({
  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
  [`& .Mui-expanded.MuiAccordionSummary-root`]: {
    borderBottom: `1px solid ${Theme.palette.grey[100]}`,
  },
  [`& .MuiAccordionSummary-root`]: {
    padding: "20px 36px",
    [`& .MuiAccordionSummary-content`]: {
      margin: 0,
    },
  },
  [`& .styleSendIcon`]: {
    background: Theme.palette.structuralColors.blue,
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [`& .addBorder`]: {
    borderBottom: `1px solid ${Theme.palette.grey[100]}`,
  },
  [`& .styleDropdown`]: {
    background: Theme.palette.structuralColors.blue,
    padding: "11px 12px",
    borderRadius: "4px",
  },
 [`&.Mui-expanded`] :{
  margin:0
 }
});
const StyledAccordionDetails = styled(AccordionDetails)({
  padding: 0,
  paddingTop: "17px",
});

const TransactionDetails = (props: TransactionDetailsProps) => {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [cancelTransfer, setCancelTransfer] = useState(false);
  const currentDate = props.createdAt;
  const stepperValues = [
    {
      leftLable: formatDate(currentDate),
      rightLable: "You set up your transfer",
    },
    {
      leftLable: formatDate(addMinutesToDate(currentDate, 1)),
      rightLable: `We received your ${props.sendCode}`,
    },
    {
      leftLable: formatDate(addMinutesToDate(currentDate, 2)),
      rightLable: "Your money’s being processed",
    },
    {
      leftLable: formatDate(addHoursToDate(currentDate, 6)),
      rightLable: `We pay out your ${props.recipientCode}`,
    },
    {
      leftLable: formatDate(addHoursToDate(currentDate, 12)),
      rightLable: `George max recieves your ${props.recipientCode}`,
    },
  ];

  const handleShareModal = () => {
    setOpenShareModal(!openShareModal);
  };
  const handleCancelTransfer = () => {
    setCancelTransfer(!cancelTransfer);
  };
  const handleCancelPopup = () => {
    setCancelTransfer(!cancelTransfer);
    props.handleCancelTransfer?.();
  };

  return (
    <StyledAccordionDetails>
      <Grid container alignItems="flex-end">
        <Grid item flexGrow={1}>
          <TabsComponent
            height="37px"
            indicatorLeft="64px !important"
            indicatorWidth="60px !important"
            tabs={HomeTabs}
          />
        </Grid>
        <Grid item className="addBorder">
          <Grid
            item
            container
            columnGap={5}
            paddingRight="36px"
            paddingBottom="16px"
          >
            <div className="styleDropdown">
              <Grid container>
                <TypographyComponent variant="body2" text="General" />
                <MuiIcon src={chevronDown} alt="expandDropDown" />
              </Grid>
            </div>
            <StyledButton
              variant="text"
              startIcon={<MuiIcon src={shareIcon} alt="share" />}
              onClick={handleShareModal}
            />
            <MuiIcon src={helpIcon} alt="help" />
          </Grid>
        </Grid>
      </Grid>
      <Box padding="24px 36px" display="flex" flexDirection="column">
        <Grid container direction="column" rowGap={4} maxWidth="400px">
          <Grid container item justifyContent="space-between">
            <TypographyComponent
              variant="body2"
              text="Set up by:"
              color={Theme.palette.text.medium}
            />
            <TypographyComponent
              variant="body2"
              text={`${props.username} (YOU)`}
            />
          </Grid>
          <Grid container item justifyContent="space-between">
            <TypographyComponent
              variant="body2"
              text="Transfer number:"
              color={Theme.palette.text.medium}
            />
            <TypographyComponent
              variant="body2"
              text={`#${props.transferNumber}`}
            />
          </Grid>
        </Grid>
        {!props.isCancel ? (
          <Grid container direction="column" rowGap={4}>
            <Grid item container>
              <Grid item maxWidth="420px" paddingTop="40px">
                <TransactionStepper
                  presentValue={3}
                  verticalStepperValues={stepperValues}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <StyledButton
                variant="outlined"
                text="Cancel the transfer"
                onClick={handleCancelTransfer}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            rowGap={5}
            paddingTop="40px"
            paddingBottom="188px"
          >
            <TypographyComponent
              variant="body1"
              text={CANCEL_TRANSFER_HEADER}
            />
            <TypographyComponent
              variant="body3"
              text={CANCEL_TRANSFER_SUBTEXT}
            />
          </Grid>
        )}
      </Box>
      <MuiModal
        open={openShareModal}
        element={<ShareTrackingModal handleClick={handleShareModal} />}
      />
      <MuiModal
        open={cancelTransfer}
        onClose={handleCancelTransfer}
        element={
          <CancelTransferModal
            accounts={props.accounts}
            transferId={props.transferNumber}
            username={props.username}
            handlecancelTransfer={handleCancelPopup}
          />
        }
      />
    </StyledAccordionDetails>
  );
};
export const HomeTransaction = (props: HomeTransactionProps) => {
  return (
    <StyledAccordion data-testid="homeTransaction">
      <AccordionSummary expandIcon={<img src={expandIcon} alt="expandIcon" />}>
        <Grid container alignItems="center">
          <Grid item flexGrow={1}>
            <Grid container item columnGap={3}>
              <div className="styleSendIcon">
                <MuiIcon src={sendIcon} alt="sendIcon" />
              </div>
              <Grid item>
                <TypographyComponent variant="body2" text={props.senderName} />
                <TypographyComponent
                  variant="caption1"
                  text={props.isCancel ? "Cancelled" : "Sending"}
                  color={Theme.palette.text.medium}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container direction="column" paddingRight="16px">
              <TypographyComponent
                variant="caption1"
                text={`${props.sendAmount} ${props.sendCode}`}
              />
              <TypographyComponent
                variant="caption1"
                text={`${props.recipientAmount.toFixed(2)} ${
                  props.recipientCode
                }`}
                color={Theme.palette.text.medium}
              />
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <TransactionDetails {...props} />
    </StyledAccordion>
  );
};
