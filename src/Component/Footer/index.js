import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./index.css"
function Footer() {
    return <div className='backgroung_img'>
        <Grid container className='footer_main'>
            <Grid item lg={2.5} md={2.7} sm={3} xs={11} className="footer_1">
                <h1><b>Dynamic System</b></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore laborum ullam rem dolor aspernatur necessitatibus quia, officiis v
                    eniam in error soluta consectetur cupiditate quae provident impedit natus consequuntur quaerat? Delectus.</p>
                <FacebookIcon sx={{ fontSize: "35px", padding: "15px" }} />
                <InstagramIcon sx={{ fontSize: "35px", padding: "15px" }} />
                <TwitterIcon sx={{ fontSize: "35px", padding: "15px" }} />
                <LinkedInIcon sx={{ fontSize: "35px", padding: "15px" }} />
            </Grid>
            <Grid item lg={0.5} md={0.5} ></Grid>
            <Grid item lg={2} md={2} sm={2} xs={11} className="fooeter_service">
                <h3>IT SERVICES</h3>
                <p>IT Services <br></br><br></br> Cyber Security<br></br><br></br>Cloud Computing<br></br><br></br>Managed IT<br></br><br></br>
                    IT Support
                </p>

            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.3} xs={11} className="fooeter_service">
                <h3>IMPORTANT LINKS</h3>
                <p>About Us <br></br><br></br>Meet Our Team<br></br><br></br>News & Media<br></br><br></br>Case Studies<br></br><br></br>
                    Locations
                </p>
            </Grid>

            <Grid item lg={2.5} md={2.5} sm={2.3} xs={11} className="fooeter_service">
                <h3>SUPPORTS</h3>
                <p>Forum Support <br></br><br></br>Help & FAQ<br></br><br></br>Contact Us<br></br><br></br>Pricing and plans<br></br><br></br>
                    Cookies Policy
                </p>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} className="footer_bottom">
                <p>© 2021 Techkit. All Rights Reserved by RadiusTheme</p>
            </Grid>
        </Grid>
    </div>
}
export default Footer