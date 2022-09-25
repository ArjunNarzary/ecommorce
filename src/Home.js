import { Grid, Typography } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { useGetAllProductsQuery } from "./redux/services/serviceApi";
import "../src/index.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortType, setSortType] = useState("");

  const { data, isLoading, isError, isSuccess } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }

    if (isError) {
      setProducts([]);
    }
  }, [isSuccess, isError]);

  const showMyCart = () => {
    setShowCart(true);
  };

  const hideMyCart = () => {
    setShowCart(false);
  };

  useEffect(() => {
    if (sortType === "byName") {
      const newItems = products.slice().sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setProducts(newItems);
    } else if (sortType === "byPriceLow") {
      const newItems = products.slice().sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(newItems);
    } else if (sortType === "byPriceHigh") {
      const newItems = products.slice().sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(newItems);
    }
  }, [sortType]);

  const showToats = (title) => {
    toast.success(`${title} has been added to your cart !`);
  };

  if (isLoading) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar showMyCart={showMyCart} />
      <section className="container">
        <Box className="d-flex justify-content-between">
          <Typography variant="h5">Products</Typography>
          <Box sx={{ minWidth: { sm: 50, md: 120 }, width: { sm: 10 } }}>
            <select
              className="form-select"
              onChange={(e) => setSortType(e.target.value)}
              defaultValue="Sort By"
            >
              <option>Sort By</option>
              <option value="byName">Name</option>
              <option value="byPriceLow">Price (low to high)</option>
              <option value="byPriceHigh">Price (high to low)</option>
            </select>
          </Box>
        </Box>
        <Grid container spacing={4} className="p-4">
          {products.map((product) => (
            <Product key={product.id} product={product} showToats={showToats} />
          ))}
        </Grid>
      </section>
      {showCart && <Cart hideMyCart={hideMyCart} />}
    </>
  );
};

export default Home;
