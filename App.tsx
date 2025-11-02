import React from 'react';
import WelcomePage from './components/WelcomePage';
import CompetenceAssessmentPage from './components/CompetenceAssessmentPage';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { CompetenceAnswers } from './types';

function App() {
  const [view, setView] = useLocalStorage<'welcome' | 'assessment' | 'dashboard'>('coilAppView', 'welcome');

  const handleWelcomeComplete = () => {
    setView('assessment');
  };
  
  const handleAssessmentComplete = (answers: CompetenceAnswers) => {
    console.log("Assessment completed with answers:", answers);
    setView('dashboard');
  };

  const handleGoBack = () => {
    setView('welcome');
  };

  const handleGoHome = () => {
    setView('welcome');
  };

  if (view === 'welcome') {
    return <WelcomePage onGetStarted={handleWelcomeComplete} />;
  }
  
  if (view === 'assessment') {
    return <CompetenceAssessmentPage onComplete={handleAssessmentComplete} onBack={handleGoBack} />;
  }

  return <Dashboard onGoHome={handleGoHome} />;
}

export default App;
