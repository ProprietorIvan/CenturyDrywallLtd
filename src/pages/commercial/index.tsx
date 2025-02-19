import React from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Briefcase,
  Wrench,
} from "lucide-react";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/form";
import Image from "next/image";

const CommercialDrywallPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:(778) 654-8629";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Commercial Experts",
      description: "Specialized in commercial and industrial drywall solutions",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Continuity",
      description: "Minimizing disruption to your operations",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Response",
      description: "24/7 emergency service available",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fully Insured",
      description: "Comprehensive coverage for commercial projects",
    },
  ];

  const commercialServices = [
    {
      title: "Office Build-Outs",
      points: [
        "Complete office renovations",
        "Partition installations",
        "Acoustic solutions",
        "Modern finishes",
      ],
    },
    {
      title: "Retail & Restaurant",
      points: [
        "Retail space modifications",
        "Restaurant renovations",
        "Custom design solutions",
        "Code compliance",
      ],
    },
    {
      title: "Industrial Solutions",
      points: [
        "Warehouse partitions",
        "Fire-rated assemblies",
        "Impact-resistant systems",
        "Industrial-grade finishes",
      ],
    },
    {
      title: "Property Management",
      points: [
        "Tenant improvements",
        "Common area upgrades",
        "Maintenance programs",
        "Emergency repairs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Century Drywall Vancouver - Commercial Division
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Commercial
                <span className="block">Drywall Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouver & Burnabys premier commercial drywall contractor.
                Specializing in office build-outs, retail spaces, and industrial
                facilities.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Commercial Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Commercial Drywall Services Vancouver"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Commercial Drywall Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across Vancouver & Burnaby
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-900 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Commercial Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white" id="contactform">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Commercial Quote Request
            </h2>
            <p className="text-lg text-gray-600">
              Same-day response • Vancouver & Burnaby service
            </p>
          </div>

          <QuoteForm type="commercial" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Commercial Projects
            </h2>
            <p className="text-lg text-gray-600">
              Recent commercial drywall installations and renovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Office Tower Renovation",
                description:
                  "Complete renovation of 15-floor commercial building",
                image: "/photos/homepage/1.jpg",
              },
              {
                title: "Retail Complex",
                description: "New construction for major shopping center",
                image: "/photos/homepage/2.jpg",
              },
              {
                title: "Industrial Facility",
                description:
                  "Specialized drywall solutions for manufacturing plant",
                image: "/photos/homepage/3.jpg",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Commercial FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our commercial services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you work with property managers?",
                answer:
                  "Yes, we regularly work with property management companies across Vancouver and Burnaby, providing maintenance programs and tenant improvement services.",
              },
              {
                question: "Can you work after business hours?",
                answer:
                  "Absolutely. We understand the importance of minimizing business disruption and can schedule work during off-hours, weekends, or whenever is most convenient for your operations.",
              },
              {
                question: "Are you bonded and insured for commercial work?",
                answer:
                  "Yes, we carry comprehensive commercial insurance and bonding, providing full coverage for all commercial projects we undertake.",
              },
              {
                question: "What types of commercial projects do you handle?",
                answer:
                  "We handle all types of commercial projects including office renovations, retail build-outs, restaurant construction, industrial facilities, and tenant improvements.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get Vancouvers leading commercial drywall experts on your team
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Request Commercial Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default CommercialDrywallPage;
