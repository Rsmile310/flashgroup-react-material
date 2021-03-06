import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Stack } from "@mui/material";
import Iconify from "../Iconify";
// components
import { MotionViewport, varBounce } from "../animate";
import useLocales from "../../hooks/useLocales";

const BoxStyle = styled(Box)({
  width: "1240px",
  maxWidth: "100%",
  margin: "0px auto 24px",
  textAlign: "center",
  padding: "0px 24px",
  borderRadius: "30px",
});
const ButtonStyle = styled(Button)({
  background: "linear-gradient(90deg, #00FBCE 0%, #0066FF 100%)",
  borderRadius: "100px",
  color: "#fff",
  fontSize: "20px",
  margin: "0 8px 16px",
  width: "234px",
  transition: "all ease 400ms",
  "&:hover": {
    color: "#000",
    background: "linear-gradient(90deg, #fff 100%, #fff 0%)",
  },
});

export default function Contact() {
  const { translate } = useLocales();
  return (
    <MotionViewport>
      <m.div variants={varBounce().in}>
        <BoxStyle id="contact">
          <Box pt={10}>
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  px: "8px",
                }}
              >
                {translate("Join_our")}
              </Typography>
              <Typography variant="h2" className="grad_text" sx={{}}>
                {translate("community")}
              </Typography>
            </Stack>
            <Box mt={5}>
              <ButtonStyle
                href="https://t.me/FLASHMONI_ANNOUNCEMENTS"
                target="_blank"
              >
                <Iconify icon={"bxl:telegram"} width={20} height={20} mr={1} />
                {translate("JoinTelegram")}
              </ButtonStyle>
            </Box>
            <Box component="img" src="/assets/images/hero_img.png" mt={4} />
          </Box>
        </BoxStyle>
      </m.div>
    </MotionViewport>
  );
}
