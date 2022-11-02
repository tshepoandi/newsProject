import React from 'react'

import Box from '@mui/material/Box'
// import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
// import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Image, Title } from './styledComponents'

export function NewsIcon({ title, urlToImage, description, author }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Title>{title}</Title>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h8" component="div">
              <Image src={urlToImage} alt="image" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          {description}
        </Typography>
        {/* <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack> */}
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>(Comment)</Button>
      </Box>
    </Box>
  )
}

// function NewsIcon({ title, urlToImage, description, author }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={urlToImage} alt={description} />
//       <h5>{description}</h5>
//       <p>{author}</p>
//     </div>
//   )
// }

export default NewsIcon
