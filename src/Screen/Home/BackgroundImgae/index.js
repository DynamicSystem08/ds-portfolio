import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import "./index.css"

function BackgroundImage() {
    return <div className="background_img" id='home'>
        <Container>
            <Grid container>
                <Grid item lg={6.3} md={7} sm={10} xs={12} className="content_color">
                    <h1 data-aos="fade-up" className='heading_background' id="bg_heading">Best Solution To Run </h1>
                    <h1 data-aos="fade-up" style={{ marginTop: "-2px", width: "76%", transition: "1s" }} id="bg_heading1">Your Projects Faster </h1>
                    <p data-aos="fade-up" style={{ transition: "1.5s" }}>
                        We can provide you  with the best quotations about project management that are not just renowned but also so on-point that
                        the author may have been discussing project management. We have designed 20+ websites till date and We can create websites and web applications
                        in accordance with client requests,
                        and client satisfaction is our top priority.</p>
                    <Button variant="contained" style={{ backgroundColor: "#0554f2" }}>Get Details<ArrowForwardIcon sx={{ paddingLeft: "10px" }} /> </Button>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default BackgroundImage