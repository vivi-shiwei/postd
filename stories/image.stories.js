import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Box,
    Image,
    Text,
    Link,
    AspectRatioBox,
    Divider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Flex,
    Stack,
    InputGroup,
    Input,
    InputLeftElement,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/core'

import Container from "../Conponents/container"
import Tworlayout from "../Conponents/twolayout"
import MyImage from "../static/QQ20200518181405.jpg"
import MyImage2 from "../static/timg.jpg"
import MyImage3 from "../static/timg8J2T10BJ.jpg"
import MyImage4 from "../static/timgXOPS3YTR.jpg"
import App from "../App"
import Layout from "../Conponents/layout"
import Menus from "../Conponents/menu"

function SizeExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState("md");

    const handleSizeClick = newSize => {
        setSize(newSize);
        onOpen();
    };

    return (
        <>
            <Flex direction="column" w='400px' mx="auto">
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px" >
                    <Image src={MyImage} alt="naruto" objectFit="cover" cursor='pointer' onClick={() => handleSizeClick(MyImage)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px">
                    <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px">
                    <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px">
                    <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px">
                    <Image src={MyImage} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" ratio={4 / 2} m="1px">
                    <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' ratio={4 / 2} m="1px">
                    <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
                </AspectRatioBox>
                <AspectRatioBox width='400px' height="300px" s ratio={4 / 2} m="1px">
                    <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4)} />
                </AspectRatioBox>
            </Flex>
            <Modal onClose={onClose} isOpen={isOpen} size="xl" bg="none"  >
                <ModalOverlay />
                <ModalContent bg="none" >
                    {/* <ModalHeader></ModalHeader>
                    <ModalCloseButton /> */}
                    <ModalBody><AspectRatioBox ratio={4 / 3} mt="7px">
                        <Image src={size} alt="naruto" objectFit="cover" cursor='pointer' />
                    </AspectRatioBox>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
export default { title: 'thre' };

export const mores = () => { return App(SizeExample) };