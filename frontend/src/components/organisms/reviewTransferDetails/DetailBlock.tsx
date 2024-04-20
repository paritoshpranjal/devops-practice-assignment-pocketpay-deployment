import { Grid, Link } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import arrowRight from "../../../../public/assets/icons/arrow-right.svg";
import Theme from "../../../theme";
export interface DetailBlockProp {
  detailHead: string;
  detailLink: string;
  onClickLink?: () => void;
  sendAmount?: string;
  recepientAmount?: string;
  items: {
    name: string;
    value: string;
  }[];
}
export const DetailBlock = (props: DetailBlockProp) => (
  <Grid container item direction="column" rowGap={4}>
    <Grid container item justifyContent="space-between">
      <TypographyComponent
        variant="caption1"
        text={props.detailHead}
        color={Theme.palette.text.lowemphasis}
      />
      <Link sx={{ cursor: "pointer" }}>
        <TypographyComponent
          variant="linkText"
          text={props.detailLink}
          onClick={props.onClickLink}
        />
      </Link>
    </Grid>
    <Grid container item direction="column" rowGap={3}>
      {props.sendAmount && (
        <Grid container item columnGap={2.5} alignItems="center">
          <TypographyComponent variant="body2" text={props.sendAmount} />
          <img src={arrowRight} alt="arrowRightIcon" />
          <TypographyComponent variant="body2" text={props.recepientAmount} />
        </Grid>
      )}
      {props.items.map((item) => (
        <Grid container item justifyContent="space-between" key={item.name}>
          <TypographyComponent
            variant="body2"
            color={Theme.palette.text.medium}
            text={`${item.name}:`}
          />
          <TypographyComponent variant="body2" text={item.value} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);
