import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HotTubIcon from '@mui/icons-material/HotTub';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import "./index.css"
function WhyChoosUs() {
    return <div>
        <Container maxWidth="lg">
            <Grid container className='why_choose_us_main'>
                <Grid item lg={2.8} className="why_choose_us"
                 data-aos="fade-up"
                 data-aos-duration="3000" style={{transition:"1s"}}>
                    <HotTubIcon  sx={{fontSize:"70px",marginLeft:"20px",paddingTop:"35px"}}/>
                    <p><b>Product Design</b></p>
                    <p style={{fontSize:"17px",lineHeight:"25px",color:"gray",textAlign:"start"}}>Grursus mal suada lisis more ametion consec elit. Vesti at suada consectetur elit.</p>
                    <p style={{color:"#0554f2",paddingBottom:"25px"}}>Discover Now!</p>
                  
               
                </Grid>
                
                <Grid item lg={2.8} className="why_choose_us"
                 data-aos="fade-up"
                 data-aos-duration="3000" style={{transition:"1.5s"}}>
                    <CastConnectedIcon  sx={{fontSize:"70px",marginLeft:"20px",paddingTop:"35px"}}/>
                    <p><b>Web Development</b></p>
                    <p style={{fontSize:"17px",lineHeight:"25px",color:"gray",textAlign:"start"}}>Grursus mal suada lisis more ametion consec elit. Vesti at suada consectetur elit.</p>
                    <p style={{color:"#0554f2",paddingBottom:"25px"}}>Discover Now!</p>
                </Grid>
                <Grid item lg={2.8} className="why_choose_us" 
                   data-aos="fade-up"
                   data-aos-duration="3000" style={{transition:"2s"}}>
                    <FindInPageIcon  sx={{fontSize:"70px",marginLeft:"20px",paddingTop:"35px"}}/>
                    <p><b>WordPress Developer</b></p>
                    <p style={{fontSize:"17px",lineHeight:"25px",color:"gray",textAlign:"start"}}>Grursus mal suada lisis more ametion consec elit. Vesti at suada consectetur elit.</p>
                    <p style={{color:"#0554f2",paddingBottom:"25px"}}>Discover Now!</p>
                </Grid>
                <Grid item lg={2.8} className="why_choose_us"   data-aos="fade-up"
                 data-aos-duration="3000" style={{transition:"2.5s"}}>
                    <CoronavirusIcon  sx={{fontSize:"70px",marginLeft:"20px",paddingTop:"35px"}}/>
                    <p><b>Problem Solving</b></p>
                    <p style={{fontSize:"17px",lineHeight:"25px",color:"gray",textAlign:"start"}}>Grursus mal suada lisis more ametion consec elit. Vesti at suada consectetur elit.</p>
                    <p style={{color:"#0554f2",paddingBottom:"25px"}}>Discover Now!</p>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default WhyChoosUs