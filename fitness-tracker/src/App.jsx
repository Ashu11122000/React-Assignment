import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import StepCounter from "./components/StepCounter";
import Motivation from "./components/Motivation";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="grow max-w-7xl mx-auto w-full px-6 py-10">
        {/* Dashboard Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Fitness Tracker Dashboard
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Track your daily activity, manage your profile, stay motivated,
            and check the weather before your workout.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <UserProfile />
            <StepCounter />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Motivation />
            <Weather />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;