import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";
import Link from "next/link";
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

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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
            <Link href="/products-and-services" className="hover:text-white transition-colors">Products & Services</Link>
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
                        href={`/products-and-services/${s.slug}`} 
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
            <article className="lg:col-span-2 order-1 lg:order-2 bg-white p-6 md:p-10 shadow-sm border border-gray-100">
              {/* Featured Image */}
              <div className="overflow-hidden mb-10 w-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-1000 origin-center" 
                />
              </div>

              {/* Service Overview */}
              <div className="mb-12">
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
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
