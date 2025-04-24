import React from "react";

const steps = [
  {
    title: "🎵 Browse Music",
    description:
      "Explore thousands of songs by genre, artist, or mood. Use the search bar at the top to quickly find your favorite tracks.",
  },
  {
    title: "▶️ Play Songs",
    description:
      "Click the play button next to any song to start streaming instantly. You can pause, skip, or loop tracks from the player at the bottom.",
  },
  {
    title: "📂 Create Playlists",
    description:
      "Add songs to your personal playlists by clicking the 'Add to Playlist' icon. Manage your playlists from the 'My Library' tab.",
  },
  {
    title: "🧑 Manage Account",
    description:
      "Sign in to sync your music preferences. Go to 'Profile' to update your info, change your password, or upgrade to premium.",
  },
  {
    title: "🌙 Dark Mode",
    description:
      "Toggle between light and dark themes from the settings menu for a more comfortable experience anytime.",
  },
];

const Help = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        🎧 How to Use This Site
      </h1>
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {step.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
