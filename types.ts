
export interface ProgramData {
  programTitle: string;
  categories: Category[];
  courses: Course[];
}

export interface Category {
  id: string;
  title: string;
}

export interface Course {
  courseId: string;
  category: string;
  courseTitle: string;
  courseDescription: string;
  modules: Module[];
}

export interface Module {
  moduleId: string;
  moduleTitle: string;
  steps: Step[];
}

export interface Step {
  stepId: string;
  stepTitle: string;
  type: 'content' | 'quiz' | 'structuredData' | 'assignment' | 'matchingQuiz';
  content?: {
    title: string;
    customPromptHtml: string;
  };
  quiz?: {
    question: string;
    options: QuizOption[];
    feedback: {
      correct: string;
      incorrect: string;
    };
  };
  structuredData?: {
    type: 'table' | 'list_with_description' | 'list_points' | 'example_quote';
    table?: {
      headers: string[];
      rows: string[][];
    };
    list_with_description?: {
      heading: string;
      description: string;
    };
    list_points?: {
      heading: string;
      points: string[];
    };
    example_quote?: {
      heading: string;
      context: string;
      quote: string;
    };
  };
  assignment?: {
    title: string;
    instructionsHtml: string;
    placeholder: string;
  };
  matchingQuiz?: MatchingQuiz;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface MatchingQuiz {
    title: string;
    instructionsHtml: string;
    scenarios: { id: string; text: string }[];
    feedbackBank: { id: string; text: string }[];
    correctMatches: { [scenarioId: string]: string };
    rationaleHtml: string;
}

export interface UserProgress {
  [courseId: string]: boolean;
}

export interface CompetenceAnswers {
  english?: 'Professional' | 'Beginner' | 'No Experience';
  intercultural?: 'Professional' | 'Beginner' | 'No Experience';
  tools?: 'Professional' | 'Beginner' | 'No Experience';
  syncFeatures?: 'Professional' | 'Beginner' | 'No Experience';
  teamManagement?: 'Professional' | 'Beginner' | 'No Experience';
  questioning?: 'Professional' | 'Beginner' | 'No Experience';
}
