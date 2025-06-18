import ProjectHero from '@/app/components/pages/project/ProjectHero/ProjectHero';

export default function Page({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  return (
    <div className='project_wrap'>
      <ProjectHero />
    </div>
  );
}
