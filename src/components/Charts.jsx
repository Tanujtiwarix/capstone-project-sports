import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Charts({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md">
        <h3 className="mb-2 font-semibold">Performance Trend</h3>
        <LineChart width={350} height={250} data={data}>
          <CartesianGrid stroke="#555" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="runs" stroke="#a855f7" />
        </LineChart>
      </div>

      <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md">
        <h3 className="mb-2 font-semibold">Runs Distribution</h3>
        <BarChart width={350} height={250} data={data}>
          <CartesianGrid stroke="#555" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="runs" fill="#3b82f6" />
        </BarChart>
      </div>

    </div>
  );
}

export default Charts;