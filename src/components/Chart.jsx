import React from "react";
import "./Chart.scss";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Preloader from "./common/Preloader";

const Chart = ({
  data,
  isFetching,
  currentWeather,
  isPressure,
  isWindspeed,
}) => {
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.temperature));
    const dataMin = Math.min(...data.map((i) => i.temperature));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  if (isFetching || data.length === 0) {
    return <Preloader />;
  } else
    return (
      <div>
        <div className="chart">
          <h3>Температура</h3>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
            >
              <Area
                type="monotone"
                dataKey="temperature"
                stroke="#8884d8"
                fill="url(#splitColor)"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis
                dy={10}
                tick={{ fontSize: 12 }}
                dataKey="time"
                angle={20}
                interval="preserveStartEnd"
              />
              <YAxis />
              <ReferenceLine x={currentWeather} stroke="red" label="Сейчас" />
              <Tooltip />
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="red" stopOpacity={1} />
                  <stop offset={off} stopColor="blue" stopOpacity={1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {isWindspeed ? (
          <div className="chart">
            <h3>Скорость ветра</h3>
            <ResponsiveContainer width="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="windspeed"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis
                  dy={10}
                  tick={{ fontSize: 12 }}
                  dataKey="time"
                  angle={20}
                />
                <YAxis />
                <ReferenceLine x={currentWeather} stroke="red" label="Сейчас" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : null}

        {isPressure ? (
          <div className="chart">
            <h3>Облачность</h3>
            <ResponsiveContainer width="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="pressure"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis
                  dy={10}
                  tick={{ fontSize: 12 }}
                  dataKey="time"
                  angle={20}
                />
                <YAxis />
                <ReferenceLine x={currentWeather} stroke="red" label="Сейчас" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : null}
      </div>
    );
};

export default Chart;
