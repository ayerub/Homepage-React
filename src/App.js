import React from 'react'
import Welcome from './components/Welcome'
import Clock from './components/Clock'
import Links from './components/Links'

import { Container, Grid } from 'semantic-ui-react'

function App() {
  const user = 'Alex'

  return (
    <div className='background'>
      <Container>
        <Grid centered columns='one'>
          <Grid.Row className='mt-1 p-0'>
            <Welcome name={user} />
          </Grid.Row>
          <Grid.Row className='mb'>
            <Clock />
          </Grid.Row>
        </Grid>
        <Links />
      </Container>
    </div>
  )
}

export default App
