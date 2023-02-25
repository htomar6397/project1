import { Button,Box,Center, FormControl, Heading, Input,FormLabel ,Link} from "@chakra-ui/react";
import { REGISTER } from "components/routes";
import { Link as RouterLink } from "react-router-dom";
export default function Login1() {
    return (
        <Center w="100%" h="100vh"> 
         <Box mx="1" maxW={"md"} p="9" borderRadius={"lg"} borderWidth="1px">
            <Heading mb={"4"} size="lg" textAlign={"Center"}>Log In</Heading>
          <form onSubmit={() => {}}>
            <FormControl isInvalid={true} py="2">
               <FormLabel>Email</FormLabel>
               <Input type={"email"} placeholder="user@gmail.com" />
            </FormControl>
            <FormControl isInvalid={true} py="2">
               <FormLabel>Password</FormLabel>
               <Input type={"password"} placeholder="password123" />
            </FormControl>
          
         <Button
         mb="6"
         mt="3"
         type="submit"
         colorScheme="teal"
         w="full"
         size={"md"}
         isLoading={true}
         loadingText="Logging in .. . . ."
         >Log In</Button>
         </form>
         <text 
         fontSize={"xlg"} 
         align="center" mt="6"> 
         Don't Have a account?{" "}
         <Link as={RouterLink} to={REGISTER}
         color="teal.800"
         fontWeight={"medium"}
         textDecor="underline"
         _hover={{ background: "teal.100"}}>Register</Link>
         {" "} instead!
         </text></Box>
        
        </Center>
    )
}