import Skill from '@/components/skill/Skill';
import SkillContainer from '@/components/skill/SkillContainer';
import React from 'react';
import { FaCss3, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import {
  SiApacheairflow,
  SiBitbucket,
  SiConfluence,
  SiFlask,
  SiGit,
  SiJavascript,
  SiJirasoftware,
  SiMicrosoftazure,
  SiMui,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

function TechnologiesUsed() {
  const technologies = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3 /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Material UI', icon: <SiMui /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Neo4j', icon: <SiNeo4J /> },
        { name: 'Apache Airflow', icon: <SiApacheairflow /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Microsoft Azure', icon: <SiMicrosoftazure /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'Bitbucket', icon: <SiBitbucket /> },
        { name: 'Jira', icon: <SiJirasoftware /> },
        { name: 'Confluence', icon: <SiConfluence /> },
        { name: 'VS Code', icon: <TbBrandVscode /> },
      ],
    },
  ];

  return (
    <div>
      <h1 className='project-section-title mb-4'>Technologies Used</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
        {technologies.map((tech, index) => (
          <SkillContainer title={tech.title} key={index}>
            {tech.skills.map((skill) => (
              <Skill
                name={skill.name}
                icon={skill.icon}
                key={`${tech.title}-${skill.name}`}
                size='md'
              />
            ))}
          </SkillContainer>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesUsed;
