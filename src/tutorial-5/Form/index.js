import React, { useContext } from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CommentsContext } from '../App';

const Form = () => {
  const [fields, setFields] = React.useState({
    email: '',
    text: '',
    fullName: '',
    createdAt: '',
  });

  const { comments, setComments } = useContext(CommentsContext);

  const handleChange = (e) => {
    setFields({
      ...fields,
      createdAt: new Date(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setComments([...comments, fields]);

    setFields({
      email: '',
      text: '',
      fullName: '',
      createdAt: '',
    });
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
          id="fullName"
          name="fullName"
          label="Ваше имя"
          variant="outlined"
          sx={{ pb: 1 }}
          onChange={handleChange}
          value={fields.fullName}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Ваш e-mail"
          variant="outlined"
          sx={{ pb: 1 }}
          onChange={handleChange}
          value={fields.email}
        />
        <TextField
          required
          id="text"
          name="text"
          label="Ваш отзыв"
          multiline
          maxRows={4}
          sx={{ pb: 1 }}
          onChange={handleChange}
          value={fields.text}
        />
        <Button variant="contained" type="submit">
          ОТПРАВИТЬ
        </Button>
      </Box>
    </Card>
  );
};

export default Form;
