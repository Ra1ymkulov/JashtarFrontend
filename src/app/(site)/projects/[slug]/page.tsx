import ProjectDetail from "@/src/pages/project/detail/ProjectDetail";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectDetail params={params} />;
}