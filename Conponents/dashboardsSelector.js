import React from 'react'
import { Select } from '@chakra-ui/core'

const DashboardsSelector = () => {

  return (
    <Select maxW='400px' mx='auto'>
      {schoolDashboards.map((dashboard, i) => (
        <option>
          {dashboard[i]}
        </option>
      ))}
    </Select>
  )
}

export default DashboardsSelector
