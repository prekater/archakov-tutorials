import React, { useContext, useEffect } from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CommentsContext } from '../App';

const Form = () => {
  let name, email, text;

  const { comments, setComments } = useContext(CommentsContext);

  const handleChange = (e) => {
    switch (true) {
      case e.target.name === 'name':
        name = e.target.value;
        return;
      case e.target.name === 'email':
        email = e.target.value;
        return;
      case e.target.name === 'feedbackText':
        text = e.target.value;
        return;
    }
  };

  useEffect(() => {
    comments.length &&
      localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let comment = {
      fullName: name,
      email: email,
      createdAt: new Date(),
      text: text,
    };

    setComments([...comments, comment]);

    e.target.reset();
  };

  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" gutterBottom component="div" sx={{ pb: 1 }}>
          Обратная связь:
        </Typography>
        <TextField
          required
          id="name"
          name="name"
          label="Ваше имя"
          variant="outlined"
          sx={{ pb: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Ваш e-mail"
          variant="outlined"
          sx={{ pb: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="feedback-text"
          name="feedbackText"
          label="Ваш отзыв"
          multiline
          maxRows={4}
          sx={{ pb: 1 }}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          ОТПРАВИТЬ
        </Button>
      </Box>
    </Card>
  );
};

export default Form;
