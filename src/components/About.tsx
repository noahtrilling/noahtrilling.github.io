import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function About(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Box width={matches ? '100%' : '60%'} mt={matches ? 4 : 8 }>
            <Typography component="h1" variant="h4" fontWeight={900}>
                Hey, I'm Noah - A Software Engineer Working in Austin, Texas.
            </Typography>
            <Typography marginTop={3} component="body" variant="body1" fontSize={16} fontWeight={500} fontFamily="Monospace">
                I'm a full stack software engineer with experience developing microservices in C#, web applications in React, and operating cloud infrastructure in Amazon Web Services using Terraform. 
            </Typography>
            <Typography marginTop={3} component="body" variant="body1" fontSize={18} fontWeight={500}>
                <Link color="inherit" href="mailto:noah.trilling@gmail.com">
                    noah.trilling@gmail.com
                </Link>
            </Typography>
        </Box>
    )
}