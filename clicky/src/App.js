

import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import dogs from "./dogs.json";
import './App.css'

class App extends React.Component {
  state = { 
    message: "Click an image to begin!",
    dogs,
    unSelectedDogs: dogs,
    score: 0,
    highScore: 0
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectDog = id => {
    const findDog = this.state.unSelectedDogs.find(item => item.id === id);

    if(findDog === undefined) {
      //failed to select a new dog
      this.setState({
        message: "You guessed incorrectly!",
        highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        score: 0,
        dogs: dogs,
        unSelectedDogs: dogs
      });
    }
  
    else {
      //correctly selected new dog
      const newDogs = this.state.unSelectedDogs.filter(item => item.id !== id);

      this.setState({
        message: "You guessed correctly!",
        score: this.state.score + 1,
        dogs: dogs,
        unSelectedDogs: newDogs
      });
    }

    this.shuffleArray(dogs);
  };

  //wrap around components
  render() {
    return (
      <Wrapper>
          <Navbar 
            message = {this.state.message}  
            score={this.state.score} 
            highScore={this.state.highScore} 
            /> 
          <Header />
          {
            this.state.dogs.map(dog => (
              <ImageCard  
                id={dog.id}
                image={dog.image}
                selectDog={this.selectDog}
                score={this.state.score}
                key={dog.id}
              />
            ))
          }
      </Wrapper>
    );
  }
} 

export default App;
