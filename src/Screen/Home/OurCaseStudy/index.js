import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img3 from "../../../Images/img3.jpg"
import img4 from "../../../Images/img4.jpg"
import img5 from "../../../Images/img5.jpg"


import "./index.css"
function OurChaseStudy() {
    return <div>
        <div className="our_chase_study_main">
            <Container>
                <Grid container>
                    <Grid item lg={10} className="our_case_studies">
                        <p data-aos="fade-up" style={{transition:"1s"}}>WHAT WE DID</p>
                        <h3 data-aos="fade-up" style={{transition:"1.3s"}}>OUR CHASE STUDIES</h3>
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant="contained" style={{ backgroundColor: "#0554f2", marginTop: "50px" }}>See More <ArrowForwardIcon sx={{ paddingLeft: "10px" }} /> </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
        {/*  */}
        <Grid container className='our_case_study_card'>
            <Grid item lg={3.5} className="our_case_study_img" data-aos="fade-up" style={{ marginRight: "30px", marginLeft: "15px",transition:"0.5s" }}>
                <img src={img3} alt="" />
                <div className='analysis'>
                    <h2 style={{paddingBottom:"10px"}}>Analysis Of Web Development</h2>
                    {/* <p>Website:</p> */}
                </div>
            </Grid>
            <Grid item lg={3.5} className="our_case_study_img" data-aos="fade-up" style={{ marginRight: "30px", marginLeft: "15px",transition:"0.8s" }}>
                <img src={img4} alt="" />
                <div className='analysis'>
                    <h2>Analysis Of Web Scurity</h2>
                    <p>Website:</p>
                </div>
            </Grid>
            <Grid item lg={3.5} className="our_case_study_img" data-aos="fade-up" style={{ marginRight: "30px", marginLeft: "15px" ,transition:"1.1s"}}>
                <img src={img5} alt="" />
                <div className='analysis'>
                    <h2>Analysis Of Web Scurity</h2>
                    <p>Website:</p>
                </div>

            </Grid>
        </Grid>
    </div>
}
export default OurChaseStudy