import React from "react";
import { Stack } from "@mui/material";
import { AccountCard } from "../../molecules/AccountCard";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";

type AccountData = {
  src: string;
  title: string;
  text: string;
};
interface AccountTypeProps {
  data: AccountData[];
  title?: string;
  info?: string;
  selectAccountpOnClick?: (index:number) => void;
}

const AccountType = (props: AccountTypeProps) => {
  return (
    <Stack data-testid="account-type" maxWidth="516px" gap={Theme.spacing(8)}>
      <Stack gap={Theme.spacing(3)}>
        <TypographyComponent
          variant={"h1"}
          color={Theme.palette.text.high}
          text={props.title}
        />
        <TypographyComponent
          variant={"b3"}
          color={Theme.palette.text.medium}
          text={props.info}
        />
      </Stack>
      <Stack gap={Theme.spacing(5)}>
        {props.data.map((account, index) => {
          return (
            <AccountCard
              icon={account.src}
              key={account.title}
              headingText={account.title}
              subText={account.text}
              handleCardClick={()=>props.selectAccountpOnClick?.(index)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default AccountType;
