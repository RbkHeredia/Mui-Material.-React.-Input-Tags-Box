import React from 'react';
import {
  Container,
  Typography
} from '@mui/material'
import {styled} from '@mui/material/styles';
import InputTags from './components/Input-tag'

  const RootStyle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }));
  
  const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '30vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 0),
  }));

function App() {
  const limitTags = 9;
  return (
    <RootStyle>
      <Container maxWidth="md">
        <ContentStyle>
          <Typography variant="h3" gutterBottom sx={{textAlign: 'center'}} >
            Input Tag Example</Typography>
            <InputTags limitTags={limitTags}/>
          <Typography variant="h6" sx={{textAlign: 'center'}} >Max: {limitTags+1} tags</Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}

export default App;
