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
    ButtonGroup,
} from '@chakra-ui/core'

import { IoIosImage, IoIosPerson } from "react-icons/io";
import { FiSmile } from "react-icons/fi";

import Container from "../Conponents/container"
import Tworlayout from "../Conponents/twolayout"
import MyImage from "../static/QQ20200518181405.jpg"
import MyImage2 from "../static/timg.jpg"
import MyImage3 from "../static/timg8J2T10BJ.jpg"
import MyImage4 from "../static/timgXOPS3YTR.jpg"
import App from "../App"
import Layout from "../Conponents/layout"
import Menus from "../Conponents/menu"

const Onelayout = props => {
    return (
        <Box
            width={{ base: '100%', sm: '500px', md: '555px' }}
            pt={{ base: '2px', sm: '4px' }}
            bg="#F2F3F5"
            mx='auto'
            borderRadius='4px'
            {...props} />

    )
}


// function BasicUsage() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     return (
//         <>
//             <Button onClick={onOpen}>Open Modal</Button>

// <Modal isOpen={isOpen} onClose={onClose}>
//     <ModalOverlay />
//     <ModalContent>
//         <ModalHeader>Modal Title</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//             <Lorem count={2} />
//         </ModalBody>

//         <ModalFooter>
//             <Button variantColor="blue" mr={3} onClick={onClose}>
//                 Close
//   </Button>
//             <Button variant="ghost">Secondary Action</Button>
//         </ModalFooter>
//     </ModalContent>
// </Modal>
//         </>
//     );
// }
// const widths = () => {
//     width = {{ base: '110%', sm: '500px', md: '555px' }
// }}
const more = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Layout>
            <Onelayout>
                <Tworlayout>
                    <Container lineHeight='35px' mt='0'
                        bg='#f5f6f7'
                    >
                        <Text ml={2} alignItems='center' mt='-12px'>建立貼文</Text>
                        <Divider borderColor='blackAlpha.300' />
                    </Container>
                    <Flex>
                        <Image
                            my="auto"
                            src={MyImage}
                            rounded="full"
                            size="50px" />
                        <Input type="phone" placeholder="Phone number" my="auto" border="none"
                            _focus={{
                                outline: 'none',
                                bg: 'white'
                            }} onClick={onOpen} />
                        <Modal isOpen={isOpen} onClose={onClose} size='555px'>
                            <ModalOverlay />
                            <ModalContent mt={{ base: '9px', sm: '15px' }}
                                borderRadius='5px'>
                                <Onelayout>
                                    <Tworlayout>
                                        <Container lineHeight='35px' mt='0'
                                            bg='#f5f6f7'>
                                            <Text ml={2} alignItems='center' mt='-26px'>建立貼文</Text>
                                            <ModalCloseButton
                                                _focus={{
                                                    outline: 'none',
                                                    bg: '#f5f6f7'
                                                }} />
                                            <Divider borderColor='blackAlpha.300' />
                                        </Container>
                                        <Flex>
                                            <Image
                                                my="auto"
                                                src={MyImage}
                                                rounded="full"
                                                size="50px" />
                                            <Input type="phone" placeholder="Phone number" my="auto" border="none"
                                                _focus={{
                                                    outline: 'none',
                                                    bg: 'white'
                                                }} onClick={onOpen} />
                                        </Flex>
                                        <Divider borderColor='blackAlpha.300' />
                                        <ButtonGroup spacing={4}>
                                            <Button leftIcon={IoIosImage} borderRadius='99px'>
                                                <Breadcrumb>
                                                    <BreadcrumbItem>
                                                        <Text>圖片</Text>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbItem>
                                                        <Text>影片</Text>
                                                    </BreadcrumbItem>
                                                </Breadcrumb>
                                            </Button>
                                            <Button leftIcon={IoIosPerson} borderRadius='99px'>
                                                標注朋友
                                            </Button>
                                            <Button leftIcon={FiSmile} borderRadius='99px'>
                                                <Breadcrumb>
                                                    <BreadcrumbItem>
                                                        <Text>感受</Text>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbItem>
                                                        <Text>生活</Text>
                                                    </BreadcrumbItem>
                                                </Breadcrumb>
                                            </Button>
                                        </ButtonGroup>
                                        <Divider borderColor='blackAlpha.300' />
                                    </Tworlayout>
                                </Onelayout>
                            </ModalContent>
                        </Modal>
                    </Flex>
                    <Divider borderColor='blackAlpha.300' />
                    <ButtonGroup spacing={4}>
                        <Button leftIcon={IoIosImage} borderRadius='99px'>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Text>圖片</Text>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Text>影片</Text>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Button>
                        <Button leftIcon={IoIosPerson} borderRadius='99px'>
                            標注朋友
                                            </Button>
                        <Button leftIcon={FiSmile} borderRadius='99px'>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Text>感受</Text>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Text>生活</Text>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Button>
                    </ButtonGroup>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={26}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#" fontSize="29px">
                                vivi
                    </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                    </Link>
                        </Box>
                        <Box color="blue.500" fontSize="29px" cursor='pointer'>
                            #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={26}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box color="blue.500" fontSize="29px" cursor='pointer'>
                            #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={26}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#" fontSize="29px">
                                vivi
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#" fontSize="29px">
                                Jp Srib
                        </Link>
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>
                    <Container mt={3}>
                        <Flex justify='flex-start' >
                            <Flex direction='column'>
                                <AspectRatioBox width='275px' height='249px' ratio={4 / 2} m="1px"
                                    _checked={{
                                        width: "700px",
                                        height: "500px"
                                    }} >
                                    <Image src={MyImage} alt="naruto" objectFit="cover" cursor='pointer'
                                        onClick={{
                                            width: "700px",
                                            height: "500px"
                                        }} />
                                </AspectRatioBox>
                                <AspectRatioBox width='275px' height='249px' ratio={4 / 2} m="1px">
                                    <Image src={MyImage2} alt="naruto" objectFit="cover" />
                                </AspectRatioBox>
                            </Flex>
                            <Flex direction='column'>
                                <AspectRatioBox width='276px' height='165px' ratio={4 / 2} m="1px">
                                    <Image src={MyImage3} alt="naruto" objectFit="cover" />
                                </AspectRatioBox>
                                <AspectRatioBox width='276px' height='165px' ratio={4 / 2} m="1px">
                                    <Image src={MyImage4} alt="naruto" objectFit="cover" />
                                </AspectRatioBox>
                                <AspectRatioBox width='276px' height='166px' ratio={4 / 2} m="1px">
                                    <Image src={MyImage} alt="naruto" objectFit="cover" />
                                </AspectRatioBox>
                                <Box position="absolute">
                                    <AspectRatioBox width='276px' height='166px' ratio={4 / 2} m="1px">
                                        <Image src={MyImage2} alt="naruto" objectFit="cover" />
                                    </AspectRatioBox>
                                    <AspectRatioBox width='276px' height='166px' ratio={4 / 2} m="1px">
                                        <Image src={MyImage3} alt="naruto" objectFit="cover" />
                                    </AspectRatioBox>
                                    <AspectRatioBox width='276px' height='166px' ratio={4 / 2} m="1px">
                                        <Image src={MyImage4} alt="naruto" objectFit="cover" />
                                    </AspectRatioBox>
                                </Box>
                            </Flex>
                        </Flex>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={26}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Container mt={3}>
                        <AspectRatioBox maxW="100%" ratio={4 / 2}>
                            <Image src={MyImage2} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Container mt={3}>
                        <AspectRatioBox maxW="full" ratio={4 / 2.3}>
                            <Box
                                as="iframe"
                                title="naruto"
                                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                                allowFullScreen
                            />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    <Container mt={3}>
                        <AspectRatioBox maxW="100%" ratio={4 / 2}>
                            <Image src={MyImage2} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 2} mb="1px">
                            <Image src={MyImage2} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                        <AspectRatioBox ratio={4 / 2}>
                            <Image src={MyImage3} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 3} mb="1px">
                            <Image src={MyImage} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }} >
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" />
                            </AspectRatioBox>
                        </Box>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 3} mb="1px">
                            <Image src={MyImage} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }}>
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2} ml="1px">
                                <Image src={MyImage4} alt="naruto" objectFit="cover" />
                            </AspectRatioBox>
                        </Box>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi  is a beautiful girl
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好,該配合你演出的我，也視而不見，別逼一個最愛的人演出細節</Text>

                    <Container mt={3}>
                        <AspectRatioBox maxW="full" ratio={4 / 2.3}>
                            <Box
                                as="iframe"
                                title="naruto"
                                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                                allowFullScreen
                            />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>
            </Onelayout>
        </Layout>
    )
}

export default { title: 'themore' };

export const mores = () => { return App(more) };