import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/noahtrilling',
        icon: <LinkedInIcon fontSize="large"/>
    },
    { 
        name: 'GitHub',
        link: 'https://github.com/noahtrilling',
        icon:  <GitHubIcon fontSize="large"/>
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/noah_trilling',
        icon: <TwitterIcon fontSize="large"/>
    }
];

const extraNavItems = [
    {
        name: 'dev.to',
        link: 'https://dev.to/noahtrilling',
        icon: <RssFeedIcon fontSize="large"/>
    },
    { 
        name: 'Email',
        link: 'mailto:noah.trilling@gmail.com',
        icon:  <EmailIcon fontSize="large"/>
    }
];

export default function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const navs = matches ? navItems : navItems.concat(extraNavItems);
    
    return (
        <AppBar elevation={1} position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ flexGrow: 1, fontWeight: 500 }}
                    >
                        { matches ? 'noah trilling' : 'noah trilling | programmer'}
                    </Typography>
                    <Box>
                        {navs.map((item) => (
                        <IconButton key={item.name} size='large' href={item.link}>
                            {item.icon}
                        </IconButton>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}