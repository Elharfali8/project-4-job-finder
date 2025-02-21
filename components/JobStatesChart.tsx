'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type JobState = {
  status: string;
  count: number;
};

type JobStatesChartProps = {
  data: JobState[];
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function JobStatesChart({ data }: JobStatesChartProps) {
  return (
      <div className="h-60 w-full">
          
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ status, count }) => `${status} (${count})`}

          >
            {data.map((entry, index) => (
              <Cell key={entry.status} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default JobStatesChart;
