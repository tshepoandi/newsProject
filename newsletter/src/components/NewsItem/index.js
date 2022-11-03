import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Image, Title, Content } from './styledComponents'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function NewsIcon({ title, urlToImage, content, author }) {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{ margin: '15px' }}>
            <Image src={urlToImage} alt="image" />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item sx={{ margin: '15px' }}>
            <Title>{title}</Title>
            <Content>{author}</Content>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item sx={{ margin: '15px' }}>
            <Content>{content}</Content>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

// export function NewsIcon({ title, urlToImage, content, author }) {
//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <Box sx={{ my: 3, mx: 2 }}>
//         <Grid container alignItems="center">
//           <Grid item xs>
//             <Title>{title}</Title>
//           </Grid>
//           <Grid item>
//             <Typography gutterBottom variant="h8" component="div">
//               <Image src={urlToImage} alt="image" />
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>
//       <Divider variant="middle" />
//       <Box sx={{ m: 2 }}>
//         <Typography gutterBottom variant="body1">
//           {content}
//         </Typography>
//         {/* <Stack direction="row" spacing={1}>
//           <Chip label="Extra Soft" />
//           <Chip color="primary" label="Soft" />
//           <Chip label="Medium" />
//           <Chip label="Hard" />
//         </Stack> */}
//       </Box>
//       <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
//         <Button sx={{ backgroundColor: '#041b15', color: '#97db4f' }}>
//           Read More
//         </Button>
//       </Box>
//     </Box>
//   )
// }

// // function NewsIcon({ title, urlToImage, description, author }) {
// //   return (
// //     <div>
// //       <h3>{title}</h3>
// //       <img src={urlToImage} alt={description} />
// //       <h5>{description}</h5>
// //       <p>{author}</p>
// //     </div>
// //   )
// // }

// export default NewsIcon
