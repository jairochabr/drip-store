export const defaultTheme = {
  colors: {
    // Grayscale
    darkGray: "#1F1F1F",
    darkGray2: "#474747",
    darkGray3: "#666666",
    lightGray: "#8F8F8F",
    lightGray2: "#CCCCCC",
    lightGray3: "#F5F5F5",
    white: "#FFFFFF",
    // Colors
    primary: "#C92071",
    secondary: "#B5B6F2",
    tertiary: "#991956",
    error: "#EE4266",
    success: "#52CA76",
    warning: "#F6AA1C",
    primaryGradient: "linear-gradient(180deg, #C92071 0%, #EDABCA 100%)",
    secondaryGradient: "linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)",
  },
  grid: {
    Breakpoints: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  border: {
    radius: "8px",
  },
  font: {
    family: "'Inter', sans-serif",
    weight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    size: {},
  },
};
