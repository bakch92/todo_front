import Typography from "@material-ui/core/Typography"
import {Route, Routes, Router} from "react-router-dom";
import Login from "./component/Login";
import App from "./App";
import { Box } from "@mui/material";
import SignUp from "./component/SignUp";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            <Box mt={5}>
                    <Copyright/>
                </Box>
        </div>
    )
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright"}
            fsoftwareeingineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export default AppRouter;