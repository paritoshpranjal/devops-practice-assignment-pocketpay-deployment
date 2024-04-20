import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import transfertype from "../../../../public/assets/icons/card.svg";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import { Stack } from "@mui/material";
import RadioIconText from ".";

export default {
  title: "Molecules/RadioIconText",
  component: RadioIconText,
} as Meta;

const Template: StoryFn<typeof RadioIconText> = (args) => (
  <RadioIconText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: theme.palette.structuralColors.white,
  icon: transfertype,
  cardContent: "Debit Card",
  cardVariant: "body3",
  detailVariant: "caption1",
  iconColor: theme.palette.structuralColors.blue,
  flexDirection: "row",
  color: theme.palette.text.medium,
  singleText: true,
  multiText: (
    <Stack>
      <TypographyComponent
        variant={"caption1"}
        color={theme.palette.text.medium}
        text={"Send from your Visa or Mastercard."}
      />
      <TypographyComponent
        variant={"caption1"}
        color={theme.palette.text.medium}
        text={" Should arrive by January 28th."}
      />
    </Stack>
  ),
};
