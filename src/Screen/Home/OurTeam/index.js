import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import CompareIcon from '@mui/icons-material/Compare';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import "./index.css"
import img6 from "../../../Images/img6.jpg"
import bilal from "../../../Images/bilal1.png"
// import bilal from "../../../Images/Bilal.png"
function OurTeam() {
    return <div className='out_team_main'>
        <Container>
            <div className='our_team_heading'>
                <p data-aos="fade-up" style={{transition:"1s"}}>ABOUT COMPANY</p>
                <h3 data-aos="fade-up" style={{transition:"1.3s"}}>EXPERIENCE IT Solutions</h3>
            </div>
        </Container>
        <Grid container className='profile_cards'>
            <Grid itel lg={3} className='box'>
                <div className='box_img'>
                    <img src={bilal} alt="" />
                </div>
                <div className="box_content">
                    <h2>Bilal Hussain</h2>
                    <p><b>UI/UX AND FRONT-END-DEVELOPER</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero distinctio quisquam ea necessitatibus eos! Reiciendis, laborum ea cumque voluptas, excepturi natus et
                        unde autem quaerat non eius facere. Obcaecati.
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>

            <Grid itel lg={3} className='box'>
                <div className='box_img'>
                    <img src={img6} alt="" />
                </div>
                <div className="box_content">
                    <h2>Usman Iftekhar</h2>
                    <p><b>CEO & Graphic Designer</b></p>
                    <p>'Creative, independent and detail-oriented graphic designer with 3 years of experience. Highly skilled with Adobe Photoshop and Adobe Illustrator .
                         Coachable and passionate about collaborating with a team when working on projects.
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>
            <Grid itel lg={3} className='box'>
                <div className='box_img'>
                    <img src={img6} alt="" />
                </div>
                <div className="box_content">
                    <h2>Mohammmad Hammmad</h2>
                    <p><b> WORD PRESS DEVELOPER</b></p>
                    <p>I am a wordpress developer.I can develop wordpress design and implement websites for companies using wordpress creation tool .i can make any type of attractive blog and E-commerce websites . 
                        Well knowledge about plug-ins and themes .Ability to manage projects
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>

            <Grid itel lg={3} className='box'>
                <div className='box_img'>
                    <img src={img6} alt="" />
                </div>
                <div className="box_content">
                    <h2>Mohammmad Hammmad</h2>
                    <p><b> WORD PRESS DEVELOPER</b></p>
                    <p>I am a wordpress developer.I can develop wordpress design and implement websites for companies using wordpress creation tool .i can make any type of attractive blog and E-commerce websites . 
                        Well knowledge about plug-ins and themes .Ability to manage projects
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>
            <Grid itel lg={3} className='box'>
                <div className='box_img'>
                    <img src={img6} alt="" />
                </div>
                <div className="box_content">
                    <h2>Nabeel Rizwan</h2>
                    <p><b>FRONT-END BACKEND DEVELOPER </b></p>
                    <p>I am a skilled Front-end and back-end developer and also a database designer. I currently have 1 year of experince in my field during that time i have worked in various ERP projects. The technologies that I use are reactjs for front-end development, rest APIs using nodejs for back-end and mongoDB and sql database as the goto choices for data storage.
                         My goal is to help solve bussiness problems using fast, state of the art softwares that fits my clients needs.
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>
        </Grid>
        {/* </Container> */}
    </div>
}
export default OurTeam