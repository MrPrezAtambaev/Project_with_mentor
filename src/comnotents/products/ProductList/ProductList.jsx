import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import { Parallax } from "react-parallax";
import Pagination from "@mui/material/Pagination";
import "./ProductList.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 8;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f1f8e9",
      },
      secondary: {
        main: "#7c4dff",
      },
    },
  });

  return (
    <Parallax
      bgImage="https://img.itch.zone/aW1nLzQ4NzU2MzQucG5n/315x250%23c/4Ti0%2BG.png"
      bgImageAlt="background image"
      strength={150}
      blur={1}
    >
      <h3 style={{ textAlign: "center" }}>Products List</h3>
      <div className="posts-list">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <ThemeProvider theme={theme}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          color="secondary"
          className="pagination2"
          style={{ color: "white" }}
        />
      </ThemeProvider>
    </Parallax>
  );
};

export default ProductList;
