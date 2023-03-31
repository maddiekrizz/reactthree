import { Container, Grid,Icon,Typography } from "@material-ui/core";
function Product()
{
    return(
        <Container sx={{marginY:15}}>
            <Typography variant="h5" align="center" marginBottom={5}>Shop and get exciting offers!</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                        <img className="img1"
                        src="https://i.pinimg.com/736x/de/f1/ec/def1ec906ca1faf7e91eb4551e9d8e82.jpg"
                        alt=""/>
                        <Icon>add_card</Icon>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                        <img className="img2"
                        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81A9Fr2eFeL._MCnd_AC_SR175,263_QL70_.jpg"
                        alt=""/>
                        <Icon>add_card</Icon>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                        <img className="img3"
                        src="https://i.etsystatic.com/34976607/r/il/cef4db/4365246715/il_fullxfull.4365246715_oxhg.jpg"
                        alt=""/>
                        <Icon>add_card</Icon>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                        <img className="img4"
                        src="https://i.pinimg.com/736x/b1/dc/b1/b1dcb1fd41c09e72c1b19ba6bd020ac8.jpg"
                        alt=""/>
                        <Icon>add_card</Icon>
                </Grid>
                
            </Grid>
        </Container>
    )
}
export default Product;