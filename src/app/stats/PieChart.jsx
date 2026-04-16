"use client";
import { useFriendsData } from "@/context/FriendsProvider";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Chart = () => {
  const { timeLines } = useFriendsData();

  // show empty if stats not found
  if (timeLines.length === 0) {
    return (
      <div className="flex justify-center flex-1 items-center text-2xl mt-4 sm:text-5xl text-gray-500 min-h-20">
        There is no Stats
      </div>
    );
  }

  const action = timeLines.reduce((data, { type }) => {
    data[type] = (data[type] || 0) + 1;
    return data;
  }, {});

  const data = [
    { name: "Text", value: action.text, fill: "#7E35E1" },
    { name: "Call", value: action.call, fill: "#244D3F" },
    { name: "Video", value: action.video, fill: "#37A163" },
  ];
  return (
    <div className="p-8">
      <h3 className="text-success-content font-medium text-xl/normal">
        By Interaction Type
      </h3>
      {/* chart */}
      <div className="mt-6 flex justify-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend className="mt-4" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};
export default Chart;
