// import { m } from "framer-motion";
// @mui
// import { styled } from "@mui/material/styles";
// import { Box, Typography, Stack } from "@mui/material";
// components
// import { MotionViewport, varFade } from "../animate";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
// ----------------------------------------------------------------------

const queryClient = new QueryClient();

const Price = () => (
  <QueryClientProvider client={queryClient}>
    <CryptoTracker cryptoName="bitcoin" />
    <ReactQueryDevtools />
    <a
      className="api-link"
      href="https://www.coingecko.com/en/api"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by CoinGecko API
    </a>
  </QueryClientProvider>
);

export default Price;