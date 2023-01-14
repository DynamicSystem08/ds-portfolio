import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PinchIcon from '@mui/icons-material/Pinch';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CompareIcon from '@mui/icons-material/Compare';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

import "./index.css"
function Services() {
    return <div>
        <div className='service_main'>
            <Container>
                <Grid container>
                    <Grid item lg={6} className="our_service">
                        <p data-aos="fade-up" style={{transition:"1s"}}>ABOUT COMPANY</p>
                        <h3 data-aos="fade-up" style={{ transition: "1.3s" }}>We Offer a Wide<br></br>Variety Of IT Services</h3>
                    </Grid>
                </Grid>
                <Grid container className='service_card_parent'>
                    <Grid item lg={4} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <PinchIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>Web Development</text>
                                <p>We are providing HTML 5, CSS 3, BOOTSTRAP, JS, React JS, Material UI, React native, Node JS and Mongo DB. We make attractive website designs with full responsive content that can be easily adjustable to any screen type. We are also providing back-end for wesbites for storing their data.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <PinchIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Web Development</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item lg={4} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" style={{ transition: "1s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <LibraryAddCheckIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>Wordpress website</text>
                                <p>We can develop wordpress design and implement websites for companies using wordpress creation tool. We make any type of attractive block and E-commerce websites. Well knowledge about plug-ins and themes and ability to manage projects.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <LibraryAddCheckIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text style={{ fontSize: "25px" }}>WordPress Developer</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={4} className="service_card"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine" style={{ transition: "1.2s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <CompareIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>Graphic Desiging</text>
                                <p>
                                    Creative, independent and detail-oriented graphic designer with 3 year of experience. 
                                    Higly skilled with Adobe Photoshop and Adobe Illustrator. We provide all kind of graphic designing work with customer staisfaction.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <CompareIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Graphic Desiging</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>


                <Grid container className='service_card_parent'>
                    <Grid item lg={4} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <ArtTrackIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>IT Design</text>
                                <p>
                                    IT Design
                                    Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <ArtTrackIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>IT Design</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={4} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" style={{ transition: "1s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <CameraRollIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>IT Managment</text>
                                <p>
                                    IT Design
                                    Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <CameraRollIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>It Managment</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item lg={4} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" style={{ transition: "1.2s" }}>
                        <Grid container>
                            <Grid item lg={2}>
                                <SyncProblemIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} className='card_text'>
                                <text>Problem Solving</text>
                                <p>
                                    IT Design
                                    Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={2}>
                                    <SyncProblemIcon className='card_icon' sx={{ fontSize: "50px", color: "white" }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Problem Solving</text>
                                    <p style={{ color: "white", lineHeight: "20px", paddingLeft: "-20px" }}>
                                        IT Design
                                        Grursus mal suada lisis Lorem ipsum a ametion consectetur elit fadolorit to the consectetur more elit.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
        {/* We Offer */}
        <div>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item lg={12} className="we_offer_main">
                        <p>We Offer Best It Solutions</p>
                        <h3>Easy Solution For All Difficults Problems</h3>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container className='we_offer_choose_us_main'>
                    <Grid itelm lg={3}>
                        <Grid container>
                            <Grid item lg={2}>
                                <FilterTiltShiftIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Why Choose Us</text>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid itelm lg={3}>
                        <Grid container>
                            <Grid item lg={2}>
                                <FilterTiltShiftIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Technology Index</text>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid itelm lg={3}>
                        <Grid container>
                            <Grid item lg={2}>
                                <FilterTiltShiftIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Our Partners</text>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid itelm lg={3}>
                        <Grid container>
                            <Grid item lg={2}>
                                <FilterTiltShiftIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Our Awards</text>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </div>
}
export default Services