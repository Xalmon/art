import React from 'react'
const { createTheme} = require("@mui/material");

export const DefaultTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: "#FFFFFF", // White for primary color
        },
        secondary: {
          main:  "rgb(68, 71, 70)", // Dark gray for secondary color
        },
        black: {
          main: "rgb(68, 71, 70)",
        },
        background: {
          main: "#FFFFFF", // White background
          default: "white", // Not used much, keep it for consistency
          paper: "rgb(68, 71, 70)", // Gray paper background for some MUI components
        },
        textColor: {
          main: "rgb(68, 71, 70)"
          , // **Change to a dark color for visibility in light theme**
        },
    }

})