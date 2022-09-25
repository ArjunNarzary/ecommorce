import { ArrowBackIos, Close } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Items } from "./Items";
import "./styles.css";

export const Cart = ({ hideMyCart }) => {
  const navigate = useNavigate();
  const myItems = useSelector((state) => state.CART);
  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    if (myItems.length > 0) {
      const total = myItems.reduce((acc, item) => {
        return acc + Number(item.price) * item.quantity;
      }, 0);

      setTotalAmount(total);
    }
  }, [myItems]);

  return (
    <div className="cartContainer">
      <Grid container>
        <Grid item xs={0} sm={0} md={4} lg={6} onClick={hideMyCart}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={6}
          className="bg-light p-3"
          style={{ minHeight: "100vh" }}
        >
          <Box className="d-flex justify-content-between">
            <Typography variant="h6">
              <Button
                sx={{ padding: 0, margin: 0, minWidth: "20px" }}
                onClick={hideMyCart}
              >
                <ArrowBackIos fontSize="8" />
              </Button>
              Your Cart{" "}
              <span className="text-danger fs-5">
                ( {myItems.length} products )
              </span>
            </Typography>
            <Button variant="text" onClick={hideMyCart}>
              <Close />
            </Button>
          </Box>
          {myItems.length > 0 ? (
            <>
              <Box mt-4 className="p-4">
                {myItems.map((item) => (
                  <Items key={item.id} item={item} />
                ))}
              </Box>
              <Box className="text-center px-4 my-4">
                <Box className="d-flex justify-content-between mb-5">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${totalAmout}</Typography>
                </Box>
                <Button
                  className="bg-success btn px-5"
                  onClick={() => navigate("/place-order")}
                >
                  <Typography variant="body1" className="text-light">
                    Checkout
                  </Typography>
                </Button>
              </Box>
            </>
          ) : (
            <Box className="py-5 text-center">
              <Typography variant="h6">Your cart is empty</Typography>
              <Button
                onClick={hideMyCart}
                className="bg-info text-danger px-5 mt-5"
              >
                Continue shopping
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
