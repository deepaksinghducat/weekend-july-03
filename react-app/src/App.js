import logo from './logo.svg';
import './App.css';
import Parent  from './components/Parent';
import StateHook from './components/StateHook';
import Employee from './components/Employee';
import Fragments from './components/Fragments';
import { Fragment } from 'react';
import CustomFragment from './components/CustomFragment';

function App() {
  return (
    <CustomFragment>
      {/* <Employee test="fsadfsaf" /> */}
      <Fragments/>
      {/* <div id="fsadfasdf">
        <div>
          <div>
            <div>
              dfsadfsafdsa
            </div>
          </div>
        </div>
      </div> */}
    </CustomFragment>
  );
}

export default App;
