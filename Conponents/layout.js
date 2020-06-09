import React from 'react';
import {
    Box
} from '@chakra-ui/core'

const layout = props => (
    <Box
        // pos='fixed'
        m='0'
        top='0'
        bg="#F2F3F5"
        left='0'
        right='0'
        width='full'
        height='full'
        {...props} />
)

export default layout
