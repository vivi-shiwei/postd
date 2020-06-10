import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Flex
} from '@chakra-ui/core'

const fieldset = (props) => {
  return (
    <>
      <Flex
        as='header'
        my='20px'
        position='relative'
        textAlign='center'>
        <Button
          variantColor='blue'
          position=' absolute'
          top='50%'
          left=' 0'
          transform=' translate(0, -50%)'
          minW='110px'
        >
          新增
      </Button>
        <Box
          as='span'
          px='10px'
          fontSize='35px'
          fontWeight='bold'
          d={props.title ? '' : 'none'}
          background={props.background ? props.background : '#f6f2ef'}
          position='relative'
          zIndex='1'
        >
          {props.title}
        </Box>
        <IconButton
          icon='edit'
          my='auto'
          variantColor='blue'
          ml={4}
        />
      </Flex>
    </>
  )
}

export default fieldset
