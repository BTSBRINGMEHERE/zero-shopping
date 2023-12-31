import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Products } from "../types/index";

const create = axios.create();
const API_URL = "https://fakestoreapi.com/products" as string;

export const fetchProductAPI = async () => {
  const BASE_URL = API_URL;
  const { data } = await create.get<Products>(BASE_URL);
  return data;
};

export const fetchProduct = createAsyncThunk("product", async () => {
  const response = await fetchProductAPI();
  return response;
});

interface ProductState {
  products: Products;
}

const initialState = {
  products: [],
} as ProductState;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action: PayloadAction<Products>) => {
        state.products = [...action.payload];
      }
    );
  },
});

export const productReducer = productSlice.reducer;
