import React from 'react';
import {
    Box
} from '@chakra-ui/core'
import Layout from './layout'

const twolayout = props => (
    <Layout>
        <Box
            width={{ base: '100%', sm: '555px' }}
            flex='1 0 auto'
            mt={{ base: '0', sm: '10px' }}
            p={3}
            bg="#ffff"
            mx='auto'
            borderRadius='4px'
            {...props} />
    </Layout>
)

export default twolayout
