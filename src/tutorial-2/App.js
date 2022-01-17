function App() {
  let email, password;

  function handleChangeInput(event) {
    if (event.target.name === 'email') {
      email = event.target.value;
    } else if (event.target.name === 'password') {
      password = event.target.value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      return alert('Заполните поля');
    }

    function checkAllSpaces(param) {
      let regexp = /\s/g;
      return param.match(regexp) && param.match(regexp).length === param.length;
    }

    if (checkAllSpaces(email) || checkAllSpaces(password)) {
      alert('Поле не может состоять целиком из пробелов');
    } else {
      console.log({ email, password });
      event.target.reset();
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="E-mail"
        className="input"
        onChange={handleChangeInput}
        name="email"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="input"
        onChange={handleChangeInput}
        name="password"
      />
      <button className="button" type="submit">
        Войти
      </button>
    </form>
  );
}

export default App;
