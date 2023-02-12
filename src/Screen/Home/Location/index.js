import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';



// import img1 from "../../Image/img1.jpg"

import "./index.css"

function Location() {
    return <div style={{ backgroundColor: "white", paddingTop: "50px", paddingBottom: "50px" }}>

        <Grid container >
            <Grid item lg={0.3}></Grid>
            <Grid item lg={4.5} md={5.5} sm={5.5} xs={12} className="location_img" data-aos="fade-down-right" style={{ transition: "1.5s" }}>
                <Grid container>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <LocationOnIcon sx={{ color: "white", fontSize: "60px", padding: "60px", paddingTop: "100px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={10} className="location_text1">
                        <p>Our Location</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>2307 Beverley Rd Brooklyn, New York 11226 United States.</i>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={3}>
                        <EmailIcon sx={{ color: "white", fontSize: "60px", paddingLeft: "60px", marginTop: "-10px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={9} className="Email_text">
                        <p >Email Address</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>DynamicSystem@gmail.com</i>
                    </Grid>

                    <Grid item lg={1} md={1} sm={2} xs={3}>
                        <CallIcon sx={{ color: "white", fontSize: "60px", paddingLeft: "60px", marginTop: "30px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={9} className="contact_text">
                        <p >Call Us Free</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>0317-2451901</i>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                    <Grid item lg={9} md={9} sm={9} xs={9} className="input_filed" style={{ paddingBottom: '20px' }}>
                        <input type="text" placeholder='Enter Your Solution' />
                    </Grid>

                </Grid>

            </Grid>
            <Grid item lg={1} md={0.4} sm={0.4}></Grid>
            <Grid item lg={6} md={6} sm={6} xs={11.8} className="location_text">
                <p>GET IN TOUCH</p>
                <h3 id="location_text" style={{ fontFamily: "Times New Roman, Times, serif" }}>Are you Ready for a Better, more <br></br>Productive Business?</h3>
                <Grid container justifyContent="center">
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{ paddingLeft: "5px" }}>
                        <input type="text" style={{ width: "90%", height: "35px", marginTop: "10px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} placeholder="Your Name" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{ paddingLeft: "5px" }}>
                        <input type="text" style={{ width: "90%", height: "35px", marginTop: "10px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} placeholder="Your Email" />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} style={{ marginTop: "20px", paddingLeft: "5px" }}>
                    <input type="text" style={{ width: "95%", height: "35px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} placeholder="Subject" />
                </Grid>
                <Grid item lg={12} md={12} style={{ marginTop: "20px", marginBottom: "70px", paddingLeft: "5px" }}>
                    <textarea type="text" style={{ width: "95%", outlineColor: "#2664F5", height: "120px", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} placeholder="Message" />
                </Grid>
                <Grid item lg={12} md={12}>
                    <Button variant="contained" id="input_text" style={{ backgroundColor: "#0554f2", width: "97%", marginTop: "-70px" }}>Message </Button>

                </Grid>
            </Grid>

        </Grid>
    </div>
}
export default Location