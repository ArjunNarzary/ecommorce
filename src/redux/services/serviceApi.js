import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (body) => `/`,
      method: "GET",
    }),
  }),
});

export const { useGetAllProductsQuery } = serviceApi;
