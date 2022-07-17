import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Stack } from "@mui/material";
import BtcCryptoTracker from "./BtcCryptoTracker";

const queryClient = new QueryClient();

const BtcPrice = () => (
  <Box>
    <QueryClientProvider client={queryClient}>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <BtcCryptoTracker cryptoName="bitcoin" />
      </Stack>
    </QueryClientProvider>
  </Box>
);

export default BtcPrice;
