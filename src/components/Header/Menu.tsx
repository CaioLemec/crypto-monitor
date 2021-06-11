import { Box, Button, Icon, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { RiHome2Fill, RiDashboard2Fill} from 'react-icons/ri'

export function Menu() {
    const { asPath } = useRouter()
    return (
      <Box>
          {asPath === '/' ? 
        <>
        <Link href="/">
          <Button
            leftIcon={<Icon fontSize="24" as={RiHome2Fill} />}
            fontSize="16"
            size="lg"
            w="32"
            mr="4"
            ml="12"
            bg="transparent"
            color="yellow.500"
            _hover={{ bg: "gray.800" }}
            _active={{
              transform: "scale(0.90)",
            }}
            _focus={{
              border: "none",
            }}
          >
              Home
          </Button>
        </Link>
        <Link href="/dashboard">
        <Button
        href="/dashboard"
        leftIcon={<Icon fontSize="24" as={RiDashboard2Fill} />}
        fontSize="16"
        size="lg"
        w="32"
        bg="transparent"
        color="white"
        _hover={{ bg: "gray.800" }}
        _focus={{
          border: "none",
        }}
        >
            Dashboard
        </Button>
        </Link>
        </>
        : 
        <>
        <Link href="/">
          <Button
            leftIcon={<Icon fontSize="24" as={RiHome2Fill} />}
            fontSize="16"
            size="lg"
            w="32"
            mr="4"
            ml="12"
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.800" }}
            _active={{
              transform: "scale(0.90)",
            }}
            _focus={{
              border: "none",
            }}
          >
              Home
          </Button>
        </Link>
        <Link href="/dashboard">
        <Button
        leftIcon={<Icon fontSize="24" as={RiDashboard2Fill} />}
        fontSize="16"
        size="lg"
        w="32"
        bg="transparent"
        color="yellow.500"
        _hover={{ bg: "gray.800" }}
        _focus={{
          border: "none",
        }}
        >
            Dashboard
        </Button>
        </Link>
        </>
        }
    </Box>
  );
}