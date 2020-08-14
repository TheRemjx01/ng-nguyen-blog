import React from 'react';
import './App.css';

const onSecondItemClickHandler = (event) => {
  event.stopPropagation()
  console.log('App Btn clicked')
}

const onTableClickHandler = () => {
  console.log('table clicked')
}

function App() {
  return (
    <div className="App">
      <table onClick={onTableClickHandler}>
        <thead>
        <tr>
          <td>Project</td>
          <td>Author</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Shady Grove</td>
          <td>Aeolian</td>
        </tr>
        <tr>
          <td id="second-item" onClick={onSecondItemClickHandler}>Over the River, Charlie</td>
          <td>Dorian</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
