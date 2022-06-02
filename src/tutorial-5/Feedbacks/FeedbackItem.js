import React, { useContext } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { CommentsContext } from '../App';

export const FeedbackItem = ({ userName, text, created, index }) => {
  const makeDate = (param) => {
    if (typeof param === 'string') {
      return new Date(param).toLocaleDateString();
    } else {
      return param.toLocaleDateString();
    }
  };

  const { comments, setComments } = useContext(CommentsContext);

  const handleRemove = (index) => {
    const newArr = comments.filter((_, i) => {
      return index !== i;
    });
    setComments(newArr);
  };

  return (
    <Box
      sx={{
        minWidth: 300,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mr: 2,
          ml: 2,
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 48 }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          sx={{ fontWeight: 'bold' }}
        >
          {userName}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {text}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {makeDate(created)}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleRemove(index)}
        >
          Удалить
        </Button>
      </Box>
    </Box>
  );
};
