import React from 'react';

interface WelcomePageProps {
  onGetStarted: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-cyan-400">The NNU COIL Journey</h1>
      </div>
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-white">Welcome to the COIL Journey!</h2>
        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 text-lg space-y-4">
          <p>
            We are excited to explore a new way of teaching. But we also know that for <strong>72% of us</strong>, this is a brand-new path.
          </p>
          <p>
            You've told us you're optimistic (<strong>66% believe it's feasible!</strong>), but you're also anxious. You've asked:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>"Am I ready?"</li>
            <li>"Is my English good enough?" (<strong>53% of us feel this</strong>)</li>
            <li>"How do I even start?"</li>
          </ul>
          <p className="font-semibold">
            This course is your guide. You are not alone, and we have a plan to support you every step of the way.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={onGetStarted}
          className="px-12 py-4 rounded-lg font-bold text-white text-lg bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
