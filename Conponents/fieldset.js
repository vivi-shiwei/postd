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
      {/* <Box
        as='header'
        my='20px'
        position='relative'
        textAlign='center'
        className='header-line'
      >
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
        {props.children}
      </Box>
      <style jsx>
        {`
          :global(.header-line:before){
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            width: 100%;
            border-bottom: 1px solid gray;
            z-index: 0;
          }
        `}
      </style> */}
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
