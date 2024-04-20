import React from "react";
import { Box, Divider, Grid, styled } from "@mui/material";
import MyText from "../../atoms/Typography";
import Theme from "../../../theme";
import { NavItem } from "../../molecules/NavItems";
import MuiIcon from "../../atoms/Icon";
import {
  ElementsType,
  MenuItemType,
  SideNavItemsType,
} from "../../../constants";
import pocketpay from "../../../../public/assets/icons/pocketPayLogo.svg";
export type SideNavSubMenuItemType = {
  hidden?: boolean;
};

export type SideNavigationBarProps = {
  data: SideNavItemsType;
  subMenuHidden?: boolean;
};
const OuterLayout = styled(Box)({
  width: "auto",
  minHeight: "100vh",
  height: "100%",
  boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.05)",
});

const InnerBox = styled(Grid)({
  gap: "3vh",
});
const InsideBox = styled(Grid)({
  gap: "3vh",
  marginLeft: "10px",
});
const ElementsBox = styled(Grid)({
  "width": "14rem",
  "cursor": "pointer",
  "&:hover": {
    backgroundColor: Theme.palette.text.low,
    borderRadius: Theme.spacing(1),
  },
  "px": "1vw",
  "marginLeft": "15px",
});
const LineBox = styled(Grid)({
  marginTop: "15px",
});
const SideNavBar = (props: SideNavigationBarProps) => {
  const { data, subMenuHidden } = props;
  return (
    <OuterLayout>
      <Grid item container py={"2.5vh"} justifyContent="center">
        <MuiIcon alt="pocketpay-logo" src={pocketpay} />
      </Grid>
      <Grid item container direction="column">
        <InnerBox item container direction="column">
          {data.mainMenuItems.map((element, index) => (
            <ElementsBox key={`navitem-${index + 1}`} item>
              <NavItem
                src={element.src}
                text={element.text}
                active={element.active}
                variant={element.textvariant}
                chip={element.chipText}
                chipname={element.chipName}
                color={
                  index === 0
                    ? Theme.palette.primary[500]
                    : Theme.palette.text.medium
                }
              />
            </ElementsBox>
          ))}
        </InnerBox>
        {data.subMenuItems && (
          <>
            {data.subMenuItems.map(
              (
                element: {
                  hidden: boolean;
                  label:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactPortal
                    | null
                    | undefined;
                  items: MenuItemType;
                },
                index: number
              ) => (
                <Grid key={`item-${index + 1}`} item>
                  {!subMenuHidden && !element.hidden && (
                    <Grid container direction="column">
                      <LineBox item>
                        <Divider />
                      </LineBox>
                      <Grid item container direction="column" p={2.5}>
                        <Grid item pb={2.5}>
                          <MyText
                            variant="caption1"
                            color={Theme.palette.text.medium}
                            text={element.label}
                          />
                        </Grid>
                        <InsideBox container item direction="column">
                          {element.items.map(
                            (element: ElementsType, i: number) => (
                              <Grid key={`subitem-${i + 1}`} item>
                                <NavItem
                                  variant="avatar"
                                  src={element.src}
                                  text={element.text}
                                  color={Theme.palette.text.medium}
                                />
                              </Grid>
                            )
                          )}
                        </InsideBox>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              )
            )}
          </>
        )}
      </Grid>
    </OuterLayout>
  );
};

export default SideNavBar;
