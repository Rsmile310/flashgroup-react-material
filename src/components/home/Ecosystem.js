import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Grid } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import EcosystemConfig from "./HomeConfig";
import { useEffect, useState } from "react";

const BoxStyle = styled(Box)({
  width: "1280px",
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center",
  padding: "90px 24px 0",
});
const Card = styled(Box)({
  position: "relative",
  textAlign: "center",
  height: "100%",
  "&>div": {
    padding: "50px 16px",
    background: "#1A1B23",
    borderRadius: "25px",
    backfaceVisibility: "hidden",
    transition: "all 1s ease",
    height: "100%",
  },
  "& .back": {
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    padding: "20px",
    transform: "rotateY(180deg)",
    opacity: "0",
  },
  "& .back>div": {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
  "& .front>div": {
    position: "relative",
    width: "80px",
    height: "80px",
    margin: "0 auto",
  },
  "& .front>div>div": {
    content: '""',
    position: "absolute",
    right: "0",
    top: "0",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    opacity: "0.8",
    filter: "blur(6px)",
    animation: "animateBubble 3s linear infinite alternate",
  },

  "&:hover .front": {
    transform: "rotateY(180deg)",
  },
  "&:hover .back": {
    transform: "rotateY(0)",
    opacity: "1",
  },
  "& img": {
    margin: "0 auto",
  },
  "& h4": {
    margin: "24px auto",
  },
});

export default function Ecosystem() {
  const { translate } = useLocales();
  const [data, setData] = useState("");

  useEffect(() => {
    setData(true);
    let stars = document.createElement("div");
    let solar = document.getElementById("solar");
    stars.setAttribute("id", "stars");
    solar.prepend(stars);

    for (let i = 0; i < 200; i++) {
      let star = document.createElement("s");
      star.innerHTML = "&starf;";
      let left = Math.floor(Math.random() * (100 - 0) + 0);
      let top = Math.floor(Math.random() * (100 - 0) + 0);
      star.style.transform = "translate(" + left + "vw," + top + "vh)";
      star.style.transform += "scale(" + Math.random() * (2 - 1) + ")";
      star.style.transform +=
        "rotate(" + Math.floor(Math.random() * (90 - 0) + 0) + "deg)";
      stars.prepend(star);
    }
  }, [data]);
  return (
    <BoxStyle id="services">
      <Box sx={{ mt: 4 }}>
        <MotionViewport>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                }}
              >
                {translate("Our")}&nbsp;
              </Typography>
              <Typography
                variant="h2"
                className="grad_text"
                sx={{
                }}
              >
                {translate("Ecosystem")}
              </Typography>
            </Stack>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              sx={{
                color: "#AB98AE",
                px: "8px",
                my: 3,
                maxWidth: "930px",
                mx: "auto",
              }}
            >
              {translate("ecosystem_text1")}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <div id="solar">
              <div className="comet"></div>
              <div id="sun">
                <Box component="img" src="/logo/logo_one.png" />
              </div>
              <div id="mercury"></div>
              <div id="venus"></div>
              <div id="earth"></div>
              <div id="mars"></div>
              <div id="jupiter"></div>
              <div id="saturn">
                <span></span>
              </div>
              <div id="uranus"></div>
              <div id="neptune"></div>
              <div id="pluto"></div>
            </div>
          </m.div>
        </MotionViewport>
        <MotionViewport>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {EcosystemConfig.map((data, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <m.div variants={varFade().inUp} style={{ height: "100%" }}>
                  <Card>
                    <Box className="front">
                      <Box>
                        <img src={data.logo} alt="logo" />
                        <Box sx={{ backgroundColor: `${data.color}` }} />
                      </Box>
                      <Typography variant="h4" color="white">
                        {data.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#AB98AE"
                        sx={{
                          maxWidth: "312px",
                          height: "70px",
                          overflow: "hidden",
                          mx: "auto",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: translate(data.title),
                        }}
                      />
                      {data.url && (
                        <Typography
                          className="grad_text"
                          variant="body1"
                          color="#AB98AE"
                          mt={4}
                        >
                          {data.url}
                        </Typography>
                      )}
                    </Box>
                    <Box className="back">
                      <Box p={1}>
                        <Box textAlign="justify">
                          <Typography variant="h4" color="white" textAlign="center">
                            {data.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            fontSize="16px"
                            color="#AB98AE"
                            dangerouslySetInnerHTML={{
                              __html: translate(data.desc),
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </MotionViewport>
      </Box>
    </BoxStyle>
  );
}
