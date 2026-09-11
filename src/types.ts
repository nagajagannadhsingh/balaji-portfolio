export interface PersonalInfo {
  name: string;
  headline: string;
  course: string;
  branch: string;
  year: string;
  college: string;
  location: string;
  careerGoal: string;
  email: string;
  phone: string;
  phoneRaw: string;
  linkedInUrl: string;
  supportingText: string;
  aboutText: string[];
  profilePhotoUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'language' | 'algorithmic';
  description: string;
  iconName: string;
  keyConcepts: string[];
  learningFocus: string;
}

export interface LearningItem {
  id: string;
  name: string;
  status: string;
  description: string;
  iconName: string;
  topics: string[];
}

/**
 * Real Project Structure (Future-Ready)
 * When projects are completed, simply add items adhering to this interface.
 */
export interface ProjectItem {
  id?: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  details?: string;
}

/**
 * Placeholder card structure used while no projects are completed yet.
 */
export interface ProjectPlaceholder {
  number: string;
  title: string;
  status: string;
  description: string;
  plannedTech: string[];
  focusArea: string;
}

/**
 * Resume Configuration Structure
 * Set resumeUrl to a valid link or local path (e.g., "/assets/resume.pdf").
 * When empty (""), the website automatically displays the "Resume Coming Soon" state.
 */
export interface ResumeConfig {
  resumeUrl: string;
  fileName?: string;
  lastUpdated?: string;
  tagline?: string;
}

export interface InterestItem {
  id: string;
  title: string;
  emoji: string;
  description: string;
  tag: string;
  details: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Progress' | 'Coming Soon';
  description: string;
}

export interface CareerStage {
  stage: string;
  label: string;
  description: string;
  iconName: string;
}

/**
 * Optional Future Sections (Certifications, Achievements, Internships, Experience)
 */
export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

