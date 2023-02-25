import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router} from "components/routes"
import Login from 'components/Login';
import SignupPage from 'components/Signup';
export default function App() {
  return <ChakraProvider>
    <RouterProvider router={router} /> 
   
   
  </ChakraProvider>;
}
