import { useRef, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import Container from 'components/container'
import orderBy from 'lodash/orderBy'
import { Formik, Field, Form } from 'formik'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormErrorMessage,
  useDisclosure,
  useToast
} from '@chakra-ui/core'

import { getCurrentSchooluserQuery } from 'shared/graphql/queries/user/getUser'
import { getSchoolDashboardClassesQuery } from 'shared/graphql/queries/schoolDashboard/getSchoolDashboard'
import { createClsMutation } from 'shared/graphql/mutations/cls/createCls'

import Fieldset from 'components/common//fieldset'
import SchoolCard from 'components/common/schoolCard'

const initialValues = {
  name: '',
  englishName: '',
  slug: ''
}

const ClassesList = ({ schoolDashboardId, schoolId }) => {
  const classesRef = useRef()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, refetch: classesRefetch } = useQuery(getSchoolDashboardClassesQuery, { variables: { id: schoolDashboardId } })
  const { data: currentUserData } = useQuery(getCurrentSchooluserQuery, { variables: { schoolId } })

  // useEffect(() => {
  //   classesRefetch({
  //     variables: { id: schoolDashboardId }
  //   })
  // }, [])

  const [createCls] = useMutation(createClsMutation)

  if (!schoolDashboardId || !data || !data.schoolDashboard || !data.schoolDashboard.classes || !data.schoolDashboard.school || !currentUserData || !currentUserData.user) {
    return null
  }

  const { schoolDashboard } = data
  const { school, classes } = schoolDashboard
  const {
    user: { schooluser }
  } = currentUserData

  const validateName = (value) => {
    return (!value) ? '該選項不可為空！' : ''
  }

  return (
    <Container pb={4}>
      <Fieldset title='班級' background='#ebf8ff'>
        <Button
          variantColor='blue'
          position=' absolute'
          top='50%'
          left=' 0'
          transform=' translate(0, -50%)'
          minW='110px'
          onClick={onOpen}
        >
          新增
          </Button>
      </Fieldset>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新增班級</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box textAlign='center'>
              <Button
                variantColor='blue'
                minW={{ base: '100%', sm: '200px', md: '200px' }}
                mr={3}
                mt={8}
                type='submit'
                isLoading={isSubmitting}
              >
                添加
                    </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box as='section' textAlign='center'>
        {
          classes.map(cls => {
            return cls.deletedAt === null ? (
              <SchoolCard
                key={cls.id}
                title={cls.name}
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
