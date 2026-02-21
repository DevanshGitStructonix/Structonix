import { OurProjects } from '@/components/Content/ProjectsComponents/OurProjects';
import { ProjectsBanner } from '@/components/Content/ProjectsComponents/ProjectsBanner';

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <ProjectsBanner />
            <OurProjects />
        </div>
    );
}
