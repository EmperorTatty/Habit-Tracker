import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../Pages/Dashboard.css';

const Dashboard = () => {
  const [userFirstName, setUserFirstName] = useState('User');
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const firstName = user.displayName.split(' ')[0];
      setUserFirstName(firstName);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
      });
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="absolute top-4 left-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Log Out
      </button>

      <div className="p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userFirstName}!</h1>
          <p className="text-gray-600">Here's an overview of your habits today:</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Habits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800">Morning Exercise</h3>
              <p className="text-gray-600">Status: <span className="text-green-500">Completed</span></p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Mark as Complete
              </button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habit Streaks</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">You have a 5-day streak for <span className="font-semibold">Meditation</span>!</p>
            <p className="text-gray-600">Keep it up!</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Progress</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Progress charts will go here.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calendar</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Calendar view will go here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
