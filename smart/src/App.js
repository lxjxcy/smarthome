import React, {
  Component
} from 'react';
import './App.css';
import Tan from "./Components/tan";
import Sensor from "./Components/sensor";
import Socket from "./Components/socket";
import Curtain from "./Components/curtain";
import Lamp from "./Components/lamp";
import Panel from "./Components/panel"
import Purification from "./Components/purification"
import Scenepanel from "./Components/scenepanel"
import Doorlock from "./Components/doorlock"
import Quickpanel from "./Components/quickpanel"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
                <Doorlock></Doorlock>
                <purification></purification>
                <Scenepanel></Scenepanel>
                <Sensor></Sensor>
                <Lamp></Lamp>
                <Purification></Purification>
                <Panel></Panel>
                <Socket></Socket>
                 <Quickpanel></Quickpanel>
                
                <Curtain></Curtain>


              
            </div>
        </Router>
    );
  }
}

export default App;
// <Switch>
//                   <Redirect exact from='/' to='scenepanel'/>
//                   <Route path='/scenepanel' component={Scenepanel}/>
//                    <Route path='/sensor' component={Sensor}/>
//                   <Route path='/lamp' component={Lamp}/>
//                    <Route path='/purification' component={purification}/>
//                    <Route path='/panel' component={Panel}/>
//                   <Route path='/socket' component={Socket}/>
//                    <Route path='/curtain' component={Curtain}/>
//               </Switch>