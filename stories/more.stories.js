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
    Textarea,
    Radio,
    RadioGroup,
    Checkbox,
} from '@chakra-ui/core'

import { IoIosImage, IoIosPerson, IoIosPeople } from "react-icons/io";
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
const more = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: imageisOpen, onOpen: imageonOpen, onClose: imageonClose } = useDisclosure();
    const [size, setSize] = React.useState("md");

    const handleSizeClick = newSize => {
        setSize(newSize);
        imageonOpen();
    };
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
                        <Box h="35px" my="auto">
                            <Textarea type="phone" placeholder="vivi，你想些什麽？" my="auto" border="none"
                                resize='none'
                                _focus={{
                                    outline: 'none',
                                    bg: 'white'
                                }} onClick={onOpen} />
                        </Box>
                        <Modal isOpen={isOpen} onClose={onClose} size={{ base: '100%', sm: '500px', md: '555px' }}>
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
                                            <Box h="35px" my="auto">
                                                <Textarea type="phone" placeholder="vivi，你想些什麽？" my="auto" border="none"
                                                    resize='none'
                                                    _focus={{
                                                        outline: 'none',
                                                        bg: 'white'
                                                    }} onClick={onOpen} />
                                            </Box>
                                        </Flex>
                                        <Divider borderColor='blackAlpha.300' mt="30px" />
                                        <ButtonGroup>
                                            <Button leftIcon={IoIosImage} borderRadius='99px' >
                                                <Breadcrumb fontSize={10}>
                                                    <Text>圖片/影片</Text>
                                                </Breadcrumb>
                                            </Button>
                                            <Button leftIcon={IoIosPerson} borderRadius='99px'>
                                                <BreadcrumbItem fontSize={10}>
                                                    <Text>標注朋友</Text>
                                                </BreadcrumbItem>
                                            </Button>
                                            <Button leftIcon={FiSmile} borderRadius='99px'>
                                                <Breadcrumb fontSize={10}>
                                                    <BreadcrumbItem>
                                                        <Text>感受</Text>
                                                    </BreadcrumbItem>
                                                    <BreadcrumbItem>
                                                        <Text>生活</Text>
                                                    </BreadcrumbItem>
                                                </Breadcrumb>
                                            </Button>
                                        </ButtonGroup>
                                        <Container bg='#f5f6f7'>
                                            <Divider borderColor='blackAlpha.300' />
                                            <Flex direction="column" m={4}>
                                                <Flex justify="space-between" mb={{ base: '1px', sm: '3px' }}>
                                                    <Checkbox defaultIsChecked>動態消息</Checkbox>
                                                    <Flex>
                                                        <Menu>
                                                            <MenuButton as={Button} leftIcon={IoIosPeople} rightIcon="chevron-down">
                                                                <Text fontSize={10}>
                                                                    朋友
                                                                    </Text>
                                                            </MenuButton>
                                                            <MenuList fontSize={10}>
                                                                <MenuItem>公開</MenuItem>
                                                                <MenuItem>朋友</MenuItem>
                                                            </MenuList>
                                                        </Menu>
                                                    </Flex>
                                                </Flex>
                                                <Flex justify="space-between">
                                                    <Checkbox>限時動態</Checkbox>
                                                    <Flex>
                                                        <Button as={Button} leftIcon={IoIosPeople} rightIcon="chevron-down">
                                                            <Text fontSize={10}>
                                                                朋友
                                                            </Text>
                                                        </Button>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Container>
                                    </Tworlayout>
                                </Onelayout>
                            </ModalContent>
                        </Modal>
                    </Flex>
                    <Divider borderColor='blackAlpha.300' mt="30px" />
                    <ButtonGroup mx="auto">
                        <Button leftIcon={IoIosImage} borderRadius='99px' width={{ base: '100px', sm: '150px' }}>
                            <Breadcrumb fontSize={10}>
                                <Text>圖片 / 影片</Text>
                            </Breadcrumb>
                        </Button>
                        <Button leftIcon={IoIosPerson} borderRadius='99px' width={{ base: '80px', sm: '120px' }}>
                            <BreadcrumbItem fontSize={10}>
                                <Text>標注朋友</Text>
                            </BreadcrumbItem>
                        </Button>
                        <Button leftIcon={FiSmile} borderRadius='99px' width={{ base: '100px', sm: '150px' }}>
                            <Breadcrumb fontSize={10}>
                                <Text>感受 / 生活</Text>
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
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#">
                                vivi
                    </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                    </Link>
                        </Box>
                        <Box color="blue.500" cursor='pointer'>
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
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box color="blue.500" cursor='pointer'>
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
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#">
                                vivi
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
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
                                <AspectRatioBox width={{ base: '220px', sm: '234px', md: '275px' }} height={{ base: '210px', sm: '230px', md: '249px' }} ratio={4 / 2} m="1px" >
                                    <Image src={MyImage} alt="naruto" objectFit="cover" cursor='pointer' onClick={() => handleSizeClick(MyImage)} />
                                </AspectRatioBox>
                                <AspectRatioBox width={{ base: '220px', sm: '234px', md: '275px' }} height={{ base: '210px', sm: '230px', md: '249px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                                </AspectRatioBox>
                            </Flex>
                            <Flex direction='column'>
                                <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '139px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
                                </AspectRatioBox>
                                <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '139px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4)} />
                                </AspectRatioBox>
                                <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '153px', md: '166px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage)} />
                                </AspectRatioBox>
                                <Box display="none">
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                                    </AspectRatioBox>
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
                                    </AspectRatioBox>
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4)} />
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
                        fontSize={{ base: 20, sm: 26 }}
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
                            <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
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


                <Modal onClose={imageonClose} isOpen={imageisOpen} isCentered size={{ base: "400px", sm: "500px", md: "700px" }} bg="none"  >
                    <ModalOverlay />
                    <ModalContent bg="none" >
                        <ModalBody>
                            <AspectRatioBox ratio={4 / 2} mt="7px">
                                <Image src={size} alt="naruto" objectFit="cover" cursor='pointer' />
                            </AspectRatioBox>
                        </ModalBody>
                    </ModalContent>
                </Modal>


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
                            <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                        </AspectRatioBox>
                        <AspectRatioBox ratio={4 / 2}>
                            <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
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
                            <Image src={MyImage} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage)} />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }} >
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
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
                            <Image src={MyImage} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage)} />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }}>
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2)} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3)} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2} ml="1px">
                                <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4)} />
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
        </Layout >
    )
}

export default { title: 'themore' };

export const mores = () => { return App(more) };