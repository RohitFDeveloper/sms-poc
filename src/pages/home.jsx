import React from 'react'
import {
  Box,
  Button
} from '@mui/material';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Box style={centerBox}>
        <Button sx={{mr:2}} variant="contained">
          <Link style={btnLinks} to="/student/register">Register</Link>
        </Button>
        <Button variant="contained">
        <Link style={btnLinks} to="/student/login">Login</Link>
        </Button>
      </Box>
    </div>
  )
}

// const navigate = useNavigate();
const centerBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const btnLinks = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
}



