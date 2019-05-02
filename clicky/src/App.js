import React from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import dogs from "./dogs.json";
import './App.css';

class App extends React.Component {
  state = { 
    dogs 
  };

  //click event here
  rearrangeImage = id => {
    const dogs = this.state.dogs.filter(dog => dog.id !== id);
    this.setState({ dogs });
  }


  //wrap around components
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar> 
        <Header></Header>
          {this.state.dogs.map(dog => (
            <ImageCard
              // rearrangeImage={this.rearrangeImage}
              id={dog.id}
              image={dog.image}
              key={dog.id}
            />
          ))}
      </Wrapper>
    );
  }
}


export default App;
