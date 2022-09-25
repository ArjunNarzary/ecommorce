import { Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = ({ showMyCart }) => {
  const cartItems = useSelector((state) => state.CART.length);
  return (
    <section className="md:container-fluid">
      <Toolbar sx={{ marginBottom: { xs: 2 } }} className="sm:px-1 md:px-10">
        <Box sx={{ flexGrow: 1 }} className="d-flex">
          <ShoppingBag sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QuickShoppe
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={showMyCart}>
            <Badge badgeContent={cartItems} color="primary" fontSize="small">
              <ShoppingCart fontSize="medium" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </section>
  );
};

export default Navbar;
