import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function FooterComponent() {
    const classes = useStyles();


    return (
        <>
            <div className={classes.footrContainer}>
                <Container>
                    <Typography className={classes.footerHeading} variant="subtitle2" gutterBottom>
                        Privacy Note
                    </Typography>
                    <Typography className={classes.footerSubHeading} variant="caption" display="block" gutterBottom>

                        By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy available at https://lk.bookmyshow.com/privacy governing your access to BookMyShow and provision of services by BookMyShow to you. If you do not accept terms mentioned in the Privacy Policy, you must not share any of your personal information and immediately exit BookMyShow.
                    </Typography>

                    <div className={classes.socialIcons}>
                        <IconButton aria-label="delete">
                            <FacebookIcon style={{ color: '#4267B2' }} />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <InstagramIcon style={{ color: '#e95950' }} />
                        </IconButton>
                    </div>
                </Container>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({

    footrContainer: {
        backgroundColor: '#4d4d4d',
        padding: 25,
        marginTop: 40,
        
    },
    footerHeading: {
        color: '#bdbdbd'
    },
    footerSubHeading: {
        color: '#9e9e9e'
    },
    socialIcons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
       
        
    }

}));
