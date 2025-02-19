import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  Users,
  Trophy,
  Star,
  ArrowRight,
} from "lucide-react";

const AboutUs = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: Trophy,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: Star,
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      icon: ShieldCheck,
    },
    {
      number: "2000+",
      label: "Happy Clients",
      icon: Users,
    },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on quality, using premium materials and proven techniques for lasting results.",
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
    },
    {
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience and dedication to every project.",
    },
    {
      title: "Reliability",
      description:
        "Count on us for timely completion, transparent communication, and professional service.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vancouver&apos;s Trusted Drywall Experts
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 15 years, Century Drywall has been delivering
                exceptional drywall solutions across Vancouver and Burnaby. Our
                commitment to quality and customer satisfaction has made us the
                preferred choice for residential and commercial projects.
              </p>
              <button
                onClick={() => window.open("/quote", "_current")}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Century Drywall Team at Work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <StatIcon className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a foundation of excellence and integrity, our values
              guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team/Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and see the quality
              that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src={`/photos/homepage/${index + 1}.jpg`}
                  alt={`Century Drywall Project ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get in touch with Vancouver&apos;s drywall experts today
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+17786548629"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              (778) 654-8629
            </a>
            <button
              onClick={() => window.open("/quote", "_current")}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
