import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Stack } from "@mui/material";
import EthCryptoTracker from "./EthCryptoTracker";

const queryClient = new QueryClient();

const EthPrice = () => (
  <Box>
    <QueryClientProvider client={queryClient}>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <EthCryptoTracker cryptoName="ethereum" />
      </Stack>
    </QueryClientProvider>
  </Box>
);

export default EthPrice;
