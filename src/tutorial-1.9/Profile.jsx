import React from 'react';

const Profile = (props) => {
  let fullName = props.name;
  let fullNameArr = fullName.split(' ');

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let date = new Intl.DateTimeFormat('ru', options).format(props.registredAt);

  return (
    <div className="wrapper">
      <div className="first-line">
        Привет, <strong>{fullNameArr[0]}!</strong>
      </div>
      <div className="second-line">Дата регистрации: {date}</div>
    </div>
  );
};

export default Profile;
