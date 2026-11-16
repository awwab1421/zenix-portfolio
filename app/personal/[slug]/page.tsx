import { notFound } from 'next/navigation';
import ProjectDetail from '../../project-detail';
import { getProjects } from '../../projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects('personal').map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjects('personal').find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} — ZENIX`, description: project.description }
    : { title: 'Project — ZENIX' };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const list = getProjects('personal');
  const index = list.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  return (
    <ProjectDetail
      project={list[index]}
      previous={list[(index - 1 + list.length) % list.length]}
      next={list[(index + 1) % list.length]}
      index={index}
      total={list.length}
    />
  );
}
