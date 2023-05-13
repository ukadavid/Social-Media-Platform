import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Loginpage/LoginPage';
import Profilepage from './Pages/Profilepage/Profilepage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profilepage />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
