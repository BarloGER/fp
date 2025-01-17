import { createUser } from "../utils/createUser";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp({
  handleClick,
  isAuthenticated,
  setIsAuthenticated,
  setToken,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // When the input changes, set the input to the value of the input and validate the input.
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  // Validating the input.
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstname":
          if (!value) {
            stateObj[name] = "Bitte Vornamen angeben.";
          }
          break;

        case "lastname":
          if (!value) {
            stateObj[name] = "Bitte Nachnamen angeben.";
          }
          break;

        case "username":
          if (!value) {
            stateObj[name] = "Bitte Benutzernamen angeben.";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Bitte Email angeben.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Bitte Passwort angeben.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Die Passwörter stimmen nicht überein.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Bitte Passwort Bestätigung angeben.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Die Passwörter stimmen nicht überein.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const checkCapsLock = (event) => {
    if (event.getModifierState("CapsLock")) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  const formSubmission = {
    firstname,
    lastname,
    username,
    email,
    password,
    terms,
  };

  //function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, data } = await createUser(formSubmission);
      localStorage.setItem("token", data);
      setToken(data);
      if (data) setIsAuthenticated(true);
      if (error) throw error;
    } catch (err) {
      console.log(err);
    }
  };

  const notify = () => toast(`Willkommen im Team ${username}`);

  return isAuthenticated ? (
    <Navigate to={"/secret/dashboard"} />
  ) : (
    <section className="access">
      <div className="access-container">
        <div className="image-desktop"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="Vorname"
            required
            value={input.firstname}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setFirstname(e.target.value)}
          />
          {error.firstname && <span className="err">{error.firstname}</span>}
          <input
            type="text"
            name="lastname"
            placeholder="Nachname"
            required
            value={input.lastname}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setLastname(e.target.value)}
          />
          {error.lastname && <span className="err">{error.lastname}</span>}
          <input
            type="text"
            name="username"
            placeholder="Benutzername"
            required
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setUsername(e.target.value)}
          />
          {error.username && <span className="err">{error.username}</span>}
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setEmail(e.target.value)}
          />
          {error.email && <span className="err">{error.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            onKeyUp={checkCapsLock}
            required
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          {error.password && <span className="err">{error.password}</span>}
          {isCapsLockOn && (
            <p className="caps-lock-warning">Feststelltaste ist aktiviert!</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Passwort erneut eingeben"
            onKeyUp={checkCapsLock}
            required
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setPassword(e.target.value)}
          />
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
          {isCapsLockOn && (
            <p className="caps-lock-warning">Feststelltaste ist aktiviert!</p>
          )}
          <div className="terms">
            <label className="label">
              Ich akzeptiere die Nutzungsbedingungen
              <input
                type="checkbox"
                name="confirm"
                required
                onInput={(e) => setTerms(e.target.checked)}
              />
            </label>
          </div>
          <p>{errorMessage}</p>
          <button className="signIn-buttons btn" onClick={notify}>
            Sign UP
          </button>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ fontSize: "10rem" }}
          />

          <br />
          <div className="switch">
            <p>Bereits registriert?</p>
            <button
              className="signIn-buttons btn"
              onClick={(e) => handleClick(true, e)}
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
