import React from 'react';
import SectionTitle from './SectionTitle';
const Projects = () => (
  <section className="p-6">
    <SectionTitle title="Projects" />
    <div>
      <ul className="list-disc list-inside mt-2 space-y-1 text-justify">
        <li>Building the Logistic-DCASolver Website: The objective of this project is to create a platform that introduces products, algorithms, and provides solutions to users, utilizing Django, Ninja API, and MySQL technologies.</li>
        <li>Enhancing Source Code Security for AI Models: This project focuses on packaging and improving the security of the source code for various AI models, including:Vehicle Routing Problem (VRP), Inventory Management System, Clustering, Classification Variable Selection.</li>
        <li>Developing Source Code for Feature Selection SVM Solvers: I have written and packaged the source code for solvers with three approximation functions: EXP, SCAD, CAPPED-L1, as well as an exact penalty function (EXACT PENALTY).</li>
        <li>Creating Source Code for DEEPLERNING Solvers: This project involves developing source code for four different models: LENET, RESNET, LSTM, and a Hybrid model that combines LENET and LSTM.</li>
        <li>Developing an E-commerce Website: I built an online store using ReactJS and Spring Boot, incorporating AI to enhance the online login function. The system allows users to make purchases and payments via e-wallets while integrating a user-friendly face login feature (Arc Face).</li>

      </ul>
    </div>
  </section>
);

export default Projects;
