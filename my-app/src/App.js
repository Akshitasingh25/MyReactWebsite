import logo from './logo.svg';
import './App.css';
// import MyApp from './ReactRouter/MyApp.jsx'
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import MyApp2 from './AnimatedWS/MyApp2';



const App=()=> {
  return (
    <div className="App">
     <MyApp2/>

      
      {/* <h1 className="text-center">Welcome</h1> */}
      {/* <br/> */}
      {/* <button className="btn btn-light"> Welcome to future</button> */}
    </div>
  );
}

export default App;
