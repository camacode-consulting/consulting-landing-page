export const theme_chakraUI = {
  breakpoints: {
    base: "320px",
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    dark: "#423636",
    orange: "#FB9C7E",
    blue: "#0066FF",
    white: "#FFFFFF",
    gray200: "#F1F1F1",
    gray300: "#EAEAEA",
    gray700: "#807373",
    darkGray: "#6B6B6B",
    whiteIce: "#FFF7F7",
    green: "#48FB47",
  },
  textStyles: {
    hero100: {
      fontSize: "100px",
    },
    hero90: {
      fontSize: "90px",
    },
    hero: {
      fontSize: "80px",
      lineHeight: "90px",
    },
    heroMobile: {
      fontSize: "50px",
    },
    h1: {
      fontSize: "70px",
    },
    h1Title: {
      fontSize: "60px",
    },
    h1Mobile: {
      fontSize: "2.1rem",
    },
    h2: {
      fontSize: "30px",
    },
    h3: {
      fontSize: "25px",
    },
    h3Subtitle: {
      fontSize: "25px",
      lineHeight: "40px",
    },
    h4: {
      fontSize: "20px",
    },
    h4Subtitle: {
      fontSize: "20px",
      lineHeight: "35px",
    },
    h5: {
      fontSize: "15px",
    },
    h5Subtitle: {
      fontSize: "15px",
      lineHeight: "22px",
    },
  },
  fontWeights: {
    semibold: "600",
  },
  components: {
    Button: {
      sizes: {
        sm: {
          h: "35px",
          fontSize: "16px",
          px: "20px",
        },
        md: {
          h: ["50px", "50px"],
          fontSize: "16px",
          px: "30px",
        },
        lg: {
          h: ["50px", "70px"],
          px: "45px",
        },
      },
      variants: {
        black: {
          bg: "dark",
          color: "white",

          _hover: {
            bg: "hover",
            opacity: 1,
            color: "white",
          },
          _active: {
            bg: "pressed",
            transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare
          },
          _disabled: {
            bg: "inactive",
            opacity: 1,
            transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare
          },
        },
        white: {
          bg: "white",
          color: "dark",
          borderWidth: "2px",
          borderColor: "dark",
          borderRadius: "50px",
          _hover: {
            bg: "green",
            borderColor: "green",
            opacity: 1,
            color: "dark",
          },
          _active: {
            bg: "pressed",
            transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare
          },
          _disabled: {
            bg: "inactive",
            opacity: 1,
            transform: "scale(0.98)", //!chiedere a fedele quanto farlo scalare
          },
        },
      },
    },
  },
};
