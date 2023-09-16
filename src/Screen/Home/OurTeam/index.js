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
import usman from "../../../Images/usman.png"
import hammad from '../../../Images/hammad.png'
import nabeel from '../../../Images/nabeel.png'

function OurTeam() {
    return <div className='out_team_main' id='team'>
        <Container>
            <div className='our_team_heading'>
                <p data-aos="fade-up" style={{ transition: "1s" }}>OUR TEAM</p>
                <h3 data-aos="fade-up" style={{ transition: "1.3s",marginBottom:'50px',fontFamily:'Times New Roman, Times, serif' }} id="experience_it">Experience It Solutions</h3>
            </div>
        </Container>
        <Grid container className='profile_cards'>
            <Grid item lg={3} md={3} sm={3} xs={11.5} className='box'>
                <div className='box_img'>
                    <img src="https://codeinstitute.net/wp-content/uploads/2015/07/New-Hire.jpg" alt="" />
                </div>
                <div className="box_content">
                    <h2>Bilal Hussain</h2>
                    <p><b>UI/UX AND FRONT-END-DEVELOPER</b></p>
                    <p>Build quakity website with Html,Css,JavaScript React J'S and Material Ui. I look for quality work and I always ready to upgrade and improve myself.
                    </p>
                    <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <LinkedInIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                    <InstagramIcon sx={{ fontSize: "35px", marginRight: "10px" }} />
                </div>
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={11.5} className='box'>
                <div className='box_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51i5bYA6kKIJ2JzVUxncUzD07G2cVmpKDrlEclt56dWPWONve8WSA5-2PimiU9UPg8sY&usqp=CAU" alt="" />
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
            <Grid item lg={3} md={3} sm={3} xs={11.5} className='box'>
                <div className='box_img'>
                    <img src="https://b1831098.smushcdn.com/1831098/wp-content/uploads/2019/11/thoughtful-creative-man-designing-project-and-PRNVMX2-e1574880044648.jpg?lossy=1&strip=1&webp=1" alt="" />
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

            <Grid item lg={3} md={3} sm={3} xs={11.5} className='box'>
                <div className='box_img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNNuoTUvQnrnTcllBNDPOlcib0oIkVn1CdgU3m3A9A21nf_3I2u9LppO0YfoyXlc6O7U&usqp=CAU" alt="" />
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
            <Grid item lg={3} md={3} sm={3} xs={11.5} className='box'>
                <div className='box_img'>
                    <img src={img6} alt=""  />
                </div>
                <div className="box_content">
                    <h2>Alian Ali</h2>
                    <p><b>Figma Designer and Developer </b></p>
                    {/* <p>I am a skilled Front-end and back-end developer and also a database designer. I currently have 1 year of experince in my field during that time i have worked in various ERP projects. The technologies that I use are reactjs for front-end development, rest APIs using nodejs for back-end and mongoDB and sql database as the goto choices for data storage.
                        My goal is to help solve bussiness problems using fast, state of the art softwares that fits my clients needs.
                    </p> */}
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