

import React, { Component } from 'react';
import ImageCard from './components/ImageCard';
import Container from './components/Container';
import Header from './components/Header';
import Navbar from './components/Navbar';
import dogs from './dogs.json';
import './App.css'

class App extends Component {
  state = { 
    message: "Click an image to begin!",
    dogs,
    score: 0,
    highScore: 0
  }

  componentDidMount() {
    this.setState({ dogs: this.shuffleArray(this.state.dogs) });
  }

  correctGuess = newArray => {
    const { highScore, score } = this.state;
    const newScore = score + 1;
    const newHighScore = Math.max(newScore, highScore);

    this.setState({
      dogs: this.shuffleArray(newArray),
      score: newScore,
      highScore: newHighScore
    });
  };

  resetDogs = dogs => {
    const resetDogs = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleArray(resetDogs);
  }

  shuffleArray = dogs => {
    let i = dogs.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = dogs[i];
      dogs[i] = dogs[j];
      data[j] = temp;
      i--;
    }
    return dogs;
  };

  selectDog = id => {
    let correctGuess = false;
    const newDogs = this.state.dogs.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          correctGuess = true;
        }
      }
      return newDogs;
    });
    correctGuess
      ? this.handleCorrectGuess(newDogs)
      : this.handleIncorrectGuess(newDogs);
  };

  render() {
    return (
      <div>
          <Navbar score={this.state.score} highScore={this.state.high} />
          <Header />
          <Container>
            {this.state.dogs.map(item => (
              <ImageCard
                key={item.id}
                id={item.id}
                handleClick={this.handleClick}
                image={item.image}
              />
            ))}
          </Container>
          <Footer />
      </div>
    );
  }
}

export default App;
