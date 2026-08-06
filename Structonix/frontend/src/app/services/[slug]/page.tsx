import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/components/Content/ProjectsComponents/projectsData";
import { CheckCircle2, ChevronRight, PhoneCall, HelpCircle, HardHat, Scale, MapPin, ListCollapse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found - Structonix" };
  
  return {
    title: `${service.title} | Structonix - Industrial Solutions`,
    description: service.shortDescription,
  };
}

const getRelatedProjects = (slug: string) => {
  switch (slug) {
    case 'warehousing':
      return projectsData.filter(p => p.category === 'Warehouse').slice(0, 3);
    case 'primary-steel-structure-manufacturing':
      return projectsData.filter(p => p.category === 'Factory & Process Plant' || p.category === 'Infrastructure & Multistory').slice(0, 3);
    case 'secondary-steel-structure-manufacturing':
      return projectsData.filter(p => p.category === 'Warehouse' || p.category === 'Factory & Process Plant').slice(3, 6);
    case 'design-engineering':
      return projectsData.filter(p => p.tonnage && p.tonnage > 300).slice(0, 3);
    case 'roofing-and-cladding-systems':
      return projectsData.filter(p => p.status === 'Handovered' || p.status === 'Sheeting').slice(0, 3);
    case 'cz-purlin-and-downspout-pipe':
      return projectsData.filter(p => p.category === 'Warehouse').slice(6, 9);
    case 'turnkey-industrial-projects':
      return projectsData.filter(p => p.category === 'Factory & Process Plant' || (p.tonnage && p.tonnage > 500)).slice(0, 3);
    default:
      return projectsData.slice(0, 3);
  }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  return (
    <main className="bg-white">
      {/* Banner Section */}
      <div className="bg-dark-slate py-20 md:py-32 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-dark-slate to-dark-slate pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs md:text-sm uppercase mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white bg-white/10 px-2 py-0.5 rounded">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white font-secondary tracking-tight text-center md:text-left leading-tight max-w-4xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-20 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 lg:sticky lg:top-32 space-y-8 order-2 lg:order-1">
              
              {/* Service List Box */}
              <div className="bg-[#fcfcfc] border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/20">
                  <span className="text-primary font-bold text-lg leading-none">»</span>
                  <h3 className="text-xl font-bold text-dark-slate font-secondary uppercase tracking-wide">
                    All Services
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {servicesData.map(s => (
                    <li key={s.id}>
                      <Link 
                        href={`/services/${s.slug}`} 
                        className={`flex items-center justify-between p-4 group transition-all duration-300 font-bold text-sm ${
                          service.slug === s.slug 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 hover:border-primary/30 hover:text-primary'
                        }`}
                      >
                        <span className="max-w-[85%]">{s.title}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          service.slug === s.slug ? 'text-white' : 'text-primary'
                        }`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Help Widget */}
              <div className="bg-dark-slate p-8 text-center relative overflow-hidden shadow-lg border-t-4 border-primary">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <PhoneCall className="w-12 h-12 text-primary mx-auto mb-5 animate-bounce-slow" />
                <h3 className="text-2xl font-bold text-white mb-3 font-secondary">Need Help?</h3>
                <p className="text-gray-300 mb-8 text-sm font-medium leading-relaxed">
                  Have a specific structural requirement? Contact our engineering team for a customized quote today.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full bg-primary text-white px-6 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-dark-slate transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Contact Us
                </Link>
              </div>

            </aside>

            {/* Main Article */}
            <article className="lg:col-span-2 order-1 lg:order-2 bg-white p-6 md:p-10 shadow-sm border border-gray-100 space-y-12">
              {/* Featured Image */}
              <div className="overflow-hidden w-full relative h-[300px] md:h-[450px]">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000 origin-center" 
                  unoptimized
                />
              </div>

              {/* Service Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-primary"></div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate font-secondary tracking-tight">
                    Service Overview
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {service.overview}
                </p>
              </div>

              {/* Key Advantages Checklist */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-primary"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-slate font-secondary tracking-tight">
                    Key Advantages
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-5 bg-[#fcfcfc] border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5 drop-shadow-sm" />
                      <p className="text-gray-700 font-bold text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-primary"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-slate font-secondary tracking-tight">
                    Technical Specifications
                  </h3>
                </div>

                <div className="border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                    <thead className="bg-dark-slate text-white uppercase tracking-wider text-[11px] font-bold">
                      <tr>
                        <th className="px-6 py-4">Parameter</th>
                        <th className="px-6 py-4">Standards / Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.entries(service.technicalSpecs).map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-dark-slate bg-gray-50/50 w-[35%]">{key}</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-primary"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark-slate font-secondary tracking-tight">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <details 
                        key={idx} 
                        className="group border border-gray-200 bg-[#fcfcfc] p-5 rounded-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-300 open:bg-white open:shadow-sm"
                      >
                        <summary className="flex justify-between items-center font-bold text-dark-slate text-base md:text-lg group-open:text-primary transition-colors select-none">
                          <span className="flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                            {faq.question}
                          </span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-primary">
                            ▼
                          </span>
                        </summary>
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm font-medium pl-7 border-l-2 border-primary/20">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

            </article>

          </div>
        </div>
      </section>

      {/* Related Projects Showcase Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-150">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-6 bg-primary"></div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">Showcase</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate font-secondary tracking-tight">
                  Relevant Projects
                </h2>
                <p className="mt-2 text-gray-500 font-medium text-sm md:text-base">
                  Explore some of our real-world execution highlights related to {service.title}.
                </p>
              </div>
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 bg-dark-slate text-white hover:bg-primary px-6 py-3 font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-md"
              >
                View All Projects
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <Image 
                      src={project.image} 
                      alt={project.client} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-sm">
                      {project.status}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-dark-slate font-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                        {project.client}
                      </h3>
                      
                      {/* Specs List */}
                      <div className="space-y-2 border-t border-gray-50 pt-4 mt-2">
                        <div className="flex items-center gap-2.5 text-xs text-gray-500 font-semibold">
                          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        
                        {project.tonnage && (
                          <div className="flex items-center gap-2.5 text-xs text-gray-500 font-semibold">
                            <Scale className="w-4 h-4 text-gray-400 shrink-0" />
                            <span>{project.tonnage.toLocaleString()} Tons Steel Tonnage</span>
                          </div>
                        )}

                        {project.areaSqft && (
                          <div className="flex items-center gap-2.5 text-xs text-gray-500 font-semibold">
                            <HardHat className="w-4 h-4 text-gray-400 shrink-0" />
                            <span>{project.areaSqft.toLocaleString()} Sq.ft. Area</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 tracking-wider">PROJECT NO: {project.projectNo}</span>
                      <Link 
                        href="/projects" 
                        className="text-xs font-bold text-dark-slate group-hover:text-primary transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                      >
                        Details <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
