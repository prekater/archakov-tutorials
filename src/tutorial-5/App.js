import React, { createContext, useEffect } from 'react';

import Feedbacks from './Feedbacks';
import Form from './Form';

import '../index.css';

export const CommentsContext = createContext();

function App() {
  const [comments, setComments] = React.useState([]);

  useEffect(() => {
    let commentsFromStorage = JSON.parse(localStorage.getItem('comments'));
    commentsFromStorage && setComments(commentsFromStorage);
  }, []);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <Feedbacks />
      <Form />
    </CommentsContext.Provider>
  );
}

export default App;
