import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [savedUser, setSavedUser] = useState(null);

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user.name.trim() || !user.email.trim()) {
      alert("Please enter both Name and Email.");
      return;
    }

    setSavedUser(user);

    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">👤</div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700">
            User Profile
          </h2>

          <p className="text-gray-500">
            Enter your details to personalize your fitness journey.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block font-medium mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          💾 Save Profile
        </button>
      </form>

      {/* Display Saved Data */}
      {savedUser && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            Saved Profile
          </h3>

          <p className="mb-2">
            <span className="font-semibold">Name:</span>{" "}
            {savedUser.name}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {savedUser.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;