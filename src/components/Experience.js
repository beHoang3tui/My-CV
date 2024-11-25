import React from 'react';
import SectionTitle from './SectionTitle';
const Experience = () => (
    <section className="p-6">
        <SectionTitle title="Work Experience" />
        <div>
            <h3 className="text-xl font-bold">Software Engineer - CTOptimal Company (07/2023 - Present)</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Conduct research on algorithms and conduct programming, packaging and implementation of solvers for DCA models.</li>
                <li>Build structure and user interface using HTML, CSS, JavaScript.</li>
                <li>Write backend code to handle logic, interact with database (MySQL, SQLite,...), build API.</li>
                <li>Test application functionality and performance to ensure smooth operation.</li>
                <li>Work closely with other team members (designer, product owner,...).</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold">Intern - Lab CTOptimal (04/2023 - 07/2023)</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Research and development on Al and Winfrom .Net applications.</li>
                <li>Adapted to new situations and learned new skills quickly.</li>
                <li>Worked productively with team members to achieve common goals.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold">Scientific Researcher - Lab HAUI (10/2021 - 05/2023)</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Scientific research on AI.</li>
                <li>Classified and recorded testing specimens accurately for reliable reference.</li>
            </ul>
        </div>
    </section>
);

export default Experience;
