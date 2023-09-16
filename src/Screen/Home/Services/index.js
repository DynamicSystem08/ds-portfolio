import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PinchIcon from '@mui/icons-material/Pinch';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CompareIcon from '@mui/icons-material/Compare';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import "./index.css"

function Services() {
    return <div id='services'>
        <div className='service_main'>
            <Container>
                <Grid container>
                    <Grid item lg={6} className="our_service">
                        <p data-aos="fade-up" style={{ transition: "1s" }}>SERVICES</p>
                        <h3 data-aos="fade-up" style={{ transition: "1.3s", fontFamily: 'Times New Roman, Times, serif' }} id="bg_heading">We Offer a Wide<br></br>Variety Of IT Services</h3>
                    </Grid>
                </Grid>
                <Grid container className='service_card_parent'>
                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                                <PinchIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} md={10} sm={10} xs={10} className='card_text'>
                                <text>Web Development</text>
                                <p style={{ textAlign: 'start' }} id="offer_text">We are providing HTML 5, CSS 3, BOOTSTRAP, JS, React JS, Material UI, React native, Node JS and Mongo DB. We make attractive website designs with full responsive content that can be easily adjustable to any screen type. We are also providing back-end for wesbites for storing their data.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={1} >
                                    <PinchIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Web Development</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px', }}>
                                        We are providing HTML 5, CSS 3, BOOTSTRAP, JS, React JS, Material UI, React native, Node JS and Mongo DB. We make attractive website designs with full responsive content that can be easily adjustable to any screen type. We are also providing back-end for wesbites for storing their data.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} >
                                <LibraryAddCheckIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} md={10} sm={10} xs={10.5} className='card_text'>
                                <text>Wordpress website</text>
                                <p style={{ textAlign: 'start' }}>We can develop wordpress design and implement websites for companies using wordpress creation tool. We make any type of attractive block and E-commerce websites. Well knowledge about plug-ins and themes and ability to manage projects.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={1}>
                                    <LibraryAddCheckIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Wordpress website</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px' }}>
                                        We can develop wordpress design and implement websites for companies using wordpress creation tool. We make any type of attractive block and E-commerce websites. Well knowledge about plug-ins and themes and ability to manage projects.</p>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                                <PinchIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} md={10} sm={10} xs={10} className='card_text'>
                                <text>Graphic Desiging</text>
                                <p style={{ textAlign: 'start' }} >
                                    Creative, independent and detail-oriented graphic designer with 3 year of experience.
                                    Higly skilled with Adobe Photoshop and Adobe Illustrator. We provide all kind of graphic designing work with customer staisfaction.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={0.5}>
                                    <CompareIcon className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Graphic Desiging</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px' }}>
                                        Creative, independent and detail-oriented graphic designer with 3 year of experience.
                                        Higly skilled with Adobe Photoshop and Adobe Illustrator. We provide all kind of graphic designing work with customer staisfaction.</p>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>

                </Grid>


                <Grid container className='service_card_parent'>
                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                                <ArtTrackIcon className='card_icon' sx={{ fontSize: "50px", marginTop: '-10px' }} />
                            </Grid>
                            <Grid item lg={9} md={10} sm={10} xs={10} className='card_text'>
                                <text>IT Design</text>
                                <p style={{ textAlign: 'start' }} id="offer_text">We are providing HTML 5, CSS 3, BOOTSTRAP, JS, React JS, Material UI, React native, Node JS and Mongo DB. We make attractive website designs with full responsive content that can be easily adjustable to any screen type. We are also providing back-end for wesbites for storing their data.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={1} >
                                    <PinchIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Web Development</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px' }}>
                                        We are providing HTML 5, CSS 3, BOOTSTRAP, JS, React JS, Material UI, React native, Node JS and Mongo DB. We make attractive website designs with full responsive content that can be easily adjustable to any screen type. We are also providing back-end for wesbites for storing their data.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} >
                                <CameraRollIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={9} md={10} sm={10} xs={10.5} className='card_text'>
                                <text>App Develpment</text>
                                <p style={{ textAlign: 'start' }}>We create innovative, visually appealing cross platform apps using the latest tools and technologies. We can provide you with a cutting edge mobile app custom tailored according to your business need.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={1}>
                                    <CameraRollIcon id="offer_icon" className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={10} className='card_text'>
                                    <text>Wordpress website</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px' }}>
                                        We create innovative, visually appealing cross platform apps using the latest tools and technologies. We can provide you with a cutting edge mobile app custom tailored according to your business need.</p>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12} className="service_card"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine"
                        style={{ transition: "0.8s" }}>
                        <Grid container>
                            <Grid item lg={2} md={1} sm={1} xs={1}>
                                <SyncProblemIcon className='card_icon' sx={{ fontSize: "50px" }} />
                            </Grid>
                            <Grid item lg={10} md={11} sm={11} xs={11} className='card_text'>
                                <text>Custom It Solutions</text>
                                <p style={{ textAlign: 'start' }} >
                                    Have a problem? Contact us now! We can assist you in finding a solution to your issue and together come up with superior solutions.</p>
                            </Grid>
                        </Grid>
                        <div className="content">
                            <Grid container>
                                <Grid item lg={0.5}>
                                    <SyncProblemIcon className='card_icon' sx={{ fontSize: "50px", color: "white", marginLeft: '-30px' }} />
                                </Grid>
                                <Grid item lg={11.5} className='card_text'>
                                    <text>Custom It Solutions</text>
                                    <p style={{ color: "white", lineHeight: "20px", textAlign: 'justify', paddingLeft: '10px' }}>
                                        Have a problem? Contact us now! We can assist you in finding a solution to your issue and together come up with superior solutions.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        {/* We Offer */}
        {/* <div>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className="we_offer_main">
                        <p>We Offer Best It Solutions</p>
                        <h3 id="easy_solution" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Easy Solution For All Difficults Problems</h3><br></br><br></br>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container className='we_offer_choose_us_main'>
                    <Grid itelm lg={3} md={3} sm={5} xs={12}>
                        <Grid container>
                            <Grid item lg={2} xs={2.1}>
                                <FilterTiltShiftIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Why Choose Us</text>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid itelm lg={3} md={3} sm={5} xs={12}>
                        <Grid container>
                            <Grid item lg={2} xs={2.1}>
                                <DomainAddIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Technology Index</text>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid itelm lg={3} md={3} sm={5} xs={12}>
                        <Grid container>
                            <Grid item lg={2} xs={2.1}>
                                <GroupWorkIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Our Partners</text>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid itelm lg={3} md={3} sm={5} xs={12}>
                        <Grid container>
                            <Grid item lg={2} xs={2.1}>
                                <EmojiEventsIcon sx={{ fontSize: "45px", color: " #0554f2", marginBottom: "10px" }} />
                            </Grid>
                            <Grid item lg={8} className='choose_us'>
                                <text>Our Awards</text>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div> */}
    </div>
}
export default Services