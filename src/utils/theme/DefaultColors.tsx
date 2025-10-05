import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA",
    },
    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb",
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547",
    },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
  },
  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: plus.style.fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: plus.style.fontFamily,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },

      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
  },
});

const basedarkTheme = createTheme({
    direction: "ltr",
    palette: {
        mode: "dark",
        primary: {
            main: "#445974",
            light: "#6C7E9F",
            dark: "#2E3E55",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#181832",
            light: "#2A2A57",
            dark: "#0F1026",
            contrastText: "#FFFFFF",
        },

        success: {
            main: "#13DEB9",
            light: "#32E6C7",
            dark: "#0CB597",
            contrastText: "#001A16",
        },
        info: {
            main: "#539BFF",
            light: "#7BB2FF",
            dark: "#1D6EDB",
            contrastText: "#001833",
        },
        error: {
            main: "#FA896B",
            light: "#FCAB94",
            dark: "#D8674C",
            contrastText: "#2A0A05",
        },
        warning: {
            main: "#FFAE1F",
            light: "#FFCA64",
            dark: "#C27F00",
            contrastText: "#261900",
        },


        background: {
            default: "#080726",
            paper: "#131939",
        },


        grey: {
            100: "#0E1122",
            200: "#131939",
            300: "#181C36",
            400: "#212746",
            500: "#2C3354",
            600: "#3C456A",
            700: "#4E5A83",
            800: "#7D8AA6",
            900: "#C9D0DD",
        },

        text: {
            primary: "#E6EAF3",
            secondary: "#AEB6C7",
            disabled: "rgba(230,234,243,0.38)",
        },

        divider: "rgba(255,255,255,0.12)",

        action: {
            hoverOpacity: 0.08,
            selectedOpacity: 0.16,
            focusOpacity: 0.12,
            disabledOpacity: 0.38,

            hover: "#f6f9fc",

            // hover: "rgba(255,255,255,0.04)",
            disabledBackground: "rgba(255,255,255,0.08)",
            active: "rgba(255,255,255,0.56)",
        },
    },

    typography: {
        fontFamily: plus.style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: plus.style.fontFamily,
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: plus.style.fontFamily,
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: plus.style.fontFamily,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem",
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem",
        },
        h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.2rem",
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 400,
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem",
        },
        body2: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem",
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                    boxShadow:
                        "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
                },

            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "7px",
                },
            },
        },


    },
});

export { baselightTheme , basedarkTheme};
