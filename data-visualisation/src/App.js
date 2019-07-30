import React from 'react';
import Titles from './components/title'
import Form from './components/form'
import Weather from './components/weather'
import axios from 'axios';
const API_key = '5d65680bfc090611c55d6cc40bde1000'



export default class App extends React.Component {

  state = {
    temperature: 0,
    city: ''
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=${API_key}`).then(({ data }) => this.setState({
      temperature: data.main.temp, city: data.name
    }))

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.fetchCityBySerch()
    }
  }

  fetchFormInput = (cityInput) => {
    this.setState({ city: cityInput })
  }

  fetchCityBySerch = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},uk&APPID=${API_key}`)
      .then(({ data }) => this.setState({
        temperature: data.main.temp, city: data.name
      }))

  }

  render() {
    return (
      <div className="App">
        <Titles />
        < Form fetchFormInput={this.fetchFormInput} />
        <Weather />

      </div>
    );
  }
}





