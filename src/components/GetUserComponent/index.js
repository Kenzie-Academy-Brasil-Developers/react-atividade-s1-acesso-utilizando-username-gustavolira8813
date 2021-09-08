import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin() {
    setUser(userInput);
    setIsLoggedIn(true);
  }
  return (
    <>
      <form>
        <input
          type="text"
          required
          value={userInput}
          onChange={(evento) => setUserInput(evento.target.value)}
          placeholder="Insira seu nome"
        ></input>

        <button type="submit" onClick={HandleLogin}>
          Entrar
        </button>
      </form>
    </>
  );
}
export default GetUserComponent;
