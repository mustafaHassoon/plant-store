import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@material-ui/core";

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "ar-AR",
    name: "العربية",
  },
];

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography>Questions? Call 007-803-321-2130</Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    FAQ
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacy
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms of Use
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Box>

          <Typography variant="caption">Netflix Indonesia</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
