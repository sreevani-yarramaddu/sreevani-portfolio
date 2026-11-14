import javascriptLogo from 'devicon/icons/javascript/javascript-original.svg';
import typescriptLogo from 'devicon/icons/typescript/typescript-original.svg';
import javaLogo from 'devicon/icons/java/java-original.svg';
import reactLogo from 'devicon/icons/react/react-original.svg';
import htmlLogo from 'devicon/icons/html5/html5-original.svg';
import cssLogo from 'devicon/icons/css3/css3-original.svg';
import nodeLogo from 'devicon/icons/nodejs/nodejs-original.svg';
import expressLogo from 'devicon/icons/express/express-original.svg';
import mongoLogo from 'devicon/icons/mongodb/mongodb-original.svg';
import postgresLogo from 'devicon/icons/postgresql/postgresql-original.svg';
import awsLogo from 'devicon/icons/amazonwebservices/amazonwebservices-original.svg';
import dockerLogo from 'devicon/icons/docker/docker-original.svg';
import gitLogo from 'devicon/icons/git/git-original.svg';
import githubLogo from 'devicon/icons/github/github-original.svg';
import postmanLogo from 'devicon/icons/postman/postman-original.svg';
import vscodeLogo from 'devicon/icons/vscode/vscode-original.svg';
import type { SkillGroup } from '../types/skills';

export const skills: SkillGroup[] = [
  { title: 'Programming languages', technologies: [
    { name: 'JavaScript', logo: javascriptLogo }, { name: 'TypeScript', logo: typescriptLogo }, { name: 'Java', logo: javaLogo },
  ] },
  { title: 'Frontend & mobile', technologies: [
    { name: 'React', logo: reactLogo }, { name: 'React Native & Expo', logo: reactLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'CSS', logo: cssLogo },
  ] },
  { title: 'Backend & APIs', technologies: [
    { name: 'Node.js', logo: nodeLogo }, { name: 'Express.js', logo: expressLogo }, { name: 'Firebase Cloud Functions', logo: '/images/technologies/firebase.svg' }, { name: 'REST APIs', logo: '/images/technologies/api.svg' },
  ] },
  { title: 'Databases', technologies: [
    { name: 'MongoDB', logo: mongoLogo }, { name: 'PostgreSQL', logo: postgresLogo }, { name: 'Firestore', logo: '/images/technologies/firebase.svg' }, { name: 'DBMS', logo: '/images/technologies/database.svg' },
  ] },
  { title: 'Cloud & DevOps', technologies: [
    { name: 'AWS', logo: awsLogo }, { name: 'Firebase', logo: '/images/technologies/firebase.svg' }, { name: 'Docker', logo: dockerLogo }, { name: 'CI/CD', logo: '/images/technologies/ci.svg' }, { name: 'GitHub Actions', logo: githubLogo }, { name: 'CircleCI', logo: '/images/technologies/ci.svg' },
  ] },
  { title: 'Tools & practices', technologies: [
    { name: 'Git', logo: gitLogo }, { name: 'GitHub', logo: githubLogo }, { name: 'Figma', logo: '/images/technologies/design.svg' }, { name: 'VS Code', logo: vscodeLogo }, { name: 'Postman', logo: postmanLogo }, { name: 'Unit testing', logo: '/images/technologies/testing.svg' }, { name: 'Agile & Spec-Driven Development', logo: '/images/technologies/workflow.svg' },
  ] },
];
