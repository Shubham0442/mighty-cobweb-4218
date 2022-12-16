import { Modal, ModalContent, ModalOverlay, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const LodingIndicator = ({loading}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        if(loading)
        {
            onOpen()
        }
        if(loading === false)
        {
            onClose()
        }
    }, [loading])


  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent w={"0%"} textAlign={"center"} m={"auto"} alignContent={"center"}>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='white'
            color='black.500'
            size='xl'
            />
        </ModalContent>
      </Modal>
  )
}

export default LodingIndicator