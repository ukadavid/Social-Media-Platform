import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Profilepage from './Pages/Profilepage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profilepage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
