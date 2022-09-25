import { Add, Delete, Remove } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import {
  DECREASE_QUANTITY,
  INCREASE_QANTITY,
  REMOVE_FROM_CART,
} from "../../redux/slices/cartSlice";

export const Items = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2} sx={{ marginBottom: 4 }}>
      <Grid item xs={6} md={4}>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box className="d-flex align-items-center justify-content-center">
          <Button
            className="border border-1"
            sx={{ width: "15px" }}
            onClick={() => dispatch(DECREASE_QUANTITY(item))}
          >
            <Remove />
          </Button>
          <Typography className="px-3">{item.quantity}</Typography>
          <Button
            className="border border-1"
            sx={{ width: "15px" }}
            onClick={() => dispatch(INCREASE_QANTITY(item))}
          >
            <Add />
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography>${item.price}</Typography>
      </Grid>
      <Grid item xs={6} md={2} className="text-center">
        <Button onClick={() => dispatch(REMOVE_FROM_CART(item))}>
          <Delete className="text-danger" />
        </Button>
      </Grid>
    </Grid>
  );
};
