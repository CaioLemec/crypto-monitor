import { Button, Icon, Text, Avatar } from '@chakra-ui/react'
import { RiGithubFill } from 'react-icons/ri'
import { signIn, signOut, useSession } from 'next-auth/client'

export function SignInButton() {
    const [session] = useSession();
    return session ? 
    (     
        <Button
            leftIcon={<Avatar size="md" name={session.user.name} src={session.user.image}/>}
            fontSize="16"
            size="lg"
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.800" }}
            onClick={() => signOut()}
        >
            Logged as<Text ml="1" color="orange.500">{session.user.name}</Text>
        </Button>
    ) 
    : 
    (
        <Button
            leftIcon={<Icon fontSize="48" color="orange.500" as={RiGithubFill} />}
            fontSize="16"
            size="lg"
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.800" }}
            onClick={() => signIn('github')}
        >
            Sign in with Github
        </Button>
    )
}