import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Score from '../Score/Score.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Card from '../Card/Card.js';

class App extends Component{ 
    state = {
        score: 0,
        topScore: 0,
        selected: [],
        shake: "",
        message1: "Select an image to begin!",
        message2: "",
        alertType: "info",
        topScoreType: "info",
    };
    shuffle = id => {
        this.setState({
            cards: this.state.cards.sort(function(a,b){
                    return 0.5 - Math.random();
                }
            )
        })
    };

    incrementClick = id => {
        let ids = this.state.selected
        const incorrect = ids.includes(id);
        if(!incorrect){
            this.state.selected.push(id);
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
            if(newScore === 12){
                this.setState({
                    score: 0,
                    selected: [],
                    topScore: newScore,
                    message1: "You win!",
                    message2: "",
                    alertType: "success"
                });
            }
            else if(newScore > this.state.topScore){
                this.setState({
                    topScore: newScore, 
                    message1: "Yes!!!",
                    message2: "You guessed correctly!",
                    alertType: "success",
                    topScoreType: "success"
                });
            }
            else{
                this.setState({
                    message1: "Yes!!!",
                    message2: "You guessed correctly!",
                    alertType: "success",
                    topScoreType: "info"
                });
            }
        }
        else{
            this.setState({
                score: 0,
                selected: [], 
                shake: "incorrect",
                message1: "WRONG!",
                message2: "Start over and try again!",
                alertType: "danger",
                topScoreType: "info"
            });
            setTimeout(function(){ 
                this.setState({ shake: "" }); 
            }.bind(this), 1000);
        }
    };

    render(){
        return(
            <div className="app">
                <Header/>
                <Score 
                    shake={this.state.shake}
                    score={this.state.score} 
                    topScore={this.state.topScore}
                    alertType={this.state.alertType}
                    topScoreType={this.state.topScoreType}
                />
                <Main 
                    shake={this.state.shake}
                >
                    {this.state.cards.map((cards,i) => (
                        <Card 
                            id={cards.id} 
                            name={cards.name} 
                            image={cards.image} 
                            key={i} 
                            increment={this.incrementClick} shuffle={this.shuffle}
                        />
                    ))}
                </Main>
                <Footer/>
            </div>
        );
    };
}

export default App;