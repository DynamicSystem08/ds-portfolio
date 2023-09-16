import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./index.css"
function Footer() {
    const year = new Date().getFullYear()
    return <div className='backgroung_img'>
        <Grid container className='footer_main'>
            <AcUnitIcon />
            <Grid item lg={2.5} md={2.7} sm={3} xs={11} className="footer_1">
                <h2><b>Dynamic System</b></h2><br></br>
                <p>This dyamic journey has just began and we are here to provide you with the service you need regarding all those services which we are providing. We intend to excel in this developement field</p>
                <a style={{color:'white'}} href='https://www.facebook.com/profile.php?id=100088403696485&mibextid=LQQJ4d'> <FacebookIcon sx={{ marginRight: "4%" }} /></a>
                <a style={{color:'white'}} href='https://www.instagram.com/dynamicsystem._/?igshid=NTc4MTIwNjQ2YQ%3D%3D'><InstagramIcon sx={{ marginRight: "4%" }} /></a>
                <TwitterIcon sx={{ marginRight: "4%" }} />
                <LinkedInIcon sx={{ marginRight: "4%" }} />
            </Grid>
            <Grid item lg={0.5} md={0.5} ></Grid>
            <Grid item lg={2} md={2} sm={2} xs={11} className="fooeter_service">
                <h3>IT SERVICES</h3><br></br>
                <p>IT Services <br></br><p></p> Cyber Security <br></br><p></p>Cloud Computing<br></br><br></br>
                </p>

            </Grid>
            <Grid item lg={2.5} md={2.5} sm={2.3} xs={11} className="fooeter_service">
                <h3>IMPORTANT LINKS</h3><br></br>
                <p>About Us <br></br><p></p>Meet Our Team<br></br><p></p>News & Media<br></br><p></p>
                </p>
            </Grid>

            <Grid item lg={2.5} md={2.5} sm={2.3} xs={11} className="fooeter_service">
                <h3>SUPPORTS</h3><br></br>
                <p>Forum Support <br></br><p></p>Help & FAQ<br></br><p></p>Contact Us<br></br><p></p>
                </p>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={11} className="footer_bottom">
                <p>© {year} Dynamic System. All Rights Reserved by RadiusTheme</p>
            </Grid>
        </Grid>
    </div>
}
export default Footer