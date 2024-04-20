import {
  Fallback,
  HOME_TRANSACTION_VALUES,
  HP_BUTTON,
  HP_HEADING,
  HP_TEXTLINE_ONE,
  HP_TEXTLINE_TWO,
  ROSS_GENER,
  SIDE_NAV_ITEMS,
} from "../../constants";
import { Header } from "../../components/organisms/Header";
import { HomeTransaction } from "../../components/organisms/HomeTransaction";
import SideNavBar from "../../components/organisms/SideNavBar";
import DashBoard from "../../components/templates/DashBoard";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, styled } from "@mui/material";
import MuiButton from "../../components/atoms/Button";
import theme from "../../theme";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../../../public/assets/images/Illustration.svg";
import TypographyComponent from "../../components/atoms/Typography";
import MuiIcon from "../../components/atoms/Icon";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import { TransactionService } from "../../services/Transaction";
import { TransactionInterface } from "../../components/utils/interfaces/Transaction";
import { PaymentInterface } from "../../components/utils/interfaces/Payment";
import { setToken } from "../../components/utils/functions";
const SendMoneyButton = styled(MuiButton)({
  width: "159px",
  height: "56px",
  borderRadius: "56px",
  color: theme.palette.structuralColors.white,
  backgroundColor: theme.palette.primary[500],
  ["&:hover"]: {
    backgroundColor: theme.palette.primary[300],
  },
  textTransform: "capitalize",
});

const OuterBox = styled(Box)({
  width: "100%",
  padding: "1rem 0rem",
});
const StackStyle = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "20px",
  paddingRight: "10px",
  marginBottom: "1rem",
  flexDirection: "row",
});
const InnerBox = styled(Box)({
  paddingLeft: "20px",
  paddingRight: "10px",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
});

const ContentBoxStyle = styled(Box)({
  width: "81vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "74vh",
  backgroundColor: theme.palette.structuralColors.white,
  marginLeft: "25px",
  borderRadius: "4px",
});

const ImageStyle = styled(Box)({
  width: "178px",
  height: "183px",
  marginBottom: "30px",
});

const HomePageFlow = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<TransactionInterface[] | []>(
    []
  );
  const [accounts, setAccounts] = useState<string[]>([]);
  const fetchDetails = async () => {
    await TransactionService.getTransactions().then((res) => {
      setTransactions(res.data.slice().reverse());
    });
    await TransactionService.getPaymentDetails("CARD").then((res) => {
      const details = res.data as PaymentInterface[];
      setAccounts(details.map((card) => card.debitCardPayment.cardNumber));
    });
    setLoading(false);
  };
  const handleSendMoneyButton = () => {
    navigate("/send-money");
  };
  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    logout();
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") as string);
    fetchDetails();
  }, []);
  const generateHomeContent = () => {
    if (transactions.length === 0) {
      return (
        <div>
          <StackStyle>
            <TypographyComponent
              data-testid="transaction-text"
              variant="h1"
              text={HP_HEADING}
            />
            <SendMoneyButton
              variant={"text"}
              text={<TypographyComponent variant="body2" text={HP_BUTTON} />}
              onClick={handleSendMoneyButton}
            />
          </StackStyle>
          <ContentBoxStyle>
            <ImageStyle>
              <MuiIcon src={Home} />
            </ImageStyle>
            <TypographyComponent
              variant="body1"
              color={theme.palette.text.medium}
              text={HP_TEXTLINE_ONE}
            />

            <TypographyComponent
              variant="body1"
              color={theme.palette.text.medium}
              text={HP_TEXTLINE_TWO}
            />
          </ContentBoxStyle>
        </div>
      );
    } else {
      return (
        <OuterBox>
          <StackStyle>
            <TypographyComponent variant="h1" text={HP_HEADING} />
            <SendMoneyButton
              data-testid="send-money-button"
              variant={"text"}
              text={<TypographyComponent variant="body2" text={HP_BUTTON} />}
              onClick={handleSendMoneyButton}
            />
          </StackStyle>
          <InnerBox>
            {transactions.map((transaction) => (
              <HomeTransaction
                key={transaction.id}
                senderName={`${transaction.recipient.firstName} ${transaction.recipient.lastName}`}
                sendAmount={transaction.senderAmount}
                recipientAmount={transaction.receiverAmount}
                recipientCode={transaction.receiverCurrency}
                sendCode={transaction.senderCurrency}
                createdAt={new Date(transaction.date)}
                username={ROSS_GENER}
                transferNumber={transaction.transferNumber}
                accounts={accounts}
                handleCancelTransfer={async () => {
                  setLoading(true);
                  await TransactionService.updateStatus(
                    transaction.id,
                    "CANCELLED"
                  );
                  location.reload();
                }}
                isCancel={transaction.status === "CANCELLED"}
              />
            ))}
          </InnerBox>
        </OuterBox>
      );
    }
  };

  return loading ? (
    <Box
      height="100vh"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <CircularProgress data-testid="loading" />
    </Box>
  ) : (
    <ErrorBoundary FallbackComponent={Fallback}>
      <DashBoard
        navBar={
          <SideNavBar
            data={SIDE_NAV_ITEMS}
            subMenuHidden={HOME_TRANSACTION_VALUES.length === 0}
          />
        }
        header={
          <Header
            data-testid="header"
            username={"Ross Gener"}
            id={"P44561754"}
            onClickLogout={onClickLogOut}
          />
        }
        body={<OuterBox>{generateHomeContent()}</OuterBox>}
      />
    </ErrorBoundary>
  );
};

export default HomePageFlow;
