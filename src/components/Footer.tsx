import {
  Grid,
  Box,
  IconButton,
  Link,
  Typography,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.secondary",
        py: 3,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item md={2}></Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Logo color="primary" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link color="inherit" href="#">
                <Typography variant="body2">About</Typography>
              </Link>
              <Link color="inherit" href="#">
                <Typography variant="body2">Privacy Policy</Typography>
              </Link>
              <Link color="inherit" href="#">
                <Typography variant="body2">Terms of Use</Typography>
              </Link>
              <Link color="inherit" href="#">
                <Typography variant="body2">Contact Us</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
