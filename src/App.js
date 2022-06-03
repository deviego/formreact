import "./app.css";
import image from "./images/Mobile login-bro.png";
import logo from "./images/logo.png";
import GoogleLogin from 'react-google-login'


function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  
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
                <button className="button" type="submit"
                >
                  Log in
                </button>
              </div>

              <div className="socialslogin">
                <ul>
                  <li>
                   <GoogleLogin
                   buttonText="Login with Google"
                   clientId="58715411209-nbcoe3ijato19pvok606ghfi8uab0fop.apps.googleusercontent.com"
                   onSuccess={responseGoogle}
                   onFailure={responseGoogle}
                   />
                  </li>
                </ul>

                <ul>
                  <li>
                   
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
