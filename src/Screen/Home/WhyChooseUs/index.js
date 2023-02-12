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
                <Grid item lg={2.8} md={2.8} sm={5} className="why_choose_us"
                    data-aos="fade-up"
                    data-aos-duration="3000" style={{ transition: "1s" }}>
                    <HotTubIcon sx={{ fontSize: "70px", marginLeft: "20px", paddingTop: "35px" }} />
                    <p><b>Product Design</b></p>
                    <p style={{ fontSize: "17px", lineHeight: "25px", color: "gray", textAlign: "start" }}>We develop interactive applications and websites based on a professional standard to make your website appear more official.
                    </p>
                    <p style={{ color: "#0554f2", paddingBottom: "25px" }}>Discover Now!</p>
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} className="why_choose_us"
                    data-aos="fade-up"
                    data-aos-duration="3000" style={{ transition: "1.5s" }}>
                    <CastConnectedIcon sx={{ fontSize: "70px", marginLeft: "20px", paddingTop: "35px" }} />
                    <p><b>Web Development</b></p>
                    <p style={{ fontSize: "17px", lineHeight: "25px", color: "gray", textAlign: "start" }}>Websites for resumes, portfolios, brochures, one-off landing pages, and other informative or read-only webpages are clear examples of static
                        websites.</p>
                    <p style={{ color: "#0554f2", paddingBottom: "25px" }}>Discover Now!</p>
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} className="why_choose_us"
                    data-aos="fade-up"
                    data-aos-duration="3000" style={{ transition: "2s" }}>
                    <FindInPageIcon sx={{ fontSize: "70px", marginLeft: "20px", paddingTop: "35px" }} />
                    <p><b>WordPress Developer</b></p>
                    <p style={{ fontSize: "17px", lineHeight: "25px", color: "gray", textAlign: "start" }}>Additionally, we are offering the assistance of a WordPress developer so that you may host and create websites using the content management
                        system (CMS) known as WordPress.</p>
                    <p style={{ color: "#0554f2", paddingBottom: "25px" }}>Discover Now!</p>
                </Grid>

                <Grid item lg={2.8} md={2.8} sm={5} className="why_choose_us" data-aos="fade-up"
                    data-aos-duration="3000" style={{ transition: "2.5s" }}>
                    <CoronavirusIcon sx={{ fontSize: "70px", marginLeft: "20px", paddingTop: "35px" }} />
                    <p><b>Problem Solving</b></p>
                    <p style={{ fontSize: "17px", lineHeight: "25px", color: "gray", textAlign: "start" }}>Have a problem? Contact us now! We can assist you in finding a solution to your issue and together come up with superior solutions.</p>
                    <p style={{ color: "#0554f2", paddingBottom: "25px" }}>Discover Now!</p>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default WhyChoosUs