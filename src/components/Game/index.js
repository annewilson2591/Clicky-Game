import React, { Component } from "react";
import NavScores from "../NavScores";
import Header from "../Header";
import Container from "../Container";
import DogCard from "../DogCard";
import Footer from "../Footer";
import dogs from "../../dogs.json";

class Game extends Component {
    state = {
      dogs,
      score: 0,
      highScore: 0
    };

    componentDidMount() {
        this.setState({ dogs: this.shuffleDogs(this.state.dogs) });
      }

    handleCorrectGuess = newDogs => {
    const { highScore, score } = this.state;
    const newScore = score + 1;
    const newHighScore = Math.max(newScore, highScore);

    this.setState({
        dogs: this.shuffleDogs(newDogs),
        score: newScore,
        highScore: newHighScore
        });
    };

    handleIncorrectGuess = dogs => {
        this.setState({
            dogs: this.resetDogs(dogs),
            score: 0
        });
    };

    resetDogs = dogs => {
      const resetDogs = dogs.map(dogs => ({ ...dogs, clicked: false }));
      return this.shuffleDogs(resetDogs);
    };

    shuffleDogs = dogs => {
        let i = dogs.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = dogs[i];
          dogs[i] = dogs[j];
          dogs[j] = temp;
          i--;
        }
        return dogs;
      };

    handleDogClick = id => {
    let guessedCorrectly = false;
    const newDogs = this.state.dogs.map(dog => {
        const newDog = { ...dog };
        if (newDog.id === id) {
        if (!newDog.clicked) {
            newDog.clicked = true;
            guessedCorrectly = true;
        }
        }
        return newDog;
    });
    guessedCorrectly
        ? this.handleCorrectGuess(newDogs)
        : this.handleIncorrectGuess(newDogs);
    };

    render() {
        return (
          <div>
            <NavScores score={this.state.score} highScore={this.state.highScore} />
            <Header />
            <Container>
              {this.state.dogs.map(dog => (
                <DogCard
                  key={dog.id}
                  id={dog.id}
                  shake={!this.state.score && this.state.highScore}
                  handleClick={this.handleDogClick}
                  image={dog.image}
                />
              ))}
            <Footer />
            </Container>
          </div>
        );
      }
    }
    
    export default Game;