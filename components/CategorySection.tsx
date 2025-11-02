import React, { useState, forwardRef } from 'react';
import { Course, UserProgress } from '../types';
import CourseCard from './CourseCard';

interface CategorySectionProps {
  id: string;
  title: string;
  courses: Course[];
  userProgress: UserProgress;
  onStartCourse: (courseId: string) => void;
}

const ChevronDownIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const CategorySection = forwardRef<HTMLElement, CategorySectionProps>(({ id, title, courses, userProgress, onStartCourse }, ref) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id={id} ref={ref} className="mb-8 pt-4">
      <div
        className="bg-gray-800 p-4 rounded-t-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <ChevronDownIcon className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="bg-gray-800 p-6 rounded-b-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.courseId}
              course={course}
              isCompleted={!!userProgress[course.courseId]}
              onStartCourse={onStartCourse}
            />
          ))}
        </div>
      )}
    </section>
  );
});

export default CategorySection;