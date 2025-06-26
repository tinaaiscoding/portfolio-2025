import { Metadata } from 'next';

import ProjectHero from '@/app/components/pages/project/ProjectHero/ProjectHero';
import { projects } from '@/app/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  return {
    title: `${project?.title} | Tina Vo | Creative Web Developer Melbourne`,
    description: project?.metaDescription,
  };
}

export default function Page() {
  return (
    <div className='project_wrap'>
      <ProjectHero />
    </div>
  );
}
