import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Grid } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import EcosystemConfig from "./HomeConfig";

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
    transition: "transform .8s ease",
    height: "100%",
  },
  "& .back": {
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    overflowY: "auto",
    padding: "24px",
    transform: "rotateY(180deg)",
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
  return (
    <BoxStyle id="services">
      <MotionViewport>
        <Box sx={{ mt: 4 }}>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  px: "8px",
                }}
              >
                {translate("Our")}
              </Typography>
              <Typography
                variant="h2"
                className="grad_text"
                sx={{
                  px: "8px",
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
                mt: 3,
                maxWidth: "930px",
                mx: "auto",
              }}
            >
              {translate("ecosystem_text1")}
            </Typography>
          </m.div>
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
                      <Box>
                        <Typography variant="h4" color="white">
                          {data.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontSize="16px"
                          color="#AB98AE"
                          textAlign="left"
                          dangerouslySetInnerHTML={{
                            __html: translate(data.desc),
                          }}
                        />
                      </Box>
                    </Box>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MotionViewport>
    </BoxStyle>
  );
}
