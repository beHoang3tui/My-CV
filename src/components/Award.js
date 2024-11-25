import React from 'react';
import SectionTitle from './SectionTitle';

const Award = () => (
    <section className="p-6">
        <SectionTitle title="Award" />
        <div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-justify">
                <li>Champion of the 2022 ACM ICPC school-level competition.</li>
                <li>Second prize in school-level scientific research in 2023 with the topic of distinguishing product origins based on neural networks.</li>
                <li>Second prize in the 2023 Scientific Products Contest with the topic of identifying and warning dangerous behavior.</li>
                <li>Won a scholarship at Hanoi University of Industry thanks to excellent academic achievements.</li>
            </ul>
        </div>
    </section>
);

export default Award;
