import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ShopContextProvider } from "./ShopContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#a7ffeb",
    },
  },
});
function App() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <ShopContextProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SHOP IN STYLE
            </Typography>
            <MenuItem onClick={() => navigate("/")}>
              <Typography textAlign="center">SHOP</Typography>
            </MenuItem>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate("/cart")}
                color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </ShopContextProvider>
      </div>
      
    </ThemeProvider>
  );
}
export default App;
