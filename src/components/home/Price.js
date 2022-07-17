import { m } from "framer-motion";
import { Box, Stack } from "@mui/material";
import BtcPrice from "./bitcoin/BtcPrice";
import EthPrice from "./ethereum/EthPrice";
import OztgCard from "./oztgcoin/OztgCard";
import { MotionViewport, varFade } from "../animate";
const Price = () => (
  <Box>
    <MotionViewport>
      <Stack direction="row" justifyContent="center" spacing={2} mt={8}>
        <m.div variants={varFade().inUp}>
          <OztgCard />
        </m.div>
        <m.div variants={varFade().inUp}>
          <BtcPrice />
        </m.div>
        <m.div variants={varFade().inUp}>
          <EthPrice />
        </m.div>
      </Stack>
    </MotionViewport>
  </Box>
);

export default Price;
