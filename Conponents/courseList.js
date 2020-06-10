// import { useRef, useEffect } from 'react'
// import { useMutation, useQuery } from '@apollo/react-hooks'
// import Container from 'components/container'
// import orderBy from 'lodash/orderBy'
// import { Formik, Field, Form } from 'formik'
// import {
//   Box,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   useToast
// } from '@chakra-ui/core'
// import { getCurrentSchooluserQuery } from 'shared/graphql/queries/user/getUser'
// import { getSchoolDashboardCoursesQuery } from 'shared/graphql/queries/schoolDashboard/getSchoolDashboard'
// import { createCourseMutation } from 'shared/graphql/mutations/course/createCourse'

// import Fieldset from 'components/common//fieldset'
// import SchoolCard from 'components/common/schoolCard'
// import CourseForm from 'components/common/courseForm'

// const CourseList = (props) => {
//   const classesRef = useRef()
//   const toast = useToast()
//   const [createCourse] = useMutation(createCourseMutation)
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   const variables = {
//     id: props.schoolDashboardId,
//     filter: { type: props.type }
//   }

//   const {
//     data: courseData,
//     refetch: coursesRefetch
//   } = useQuery(getSchoolDashboardCoursesQuery, { variables })

//   const { data: currentUserData } = useQuery(getCurrentSchooluserQuery, { variables: { schoolId: props.schoolId } })

//   // useEffect(() => {
//   //   coursesRefetch({ variables })
//   // })

//   if (!courseData || !courseData.schoolDashboard || !currentUserData || !currentUserData.user) {
//     return null
//   }

//   const initialValues = {
//     name: '',
//     slug: '',
//     credits: '0', // credit
//     type: props.type,
//     englishName: '',
//     term: '0'
//   }

//   const {
//     schoolDashboard: {
//       courses,
//       seqId: dashboardSeqId,
//       school: { seqId: schoolSeqId }
//     }
//   } = courseData

//   const {
//     user: { schooluser }
//   } = currentUserData

//   return (
//     <Container pb={4}>
//       <Fieldset title={props.fieldTitle} background='#ebf8ff'>
//         {
//           schooluser.isAdmin === true && (
//             <Button
//               variantColor='blue'
//               position=' absolute'
//               top='50%'
//               left=' 0'
//               transform=' translate(0, -50%)'
//               minW='110px'
//               ref={classesRef}
//               onClick={onOpen}
//             >
//               新增
//             </Button>
//           )
//         }
//       </Fieldset>
//       <Modal
//         finalFocusRef={classesRef}
//         isOpen={isOpen}
//         onClose={onClose}
//         closeOnOverlayClick={false}
//         blockScrollOnMount={false}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             {props.modalTitle}
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <CourseForm
//               type='add'
//               initialValues={initialValues}
//               defaultClsId={props.type}
//               submitHandle={(val, showCls, setSubmitting, setFieldError) => {
//                 const { name, slug, type, credits, term, englishName } = val
//                 const input = {
//                   name,
//                   type,
//                   slug,
//                   englishName,
//                   credits: parseFloat(credits),
//                   term: parseInt(term),

//                   schoolDashboardId: props.schoolDashboardId,
//                   schoolId: props.schoolId
//                 }

//                 createCourse({
//                   variables: {
//                     input
//                   }
//                 }).then(() => {
//                   coursesRefetch({
//                     variables
//                   }).then(() => {
//                     setSubmitting(false)
//                     onClose()
//                   })
//                 }).catch((error) => {
//                   setSubmitting(false)
//                   const message = error.message.split(': ')[1]
//                   if (message) {
//                     if (/\{.*\}/g.test(message)) {
//                       const messageObj = JSON.parse(message)
//                       Object.keys(messageObj).forEach(val => {
//                         setFieldError(val, messageObj[val])
//                       })
//                     } else {
//                       toast({
//                         title: `新增${(props.type === 'elective' ? '選修課' : '興趣課')}錯誤`,
//                         description: message,
//                         status: 'error',
//                         duration: 3000,
//                         isClosable: true,
//                         position: 'top'
//                       })
//                     }
//                   }
//                 })
//               }}
//             />
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <Box as='section' textAlign='center'>
//         {
//           courses.map(items => {
//             return items.type && items.deletedAt === null ? (
//               <SchoolCard
//                 key={items.id}
//                 title={items.name}
//                 href='/school/[schoolId]/dashboards/[schoolDashboardId]/course/[courseId]'
//                 as={`/school/${schoolSeqId}/dashboards/${dashboardSeqId}/course/${items.seqId}`}
//               />
//             ) : ''
//           })
//         }
//       </Box>
//     </Container>
//   )
// }

// export default CourseList
