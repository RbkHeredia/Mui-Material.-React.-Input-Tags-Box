import React, { useState } from 'react';
import {
  Stack,
  Box,
  Chip,
  TextField} from '@mui/material';

export default function InputTags({limitTags}) {
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [input, setInput] = useState('');
  const [tagsValue, setTags] = useState([]); 

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
      if (tagsValue.length <= limitTags ){

        if ((key === ',' || key === 'Enter') &&  trimmedInput.length && !tagsValue.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }

        if (key === "Backspace" && !input.length && tagsValue.length && isKeyReleased) {
          e.preventDefault();
          const tagsCopy = [...tagsValue];
          const poppedTag = tagsCopy.pop();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
        setIsKeyReleased(false); 

      } else {
        document.getElementById('tags').disabled = true;
    }
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
    document.getElementById('tags').disabled = false;
  }
  return(
    <Stack direction={{xs: 'column', sm: 'row' }} spacing={1}>
      <Stack spacing={2}>
        <Box 
          
          sx={{
            width: 420,
            padding: '10px 10px',
            border: '2px solid #0288d1 ',
            borderRadius: '5px',
            backgroundColor: 'white',
            height: 140,
          }}>
        {tagsValue.map((tag, index) => (
          <Chip 
            sx={{
              padding: '2px',
              margin: '3px',
              marginBottom: '5px'
            }}
            variant="filled" 
            label={tag} 
            onDelete={() => deleteTag(index)} 
            color="info"/>
        ))}
        <TextField
          sx={{
            backgroundColor: 'white',
            marginTop: '4px'
          }}
          size="small"
          disabled={false}
          value={input}
          placeholder="Enter a tag"
          onKeyDown={onKeyDown}
          onChange={onChange}
          onKeyUp={onKeyUp}
          id="tags"
          label="Tags"
          variant="outlined"
          name="tags"
          color='primary'
        />
      </Box>
    </Stack>
  </Stack>
    )
}