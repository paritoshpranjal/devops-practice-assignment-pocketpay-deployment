import { createTheme } from "@mui/material/styles";
import { CSSProperties } from "@mui/material/styles/createMixins";
import "../index.css";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1: CSSProperties;
    body2: CSSProperties;
    body3: CSSProperties;
    caption1: CSSProperties;
    linkText: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1: CSSProperties;
    body2: CSSProperties;
    body3: CSSProperties;
    caption1: CSSProperties;
    linkText: CSSProperties;
  }
  interface PaletteColor {
    100: string;
    300: string;
    500: string;
    main: string;
  }
  interface SimplePaletteColorOptions {
    100: string;
    300: string;
    500: string;
    main: string;
  }
  interface TypeText {
    high?: string;
    medium?: string;
    low?: string;
    lowemphasis?: string;
  }
  interface CustomPalette {
    otherColors: {
      stroke2: string;
      icon1: string;
      icon2: string;
    };
    structuralColors: {
      blue: string;
      white: string;
      cardHover: string;
      buttonHover: string;
    };
    borderColors: {
      prime: string;
    };
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption: true;
    title: true;
  }
}

const Theme = createTheme({
  typography: {
    fontFamily: "Gerbera",
    h1: {
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "40px",
    },
    body1: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "32px",
    },
    body2: {
      fontSize: "17px",
      fontWeight: "Regular",
      lineHeight: "24px",
    },
    body3: {
      fontSize: "16px",
      fontWeight: "Regular",
      lineHeight: "24px",
    },
    caption1: {
      fontSize: "14px",
      fontWeight: "Regular",
      lineHeight: "21px",
    },
    linkText: {
      fontSize: "14px",
      fontWeight: "Regular",
      lineHeight: "13.3px",
    },
  },
  palette: {
    action: {
      disabledBackground: "#6C5DD3",
      disabled: "#E8E8E9",
      disabledOpacity: 0.56,
    },
    mode: "light",
    primary: {
      "main": "#7633FF",
      "100": "#E4D6FF",
      "300": "#9764FF",
      "500": "#7633FF",
    },
    text: {
      low: "#E8E7F0",
      lowemphasis: "#9F9DA3",
      medium: "#77767A",
      high: "#141414",
    },
    otherColors: {
      stroke2: "#E5E4E5",
      icon1: "#141414",
      icon2: "#A5A8AC",
    },
    structuralColors: {
      blue: "#F8F9FA",
      white: "#FFFFFF",
      cardHover: "#F3F2F5",
      buttonHover: "#F4EFFF",
    },
    grey: {
      "100": "#E4E4E5",
      "200": "#D7D7D7",
    },
    borderColors: {
      prime: "1px solid #E4E4E5",
    },
  },
  spacing: 4,
});

export default Theme;
