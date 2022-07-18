import { Stack, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { IconButtonAnimate } from "../../../components/animate";
import Logo from "../../../components/Logo";
import Socials from "./Socials";
import useLocales from "../../../hooks/useLocales";

const FooterStyle = styled("footer")(() => ({
  background: "#07030C",
  padding: "80px 0",
  marginTop: "60px",
  color: "#838990",
  borderTop: "2px solid #53536D",
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '24px',
  //   },
  "&>div": {
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 16px",
  },
}));
const LinkStyle = styled(Link)({
  fontWeight: "lighter",
  "&:hover": {
    color: "#B158E2",
  },
  color: "white",
  fontSize: "16px",
  transition: "all ease 400ms",
});

export default function Footer() {
  const { translate } = useLocales();
  const footerData = [
    {
      text: "TermsConditions",
      url: "termsconditions",
    },
    {
      text: "PrivacyPolicy",
      url: "privacypolicy",
    },
    {
      text: "UseofCookies",
      url: "useofcookie",
    },
  ];
  return (
    <FooterStyle>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: { xs: "24px", lg: "48px" }, mb: "24px" }}
      >
        <Logo type={"full"} />
        <Stack direction="row" sx={{ mt: { xs: "24px", lg: "0" } }}>
          {Socials.map((e, index) => (
            <div key={index}>
              <IconButtonAnimate>
                <LinkStyle href={e.url} target="_blank">
                  <Box component="img" src={e.img} />
                </LinkStyle>
              </IconButtonAnimate>
            </div>
          ))}
        </Stack>
      </Stack>
      <Stack
        mx={3}
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
      >
        <Box textAlign="center" sx={{ order: { xs: "3", sm: "3", lg: "1" } }}>
          <Typography variant="body2">{translate("FOOTER_TEXT1")}</Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ order: "2" }}
        >
          {footerData.map((e, index) => (
            <LinkStyle key={index} href={e.url}>
              <Typography variant="body2">{translate(e.text)}</Typography>
            </LinkStyle>
          ))}
        </Stack>
      </Stack>
    </FooterStyle>
  );
}
