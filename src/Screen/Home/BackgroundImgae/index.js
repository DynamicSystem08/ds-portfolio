import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import "./index.css"

function BackgroundImage()
{
    return<div className="background_img">
        <Container>
            <Grid container>
                <Grid item lg={6.3} md={7} sm={10} xs={12} className="content_color">
                    <h1  data-aos="fade-up" className='heading_background'>Best Solution To Run </h1>
                    <h1  data-aos="fade-up" style={{marginTop:"-20px",width:"81%",transition:"1s"}}>Your Projects Faster </h1>
                    <p data-aos="fade-up" style={{transition:"1.5s"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ex voluptatibus dolores numquam facere velit esse blanditiis 
                        laborum consectetur consequatur corporis minus totam quidem facilis, optio adipisci expedita assumenda. Esse.</p>
                        <Button variant="contained" style={{backgroundColor:"#0554f2"}}>Get Details<ArrowForwardIcon sx={{paddingLeft:"10px"}}/> </Button>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default BackgroundImage