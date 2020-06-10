// import { useRef, useEffect } from 'react'
// import { useMutation, useQuery } from '@apollo/react-hooks'
// import orderBy from 'lodash/orderBy'
// import { useRouter } from 'next/router'
// import { Formik, Field, Form } from 'formik'

// import { getSchoolDashboardsQuery } from 'shared/graphql/queries/school/getSchool'
// import { createSchoolDashboardMutation } from 'shared/graphql/mutations/schoolDashoboard/createSchooldashboard'

// import {
//   Select,
//   Button,
//   IconButton,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   FormErrorMessage,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Input,
//   Box
// } from '@chakra-ui/core'

// const DashboardsSelector = ({ schoolId, schoolDashboardId }) => {
//   const router = useRouter()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const dashboardRef = useRef()
//   const [createSchoolDashboard] = useMutation(createSchoolDashboardMutation)
//   const { data, refetch: dashboardRefetch } = useQuery(
//     getSchoolDashboardsQuery, {
//     variables: { id: schoolId },
//     fetchPolicy: 'cache-and-network'
//   }
//   )

//   // useEffect(() => {
//   //   dashboardRefetch({
//   //     variables: { id: schoolId }
//   //   })
//   // })
//   if (!schoolId || !data || !data.school) { return null }

//   const { school } = data
//   const { schoolDashboards } = school

//   const handleChange = (e) => {
//     const selectedDashboard = schoolDashboards.find(dashboard => dashboard.id === e.target.value)
//     router.push(
//       '/school/[schoolId]/dashboards/[schoolDashboardId]',
//       `/school/${school.seqId}/dashboards/${selectedDashboard.seqId}`
//     )
//   }

//   const currentDashboard = schoolDashboards.find(dashboard => dashboard.id === schoolDashboardId)
//   const initialValues = {
//     name: ''
//   }
//   function validateName(val) {
//     return (!val) ? '該選項不可為空！' : ((val.length < 3) ? '長度不可短於三個字符！' : '')
//   }
//   return (
//     <>
//       <Box display='flex' justifyContent='center' m='auto'>
//         {
//           school.currentSchooluser.isAdmin && <Button ref={dashboardRef} onClick={onOpen} variantColor='blue'>新增</Button>
//         }

//         <Modal
//           finalFocusRef={dashboardRef}
//           isOpen={isOpen}
//           onClose={onClose}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>新增 Dashboard</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody pb={6}>
//               <Formik
//                 initialValues={initialValues}
//                 onSubmit={(values, { setSubmitting }) => {
//                   const { name } = values
//                   const input = {
//                     name,
//                     schoolId
//                   }
//                   createSchoolDashboard({
//                     variables: {
//                       input
//                     }
//                   }).then((val) => {
//                     if (val.data) {
//                       setSubmitting(false)
//                       router.push(
//                         '/school/[schoolId]/dashboards/[dashboardId]',
//                         `/school/${school.seqId}/dashboards/${val.data.createSchoolDashboard.seqId}`
//                       )
//                     }
//                   }).catch(() => {
//                     setSubmitting(false)
//                   })
//                 }}
//               >
//                 {props => (
//                   <Form onSubmit={props.handleSubmit}>
//                     <Field name='name' validate={validateName}>
//                       {({ field, form }) => (
//                         <FormControl mt={4} isInvalid={form.errors.name && form.touched.name}>
//                           <FormLabel htmlFor='dashboard-name'>Dashboard 名稱</FormLabel>
//                           <Input id='dashboard-name' {...field} />
//                           <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                         </FormControl>
//                       )}
//                     </Field>
//                     <Box textAlign='center'>
//                       <Button
//                         mr={3}
//                         mt={8}
//                         variantColor='blue'
//                         isLoading={props.isSubmitting}
//                         type='submit'
//                         minW={{ base: '100%', sm: '200px', md: '200px' }}
//                       >
//                         添加
//                       </Button>
//                     </Box>
//                   </Form>
//                 )}
//               </Formik>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//         <Select maxW='400px' mx={4} value={schoolDashboardId} onChange={handleChange}>
//           {orderBy(schoolDashboards, ['createdAt', 'name'], ['desc', 'desc']).map(dashboard => {
//             if (dashboard.isDefault) {
//               return (
//                 <option key={dashboard.id} value={dashboard.id}>
//                   {dashboard.name}(現在)
//                 </option>
//               )
//             } else if (dashboard.deletedAt === null) {
//               return (
//                 <option key={dashboard.id} value={dashboard.id}> {dashboard.name} </option>
//               )
//             }
//           })}
//         </Select>
//         {
//           school.currentSchooluser.isAdmin && (
//             <IconButton
//               icon='edit'
//               variantColor='blue'
//               onClick={() => router.push(
//                 '/school/[schoolId]/dashboards/[schoolDashboardId]/edit',
//                 `/school/${school.seqId}/dashboards/${currentDashboard.seqId}/edit`
//               )}
//             />
//           )
//         }
//       </Box>
//     </>
//   )
// }

// export default DashboardsSelector
