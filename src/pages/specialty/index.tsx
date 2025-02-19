import React from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Palette,
  Clock,
  CheckCircle2,
  Shield,
  Star,
  Sparkles,
  Gem,
  Paintbrush,
} from "lucide-react";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/form";
import Image from "next/image";

const SpecialtyDrywallPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+1 778-653-4862";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  const specialtyFeatures = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Finishes",
      description: "Expert application of specialty textures and finishes",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Using the finest materials and techniques",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Artistic Detail",
      description: "Meticulous attention to every detail",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guaranteed Work",
      description: "Satisfaction guaranteed on all specialty projects",
    },
  ];

  const specialtyServices = [
    {
      title: "Custom Textures",
      points: [
        "Venetian plaster finishes",
        "Decorative textured walls",
        "Specialty acoustic solutions",
        "Custom pattern work",
      ],
    },
    {
      title: "Architectural Details",
      points: [
        "Curved walls and ceilings",
        "Coffered ceiling designs",
        "Custom trim and moldings",
        "Intricate shadowlines",
      ],
    },
    {
      title: "Premium Finishes",
      points: [
        "Level 5 smooth finish",
        "Metallic wall finishes",
        "Polished plaster",
        "Designer textures",
      ],
    },
    {
      title: "Special Applications",
      points: [
        "Sound dampening systems",
        "Moisture resistant solutions",
        "High-impact reinforcement",
        "Fire-rated assemblies",
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
                Century Drywall Vancouver - Specialty Division
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Specialty Drywall
                <span className="block">&amp; Premium Finishes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevate your spaces with custom textures, architectural details,
                and premium finishes. Vancouver &amp; Burnaby&apos;s experts in
                specialty drywall solutions.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Specialty Drywall Finishes Vancouver"
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
              Premium Drywall Artistry
            </h2>
            <p className="text-lg text-gray-600">
              Crafting exceptional spaces with superior finishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialtyFeatures.map((feature, index) => (
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
              Specialty Services
            </h2>
            <p className="text-lg text-gray-600">
              Elevating spaces with premium drywall solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
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
              Request a Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Let&apos;s discuss your specialty drywall project
            </p>
          </div>

          <QuoteForm type="residential" />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Premium Process
            </h2>
            <p className="text-lg text-gray-600">
              Delivering excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Consultation",
                description:
                  "Detailed discussion of your vision and requirements",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Design",
                description: "Custom solutions tailored to your space",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Execution",
                description: "Meticulous attention to every detail",
              },
              {
                icon: <Gem className="w-8 h-8" />,
                title: "Perfection",
                description: "Flawless finishing and quality assurance",
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Premium Projects
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our finest specialty drywall work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Home Theater",
                description: "Custom acoustic panels and seamless finish",
                image: "/photos/homepage/1.jpg",
              },
              {
                title: "Designer Office",
                description: "Venetian plaster and architectural details",
                image: "/photos/homepage/2.jpg",
              },
              {
                title: "High-End Residence",
                description: "Level 5 finish with custom moldings",
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
              Specialty FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our premium services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is Level 5 finish?",
                answer:
                  "Level 5 is the highest grade of drywall finish, featuring a completely smooth surface ideal for areas with critical lighting or premium wall finishes. It involves additional steps beyond standard finishing to achieve a perfectly smooth surface.",
              },
              {
                question: "Can you match existing custom textures?",
                answer:
                  "Yes, our skilled artisans can match virtually any existing texture. We use advanced techniques and materials to ensure seamless integration with your existing finishes.",
              },
              {
                question: "How long do specialty finishes take to complete?",
                answer:
                  "Timeline varies by project complexity, but typically specialty finishes require 1-3 weeks for optimal results. We ensure proper curing time between applications for the highest quality finish.",
              },
              {
                question: "What types of specialty finishes do you offer?",
                answer:
                  "We offer a wide range including Venetian plaster, metallic finishes, custom textures, acoustic solutions, and decorative patterns. Each finish is customized to your specific needs.",
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
            Transform Your Space
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discover the possibilities with our specialty drywall solutions
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

export default SpecialtyDrywallPage;
