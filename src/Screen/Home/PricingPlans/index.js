import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CheckIcon from '@mui/icons-material/Check';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import DiamondIcon from '@mui/icons-material/Diamond';
import AssistantIcon from '@mui/icons-material/Assistant';
import Button from '@mui/material/Button';


import "./index.css"
function PricingPlans() {
    return <div style={{ backgroundColor: "white",paddingTop:"50px" }}>
        {/* <Container>
            <Grid container>
                <Grid item lg={12} className="text_pricingplans">
                    <Grid container>
                        <Grid item lg={5}></Grid>
                        <Grid item lg={1.9}>
                            <p>PRICING PLANS</p>
                        </Grid>
                    </Grid>
                    <h3>Flexible Pricing PLANS</h3>
                </Grid>
            </Grid>
        </Container> */}
        {/* <Grid container className='pricing_card'>
            <Grid item lg={2.7} className="pricing_card1"
                 data-aos="fade-up"
                 data-aos-duration="3000" style={{transition:"1s"}}>
                <WidgetsIcon sx={{ fontSize: "50px", padding: "15px", margin: "20px", marginTop: "40px", color: "#0d6efd", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#ecf5ff" }} />
                <h2>Economy</h2>
                <p style={{ color: "#0d6efd" }}><b style={{ fontSize: "35px", color: "#0d6efd" }}>$35</b>/month</p>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Powerful Admin Panel</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Native Android App</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Advance Protection</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Multi-Language Support</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Support via E-mail </p>
                        <Button variant="contained" style={{ backgroundColor: "white", color: "#0d6efd", border: "1px solid #0d6efd", marginLeft: "-12px", marginBottom: "50px" }}>Order Now</Button>

                    </Grid>
                </Grid>
            </Grid>
        

            <Grid item lg={2.7} className="pricing_card1" style={{ backgroundColor: "#ecf5ff",transition:"1.5s"}}
                 data-aos="fade-up"
                 data-aos-duration="3000" >
                <BroadcastOnHomeIcon sx={{ fontSize: "50px", padding: "15px", margin: "20px", marginTop: "40px", color: "#0d6efd", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "white" }} />
                <h2>Ultimate</h2>
                <p style={{ color: "#0d6efd" }}><b style={{ fontSize: "35px", color: "#0d6efd" }}>$35</b>/month</p>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Powerful Admin Panel</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Native Android App</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Advance Protection</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Multi-Language Support</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Support via E-mail </p>
                        <Button variant="contained" style={{ backgroundColor: "white", color: "#0d6efd", border: "1px solid #0d6efd", marginLeft: "-12px", marginBottom: "50px" }}>Order Now</Button>

                    </Grid>
                </Grid>
            </Grid>


            <Grid item lg={2.7} className="pricing_card1" style={{ backgroundColor: "#f7fafc",transition:"2s" }}
                 data-aos="fade-up"
                 data-aos-duration="3000" >
                <DiamondIcon sx={{ fontSize: "50px", padding: "15px", margin: "20px", marginTop: "40px", color: "#0d6efd", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#ecf5ff" }} />
                <h2>Professional</h2>
                <p style={{ color: "#0d6efd" }}><b style={{ fontSize: "35px", color: "#0d6efd" }}>$35</b>/month</p>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Powerful Admin Panel</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Native Android App</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Advance Protection</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Multi-Language Support</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Support via E-mail </p>
                        <Button variant="contained" style={{ backgroundColor: "white", color: "#0d6efd", border: "1px solid #0d6efd", marginLeft: "-12px", marginBottom: "50px" }}>Order Now</Button>

                    </Grid>
                </Grid>
            </Grid>



            <Grid item lg={2.7} className="pricing_card1" style={{ backgroundColor: "#ecf5ff",transition:"2.5s" }}
                 data-aos="fade-up"
                 data-aos-duration="3000">
                <AssistantIcon sx={{ fontSize: "50px", padding: "15px", margin: "20px", marginTop: "40px", color: "#0d6efd", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "white" }} />
                <h2>Bussiness</h2>
                <p style={{ color: "#0d6efd" }}><b style={{ fontSize: "35px", color: "#0d6efd" }}>$35</b>/month</p>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Powerful Admin Panel</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Native Android App</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Advance Protection</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p>Multi-Language Support</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={1.4}>
                        <CheckIcon sx={{ color: "gray", marginLeft: "20px" }} />
                    </Grid>
                    <Grid item lg={10} className="pricing_icon">
                        <p> Support via E-mail </p>
                        <Button variant="contained" style={{ backgroundColor: "white", color: "#0d6efd", border: "1px solid #0d6efd", marginLeft: "-12px", marginBottom: "50px" }}>Order Now</Button>

                    </Grid>
                </Grid>
            </Grid>
        </Grid> */}

        {/* Group */}

        <div id="bigdeal1">
            {/* <Container maxWidth="sm"> */}
            <Grid container className='group_main'>


                <Grid item lg={3} md={5} sm={5} xs={6} className="card_group">
                    <h1 style={{marginLeft:"30%"}} id="team_h1">30 </h1>
                    <p id="team_p">Project Finished</p>

                </Grid>
                <Grid item lg={2.8} md={5} sm={5} xs={5} className="card_group">
                    <h1>110</h1>
                    <p id="team_p">Happy Clinet</p>

                </Grid>
                <Grid item lg={2.8} md={5} sm={5} xs={5} className="card_group">
                    <h1>20</h1>
                    <p id="team_p">Skilled Expert</p>

                </Grid>
                <Grid item lg={2.8} md={5} sm={5} xs={5} className="card_group">
                    <h1>109</h1>
                    <p id="team_p">Media Posts</p>

                </Grid>
      

            </Grid>
            {/* </Container> */}
        </div>

    </div>
}
export default PricingPlans