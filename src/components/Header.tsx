import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from '@mui/material/Container';

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
    },
];

export default function Header() {
  return (
    <AppBar elevation={1} position="static">
        <Container>
            <Toolbar>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 500 }}
                >
                    noah trilling | programmer
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
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