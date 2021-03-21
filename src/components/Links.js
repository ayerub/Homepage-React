import React from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'

const Links = () => {
  return (
    <Grid centered>
      <Grid.Row columns={3}>
        <Grid.Column width={3}>
          <a href='https://www.youtube.com/'>
            <Button color='youtube' size='large' fluid>
              <Icon name='youtube' /> YouTube
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://twitter.com/home'>
            <Button color='twitter' size='large' fluid>
              <Icon name='twitter' /> Twitter
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://www.reddit.com/'>
            <Button color='orange' size='large' fluid>
              <Icon name='reddit alien' /> Reddit
            </Button>
          </a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3}>
        <Grid.Column width={3}>
          <a href='https://mail.google.com/mail/u/0/#inbox'>
            <Button color='red' size='large' fluid>
              <Icon name='mail' /> Gmail
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://github.com'>
            <Button size='large' fluid>
              <Icon name='github alternate' /> Github
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://app.webull.com/watch'>
            <Button color='blue' size='large' fluid>
              <Icon name='chart line' /> Webull
            </Button>
          </a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3}>
        <Grid.Column width={3}>
          <a href='https://www.google.com/maps/'>
            <Button color='yellow' size='large' fluid>
              <Icon name='map marker alternate' /> Gmap
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://open.spotify.com/'>
            <Button color='green' size='large' fluid>
              <Icon name='spotify' /> Spotify
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column width={3}>
          <a href='https://www.espn.com/'>
            <Button color='red' size='large' fluid>
              <Icon name='football ball' /> ESPN
            </Button>
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Links
