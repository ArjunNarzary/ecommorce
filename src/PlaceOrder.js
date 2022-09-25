import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "./redux/slices/userSlice";

const PlaceOrder = () => {
  const myItems = useSelector((state) => state.CART);
  const dispatch = useDispatch();
  const [totalAmout, setTotalAmount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (myItems.length > 0) {
      const total = myItems.reduce((acc, item) => {
        return acc + Number(item.price) * item.quantity;
      }, 0);

      setTotalAmount(total);
    }
  }, [myItems]);

  const placeOrder = () => {
    if (name.length === 0) {
      setError({ ...error, name: "Please enter your name" });
    } else if (email.length === 0) {
      setError({ ...error, email: "Please enter your email" });
    } else {
      setError({});
      dispatch(
        ADD_USER({
          name,
          email,
        })
      );
      navigate("/order-success");
    }
  };

  return (
    <Box className="d-flex align-items-center justify-content-center">
      <Container maxWidth="sm" className="py-5">
        <Card sx={{ minWidth: 275, background: "rgba(239,241,238,255)" }}>
          <CardContent>
            <Typography variant="h4" className="text-center mb-5">
              Order Summury
            </Typography>
            <Typography color="text.secondary" variant="h5" gutterBottom>
              Total Price: ${totalAmout}
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="mt-4"
            >
              <TextField
                fullWidth
                error={error?.name ? true : false}
                id="name"
                label="Name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                error={error?.email ? true : false}
                id="email"
                label="Email Address"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="py-4">
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={placeOrder}
              >
                Place order
              </Button>
            </Box>
            <Box className="text-center">
              <Typography variant="h6" className="font-weight-bold">
                OR
              </Typography>
            </Box>
            <Box className="py-4">
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => navigate("/order-success")}
              >
                Checkout as Guest
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PlaceOrder;
