async function handleGooleSignIn(){
    
    try{

      const CLIENT_ID = "58715411209-nbcoe3ijato19pvok606ghfi8uab0fop.apps.googleusercontent.com";
      const REDIRECT_URL ="http://localhost:3000";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";     
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type${RESPONSE_TYPE}&scope&${SCOPE}`;
      
      const {type,params } = await AuthSession.startAsync({authUrl}) ;
      console.log(type, params)
      
    }catch(error){
      console.log(error);
    }

  }