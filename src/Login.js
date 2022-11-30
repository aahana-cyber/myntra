
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Login(){
    const history = useHistory();
    const [email, setEmail] = useState("");       //setEmail is a function in react that sets the email & initially is an empty string
    const [password, setPassword] = useState("");
    const login = (event) => {
        console.log("kkkk",email,password, event)
        event.preventDefault();   //prevents page from refreshing
        
        console.log("login",email,password)
        
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            window.location="/"            //logged in successfully, redirect to home page
            // history.push("/");         //history keeps track of pages visited so that we can go back to that page
        })
        .catch((e) => alert(e));  //if something went wrong, catch it
    };
    const register = (event) => {
        event.preventDefault();   //prevents page from refreshing
        console.log("register",email,password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {          //then means when everything went alright
            window.location="/"
            // history.push("/");   //created a user & logged in, redirect to home page
        })
        .catch((e) => alert(e.message))
    };


    return(
        <div style={{width:'100%',height:'750px',backgroundColor:'#FFB6C1',}}>       
  
        <form style={{display:'flex',flexDirection:'column', gap:'10px', backgroundColor:"white", width:'22%' ,padding:'40px', marginLeft:'560px', borderRadius:'5px' }} >
      
        <label><div><b>Login</b> or <b>Signup</b></div></label>
      
      <label>Email</label>

      <input name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} ></input>
      <label>Password</label>
      <input name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <label style={{display:'flex', flexDirection:'row'}}><div style={{minWidth:'190px'}}>By continuing, I agree to the </div><div style={{color:"#ff3c6f", minWidth:'90px'}}>Terms of use</div> & </label>
      <label><div style={{color:"#ff3c6f"}}>Privacy Policy</div></label>
      <button  key="login" onClick={login} >Continue</button>
      <button  key="signup" onClick={register}>Create new myntra account</button>


      <label style={{display:'flex', flexDirection:'row'}}><div>Have trouble logging in?</div><div style={{color:"#ff3c6f", minWidth:'90px'}}>Get help</div></label>
     </form>
    </div>
  

    )
    
}
export default Login ;