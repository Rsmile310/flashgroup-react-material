// components
import Page from "../components/Page";
import { m } from "framer-motion";
import { Box, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../components/animate";
import useLocales from "../hooks/useLocales";
// @mui
import { styled } from "@mui/material/styles";
// import ScrollUpButton from "react-scroll-up-button";
const BoxStyle = styled(Box)({
  width: "1280px",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "80px 24px 0",
  h4: {
    color: "#fff",
  },
  p: {
    color: "#828082",
  },
});

// ----------------------------------------------------------------------

export default function TermsPage() {
  const { translate } = useLocales();
  return (
    <Page title="Terms page" sx={{ px: 0 }}>
      {/* <ScrollUpButton AnimationDuration={0}  /> */}
      <MotionViewport>
        <BoxStyle sx={{ py: 8 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              className="grad_text"
              sx={{
                px: "8px",
              }}
              textAlign="center"
            >
              {translate("TermsConditions")}
            </Typography>
          </m.div>
          <Box mt={4}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h4" mb={4}>
                Project Acceptance
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body1">
                At the time of proposal, Glazier Design will provide the
                customer with a written estimate or quotation by email. These
                Terms and Conditions can be read at any time on the Glazier
                Design website.
                <br />
                <br /> A copy of the written estimate or quotation is to be
                signed and dated by the customer to indicate acceptance and
                should be returned to Glazier Design.
                <br />
                <br /> Alternatively, the client may send an official purchase
                order in reply to the estimate or quotation which binds the
                client to accept our terms and conditions, or an email
                acknowledging acceptance of the quotation.
                <br />
                <br /> For the avoidance of doubt, the Glazier Design Terms &
                Conditions are what govern the job, not any conditions on the
                customer’s purchase order.
              </Typography>
            </m.div>
          </Box>
        </BoxStyle>
      </MotionViewport>
       
    </Page>
  );
}
