import Profile from './Profile';
import ProfileClassComponent from './ProfileClassComponent';

function App() {
  return (
    <>
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClassComponent
        name="Вася Пупкин"
        registredAt={new Date(2021, 5, 22)}
      />
    </>
  );
}

export default App;
