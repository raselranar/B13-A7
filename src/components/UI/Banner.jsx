import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="mt-12 mb-20">
      <div className="space-y-4 text-center">
        <h2 className="text-5xl">Friends to keep close in your life</h2>
        <p className="text-gray-500 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div className="mt-8 flex justify-center mb-10">
        <button className="btn text-white bg-success-content">
          <FaPlus /> Add a Friend
        </button>
      </div>
      <div className="grid gap-4 *:w-full *:h-full place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card bg-base-100 shadow-sm p-8 text-center">
          <p className="text-success-content font-semibold text-3xl/relaxed">
            10
          </p>
          <h3 className="text-gray-500 text-lg">Total Friends</h3>
        </div>
        <div className="card bg-base-100 shadow-sm p-8 text-center">
          <p className="text-success-content font-semibold text-3xl/relaxed">
            3
          </p>
          <h3 className="text-gray-500 text-lg">On Track</h3>
        </div>
        <div className="card bg-base-100 shadow-sm p-8 text-center">
          <p className="text-success-content font-semibold text-3xl/relaxed">
            6
          </p>
          <h3 className="text-gray-500 text-lg">Need Attention</h3>
        </div>
        <div className="card bg-base-100 shadow-sm p-8 text-center">
          <p className="text-success-content font-semibold text-3xl/relaxed">
            12
          </p>
          <h3 className="text-gray-500 text-lg">Interactions This Month</h3>
        </div>
      </div>
    </section>
  );
};
export default Banner;
