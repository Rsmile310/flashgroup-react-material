import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Skeleton } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";

const BoxStyle = styled(Box)({
  width: "1280px",
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center",
  padding: "80px 24px 0",
});

export default function Blog() {
  const { translate } = useLocales();
  return (
    <BoxStyle id="blog">
      <MotionViewport>
        <Box>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                }}
              >
                {translate("Flash_Group")}&nbsp;
              </Typography>
              <Typography variant="h2" className="grad_text" sx={{}}>
                {translate("News")}
              </Typography>
            </Stack>
          </m.div>
          <Stack
            px={4}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            mt={4}
          >
            <m.div variants={varFade().inDown}>
              <Stack
                spacing={2}
                mr={2}
                mb={2}
                py={2}
                sx={{
                  border: "2px solid #B158E2",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: "8px" }}
                >
                  <Skeleton variant="text" width={180} height={30} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Stack>
                <Skeleton variant="rectangular" width="100%" height={170} />
                <Stack sx={{ px: "8px" }}>
                  <Skeleton
                    variant="text"
                    width={276}
                    height={30}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton variant="text" width={140} height={30} />
                </Stack>
              </Stack>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Stack
                spacing={2}
                mr={2}
                mb={2}
                py={2}
                sx={{
                  border: "2px solid #B158E2",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: "8px" }}
                >
                  <Skeleton variant="text" width={180} height={30} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Stack>
                <Skeleton variant="rectangular" width="100%" height={170} />
                <Stack sx={{ px: "8px" }}>
                  <Skeleton
                    variant="text"
                    width={276}
                    height={30}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton variant="text" width={140} height={30} />
                </Stack>
              </Stack>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Stack
                spacing={2}
                mr={2}
                mb={2}
                py={2}
                sx={{
                  border: "2px solid #B158E2",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: "8px" }}
                >
                  <Skeleton variant="text" width={180} height={30} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Stack>
                <Skeleton variant="rectangular" width="100%" height={170} />
                <Stack sx={{ px: "8px" }}>
                  <Skeleton
                    variant="text"
                    width={276}
                    height={30}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton variant="text" width={140} height={30} />
                </Stack>
              </Stack>
            </m.div>
          </Stack>
        </Box>
      </MotionViewport>
    </BoxStyle>
  );
}
