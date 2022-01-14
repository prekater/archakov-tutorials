import React from 'react';

class ProfileClassComponent extends React.Component {
  getFirstName = () => {
    const fullName = this.props.name;
    let fullNameArr = fullName.split(' ');
    return fullNameArr[0];
  };
  getRegistrationDate = () => {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('ru', options).format(
      this.props.registredAt
    );
  };

  render() {
    return (
      <div className="wrapper">
        <div className="first-line">
          Привет, <strong>{this.getFirstName()}!</strong>
        </div>
        <div className="second-line">
          Дата регистрации: {this.getRegistrationDate()}
        </div>
      </div>
    );
  }
}

export default ProfileClassComponent;
