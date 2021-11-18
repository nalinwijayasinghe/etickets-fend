import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../Components/appBar';
import MovieCard from '../Components/movieCard';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Movies() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <AppBar />
            <Container style={{ marginTop: 25, marginBottom: 25 }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{ style: { background: '#e4d804' } }}>
                    <Tab label="Now Showing" {...a11yProps(0)} />
                    <Tab label="Coming Soon" {...a11yProps(1)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={3}>
                        <MovieCard />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    No movies for this category
                </TabPanel>


            </Container>

        </>
    );
}

const useStyles = makeStyles((theme) => ({



}));
