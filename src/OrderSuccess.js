import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EMPTY_CART } from "./redux/slices/cartSlice";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contineShop = () => {
    dispatch(EMPTY_CART());
    navigate("/");
  };
  return (
    <Box className="d-flex align-items-center justify-content-center">
      <Container maxWidth="sm" className="py-5">
        <Card sx={{ minWidth: 275, background: "rgba(239,241,238,255)" }}>
          <CardContent>
            <Typography variant="h4" className="text-center p-5">
              Your order has been placed successfully !
            </Typography>

            <Box className="py-4">
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={contineShop}
              >
                Continue Shopping
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default OrderSuccess;
