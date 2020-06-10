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
    Heading,
    PseudoBox
} from '@chakra-ui/core'

import { IoIosImage, IoIosPerson, IoIosPeople, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSmile } from "react-icons/fi";


import Fieldset from '../Conponents/fieldset'
import SchoolCard from '../Conponents/schoolCard'
import DashboardsSelector from '../Conponents/dashboardsSelector'
import ClassesList from '../Conponents/classesList'
import App from "../App"
import Layout from "../Conponents/layout"
import Container from "../Conponents/contai"

const Onelayout = props => {
    return (
        <Box
            width={{ base: '100%', sm: '500px', md: '555px' }}
            bg="blue.50"
            mx='auto'
            borderRadius='4px'
            {...props} />

    )
}


const classes = () => {
    return (
        <Layout>
            <Container pb={4}>
                <Fieldset title='聖若瑟教區中學第一校' background='#ebf8ff' />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='學生評估'
                        href='#'
                    />

                    <SchoolCard
                        title='相簿'
                        href='#'
                    />
                </Box>
            </Container>
        </Layout >
    )
}

export default { title: 'Class' };

export const Cls = () => { return App(classes) };