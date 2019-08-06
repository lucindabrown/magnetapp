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
        <div className="hero">
          <div className="copy">
            <p className="lausd">los angeles unified school district</p>
            <h1>Magnet School Finder</h1>
            <h2><p>Discover some of the most popular K-5 magnets in Los Angeles.</p>

            <p>Learn which bus stops serve which schools. </p>

            <p><strong>Understand the odds of getting in at every grade level.</strong></p>
            </h2>
          </div>
        </div>
        <div className="map-module">
          <div className="copy">
          <h2><p>There are over 1200 LAUSD bus stops operating every day. They take kids across town and back, for free, as part of the magnet program.</p>
          </h2>
          </div>
        </div>
        <div className="controls-container">
          <h2 className="odds">Understand Your Odds</h2>
          <div className="knob">
            <label className="label-toggle">My child will be in this grade next school year:</label>
            <input type="number" value={this.state.grade} onChange={this.handleGradeChange} min="0" max="5" />
          </div>
        
          <div className="knob">
            <label className="label-toggle">Number of consecutive years my child has been rejected by the lottery</label>
            <input type="number" value={this.state.rejections} onChange={this.handleRejectionsChange} min="0" max="3" /> 
          </div>
        
          <div className="knob">
            <input type="checkbox" checked={this.state.phbao} onChange={this.handlePhbaoChange} />
            <label className="label-toggle">My home school is PHBAO</label>
          </div>
        
          <div className="knob">
            <input type="checkbox" checked={this.state.gifted} onChange={this.handleGiftedChange} />
            <label className="label-toggle">My child has tested gifted or is likely to test gifted in second grade</label>
          </div>
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
