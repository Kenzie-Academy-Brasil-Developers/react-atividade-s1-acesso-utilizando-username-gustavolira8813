function WelcomePage({ user, setIsLoggedIn }) {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <div>
        <h3>Bem-vindo, {user}</h3>
        <button onClick={HandleLogout}>Deslogar</button>
      </div>
    </>
  );
}
export default WelcomePage;
