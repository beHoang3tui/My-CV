import React from 'react';
import SectionTitle from './SectionTitle';

const Skills = () => (
    <section className="p-6">
        <SectionTitle title="Skills" />
        <div className="mt-6">
            {/* Technical Skills */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">Full Stack Development</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">Machine Learning</span>
                    <span className="bg-slate-300 text-gray-700 px-3 py-1 rounded-lg">Software Engineering</span>
                </div>
            </div>

            {/* Programming Languages */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-green-100 text-blue-700 px-3 py-1 rounded-lg">Python</span>
                    <span className="bg-green-100 text-gray-700 px-3 py-1 rounded-lg">C/C++</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">C#</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg">JavaScript</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg">SQL</span>
                </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-green-100 text-blue-700 px-3 py-1 rounded-lg">TensorFlow</span>
                    <span className="bg-green-100 text-blue-700 px-3 py-1 rounded-lg">Pytorch</span>
                    <span className="bg-green-100 text-blue-700 px-3 py-1 rounded-lg">Django</span>
                    <span className="bg-green-100 text-blue-700 px-3 py-1 rounded-lg">RestAPI</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg">ReactJS</span>
                    <span className="bg-slate-300 text-gray-700 px-3 py-1 rounded-lg">Tailwind CSS</span>
                    <span className="bg-slate-300 text-gray-700 px-3 py-1 rounded-lg">Bootstrap CSS</span>
         
                </div>
            </div>

            {/* Databases */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-300 text-gray-700 px-3 py-1 rounded-lg">MySQL</span>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg">MongoDB</span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg">PostgreSQL</span>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
