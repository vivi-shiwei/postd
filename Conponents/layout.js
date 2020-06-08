import React from 'react';
import {
    Box
} from '@chakra-ui/core'

const layout = props => (
    <Box
        // pos='fixed'
        m='0'
        top='0'
        zIndex='4'
        bg="#f5f6f7"
        left='0'
        right='0'
        width='full'
        height='full'
        {...props} />
)

export default layout
