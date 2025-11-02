import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import CategorySection from './CategorySection';
import CoursePlayerModal from './CoursePlayerModal';
import ResourceHub from './ResourceHub';
import { programData } from '../data/programData';
import { Course, UserProgress } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

const progressBarSteps: { label: string, number: number, id: string }[] = [
  { label: 'Pre-COIL', number: 1, id: 'pre-class' },
  { label: 'In-COIL', number: 2, id: 'in-class' },
  { label: 'Post-COIL', number: 3, id: 'post-class' },
  { label: 'Resource Hub', number: 4, id: 'resource-hub' },
];

interface DashboardProps {
  onGoHome: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onGoHome }) => {
  const [userProgress, setUserProgress] = useLocalStorage<UserProgress>('coilUserProgress', {});
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(progressBarSteps[0].id);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            if (intersectingEntry) {
                setActiveCategory(intersectingEntry.target.id);
            }
        },
        {
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
    });

    return () => {
        currentRefs.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
    };
  }, []);


  const openCoursePlayer = (courseId: string) => {
    const course = programData.courses.find((c) => c.courseId === courseId);
    if (course) {
      setActiveCourse(course);
    }
  };

  const closeCoursePlayer = () => {
    setActiveCourse(null);
  };

  const markCourseComplete = (courseId: string) => {
    setUserProgress(prevProgress => ({
      ...prevProgress,
      [courseId]: true,
    }));
    closeCoursePlayer();
  };
  
  const handleStepClick = (id: string) => {
    const stepIndex = progressBarSteps.findIndex(step => step.id === id);
    if (sectionRefs.current[stepIndex]) {
        sectionRefs.current[stepIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
  };

  const homeButton = (
    <button
      onClick={onGoHome}
      className="flex items-center px-4 py-2 rounded-md font-semibold text-white bg-gray-600 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      Home
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Header title={programData.programTitle} leftAction={homeButton} />
      {/* Sticky Progress Bar */}
      <div className="sticky top-0 bg-gray-900 z-10 py-6 shadow-lg">
        <div className="max-w-xl mx-auto">
            <div className="relative">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-600" aria-hidden="true"></div>
                <div className="relative flex justify-between">
                {progressBarSteps.map((step) => {
                    const isActive = step.id === activeCategory;
                    return (
                    <div key={step.label} className="flex flex-col items-center cursor-pointer" onClick={() => handleStepClick(step.id)}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all duration-300 ${
                        isActive
                            ? 'bg-cyan-500 text-white scale-110'
                            : 'bg-gray-800 border-2 border-gray-600 text-gray-400'
                        }`}>
                        {step.number}
                        </div>
                        <p className={`mt-2 text-center text-sm font-semibold transition-colors duration-300 ${
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
      </div>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {programData.categories.map((category, index) => {
          const coursesForCategory = programData.courses.filter((course) => course.category === category.id);
          if (coursesForCategory.length === 0) {
            return null;
          }
          return (
            <CategorySection
              key={category.id}
              ref={el => { sectionRefs.current[index] = el; }}
              id={category.id}
              title={category.title}
              courses={coursesForCategory}
              userProgress={userProgress}
              onStartCourse={openCoursePlayer}
            />
          );
        })}

        <ResourceHub ref={el => { sectionRefs.current[programData.categories.length] = el; }} />

      </main>
      {activeCourse && (
        <CoursePlayerModal
          course={activeCourse}
          onClose={closeCoursePlayer}
          onCompleteCourse={markCourseComplete}
        />
      )}
    </div>
  );
};

export default Dashboard;
