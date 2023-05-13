import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import form from "./Form"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
   <Box>
    <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">

   
    <Typography 
    fontWeight="bold"
    fontSize="clamp(1rem, 2rem, 2.25rem)"
    color="primary"
    >

    </Typography>
    </Box>
    <Box width={isNonMobile ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
      <Typography variant="h5" fontWeight="500" sx={{mb: "1.5rem"}}>
       Welcome to Zeeconnect, where we connect you to the world.
      </Typography>

    </Box>
   </Box>
  )
}

export default LoginPage