import { useState } from "react";

function Motivation() {
  const [isMotivated, setIsMotivated] = useState(true);

  const toggleMessage = () => {
    setIsMotivated((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">💪</div>

        <div>
          <h2 className="text-2xl font-bold text-purple-700">
            Daily Motivation
          </h2>

          <p className="text-gray-500">
            Stay motivated throughout your fitness journey.
          </p>
        </div>
      </div>

      {/* Motivation Message */}
      <div className="bg-purple-50 rounded-xl p-8 text-center border border-purple-200">
        <h3 className="text-3xl font-bold text-purple-700">
          {isMotivated
            ? "🚶 Let's Walk!"
            : "💪 Great Job! Keep Going!"}
        </h3>

        <p className="text-gray-600 mt-4">
          {isMotivated
            ? "Every step you take brings you closer to a healthier life."
            : "Consistency beats perfection. Keep moving every day!"}
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleMessage}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
        >
          {isMotivated
            ? "Show Next Motivation"
            : "Show Previous Motivation"}
        </button>
      </div>
    </div>
  );
}

export default Motivation;