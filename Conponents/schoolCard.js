import React from 'react'
import {
  Box
} from '@chakra-ui/core'
import NextLink from 'next/link'

const schoolCard = (props) => {
  return (
    <>
      <Box
        as='article'
        w='250px'
        bg='white'
        d='inline-block'
        borderRadius='10px'
        position='relative'
        mr='20px'
        mb='20px'
        shadow='2px 2px 6px 0px #b9b9b9'
        className='home-card-item'
      >
        <NextLink
          href={props.href ? props.href : '/'}
          as={props.as}
          passHref
        >
          <Box
            as='a'
            className='card-link'
          >
            <Box
              as='div'
              p='15px'
              className='card-content'
            >
              <Box as='div'>
                <Box
                  as='h2'
                  fontSize='20px'
                  fontWeight='bold'
                >
                  {props.title}
                </Box>
                <Box
                  as='p'
                  wordBreak='break-all'
                  fontSize='13px'
                >
                  {props.content ? props.content : ''}
                </Box>
              </Box>
            </Box>
          </Box>
        </NextLink>
        {/* <Box as='div' position='absolute' top='0px' /> */}
      </Box>
      <style jsx>
        {`
          :global(.home-card-item:before){
            content: '';
            display: block;
            padding-top: 55%;
          }
          :global(.card-link),
          :global(.card-content){
            position:absolute;
            top:0px;
            left:0px;
            right:0px;
            bottom:0px;
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

export default schoolCard
