import React from 'react'

import { Grid } from './styles'

import Menu from '../Menu'
import HelloName from '../HelloName'
import Calendar from '../Calendar'
import UserInfo from '../UserInfo'
import Total from '../Total'
import MeasureGraphics from '../MeasureGraphics'
import Most from '../Most'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Menu />
      <HelloName />
      <Calendar />
      <UserInfo />
      <Total />
      <MeasureGraphics />
      <Most />
    </Grid>
  )
}

export default Layout