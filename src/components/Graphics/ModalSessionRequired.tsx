import { Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { SignInButton } from "../Header/SignInButton"

export default function ModalSessionRequired() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {onOpen()}, [])
    return (
        <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="gray.800" alignSelf="center" alignItems="center">
            <ModalHeader>Login is required</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>You need to login with your Github to continue.</Text>
            </ModalBody>
            <ModalFooter>
            <SignInButton />
          </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }