import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
// ----------------------------------------------------------------------

const Img = styled("img")({
  maxWidth: "100%",
  height: "auto",
});
const BoxStyle = styled(Box)({
  maxWidth: "1288px",
  margin: "20px auto",
  position: "relative",
  paddingLeft: "24px",
  paddingRight: "24px",
});

// ----------------------------------------------------------------------
export default function About() {
  const { translate } = useLocales();
  return (
    <Box sx={{ lineHeight: "0", textAlign: "center" }} id="home">
      <BoxStyle>
        <MotionViewport>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
            sx={{ textAlign: "left", paddingTop: "90px" }}
            id="about"
          >
            <Box sx={{ maxWidth: "584px", mb: 4 }}>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    px: "8px",
                  }}
                >
                  {translate("avant_grade_title1")}
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h2"
                  className="grad_text"
                  sx={{
                    px: "8px",
                  }}
                >
                  {translate("avant_grade_title2")}
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#AB98AE",
                    px: "8px",
                    mt: 3,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: translate("avant_grade_text1"),
                  }}
                />
              </m.div>
            </Box>
            <m.div variants={varFade().inDown}>
              <Img
                src="/assets/images/avantgrade_img.png"
                width="400px"
                sx={{ mx: { xs: "auto", sm: "auto", md: 4 } }}
              />
            </m.div>
          </Stack>
        </MotionViewport>
      </BoxStyle>
    </Box>
  );
}
