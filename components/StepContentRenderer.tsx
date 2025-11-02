
import React, { useState, useEffect } from 'react';
import { Step, MatchingQuiz } from '../types';

interface StepContentRendererProps {
  step: Step;
  onQuizCorrect: () => void;
}

const MatchingQuizRenderer: React.FC<{ quizData: MatchingQuiz; onQuizCorrect: () => void }> = ({ quizData, onQuizCorrect }) => {
  const [userMatches, setUserMatches] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMatchChange = (scenarioId: string, feedbackId: string) => {
    setUserMatches(prev => ({ ...prev, [scenarioId]: feedbackId }));
  };

  const allScenariosMatched = quizData.scenarios.every(s => userMatches[s.id]);

  useEffect(() => {
    if (isSubmitted) {
      const isAllCorrect = quizData.scenarios.every(s => userMatches[s.id] === quizData.correctMatches[s.id]);
      if (isAllCorrect) {
        onQuizCorrect();
      }
    }
  }, [isSubmitted, onQuizCorrect, quizData.correctMatches, quizData.scenarios, userMatches]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{quizData.title}</h2>
      <div className="prose prose-invert max-w-none prose-p:text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: quizData.instructionsHtml || '' }} />
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Scenarios */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold text-gray-300">Scenarios</h3>
          {quizData.scenarios.map(scenario => (
            <div key={scenario.id} className="bg-gray-700 p-4 rounded-lg">
              <p className="mb-2 text-gray-200">{scenario.text}</p>
              <select
                value={userMatches[scenario.id] || ''}
                onChange={(e) => handleMatchChange(scenario.id, e.target.value)}
                disabled={isSubmitted}
                className={`w-full p-2 rounded bg-gray-800 border-2 text-white transition-colors duration-300 ${
                  isSubmitted
                    ? userMatches[scenario.id] === quizData.correctMatches[scenario.id]
                      ? 'border-green-500 ring-green-500'
                      : 'border-red-500 ring-red-500'
                    : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                } disabled:cursor-not-allowed`}
              >
                <option value="" disabled>Select a response...</option>
                {quizData.feedbackBank.map(feedback => (
                  <option key={feedback.id} value={feedback.id}>{`(${feedback.id}) ${feedback.text.substring(0, 40)}...`}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Feedback Bank */}
        <div className="lg:w-1/2">
           <h3 className="text-xl font-semibold text-gray-300">Feedback Bank</h3>
           <div className="space-y-3 mt-4 text-gray-300 bg-gray-700 p-4 rounded-lg">
             {quizData.feedbackBank.map(feedback => (
                <p key={feedback.id}><b className="text-cyan-400">({feedback.id})</b> {feedback.text}</p>
             ))}
           </div>
        </div>
      </div>

      {!isSubmitted && (
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            disabled={!allScenariosMatched}
            className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Check Answers
          </button>
        </div>
      )}

      {isSubmitted && (
        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Rationale</h3>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: quizData.rationaleHtml }} />
        </div>
      )}
    </div>
  );
};


const StepContentRenderer: React.FC<StepContentRendererProps> = ({ step, onQuizCorrect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setIsCorrect(false);
  }, [step]);
  
  const handleQuizAnswer = (optionText: string, isOptionCorrect: boolean) => {
    if (isCorrect) return; // Prevent changing answer after correct one
    setSelectedOption(optionText);
    if(step.quiz){
        setFeedback(isOptionCorrect ? step.quiz.feedback.correct : step.quiz.feedback.incorrect);
        if (isOptionCorrect) {
          setIsCorrect(true);
          onQuizCorrect();
        }
    }
  };

  const renderContent = () => {
    switch (step.type) {
      case 'content':
        return (
          <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-cyan-400">
            <h2>{step.content?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: step.content?.customPromptHtml || '' }} />
          </div>
        );
      case 'quiz': {
        const QuestionTag = step.content?.title ? 'h3' : 'h2';
        return (
          <div>
            {step.content && (
              <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-cyan-400 mb-6">
                {step.content.title && <h2>{step.content.title}</h2>}
                {step.content.customPromptHtml && <div dangerouslySetInnerHTML={{ __html: step.content.customPromptHtml }} />}
              </div>
            )}
            <QuestionTag className="text-2xl font-bold text-cyan-400 mb-4">{step.quiz?.question}</QuestionTag>
            <div className="space-y-3">
              {step.quiz?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(option.text, option.isCorrect)}
                  disabled={isCorrect}
                  className={`block w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedOption === option.text
                      ? option.isCorrect
                        ? 'bg-green-800 border-green-500'
                        : 'bg-red-800 border-red-500'
                      : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                  } ${isCorrect ? 'cursor-not-allowed' : ''}`}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {feedback && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  isCorrect ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
                }`}
              >
                {feedback}
              </div>
            )}
          </div>
        );
      }
      case 'structuredData': {
        const renderStructuredData = () => {
            switch (step.structuredData?.type) {
            case 'table':
                return (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                {step.structuredData.table?.headers.map((header, index) => (
                                    <th key={index} className="p-3 bg-gray-700 border border-gray-600 text-cyan-400 font-bold">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {step.structuredData.table?.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="odd:bg-gray-800 even:bg-gray-700">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="p-3 border border-gray-600 text-gray-300" dangerouslySetInnerHTML={{ __html: cell }}></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                );
            case 'list_points':
                return (
                    <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">{step.structuredData.list_points?.heading}</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {step.structuredData.list_points?.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'list_with_description':
                return (
                <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{step.structuredData.list_with_description?.heading}</h3>
                    <p className="text-gray-300">{step.structuredData.list_with_description?.description}</p>
                </div>
                );
                case 'example_quote':
                    return (
                        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
                            <h3 className="text-xl font-bold text-cyan-400 mb-2">{step.structuredData.example_quote?.heading}</h3>
                            <p className="text-sm text-gray-400 mb-4 italic">{step.structuredData.example_quote?.context}</p>
                            <blockquote className="text-lg text-gray-200 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: step.structuredData.example_quote?.quote || ''}}>
                            </blockquote>
                        </div>
                    );
            default:
                return <div>Unsupported structured data type.</div>;
            }
        };

        return (
            <>
              {step.content && (
                <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-cyan-400 mb-6">
                  {step.content.title && <h2>{step.content.title}</h2>}
                  {step.content.customPromptHtml && <div dangerouslySetInnerHTML={{ __html: step.content.customPromptHtml }} />}
                </div>
              )}
              {renderStructuredData()}
            </>
          );
      }
      case 'assignment':
        return (
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{step.assignment?.title}</h2>
            <div className="prose prose-invert max-w-none prose-p:text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: step.assignment?.instructionsHtml || '' }} />
            <textarea
              className="w-full h-48 p-4 mt-2 bg-gray-900 text-gray-200 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder={step.assignment?.placeholder}
            />
          </div>
        );
      case 'matchingQuiz':
        return step.matchingQuiz ? <MatchingQuizRenderer quizData={step.matchingQuiz} onQuizCorrect={onQuizCorrect} /> : <div>Matching quiz data is missing.</div>;
      default:
        return <div>Unsupported step type.</div>;
    }
  };

  return <div className="text-gray-200">{renderContent()}</div>;
};

export default StepContentRenderer;