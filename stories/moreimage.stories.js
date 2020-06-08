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
    Divider
} from '@chakra-ui/core'

import Container from "../Conponents/container"
import Tworlayout from "../Conponents/twolayout"
import MyImage from "../static/QQ20200518181405.jpg"
import MyImage2 from "../static/timg.jpg"
import MyImage3 from "../static/timg8J2T10BJ.jpg"
import MyImage4 from "../static/timgXOPS3YTR.jpg"
import App from "../App"

const imgs = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box ml={4} p={0}>
                        <Link color="blue.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                    </Link>
                        <Text fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Text
                    my={2}
                    fontSize={16}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好</Text>
                <Container>
                    <AspectRatioBox maxW="100%" ratio={4 / 2}>
                        <Image src={MyImage2} alt="naruto" objectFit="cover" />
                    </AspectRatioBox>
                </Container>
            </Tworlayout>
        </>
    )
}

const imgs2 = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box height="50px" ml={4} p={0}>
                        <Link color="blue.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                </Link>
                        <Text fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Text
                    my={2}
                    fontSize={16}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好</Text>
                <Container>
                    <AspectRatioBox ratio={4 / 2} mb="2px">
                        <Image src={MyImage2} alt="naruto" objectFit="cover" />
                    </AspectRatioBox>
                    <AspectRatioBox ratio={4 / 2}>
                        <Image src={MyImage3} alt="naruto" objectFit="cover" />
                    </AspectRatioBox>
                </Container>
            </Tworlayout>
        </>
    )
}

const imgs3 = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box height="50px" ml={4} p={0}>
                        <Link color="blue.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                </Link>
                        <Text height="20px" fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Text
                    my={2}
                    fontSize={16}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好</Text>
                <Container>
                    <AspectRatioBox ratio={4 / 3} mb="2px">
                        <Image src={MyImage} alt="naruto" objectFit="cover" />
                    </AspectRatioBox>
                    <Box display="flex" h={{ base: '100px', sm: '150px' }} >
                        <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                            <Image src={MyImage2} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                        <AspectRatioBox width="50%" ratio={4 / 2} ml="1px">
                            <Image src={MyImage3} alt="naruto" objectFit="cover" />
                        </AspectRatioBox>
                    </Box>
                </Container>
            </Tworlayout>
        </>
    )
}

const imgs4 = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box height="50px" ml={4} p={0}>
                        <Link color="blue.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                </Link>
                        <Text height="20px" fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Text
                    my={2}
                    fontSize={16}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好</Text>
                <Container>
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
        </>
    )
}

const video = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image
                        my="auto"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box ml={4} p={0}>
                        <Link color="teal.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                        </Link>
                        <Text fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>

                <Text
                    my={2}
                    fontSize={16}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好,該配合你演出的我，也視而不見，別逼一個最愛的人演出細節</Text>
                <Container>
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
        </>
    )
}
export default { title: 'more' };

export const imgses = () => { return App(imgs) };
export const imgs2s = () => { return App(imgs2) };
export const imgs3s = () => { return App(imgs3) };
export const imgs4s = () => { return App(imgs4) };
export const videos = () => { return App(video) };