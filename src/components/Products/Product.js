import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CARD } from "../../redux/slices/cartSlice";

const Product = ({ product, showToats }) => {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.CART);
  const addToCart = (prod) => {
    const body = {
      id: prod.id,
      name: prod.title,
      price: prod.price,
      image: prod.thumbnail,
      quantity: 1,
    };

    dispatch(ADD_TO_CARD(body));
    showToats(prod.title);
  };

  return (
    <Grid item sm={1} md={4} lg={3}>
      <Card sx={{ minHeight: 300, width: "100%", position: "relative" }}>
        <CardMedia component="img" height="140" image={product?.thumbnail} />
        <CardContent className="mb-5">
          <Typography gutterBottom variant="h6">
            {product?.title?.charAt(0).toUpperCase() + product?.title?.slice(1)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ width: "100%" }}
          className="position-absolute bottom-0 d-flex justify-content-between"
        >
          <Typography gutterBottom variant="subtitle1">
            ${product.price}
          </Typography>
          <Button
            onClick={() => addToCart(product)}
            variant={
              cardItems.some((item) => item.id === product.id)
                ? "outlined"
                : "contained"
            }
            size="small"
            color="success"
          >
            <Typography noWrap variant="body2">
              Add to Cart
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
