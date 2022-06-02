import "./app.css";
import image from "./images/Mobile login-bro.png";
import gicon from "./images/googleicon.svg";
import ficon from "./images/ficon.png";
import logo from "./images/logo.png";
import * as AuthSession from 'expo-auth-session';

function App() {
  async function handleGooleSignIn(){
    try{
      const CLIENT_ID = "58715411209-nbcoe3ijato19pvok606ghfi8uab0fop.apps.googleusercontent.com";
      const REDIRECT_URL ="http://localhost:3000";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";
      
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type${RESPONSE_TYPE}&scope&${SCOPE}`;
    }catch(error){
      console.log(error);
    }

  }
  return (
    <>
      <main>
        <div className="container">
          <img className="proncipalphoto" src={image} />
          <div className="form"></div>
          <div className="containerlogin">
            <form className="formlogin">
            <img className="logo" src={logo} />

              <h1>Welcome</h1>
              <div className="inputloginemail">
                <input
                  className="emaillogin"
                  placeholder="Enter your email address"
                  type="email"
                ></input>
                <p>
                  <span></span>
                </p>
              </div>
              <div className="inputloginpassword">
                <input
                  type="password"
                  className="passwordlogin"
                  placeholder="Enter your password"
                ></input>
              </div>
              <div className="button">
                <button className="button" type="submit">
                  Log in
                </button>
              </div>

              <div className="socialslogin">
                <ul>
                  <li>
                    <a href="#">
                      <img src={gicon} className="gicon" />
                    </a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="#">
                      <img src={ficon} className="ficon" />
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#">sig up</a>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
