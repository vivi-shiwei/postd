import React from 'react'
import { Box } from '@chakra-ui/core'
import Container from './contai'


import Fieldset from './fieldset'
import SchoolCard from './schoolCard'

const ClassesList = () => {


  const classes = ['甲班', '一班']
  return (
    <Container pb={4}>
      <Fieldset title='班級' background='#ebf8ff' />
      <Box as='section' textAlign='center'>
        {
          classes.map((cls, i) => {
            return (
              <SchoolCard
                title={cls[i]}
                href='#'
              />
            )
          })
        }
      </Box>
    </Container>
  )
}

export default ClassesList
