import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Flex,
  Divider
} from '@chakra-ui/core'

const fieldset = (props) => {
  return (
    <>
      <Flex justify='center'
        as='header'
        h='60px'
        my='25px'
        position='relative'
        textAlign='center'>
        <Button
          variantColor='blue'
          mt='30px'
          transform=' translate(0, -50%)'
          w={{ base: 'none', sm: '110px' }}
        >
          新增
      </Button>
        <Flex>
          <Divider borderColor='blackAlpha.300' width={props.wid} my='auto' />
          <Box
            as='span'
            fontSize='35px'
            fontWeight='bold'
          >
            {props.title}
          </Box>
          <Divider borderColor='blackAlpha.300' width={props.wid} my='auto' />
        </Flex>
        <IconButton
          icon='edit'
          mt='10px'
          variantColor='blue'
        />
      </Flex>
    </>
  )
}

export default fieldset
