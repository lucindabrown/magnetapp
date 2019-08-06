import React, { Component } from 'react';
import './App.css';
import School from './School/School';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    schools: [
       ],
    stops: [
    ],
    grade: 2,
    rejections: 0,
    gifted: true,
    phbao: false
  };

  this.handleGradeChange = this.handleGradeChange.bind(this);
  this.handleRejectionsChange = this.handleRejectionsChange.bind(this);
  this.handlePhbaoChange = this.handlePhbaoChange.bind(this);
  this.handleGiftedChange = this.handleGiftedChange.bind(this);
  }
  


  componentDidMount() {
    fetch('https://lucindabrown.github.io/data/schools.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ schools: data });
    })
    .catch(console.log);
  }

 toggleNeighborhood(event) {
    //this.setState( {
    //  persons: [
    //    { name: 'Max', age: 28 },
    //   { name: event.target.value, age: 29 },
    //    { name: 'Stephanie', age: 26 }
    //  ]
    // } )
  }

  handleGradeChange(event) {
    this.setState({grade: event.target.value});
  }

  handleRejectionsChange(event) {
    this.setState({rejections: event.target.value});
  }

  handlePhbaoChange(event) {
    this.setState({phbao: !this.state.phbao});
  }

   handleGiftedChange(event) {
    this.setState({gifted: !this.state.gifted});
  }
  
  render () {
    const style = {
      backgroundColor: 'rgb(42, 103, 255)',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        
        <p>{''+this.state.phbao} </p>
        <p>{''+this.state.gifted} </p>

<div className="controls-container">

        <label >Grade:</label>
        <input type="number" value={this.state.grade} onChange={this.handleGradeChange} min="0" max="4" /> 
        
        <label >Rejections:</label>
        <input type="number" value={this.state.rejections} onChange={this.handleRejectionsChange} min="0" max="3" /> 
        
        <label >Phbao:</label>
        <input type="checkbox" checked={this.state.phbao} onChange={this.handlePhbaoChange} /> 

        <label >Gifted:</label>
        <input type="checkbox" checked={this.state.gifted} onChange={this.handleGiftedChange} /> 
</div>

        <div className="card-container">
          {this.state.schools.map(
              (object, i) => (
                (!this.state.gifted && object.gifted
                  || object.lowest_grade > this.state.grade ) ? false :
                <School data={object} 
                grade = {this.state.grade}
                rejections = {this.state.rejections}
                gifted = {this.state.gifted}
                phbao = {this.state.phbao} />
              )
          )}
        </div>
      </div>
    );
      }
}

export default App;
