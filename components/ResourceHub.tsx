import React, { useState, forwardRef } from 'react';

const ChevronDownIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const resources = [
    {
        title: "Generative AI for Educators & Teachers Specialization",
        provider: "Coursera (Vanderbilt University)",
        link: "https://www.coursera.org/specializations/generative-ai-for-educators-teachers"
    },
    {
        title: "Smart Teaching and Learning with AI Specialization",
        provider: "Coursera (Politecnico di Milano)",
        link: "https://www.coursera.org/specializations/smart-teaching-learning-with-ai"
    },
    {
        title: "Conflict Resolution Skills",
        provider: "Coursera (University of California, Irvine)",
        link: "https://www.coursera.org/learn/conflict-resolution-skills"
    },
    {
        title: "Virtual Teacher Specialization",
        provider: "Coursera (University of California, Irvine)",
        link: "https://www.coursera.org/specializations/virtual-teacher"
    }
];

const ResourceHub = forwardRef<HTMLElement>((_props, ref) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section id="resource-hub" ref={ref} className="mb-8 pt-4">
            <div
                className="bg-gray-800 p-4 rounded-t-lg cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-2xl font-semibold text-white">4. Resource Hub</h2>
                <ChevronDownIcon className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className="bg-gray-800 p-6 rounded-b-lg space-y-8">
                    <p className="text-lg text-gray-300">Welcome! This hub provides central contacts and resources to support NNU faculty on your COIL journey.</p>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Finding an External Partner</h3>
                        <div className="prose prose-invert max-w-none prose-p:text-gray-300">
                            <p>This is the first step. Our internal team can help you connect with universities in our global network.</p>
                            <p>
                                <strong>Contact:</strong> NNU Global Engagement Office<br/>
                                <strong>Email:</strong> <a href="mailto:global@nnu.edu.vn" className="text-blue-400 hover:underline">global@nnu.edu.vn</a><br/>
                                <strong>Phone:</strong> (024) xxxx xxxx (Ext. [Insert Ext])<br/>
                                <strong>What they do:</strong> Partner matchmaking, initial contact facilitation, and memorandum of understanding (MOU) support.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">2. COIL Pedagogy & Tech Support</h3>
                        <div className="prose prose-invert max-w-none prose-p:text-gray-300">
                           <p>For when you have a partner and need help designing your syllabus, creating tasks, or troubleshooting MS Teams.</p>
                            <p>
                                <strong>Contact:</strong> NNU Center for Teaching & Learning (CTL) - COIL Support<br/>
                                <strong>Email:</strong> <a href="mailto:ctl.support@nnu.edu.vn" className="text-blue-400 hover:underline">ctl.support@nnu.edu.vn</a><br/>
                                <strong>What they do:</strong> Syllabus design, intercultural pedagogy, task design feedback, and technology support.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">3. Recommended External Courses & Resources</h3>
                        <p className="text-gray-300 mb-4">For those who want to deepen their knowledge, these are the global leaders in COIL and Virtual Exchange training.</p>
                        <div className="space-y-4">
                            {resources.map((resource, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-md transition-shadow hover:shadow-lg">
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-400 hover:underline">{resource.title}</a>
                                    <p className="text-sm text-gray-400 mt-1">{resource.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
});

export default ResourceHub;
