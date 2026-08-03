import { OurServices } from '@/components/Content/ServicesComponents/OurServices';
import { ServicesBanner } from '@/components/Content/ServicesComponents/ServicesBanner';
import { WorkProcess } from '@/components/Content/ServicesComponents/WorkProcess';

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <ServicesBanner />
            <OurServices />
            <WorkProcess />
        </div>
    );
}
