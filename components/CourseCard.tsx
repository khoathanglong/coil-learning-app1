
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isCompleted: boolean;
  onStartCourse: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isCompleted, onStartCourse }) => {
  const hasContent = course.modules.length > 0;

  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-105">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-cyan-400">{course.courseTitle}</h3>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              isCompleted ? 'bg-green-600 text-white' : 'bg-gray-500 text-gray-200'
            }`}
          >
            {isCompleted ? 'Completed' : 'Not Started'}
          </span>
        </div>
        <p className="text-gray-300 mt-2 mb-4">{course.courseDescription}</p>
      </div>
      <div className="text-right mt-4">
        <button
          onClick={() => onStartCourse(course.courseId)}
          disabled={!hasContent}
          className={`px-6 py-2 rounded-md font-semibold text-white ${
            hasContent
              ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900'
              : 'bg-gray-500 cursor-not-allowed'
          }`}
        >
          {hasContent ? (isCompleted ? 'Review Course' : 'Start Course') : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
