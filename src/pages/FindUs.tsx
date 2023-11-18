import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const FindUs: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container style={{ paddingBottom: "100px" }}>
          <Grid item xs={12} sm={4} md={2}>
            <div style={{ position: "relative", height: "100%" }}></div>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 0,
                m: 1,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography variant="h6">Find us</Typography>
            </Box>
          </Grid>
          <Grid item xs={false} sm={false} md={2} />
        </Grid>
      </Container>
    </>
  );
};

export default FindUs;
