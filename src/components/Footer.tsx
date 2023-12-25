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
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footerText: {
    color: "gray",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        color: "text.secondary",
        py: 3,
        width: "100%",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={2}></Grid>

          <Grid item md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Logo color="primary" />
            </Box>
          </Grid>

          <Grid item md={4}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link color="inherit" href="#">
                    <Typography variant="body2" className={classes.footerText}>
                      About
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link color="inherit" href="#">
                    <Typography variant="body2" className={classes.footerText}>
                      Privacy Policy
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link color="inherit" href="#">
                    <Typography variant="body2" className={classes.footerText}>
                      Terms of Use
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link color="inherit" href="#">
                    <Typography variant="body2" className={classes.footerText}>
                      Contact Us
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <IconButton
                color="primary"
                aria-label="Facebook"
                component="span"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Instagram"
                component="span"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter" component="span">
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
