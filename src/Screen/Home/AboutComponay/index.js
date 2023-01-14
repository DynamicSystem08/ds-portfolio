import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import "./index.css"
function AboutComponay() {
    return <div style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "white" }}>
        <Container>
            <Grid container style={{ justifyContent: "center" }}>
                <Grid item lg={6} md={6} sm={11} className="About_company">
                    <p>ABOUT COMPANY</p>
                    <h3>What We Promise High Quality IT Solutions</h3>
                    <h4>Over 2,500+ Customers</h4>
                    <text>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit more is ame tion the a consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal
                        suada as and fadolorit to the consectetur elit. All a the Lorem Ipsum generators on the Internet tend.
                    </text>
                </Grid>
                <Grid item lg={0.5} md={0.5}></Grid>
                <Grid item lg={5.5} md={5.5} sm={10} className="background_aboutCompany" data-aos="fade-up-left" style={{ transition: "1s" }}>
                    <Container>
                        <Grid container>
                            <Grid item lg={10} md={9.5} sm={8} xs={12} className="up_and_down_img" style={{ marginTop: "70%", marginLeft: "30px" }}>
                                <h1> 2 | year Experience IN IT </h1>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default AboutComponay