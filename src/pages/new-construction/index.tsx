import React from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Building2,
  Clock,
  CheckCircle2,
  Shield,
  HardHat,
  Ruler,
  Wrench,
  Scale,
} from "lucide-react";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/form";
import Image from "next/image";

const NewConstructionPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+1 (778) 654-8629";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  const constructionFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Large Scale Projects",
      description: "Expert management of major construction projects",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Meeting deadlines with precision planning",
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      title: "Safety First",
      description: "Rigorous safety standards on every project",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Comprehensive quality control processes",
    },
  ];

  const constructionServices = [
    {
      title: "Multi-Family Projects",
      points: [
        "Apartment complexes",
        "Condominium developments",
        "Townhouse communities",
        "Mixed-use buildings",
      ],
    },
    {
      title: "Commercial Buildings",
      points: [
        "Office buildings",
        "Retail centers",
        "Industrial facilities",
        "Healthcare facilities",
      ],
    },
    {
      title: "Construction Services",
      points: [
        "Complete wall systems",
        "Fire-rated assemblies",
        "Sound control solutions",
        "Structural installations",
      ],
    },
    {
      title: "Project Management",
      points: [
        "Timeline coordination",
        "Budget management",
        "Quality assurance",
        "Safety compliance",
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
                Century Drywall Vancouver - New Construction Division
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                New Construction
                <span className="block">Drywall Experts</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouver &amp; Burnaby&apos;s trusted partner for large-scale
                construction projects. Specializing in multi-family, commercial,
                and industrial developments.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="New Construction Drywall Services Vancouver"
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
              Construction Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Delivering quality at scale for major projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionFeatures.map((feature, index) => (
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
              Construction Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for new construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-600">
              Streamlined approach for efficient project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Planning",
                description: "Detailed project scope and timeline development",
              },
              {
                icon: <Ruler className="w-8 h-8" />,
                title: "Preparation",
                description: "Resource allocation and material procurement",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Construction",
                description: "Efficient execution with quality control",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Completion",
                description: "Final inspection and project handover",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center text-gray-900">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50" id="contactform">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Request Project Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Let&apos;s discuss your construction requirements
            </p>
          </div>

          <QuoteForm type="commercial" />
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Recent new construction developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Complex",
                description: "200-unit apartment development",
                image: "/photos/homepage/1.jpg",
              },
              {
                title: "Office Tower",
                description: "25-story commercial building",
                image: "/photos/homepage/2.jpg",
              },
              {
                title: "Mixed-Use Development",
                description: "Retail and residential complex",
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Construction FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our new construction services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of construction projects do you handle?",
                answer:
                  "We handle a wide range of new construction projects including multi-family residential developments, commercial buildings, industrial facilities, and mixed-use developments. Our team has extensive experience with projects of all scales.",
              },
              {
                question: "How do you ensure project timelines are met?",
                answer:
                  "We utilize advanced project management techniques, maintain clear communication channels, and employ experienced teams to ensure efficient execution. Our systematic approach includes detailed planning, regular progress monitoring, and proactive problem-solving.",
              },
              {
                question: "What safety measures do you implement?",
                answer:
                  "Safety is our top priority. We maintain strict compliance with all safety regulations, provide comprehensive training for our teams, and implement site-specific safety plans for each project. All our work meets or exceeds local building codes.",
              },
              {
                question: "Do you work with architects and designers?",
                answer:
                  "Yes, we regularly collaborate with architects, designers, and other construction professionals. Our team is experienced in working as part of larger project teams and can coordinate effectively with all stakeholders.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Partner with Vancouver&apos;s leading construction drywall experts
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default NewConstructionPage;
