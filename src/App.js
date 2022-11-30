import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./firebase";

import './style.css';
import './utils.css';
import { useEffect, useState } from "react";
import Bag from "./Bag";
function App() {
const [bag,setBag]=useState([])
  const [user,setUser]=useState({});
  console.log("render")
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {  //everytime the authentication state changes, get the authUser
      if(authUser){
        console.log(authUser)
        //user is logged in, push them into the data layer
       setUser(authUser)
      }
      else{
        //user is logged out, set user to null
        setUser(null)
      }
    });

    return () => {   //clean up operations go in here
      unsubscribe();  //if app rerenders, it detaches it from listener, and reattach it with a new listener
    }
  }, []);

  const removeHandler =(val)=>{
    console.log(bag)
    let newbag=bag;
    const index = bag.findIndex(   //check to see if the index exists, findIndex is an inbuilt function
    (bagItem) => bagItem?.id === val?.id
);
console.log("bag",bag,"index",index,"newbag",newbag, val)

if(index >= 0) {
    //item exists in bag, remove it
    newbag.splice(index, 1);   //remove one item starting from index
} 
setBag([...newbag,]);
  }
const addHandler=(val)=>{
  console.log(bag)
setBag([...bag,val])
console.log(bag)
}
return (
<Router>
  <Switch>
<Route exact path="/">
<Header user={user} bag={bag}></Header>
<Body setBag={setBag} bag={bag} addHandler={addHandler}></Body>
</Route>
  
<Route exact path="/login">
<Header user={user}  bag={bag}></Header>
<Login  ></Login>
</Route>
<Route exact path="/bag">
<Header user={user}  bag={bag}></Header>
<Bag setBag={setBag} bag={bag} removeHandler={removeHandler}></Bag>
</Route>
  </Switch>
</Router>



  );
}

export default App;
