import React from 'react'
import buttons from '../data/buttons'
import { Button, Icon, Divider } from 'semantic-ui-react'

const Links = () => {
  return (
    <div className='flexbox'>
      {buttons.map((button, index) => {
        return (
          <div key={index}>
            <a href={button.href}>
              <Button className='flex-item' color={button.color} size='large'>
                <Icon name={button.icon} />
                {button.siteName}
              </Button>
              <Divider hidden />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Links
