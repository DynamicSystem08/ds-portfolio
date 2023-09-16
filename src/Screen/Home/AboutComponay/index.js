import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import "./index.css"
function AboutComponay() {
    return <div style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "white" }} id='about'>
        <Container>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid item lg={6} md={6} sm={11} className="About_company">
                    <p className='About_company_p'>ABOUT COMPANY</p>
                    <h3 id="bg_heading">What We Promise High Quality IT Solutions</h3>
                    <h4>Over 100+ Customers</h4><br></br>
                    <p className='About_company_text'>
                        This dyamic journey has just began and we are here to provide you with the service you need regarding all those services
                        which we are
                        providing. We intend to excel in this developement field.
                    </p>
                </Grid>
                <Grid item lg={0.5} md={0.5}></Grid>
                <Grid item lg={5.5} md={5.5} sm={10} className="background_aboutCompany"  >
                    <Container>
                        <Grid container>
                            <Grid item lg={10} md={9.5} sm={8} xs={12} className="up_and_down_img" id="year_h1" style={{ marginTop: "70%", marginLeft: "30px",fontSize:'20px' }}>
                                <h2 className='animation_year'> 5 | years Experience IN IT </h2>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default AboutComponay