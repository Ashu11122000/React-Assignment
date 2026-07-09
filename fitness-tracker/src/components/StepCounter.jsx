import { useState } from "react";

function StepCounter() {
  const [steps, setSteps] = useState(0);

  const dailyGoal = 5000;

  const progress = Math.min((steps / dailyGoal) * 100, 100);

  const addStep = () => {
    setSteps((prevSteps) => prevSteps + 1);
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">👣</div>

        <div>
          <h2 className="text-2xl font-bold text-green-700">
            Today's Steps
          </h2>

          <p className="text-gray-500">
            Keep moving towards your daily goal.
          </p>
        </div>
      </div>

      {/* Step Count */}
      <div className="text-center my-8">
        <h1 className="text-6xl font-extrabold text-green-600">
          {steps}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          Steps Walked
        </p>
      </div>

      {/* Goal */}
      <div className="mb-2 flex justify-between text-sm font-medium">
        <span>Daily Goal</span>
        <span>{dailyGoal} Steps</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <p className="text-center mt-3 font-semibold text-green-700">
        {progress.toFixed(1)}% Completed
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={addStep}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
        >
          ➕ Add Step
        </button>

        <button
          onClick={resetSteps}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default StepCounter;