import React, { useState } from 'react';
import { CompetenceAnswers } from '../types';

interface CompetenceAssessmentPageProps {
  onComplete: (answers: CompetenceAnswers) => void;
  onBack: () => void;
}

const CompetenceAssessmentPage: React.FC<CompetenceAssessmentPageProps> = ({ onComplete, onBack }) => {
  const [answers, setAnswers] = useState<Partial<CompetenceAnswers>>({});

  const questions = [
    { id: 'english', text: 'How comfortable are you with using English in the following professional tasks?' },
    { id: 'intercultural', text: 'How would you rate your past experience with intercultural collaboration (e.g., study abroad, working with international colleagues)?' },
    { id: 'tools', text: 'How would you rate your current comfort level with the following tools (Teams, Google Classroom, Zoom)?' },
    { id: 'syncFeatures', text: 'How would you rate your ability to effectively manage and use key synchronous features (e.g., Breakout Rooms, Polls, Virtual Whiteboards) to maximize student interaction during a live virtual class?' },
    { id: 'teamManagement', text: 'How would you rate your knowledge and preparedness to set up and proactively manage an internationally diverse student team to minimize common cultural conflicts?' },
    { id: 'questioning', text: 'How would you rate your skill in applying structured questioning techniques (e.g., What? So What? Now What?) and using specific, immediate chat-based feedback to foster an equitable, student-centered virtual discussion?' },
  ];

  const options: Array<'Professional' | 'Beginner' | 'No Experience'> = ['Professional', 'Beginner', 'No Experience'];

  const handleSelect = (questionId: keyof CompetenceAnswers, option: 'Professional' | 'Beginner' | 'No Experience') => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const isComplete = Object.keys(answers).length === questions.length;

  const handleSubmit = () => {
    if (isComplete) {
      onComplete(answers as CompetenceAnswers);
    }
  };

  const steps = [
    { label: 'Pre-COIL', number: 1 },
    { label: 'In-COIL', number: 2 },
    { label: 'Post-COIL', number: 3 },
    { label: 'Resource Hub', number: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 transform transition-all duration-500 ease-in-out relative">
         <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <button
              onClick={onBack}
              className="flex items-center px-4 py-2 rounded-md font-semibold text-white bg-gray-600 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back
            </button>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mb-12 pt-12 sm:pt-0">
          <div className="relative">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-600" aria-hidden="true"></div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const isActive = index === 0; // Pre-class is active
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 ${
                      isActive
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 border-2 border-gray-600 text-gray-400'
                    }`}>
                      {step.number}
                    </div>
                    <p className={`mt-2 text-center text-sm font-semibold ${
                      isActive ? 'text-cyan-400' : 'text-gray-400'
                    }`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mb-8">
            <h1 className="text-3xl font-bold text-cyan-400">COIL Self-assessment</h1>
            <p className="text-gray-300 mt-2">Answer these questions to generate your personalized COIL training pathway.</p>
        </div>
        
        <div className="space-y-8">
          {questions.map(q => (
            <div key={q.id} className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg font-medium text-gray-200 mb-4" id={`${q.id}-label`}>{q.text}</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4" role="group" aria-labelledby={`${q.id}-label`}>
                {options.map(option => {
                  let optionText: string = option;
                  if (q.id === 'english') {
                    if (option === 'Professional') {
                      optionText = 'Professional (>= B2)';
                    } else if (option === 'Beginner') {
                      optionText = 'Beginner (<B2)';
                    }
                  }
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(q.id as keyof CompetenceAnswers, option)}
                      className={`flex-1 px-4 py-3 rounded-lg font-semibold text-white border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-cyan-500 ${
                          answers[q.id as keyof CompetenceAnswers] === option
                          ? 'bg-blue-600 border-blue-500 scale-105 shadow-lg'
                          : 'bg-gray-600 border-gray-500 hover:bg-gray-500 hover:border-gray-400'
                      }`}
                      aria-pressed={answers[q.id as keyof CompetenceAnswers] === option}
                    >
                      {optionText}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
            <button 
                onClick={handleSubmit}
                disabled={!isComplete}
                className={`px-12 py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
                    isComplete 
                    ? 'bg-green-600 hover:bg-green-700 transform hover:scale-105' 
                    : 'bg-gray-500 cursor-not-allowed'
                }`}
            >
                See My Training Pathway
            </button>
        </div>
      </div>
    </div>
  );
};

export default CompetenceAssessmentPage;
