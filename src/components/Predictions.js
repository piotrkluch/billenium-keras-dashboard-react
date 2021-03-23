import React from 'react';
import axios from 'axios';


class Predictions extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        predictions: []
      };
    }
  
    componentDidMount() {
      this.tick();
      this.interval = setInterval(() => this.tick(), 10000);
    }
  
    tick() {
      let self = this;
      axios({
        headers: {'X-API-Key': localStorage.getItem('apiKey')},
        method: 'get',
        url: 'http://127.0.0.1:8080/api/v1/predictions'
      })
      .then(function (response) {
        self.setState(state => ({
          predictions: response.data
        }));
        console.log(self.state);
      });
    }
  
    predict(event) {
      if (event.key !== 'Enter') {
        return;
      }
      let self = this;
      axios({
        headers: {'X-API-Key': localStorage.getItem('apiKey')},
        method: 'post',
        url: 'http://127.0.0.1:8080/api/v1/predict',
        data: {data: [event.target.value]}
      })
      .then(function (response) {
        self.setState(state => ({
          predictions: [
            ...state.predictions,
            ...response.data
          ]
        }));
        console.log(self.state);
      });
    }
  
    render() {
      return (
      <>
        <input className="App-Predictions-Input" type="text" onKeyDown={(event) => this.predict(event)}></input>
        {this.state.predictions &&
         this.state.predictions.slice(0).reverse().map(prediction => {
          return <div>{prediction.sentence} - {prediction.language}</div>
        })}
      </>);
    }
  
  }

  export default Predictions;