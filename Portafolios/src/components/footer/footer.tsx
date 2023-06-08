import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>                                   
            <img src="./assets/logo512.png"style={{width: '300px'} }/>            
          </Grid>
                  <Grid item xs={12} style={{ width: '50px', display: 'flex', padding: '20px' }}>
             <a href="https://www.facebook.com/edwin.medina.9887" target="_blank">
              <img src="./assets/iconface.png" style={{ width: '40px' }} /></a>
             <a href="https://github.com/EJMP-coder" target="_blank">        
              <img src="./assets/icongit.png" style={{ width: '50px' }} /></a>
              <a href="https://api.whatsapp.com/send?phone=51918814122" target="_blank">
             <img src="./assets/iconWhatsApp.png"style={{width: '50px'} }/></a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

