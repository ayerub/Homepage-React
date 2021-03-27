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
          <Grid.Row className='mt-1' style={{ padding: '0px' }}>
            <Clock />
          </Grid.Row>
          <Grid.Row className='mb p-0' style={{ padding: '0px' }}>
            <Welcome name={user} />
          </Grid.Row>
          <Grid.Row>
            <Links />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default App
