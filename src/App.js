import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/navbar.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      q: '',
      current: '',
      location: ''
    }
  }

  handleChange = async (event) => {
    this.setState({ [event.target.name]: event.target.value }, async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9e207a7861094947a3022901222704&q=${this.state.q}`);
      const data = await response.json();
      this.setState({ current: data.current, location: data.location });
    })
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <div className="weather">
          <form>
            <input type="search" className="search" name="q" placeholder="Enter the city name here..." onChange={this.handleChange} />
            <h2>Weather:</h2>
            {
                this.state.location === undefined ? <ul></ul> : <ul>
                  <li>Location: {this.state.location.region ? this.state.location.region : ''}</li>
                  <li>Temperature: {this.state.current.temp_c ? this.state.current.temp_c : ''} °C/ {this.state.current.temp_f ? this.state.current.temp_f : ''} °F</li>
                  <li>Climate: {this.state.current.condition ? this.state.current.condition.text : ''}</li>
                  {this.state.current.condition ? 
                  <li><img src={`http:\\${this.state.current.condition.icon}`} alt=''/></li> :
                  <li></li>}
                </ul>
            }
          </form>
        </div>
      </div>
    );
  }
}

export default App;
