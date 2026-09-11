import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Interests } from './components/Interests';
import { LearningJourney } from './components/LearningJourney';
import { CareerGoal } from './components/CareerGoal';
import { FutureSections } from './components/FutureSections';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-300">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative">
          {/* 1. Home */}
          <Hero />

          {/* 2. About */}
          <About />

          {/* 3. Education */}
          <Education />

          {/* 4. Skills */}
          <Skills />

          {/* 5. Learning */}
          <CurrentlyLearning />

          {/* 6. Projects */}
          <Projects />

          {/* 7. Resume */}
          <Resume />

          {/* 8. Interests */}
          <Interests />

          {/* 9. Journey */}
          <LearningJourney />

          {/* Career Vision & Lifecycle Progression */}
          <CareerGoal />

          {/* Future Credentials & Experience (Conditionally rendered when populated) */}
          <FutureSections />

          {/* 10. Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
