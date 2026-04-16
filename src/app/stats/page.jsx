import Chart from "./PieChart";

const Stats = () => {
  return (
    <section className="space-x-6 flex-1 flex flex-col">
      <h2 className=" text-3xl/snug sm:text-5xl/normal font-bold">
        Friendship Analytics
      </h2>
      <Chart />
    </section>
  );
};
export default Stats;
