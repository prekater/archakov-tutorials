import React, { useContext } from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { FeedbackItem } from './FeedbackItem';
import { CommentsContext } from '../App';

const FeedbacksList = () => {
  const { comments } = useContext(CommentsContext);

  return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography variant="h6" gutterBottom component="div">
        Отзывы:
      </Typography>
      {comments.length ? (
        comments.map(({ fullName, text, createdAt }, index) => {
          return (
            <FeedbackItem
              key={fullName}
              userName={fullName}
              text={text}
              created={createdAt}
              index={index}
            />
          );
        })
      ) : (
        <Typography variant="h6" gutterBottom component="div">
          Пока нет отзывов
        </Typography>
      )}
    </Card>
  );
};

export default FeedbacksList;
