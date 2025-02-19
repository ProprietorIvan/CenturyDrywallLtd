import React from "react";
import Navigation from "@/components/Navigation";
import QuoteForm from "@/components/form";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  PaintBucket,
  Home,
} from "lucide-react";
import Contact from "@/components/Contact";
import Image from "next/image";

const ResidentialDrywallPage = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:(778) 654-8629";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  const serviceFeatures = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Experts",
      description: "Specialized in residential drywall solutions",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Perfect Finish",
      description: "Seamless repairs and flawless results",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Response",
      description: "2-hour response for emergencies",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fully Insured",
      description: "Licensed and insured in Vancouver & Burnaby",
    },
  ];

  const residentialServices = [
    {
      title: "Repair Services",
      points: [
        "Water damage repair",
        "Hole patching",
        "Crack fixing",
        "Surface restoration",
      ],
    },
    {
      title: "Installation",
      points: [
        "New wall installation",
        "Room additions",
        "Basement finishing",
        "Ceiling installation",
      ],
    },
    {
      title: "Finishing Work",
      points: [
        "Texture matching",
        "Smooth finishing",
        "Paint preparation",
        "Joint taping",
      ],
    },
    {
      title: "Specialty Services",
      points: [
        "Soundproofing",
        "Moisture protection",
        "Decorative finishes",
        "Crown molding",
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
                Century Drywall Vancouver - Residential Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Expert Home
                <span className="block">Drywall Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouver & Burnabys trusted residential drywall specialists.
                From repairs to renovations, we deliver perfect results for your
                home.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Residential Drywall Services Vancouver"
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
              Residential Drywall Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by homeowners across Vancouver & Burnaby
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
              Home Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete residential drywall solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialServices.map((service, index) => (
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
              Request a Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              2-hour response • Vancouver & Burnaby service
            </p>
          </div>

          <QuoteForm type="residential" />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We bring decades of residential drywall expertise to every
                project, ensuring your home receives the highest quality
                workmanship and attention to detail.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional assessment and consultation",
                  "Premium materials and expert craftsmanship",
                  "Clean and efficient work process",
                  "Satisfaction guaranteed",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/1.jpg"
                alt="Quality Drywall Work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our residential drywall services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How long does a typical residential drywall repair take?",
                answer:
                  "Most small repairs can be completed in 2-4 hours. Larger projects like room renovations typically take 1-3 days, while full home installations may take 5-7 days.",
              },
              {
                question:
                  "Do you provide free estimates for residential projects?",
                answer:
                  "Yes, we provide free, detailed estimates for all residential drywall projects in Vancouver and Burnaby. We'll assess your needs and provide a clear, no-obligation quote.",
              },
              {
                question: "Can you match existing wall textures?",
                answer:
                  "Absolutely! Our experts specialize in texture matching and can seamlessly blend repairs with your existing wall finish, ensuring a perfect match.",
              },
              {
                question: "Are you insured and licensed?",
                answer:
                  "Yes, we are fully licensed and insured in Vancouver and Burnaby. We carry comprehensive liability insurance to protect your property during all work.",
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
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get expert drywall services for your residential project
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ResidentialDrywallPage;
