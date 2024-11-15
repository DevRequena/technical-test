import React from 'react'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { ScheduleService } from '../sections/ScheduleService/ScheduleService'
import { OurService } from '../sections/OurService/OurService'
import zIndex from '@mui/material/styles/zIndex'
import { OwnerHaveToSay } from '../sections/OwnerHaveToSay/OwnerHaveToSay'



const HomePage = () => {
  return (
    <>
      <MainLayout>
        <ScheduleService/>
        <OurService/>
        <OwnerHaveToSay/>
      </MainLayout>
    </>
  )
}

export default HomePage