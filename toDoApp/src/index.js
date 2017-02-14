import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import About from './About';
import './index.css';

import ToDoItemHolder from './ToDoItemHolder.component';
// import ToDoItem from './ToDoItem.component';
// import AddItemBtn from './AddItemBtn.component';


// import {Router, Route, Link, browserHistory} from 'react-router';

ReactDOM.render(
    <div>
      <ToDoItemHolder>
      </ToDoItemHolder>
    </div>
  ,
  document.getElementById('root')
);





// <Router history={browserHistory}>
//     <Route path='/' component={App}/>
//     <Route path='/about' component={About}/>
// </Router>
