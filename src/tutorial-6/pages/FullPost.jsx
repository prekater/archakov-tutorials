import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { posts } from './Home';

export const FullPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((obj) => obj.id === Number(id));

  React.useEffect(
    () =>
      setTimeout(() => {
        if (!post) {
          navigate('/');
        }
      }, 3000),
    []
  );

  if (!post) {
    return <h1>Статья не найдена</h1>;
  }

  return (
    <div className="full-post">
      <h1>Статья №{post.id}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
