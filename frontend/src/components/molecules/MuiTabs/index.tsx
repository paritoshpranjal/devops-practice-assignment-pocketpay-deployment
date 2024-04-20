import { Stack, styled, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";

interface TabItem {
  label: string;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  width?: string;
  height?: string;
  indicatorWidth?: string;
  tabsGap?: string;
  indicatorLeft?: string;
  tabGap?:boolean;
}

const TabsComponent = ({
  tabs,
  width,
  height,
  indicatorWidth,
  tabsGap,
  indicatorLeft,
  tabGap
}: TabsProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const StyledTabs = styled(Tabs)({
    ".MuiTabs-indicator.css-1mhwwra-MuiTabs-indicator": {
      width: indicatorWidth,
      left: indicatorLeft,
    },
    ".css-heg063-MuiTabs-flexContainer": {
      display: "flex",
      marginLeft: "50px",
    },
    "& .MuiButtonBase-root": {
      padding: "0px",
      minHeight: "28px",
    },
    "& .MuiTabs-indicator": {
      top: "35px",
    },
    "& .MuiTabs-root": {
      padding: "0px",
    },
    minHeight: height,
    width: width,
    display: "flex",
    gap: "50px",
    borderBottom: `${theme.palette.borderColors.prime}`,
  });

  return (
    <Stack data-testid="tabs" id="tabs">
      <StyledTabs value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={
              <TypographyComponent
                text={tab.label}
                variant={"caption1"}
                style={{ marginLeft:tabGap && index==1 ? tabsGap : 'unset'}}
              />
            }
          />
        ))}
      </StyledTabs>
    </Stack>
  );
};

export default TabsComponent;
