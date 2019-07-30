import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
const API_key = "5d65680bfc090611c55d6cc40bde1000";

class Chart extends React.Component {
  state = { weatherForecast: [] };

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Manchester,uk&APPID=${API_key}&units=metric`
      )
      .then(({ data }) =>
        this.setState({
          weatherForecast: data
        })
      );
  }

  // formattingData() {
  //   const formattedData = this.state.weatherForecast.map(
  //     threeHours => threeHours.main.temp
  //   );
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.fetchCityBySearch();
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state}
          width={100}
          height={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart;
