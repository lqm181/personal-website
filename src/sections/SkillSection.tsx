import Section from '@/components/Section';
import React from 'react';
import { FaCss3, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa';
import {
  SiApachetomcat,
  SiBootstrap,
  SiC,
  SiCsharp,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNetbeans, TbBrandVscode } from 'react-icons/tb';

const Skill = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-gray-500 dark:text-white text-4xl md:text-5xl'>
        {icon}
      </span>
      <span className='text-base md:text-lg mt-1 text-black dark:text-white'>
        {name}
      </span>
    </div>
  );
};

const SkillContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='flex flex-col py-8 justify-center items-center w-full shadow-lg rounded-lg backdrop-blur-xl bg-zinc-100/40 h-fit'>
      <h1 className='font-semibold text-2xl md:text-3xl text-black dark:text-white'>
        {title}
      </h1>

      <div className='flex flex-wrap mt-8 items-center gap-x-10 gap-y-10 px-6 justify-center'>
        {children}
      </div>
    </div>
  );
};

function SkillSection() {
  return (
    <Section theme='light' id='skills' className=''>
      <div>
        <h1 className='text-black dark:text-white font-extrabold text-4xl lg:text-5xl text-center'>
          My Toolboxs
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16 px-2 md:px-16'>
        <SkillContainer title='Frontend'>
          <Skill name='HTML' icon={<FaHtml5 />} />
          <Skill name='React' icon={<FaReact />} />
          <Skill name='CSS' icon={<FaCss3 />} />
          <Skill name='JavaScript' icon={<SiJavascript />} />
          <Skill name='TypeScript' icon={<SiTypescript />} />
          <Skill name='Tailwind CSS' icon={<SiTailwindcss />} />
          <Skill name='Material UI' icon={<SiMui />} />
          <Skill name='Bootstrap' icon={<SiBootstrap />} />
        </SkillContainer>

        <SkillContainer title='Backend'>
          <Skill name='Python' icon={<FaPython />} />
          <Skill name='Java' icon={<FaJava />} />
          <Skill name='C' icon={<SiC />} />
          <Skill name='Go' icon={<SiGo />} />
          <Skill name='C++' icon={<SiCsharp />} />
          <Skill name='Flask' icon={<SiFlask />} />
          <Skill name='MongoDB' icon={<SiMongodb />} />
          <Skill name='MySQL' icon={<SiMysql />} />
          <Skill name=' Neo4j' icon={<SiNeo4J />} />
          <Skill name='Node.js' icon={<SiNodedotjs />} />
          <Skill name='Apache Tomcat' icon={<SiApachetomcat />} />
        </SkillContainer>

        <SkillContainer title='Frameworks & Tools'>
          <Skill name='Next.js' icon={<SiNextdotjs />} />
          <Skill name='Git' icon={<SiGit />} />
          <Skill name='GitHub' icon={<SiGithub />} />
          <Skill name='VS Code' icon={<TbBrandVscode />} />
          <Skill name='NetBeans' icon={<TbBrandNetbeans />} />
        </SkillContainer>
      </div>
    </Section>
  );
}

export default SkillSection;
