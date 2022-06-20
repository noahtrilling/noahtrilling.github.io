import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function About(){
    return (
        <Box sx={{width: "50%"}} ml={2} mt={9}>
            <Typography component="h1" variant="h4" fontWeight={900}>
                Hey, I'm Noah - A Software Engineer Working in Austin, Texas.
            </Typography>
            <Typography sx={{marginTop: 3}} component="body" variant="body1" fontSize={18} fontWeight={500}>
                I am a full stack software engineer with experience developing distributed systems in C#, web applications in React, and operating cloud infrastructure in Amazon Web Services using Terraform. 
            </Typography>
            <Typography sx={{marginTop: 3}} component="body" variant="body1" fontSize={18} fontWeight={500}>
                <Link color="inherit" href="mailto:noah.trilling@gmail.com">
                    noah.trilling@gmail.com
                </Link>
            </Typography>
        </Box>
    )
}