import React from "react";
import "./Chart.scss";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Preloader from "./common/Preloader";

const Chart = ({ data, isFetching }) => {
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
      <div className="chart">
        <ResponsiveContainer>
          <AreaChart
            // width={1200}
            // height={700}
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
            <XAxis dataKey="time" interval="preserveStart" angle={20} />
            <YAxis />
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
    );
};

export default Chart;
