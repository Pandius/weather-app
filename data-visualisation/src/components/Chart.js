import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { SlowBuffer } from "buffer";
const API_key = "5d65680bfc090611c55d6cc40bde1000";

class Chart extends React.Component {
  state = {
    weatherForecast: []
  };

  componentDidMount(props) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityName},uk&APPID=${API_key}&units=metric`
      )
      .then(({ data }) => {
        this.setState({
          weatherForecast: data.list.map(
            threeHours => threeHours.main.temp)
        })

      })
  }





  render() {
    const temperatures = {


      labels: ['3h', '6h', '9h', '12h', '15h', '18h'],
      datasets: [{ label: 'Weather forecats 3h', data: this.state.weatherForecast }]

    };
    return (
      <div className="chart" >
        <Bar
          data={temperatures}
          width={100}
          height={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart;
