import React, { useState, useEffect, useMemo } from 'react';
import { Course, Step } from '../types';
import StepContentRenderer from './StepContentRenderer';

interface CoursePlayerModalProps {
  course: Course;
  onClose: () => void;
  onCompleteCourse: (courseId: string) => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-6 h-6'}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


const CoursePlayerModal: React.FC<CoursePlayerModalProps> = ({ course, onClose, onCompleteCourse }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState({ moduleIndex: 0, stepIndex: 0 });
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({});

  const allSteps = useMemo(() => course.modules.flatMap((mod, modIdx) => 
      mod.steps.map((step, stepIdx) => ({...step, moduleIndex: modIdx, stepIndex: stepIdx}))
  ), [course]);
  
  const currentStep = course.modules[currentStepIndex.moduleIndex]?.steps[currentStepIndex.stepIndex];
  
  const flatStepIndex = useMemo(() => {
      let count = 0;
      for (let i = 0; i < currentStepIndex.moduleIndex; i++) {
          count += course.modules[i].steps.length;
      }
      return count + currentStepIndex.stepIndex;
  }, [currentStepIndex, course.modules]);

  const isFirstStep = flatStepIndex === 0;
  const isLastStep = flatStepIndex === allSteps.length - 1;

  const isCurrentStepCompleted = !!completedSteps[currentStep.stepId] || (currentStep.type !== 'quiz' && currentStep.type !== 'matchingQuiz');
  
  const totalQuizSteps = useMemo(() => allSteps.filter(step => step.type === 'quiz' || step.type === 'matchingQuiz').length, [allSteps]);
  
  const correctlyAnsweredQuizSteps = useMemo(() => {
    return Object.keys(completedSteps).filter(stepId => {
        const step = allSteps.find(s => s.stepId === stepId);
        return step && (step.type === 'quiz' || step.type === 'matchingQuiz');
    }).length;
  }, [completedSteps, allSteps]);
  
  const quizScore = totalQuizSteps > 0 ? (correctlyAnsweredQuizSteps / totalQuizSteps) * 100 : 100;
  const passedQuiz = quizScore >= 80;


  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const goToStep = (moduleIndex: number, stepIndex: number) => {
    setCurrentStepIndex({ moduleIndex, stepIndex });
  };
  
  const goToNextStep = () => {
    if (!isLastStep) {
      const nextFlatIndex = flatStepIndex + 1;
      const { moduleIndex, stepIndex } = allSteps[nextFlatIndex];
      goToStep(moduleIndex, stepIndex);
    }
  };

  const goToPrevStep = () => {
    if (!isFirstStep) {
      const prevFlatIndex = flatStepIndex - 1;
      const { moduleIndex, stepIndex } = allSteps[prevFlatIndex];
      goToStep(moduleIndex, stepIndex);
    }
  };
  
  const handleMarkAsComplete = () => {
    onCompleteCourse(course.courseId);
  }

  const handleQuizCorrect = () => {
    setCompletedSteps(prev => ({...prev, [currentStep.stepId]: true}));
  }

  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 text-white w-full h-full max-w-7xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-cyan-400">{course.courseTitle}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon className="w-8 h-8"/>
          </button>
        </header>

        <div className="flex flex-grow min-h-0">
          {/* Left Panel: Navigation */}
          <nav className="w-1/3 bg-gray-900 p-6 overflow-y-auto hidden md:block">
            <h3 className="text-lg font-semibold text-gray-400 mb-4 uppercase tracking-wider">Table of Contents</h3>
            <ul className="space-y-4">
              {course.modules.map((module, moduleIndex) => (
                <li key={module.moduleId}>
                  <h4 className="font-bold text-cyan-500 mb-2">{module.moduleTitle}</h4>
                  <ul className="space-y-1 border-l-2 border-gray-700 ml-2">
                    {module.steps.map((step, stepIndex) => (
                      <li key={step.stepId}>
                        <button
                          onClick={() => goToStep(moduleIndex, stepIndex)}
                          className={`w-full text-left pl-4 py-2 -ml-0.5 rounded-r-md transition-colors ${
                            currentStepIndex.moduleIndex === moduleIndex && currentStepIndex.stepIndex === stepIndex
                              ? 'bg-blue-600 text-white border-l-2 border-blue-400'
                              : 'text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {step.stepTitle}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel: Content */}
          <main className="flex-1 flex flex-col min-h-0">
            <div className="flex-grow p-6 md:p-8 overflow-y-auto">
              {currentStep && <StepContentRenderer step={currentStep} onQuizCorrect={handleQuizCorrect} />}
            </div>

            {/* Footer: Navigation */}
            <footer className="p-4 bg-gray-900 border-t border-gray-700 flex justify-between items-center">
              <button
                onClick={goToPrevStep}
                disabled={isFirstStep}
                className="px-6 py-2 rounded-md font-semibold text-white bg-gray-600 hover:bg-gray-700 disabled:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {isLastStep ? (
                 <div className="text-right">
                    <button
                        onClick={handleMarkAsComplete}
                        disabled={totalQuizSteps > 0 && !passedQuiz}
                        className="px-6 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        Mark as Complete
                    </button>
                    {totalQuizSteps > 0 && (
                        <p className={`mt-1 text-xs ${passedQuiz ? 'text-green-400' : 'text-red-400'}`}>
                            Quiz Score: {correctlyAnsweredQuizSteps}/{totalQuizSteps} ({quizScore.toFixed(0)}%).
                            You need 80% to pass.
                        </p>
                    )}
                </div>
              ) : (
                <button 
                  onClick={goToNextStep}
                  disabled={!isCurrentStepCompleted}
                  className="px-6 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              )}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayerModal;