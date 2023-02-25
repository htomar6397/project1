import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Login1 from "./Login/Login1";
import SignupPage from "./Signup";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const router = createBrowserRouter([
{path: ROOT, element: "Public root"},
{path: LOGIN, element: <Login1/> },
{path: REGISTER, element: <SignupPage/>},
]);