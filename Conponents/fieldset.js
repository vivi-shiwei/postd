import React from 'react'
import {
  Box
} from '@chakra-ui/core'

const fieldset = (props) => {
  return (
    <>
      <Box
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
      </style>
    </>
  )
}

export default fieldset
