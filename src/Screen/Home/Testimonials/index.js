import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./index.css"
import img8 from "../../../Images/img8.png"
function Testimonials() {
    return <div className="testimonilas_main">

        <Container>
            <Grid container>
                <Grid item lg={6} className="testimonials_name">
                    <p>TESTIMONIALS</p>
                    <h3>What THEY CLIENT SAY!</h3>
                </Grid>

            </Grid>
        </Container>

        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide style={{ backgroundColor: "#ecf5ff",paddingBottom:"50px" }}>
                <Grid container className='slidbar_main'>
                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </SwiperSlide>


            <SwiperSlide style={{ backgroundColor: "#ecf5ff" }}>
                <Grid container className='slidbar_main'>
                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid item lg={3.5} >
                        <div className='testimonials_card'>
                            <h1>Committed To Quality</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eligendi. Adipisci accusantium perferendis dolore aut sapiente consectetur
                                ipsum id, eaque, earum reiciendis provident excepturi aperiam possimus dolorem ad facere magni.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10}>
                                    <h2 style={{marginTop:"10px"}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </SwiperSlide>

            <SwiperSlide>

                slide 2

            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>




    </div>
}
export default Testimonials