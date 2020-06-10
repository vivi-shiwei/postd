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
    {props.title=='聖若瑟教區中學第一校' ? (<Flex justify='center'
        as='header'
        h={{base:'80px',sm:'80px'}}
        my='25px'
        position='relative'
        textAlign='center'>
        <Button
          variantColor='blue'
          mt='30px'
          fontSize={{base:'16px',sm:'20px'}}
          transform=' translate(0, -50%)'
          w={{ base: 'none', sm: '110px' }}
        >
          新增
      </Button>
        <Flex>
          <Divider borderColor='blackAlpha.300' width={props.wid} my='auto' />
          <Box
            as='span'
            fontSize={['25px','28px','30px','35px']}
            lineHeight={{base:'60px',sm:'60px',md:'60px'}}
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
      </Flex>):(<Flex justify= {{base:'space-between',sm:'center'}} m='auto'
        as='header'
        h={{base:'40px',sm:'50px',md:'60px'}}
        my='25px'
        position='relative'
        textAlign='center'>
        <Button
          variantColor='blue'
          mt='30px'
          fontSize={{base:'16px',sm:'20px'}}
          transform=' translate(0, -50%)'
          w={{ base: 'none', sm: '110px' }}
        >
          新增
      </Button>
        <Flex>
          <Divider borderColor='blackAlpha.300' width={props.wid} my='auto' />
          <Box
            as='span'
            fontWeight='bold'
            lineHeight={{base:'60px',sm:'60px',md:'60px'}}
            fontSize={['25px','28px','30px','35px']}
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
      </Flex>)}
    </>
  )
}

export default fieldset
