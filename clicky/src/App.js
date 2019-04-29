import React from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import dogs from "./dogs.json";
import './App.css';

class App extends React.Component {
  state = { dogs }


  //click event here

  render() {
    return (
      <Wrapper>
        <h1 className="title">Image List</h1>
        {this.state.dog.map(dog => 
          <ImageCard
          name={dog.name}
          image={dog.image}
          key={dog.id}
        />
        )}
      </Wrapper>
    );
  }
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
