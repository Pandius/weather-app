import React from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";
import Chart from "./components/Chart";
const API_key = "5d65680bfc090611c55d6cc40bde1000";

export default class App extends React.Component {
  state = {
    temperature: 0,
    city: "",
    weather: ""
  };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=${API_key}&units=metric`
      )
      .then(({ data }) =>
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          weather: data.weather[0].description
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.fetchCityBySearch();
    }
  }

  fetchFormInput = cityInput => {
    this.setState({ city: cityInput });
  };

  fetchCityBySearch = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
        },uk&APPID=${API_key}&units=metric`
      )
      .then(({ data }) =>
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          weather: data.weather[0].description
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form fetchFormInput={this.fetchFormInput} />
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          weather={this.state.weather}
        />
        <Chart cityName={this.state.city} />
      </div>
    );
  }
}
