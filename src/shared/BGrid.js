import { Grid } from '@chakra-ui/react'
import React from 'react'

const BGrid = ({isPadding,  ...rest }) => {
  return (
      <Grid {...rest} css={{
          '& > div': {
            padding:  isPadding && '0 50px'
        },
    }} />
  )
}

export default BGrid