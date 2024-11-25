import React from 'react';
import SectionTitle from './SectionTitle';
const Education = () => (
  <section className="p-6">
    <SectionTitle title="Education" />
    <div>
      <h3 className="text-xl font-bold">Information Technology</h3>
      <p className="italic">Hanoi University of Industry (10/2020 - 06/2024)</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Graduate with GPA: 3.27</li>
        <li>Participated in continuing education courses in IT.</li>
        <li>Focus on machine learning.</li>
        <li>Member of HIT - HAUI IT Club.</li>
      </ul>
    </div>
  </section>
);

export default Education;
