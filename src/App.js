import "./app.css";
import image from './images/Mobile login-bro.png'
import gicon from './images/googleicon.svg'
import ficon from './images/ficon.png'

function App() {
  return (
    <main>
      <div className="container">
        <img className="proncipalphoto" src={image} />
        <div className="containerlogin">
          <form className="formlogin">
            <h1>Welcome</h1>
            <div className="inputloginemail">
              <input
                className="emaillogin"
                placeholder="Enter your email address"
                type="email"
              ></input>
              <p><span></span></p>

              
            </div>
            <div className="inputloginpassword">
              <input
                type="password"
                className="passwordlogin"
                placeholder="Enter your password"
              ></input>
              </div>
            <div className="button"><button className="button" type="submit">
              Log in
            </button></div>

                     
            <div className="socialslogin">
              <ul><li><img src={gicon} className='gicon'/></li></ul>
            
              <ul><li><img src={ficon} className='ficon'/></li></ul>
            

            </div>
             <a href="#">sig up</a>
          
            
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
