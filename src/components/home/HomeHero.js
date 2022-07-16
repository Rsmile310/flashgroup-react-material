import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  maxWidth: "1288px",
  margin: "20px auto",
  position: "relative",
  paddingLeft: "24px",
  paddingRight: "24px",
  "& .circle_coin": {
    left: "12%",
    top: "8px",
  },
  "& .hexagon_coin": {
    right: "0",
    top: "32%",
  },
  "& .star1": {
    right: "24%",
    top: "4px",
  },
  "& .star2": {
    left: "0",
    bottom: "0",
  },
  "& .star3": {
    right: "16%",
    top: "15%",
  },
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  return (
    <Box sx={{ lineHeight: "0", textAlign: "center" }} id="home">
      <BoxStyle>
        <MotionViewport>
          <Box
            sx={{
              position: "relative",
              "&>img": { position: "absolute" },
              paddingTop: { xs: "20px", sm: "60px", md: "90px", lg: "120px" },
            }}
          >
            <img
              src="/assets/images/circle_coin.png"
              className="circle_coin animate_zoom delay1"
              alt=""
            />
            <img
              src="/assets/images/hexagon_coin.png"
              className="hexagon_coin animate_zoom delay2"
              alt=""
            />
            <img
              src="/assets/images/star1.png"
              className="star1 animate_zoom delay3"
              alt=""
            />
            <img
              src="/assets/images/star2.png"
              className="star2 animate_zoom delay4"
              alt=""
            />
            <img
              src="/assets/images/star3.png"
              className="star3 animate_zoom delay5"
              alt=""
            />

            <m.div variants={varFade().inUp}>
              <Typography
                variant="h1"
                className="grad_text"
                sx={{
                  px: "8px",
                  position: "relative",
                }}
              >
                {translate("hero_title1")}
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  px: "8px",
                  position: "relative",
                }}
              >
                {translate("hero_title2")}
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Box sx={{ maxWidth: "911px", mx: "auto", mt: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#AB98AE",
                    px: "8px",
                  }}
                >
                  {translate("hero_desc")}
                </Typography>
              </Box>
            </m.div>
          </Box>
        </MotionViewport>
      </BoxStyle>
    </Box>
  );
}
