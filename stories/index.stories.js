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
import App from "../App"
const texte = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box ml={4} p={0}>
                        <Link color="teal.500" href="#" fontSize="19px">
                            vivi
                        </Link>
                        <Text fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Text
                    my={3}
                    fontSize={26}
                    textTransform="uppercase"
                    letterSpacing="wide">今天天氣真好</Text>
                {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
            </Tworlayout>
        </>
    )
}

const image = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" m={0} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box height="50px" ml={4} p={0}>
                        <Link color="teal.500" href="#" fontSize="19px">
                            vivi  is a beautiful girl
                    </Link>
                        <Text height="20px" fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
                <Container>
                    <AspectRatioBox maxW="100%" ratio={4 / 2}>
                        <Image src={MyImage2} alt="naruto" objectFit="cover" />
                    </AspectRatioBox>
                </Container>
            </Tworlayout>
        </>
    )
}

const video = () => {
    return (
        <>
            <Tworlayout>
                <Box display="flex" mb={3} p={0}>
                    <Image height="100px" width="100px"
                        src={MyImage}
                        rounded="full"
                        size="50px" />
                    <Box height="50px" ml={4} p={0}>
                        <Link color="teal.500" href="#" fontSize="19px">
                            vivi
                                </Link>
                        <Text height="20px" fontSize="13px" color="gray.500">49分鐘</Text>
                    </Box>
                </Box>
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

export default { title: 'post' };

export const texts = () => { return App(texte) };
export const images = () => { return App(image) };
export const videos = () => { return App(video) };