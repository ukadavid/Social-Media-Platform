import { useState } from "react";
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from "@mui/material";
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../State";
import { useNavigate } from "react-router-dom";
import FlexStyle from "../../Components/Util/FlexStyle";

const Navbar = () => {
  const [isMobileToggle, setIsMobileToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullname = user ? `${user.firstname} ${user.lastname}` : "";

  const handleMobileToggle = () => {
    setIsMobileToggle(!isMobileToggle);
  };

  return (
    <FlexStyle padding="1rem 6%" backgroundColor={alt}>
      <FlexStyle gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          ZeeConnect
        </Typography>
        {isNonMobile && (
          <FlexStyle backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexStyle>
        )}
      </FlexStyle>

      {/* Desktop Navigation */}
      {isNonMobile ? (
        <FlexStyle gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? <DarkMode sx={{ fontSize: "25px" }} /> : <LightMode sx={{ color: dark, fontSize: "25px" }} />}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullname}>
            <Select
              value={fullname}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullname}>
                <Typography>{fullname}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexStyle>
      ) : (
        <IconButton onClick={handleMobileToggle}>
          <Menu />
        </IconButton>
      )}

           {/* Mobile Section */}
      {isNonMobile && isMobileToggle && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* close icon */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={handleMobileToggle}>
              <Close />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <FlexStyle display="flex" flexDirection="column" justifyContent="center" gap="3rem">
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: "25px" }}>
              {theme.palette.mode === "dark" ? <DarkMode sx={{ fontSize: "25px" }} /> : <LightMode sx={{ color: dark, fontSize: "25px" }} />}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullname}>
              <Select
                value={fullname}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullname}>
                  <Typography>{fullname}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
              </Select>
            </FormControl>
          </FlexStyle>
        </Box>
      )}
    </FlexStyle>
  );
};

export default Navbar;

