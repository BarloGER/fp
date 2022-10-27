import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function Account({ user }) {
  const { id } = useParams();

  console.log('recieved', user);

  const [loggedInUser, setLoggedInUser] = useState(user)
  const [currentUser, setCurrentUser] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setCurrentUser(data.find(user => user._id === id));
    } catch (error) {
      console.log(error);
    }
    checkID();
  };

  useEffect(() => {
    getUser();
  }, [loggedInUser]);

  const checkForData = () => {
    return !currentUser ? false : true;
  };

  const checkID = () => {
    if (!user) {
      setIsAllowed(false);
      console.log('no user found')
    } else if (id !== user._id) {
      setIsAllowed(false);
      console.log('no match')
    } else {
      setIsAllowed(true);
      console.log('match')
    }
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    console.log('Hoch die Hände, Wochenende');
  };

  return (
    <main className="account">
      {" "}
      {!checkForData() && <Loadingspinner />}
      <section className="account-container">
        <form className="profile-container"
          onSubmit={handleUpdateEvent}>
          <div className="left-container">
            <div className="user-image">
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="Profilbild"
              />
              <input
                type="text"
                name="username"
                defaultValue={currentUser.username}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <button className="btn">Nachricht</button>
            </div>
            <div className="user-aboutMe">
              <h2>Über mich</h2>
              <br />
              <textarea
                type="text"
                name="aboutMe"
                defaultValue={currentUser.aboutMe}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></textarea>
            </div>
          </div>
          <div className="right-container">
            <div className="user-info">
              <input
                type="text"
                name="firstname"
                defaultValue={currentUser.firstname}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <hr />
              <input
                type="text"
                name="lastname"
                defaultValue={currentUser.lastname}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <hr />
              <input
                type="text"
                name="team"
                defaultValue={currentUser.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></input>
              <hr />
              <input
                type="text"
                name="Position"
                defaultValue="Wasserjunge"
                placeholder="Position"
                disabled={!isAllowed}
              ></input>
              <hr />
              <button
                className={isAllowed ? "btn" : "btn-hidden"}
                disabled={!isAllowed}
              >
                Absenden
              </button>
            </div>
            <div className="user-comments">hi</div>
          </div>
        </form>
      </section>
    </main>
  );
}
