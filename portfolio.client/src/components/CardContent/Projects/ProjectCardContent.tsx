
import Link from 'next/link';
import Image from 'next/image';
import { CiLink } from 'react-icons/ci';

import Slider from '@/src/components/Slider';
import SkillIcons from '@/src/components/SkillIcons';
import { Project } from '@/src/types/Project';
import { Locale } from '@/src/types/Types';
import { useTranslation } from 'react-i18next';

interface ProjectCardContentProps {
  card: Project;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ card }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language as Locale;

  return (
    <div className='flex flex-col-reverse sm:flex-row sm:p-3 h-full relative overflow-auto sm:overflow-hidden'>
      <section className='flex flex-col w-full sm:w-1/2 sm:h-full'>
        <div className='flex flex-col sm:h-full'>
          <div className='flex-1 flex flex-col p-3 box-border justify-center overflow-hidden'>
            <div className='flex flex-col gap-1 overflow-y-visible sm:overflow-y-auto'>
              <p className="text-lg">{card.description[locale]}</p>
              {card.problems && (
                <p className="text-lg">{card.problems[locale]}</p>
              )}
            </div>
          </div>
          <div className='flex justify-between overflow-hidden mt-auto py-2'>
            {card.stack && (
              <SkillIcons techList={card.stack} iconSize={40} />
            )}
            {card.repository && (
              <Link href={card.repository} target="_blank">
                <Image src="/images/skillicons/GitHub.svg" alt="GitHub repository" title='GitHub repository' width={40} height={40} />
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className='sm:w-1/2 w-full flex items-center justify-center'>
        {card.pictures && <Slider pictures={card.pictures} />}
      </section>
      {card.deploymentUrl && (
        <Link href={card.deploymentUrl} target="_blank" className='sm:absolute bottom-3 right-3 text-blue-500'>
          <CiLink size={40} title="Deployment Link" />
        </Link>
      )}
    </div>
  );
};

export default ProjectCardContent;