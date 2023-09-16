import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./index.css"
import img8 from "../../../Images/icon.png"
function Testimonials() {
    return <div className="testimonilas_main" id='testimonials'>

        <Container>
            <Grid container>
                <Grid item lg={6} className="testimonials_name">
                    <p>TESTIMONIALS</p>
                    <h3 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif',marginBottom:'50px'}}>What The Client Say!</h3>
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
                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8} >
                        <div className='testimonials_card' >
                            <h1 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamic system work has met expectations. The team delivered a functioning platform, although it could have seen improvement in its content and user interface. Customers can expect an organized team, that collaborates with integrity and professionalism.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h4 style={{marginTop:"10px",marginBottom:'5%'}}>Caral Johnson</h4>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>Our Client</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8}>
                        <div className='testimonials_card'>
                            <h1 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamic system is a valuable partner according to the client. The agency is always proactively looking for ways to enhance the partnership. Their workflow and communication are great thanks to the use of various communication and project management tools.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2}  md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h4 style={{marginTop:"10px",marginBottom:'5%'}}>Basit Chaubaariya</h4>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>From Alif Enterprises</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8}>
                        <div className='testimonials_card'>
                            <h1 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamics system work has been high quality, allowing them to sell the project to major corporate customers. The project management was effective, as they consistently delivered high-quality work on-time and within budget.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h4 style={{marginTop:"10px",marginBottom:'5%'}}>Minhaj</h4>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>From TRF</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </SwiperSlide>


            <SwiperSlide style={{ backgroundColor: "#ecf5ff" }}>
                <Grid container className='slidbar_main'>
                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8}>
                        <div className='testimonials_card'>
                            <h1 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamic system is a valuable partner according to the client. The agency is always proactively looking for ways to enhance the partnership. Their workflow and communication are great thanks to the use of various communication and project management tools.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h2 style={{marginTop:"10px",marginBottom:'5%'}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8}>
                        <div className='testimonials_card'>
                            <h1 id="slider_heading" style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamic system work has met expectations. The team delivered a functioning platform, although it could have seen improvement in its content and user interface. Customers can expect an organized team, that collaborates with integrity and professionalism.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h2 style={{marginTop:"10px",marginBottom:'5%'}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid item lg={3.5} md={3.5} sm={3.7} xs={11.8}>
                        <div className='testimonials_card'>
                            <h1 style={{fontFamily:'Times New Roman, Times, serif'}}>Committed To Quality</h1>
                            <p>Dynamics system work has been high quality, allowing them to sell the project to major corporate customers. The project management was effective, as they consistently delivered high-quality work on-time and within budget.</p>
                        </div>
                        <div className='person_view'>
                            <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={2}>
                                    <img src={img8} alt="" />
                                </Grid>
                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                    <h2 style={{marginTop:"10px",marginBottom:'5%'}}>Micheal Chains</h2>
                                    <p style={{marginTop:"-20px",paddingBottom:"20px"}}>CEO Founder</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </SwiperSlide>

            {/* <SwiperSlide>

                slide 2

            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>




    </div>
}
export default Testimonials