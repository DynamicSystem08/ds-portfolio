import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';



// import img1 from "../../Image/img1.jpg"

import "./index.css"

function Location() {
    return <div style={{ backgroundColor: "white", paddingTop: "50px", paddingBottom: "50px" }} id='location'>

        <Grid container >
            <Grid item lg={0.3}></Grid>
            <Grid item lg={4.5} md={5.5} sm={5.5} xs={12} className="location_img" data-aos="fade-down-right" style={{ transition: "1.5s" }}>
                <Grid container className='location_main'>
                    <Grid item lg={1} md={1} sm={2} xs={2}>
                        <LocationOnIcon sx={{ color: "white", fontSize: "60px", padding: "60px", paddingTop: "100px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={10} className="location_text1">
                        <p style={{ marginBottom: "-5px" }}>Our Location</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>Beverley Rd Brooklyn, New York .</i>
                    </Grid>
                    <Grid item lg={1} md={1} sm={2} xs={3}>
                        <EmailIcon sx={{ color: "white", fontSize: "60px", paddingLeft: "60px", marginTop: "-10px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={9} className="Email_text">
                        <p style={{ marginBottom: "-5px" }}>Email Address</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>DynamicSystem@gmail.com</i>
                    </Grid>

                    <Grid item lg={1} md={1} sm={2} xs={3}>
                        <CallIcon sx={{ color: "white", fontSize: "60px", paddingLeft: "60px", marginTop: "30px" }} />
                    </Grid>
                    <Grid item lg={11} md={11} sm={10} xs={9} className="contact_text">
                        <p style={{ marginBottom: "-5px" }}>Call Us Free</p>
                        <i style={{ marginLeft: "18%", color: "white", fontSize: "15px" }}>0317-2451901</i>
                    </Grid>
                    <Grid item lg={1} md={2} sm={1} xs={3}></Grid>
                    <Grid item lg={10} md={9} sm={9} xs={9} className="input_filed">
                        <input type="text" placeholder='Enter Your Solution' style={{marginBottom:'0px'}} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={1} md={0.4} sm={0.4}></Grid>
            
            <Grid item lg={6} md={6} sm={6} xs={11.8} className="location_text">
                <p>GET IN TOUCH</p>
                <h3 id="location_text" style={{ fontFamily: "Times New Roman, Times, serif" }}>Are you Ready for a Better, more <br></br>Productive Business?</h3>
                <form
                    action="https://formsubmit.co/bilalmehfooz253@gmail.com"
                    onsubmit="myFunction()"
                    method="POST"
                    class="contact-form"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:3000/#home" />
                    <Grid container  style={{justifyContent:'start',display:'flex' 
                }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{ paddingLeft: "5px" }}>
                        <input  type="name" class="form-control" name="Name" id="Name" style={{ width: "90%", height: "35px", marginTop: "10px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} placeholder="Your Name" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{ paddingLeft: "5px" }}>
                        <input type="email" class="form-control" name="Email" id="Email" placeholder="Your Email"  style={{ width: "90%", height: "35px", marginTop: "10px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} style={{ marginTop: "20px", paddingLeft: "5px" }}>
                    <input type="number" class="form-control" name="Contact" id = "Email" placeholder="Phone No" style={{ width: "95%", height: "35px", outlineColor: "#2664F5", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }}  />
                </Grid>
                <Grid item lg={12} md={12}  style={{ marginTop: "20px", marginBottom: "70px", paddingLeft: "5px" }}>
                    <textarea
                    name="massage"  cols="30" rows="7"   id = "Message" placeholder="Message"  
                    style={{ width: "95%", outlineColor: "#2664F5", height: "120px", border: "1px solid lightgray", fontSize: "20px", paddingLeft: "10px" }} />
                    
                </Grid>
                    <Grid item lg={12} md={12}>
                    <div class="form-group">
                        <input type="submit" id="input_text" style={{ backgroundColor: "#0554f2", width: "97%", marginTop: "-80px" }} onclick="alert('Thanks For Contacting Us We Will Connect You Soon.')" value="Send Message" class="btn btn-primary py-3 px-5;modal-toggle" />
                    </div>

                </Grid>
                </form>
            </Grid>

        </Grid>
    </div>
}
export default Location