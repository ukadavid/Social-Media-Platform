import useState from "react";
import { Box, Button, TextField, Typography, useTheme, useMediaQuery } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {Formik} from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../State";
import FlexStyle from "../../Components/Util/FlexStyle";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    location: yup.string().required("Location is required"),
    occupation: yup.string().required("Occupation is required"),
    picture: yup.string().required("Picture is required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
})

const initialValuesRegister = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
}

const initialValuesLogin = {
    email: "",
    password: "",
}
const Form = () => {
    const [pageType, setPageType] = useState("login");
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
}

export default Form

