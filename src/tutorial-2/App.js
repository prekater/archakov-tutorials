function App() {
  let email, password;

  function handleChangeInput(event) {
    switch (event.target.name) {
      case 'email':
        email = event.target.value;
        break;
      case 'password':
        password = event.target.value;
        break;
    }
    // console.log('email', email);
    // console.log('password', password);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit was called');
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
