import { MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Locations = () => {
  const locationServices = [
    {
      location: "Vancouver",
      address: "266 E 58th Avenue, Vancouver, BC V5X 1V9",
      services: [
        {
          title: "Residential Drywall",
          description:
            "Complete home drywall solutions including repairs, installations, and renovations for Vancouver homeowners.",
          link: "/residential",
        },
        {
          title: "Commercial Drywall",
          description:
            "Professional drywall services for office buildings, retail spaces, and industrial facilities across Vancouver.",
          link: "/commercial",
        },
        {
          title: "New Construction",
          description:
            "Comprehensive drywall solutions for new construction projects, from multi-family developments to commercial buildings.",
          link: "/new-construction",
        },
        {
          title: "Specialty Finishes",
          description:
            "Premium drywall finishes including Level 5 finish, custom textures, and decorative features for upscale properties.",
          link: "/specialty",
        },
        {
          title: "Drywall Repair",
          description:
            "Expert repair services for water damage, holes, cracks, and other drywall issues with seamless matching.",
          link: "/repairs",
        },
      ],
    },
    {
      location: "Burnaby",
      address: "Serving all of Burnaby",
      services: [
        {
          title: "Residential Drywall",
          description:
            "Full-service residential drywall solutions for Burnaby homes, from single rooms to complete houses.",
          link: "/residential",
        },
        {
          title: "Commercial Drywall",
          description:
            "Expert commercial drywall services for Burnaby businesses, including retail, office, and industrial spaces.",
          link: "/commercial",
        },
        {
          title: "New Construction",
          description:
            "Professional drywall installation for new construction projects throughout Burnaby.",
          link: "/new-construction",
        },
        {
          title: "Specialty Finishes",
          description:
            "High-end drywall finishes and custom textures for Burnaby&apos;s luxury properties.",
          link: "/specialty",
        },
        {
          title: "Drywall Repair",
          description:
            "Fast, reliable drywall repair services for Burnaby residents and businesses.",
          link: "/repairs",
        },
      ],
    },
  ];

  const handleOpenService = (link: string) => {
    window.open(link, "_current");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Serving Vancouver &amp; Burnaby
            </h1>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Professional drywall services across the Lower Mainland. Quality
            work, guaranteed satisfaction.
          </p>
        </div>

        {/* Locations and Services Section */}
        <div className="space-y-12">
          {locationServices.map((location, locationIndex) => (
            <div key={locationIndex} className="mb-8 md:mb-12">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-xl md:text-2xl font-bold">
                  {location.location}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{location.address}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {location.services.map((service, index) => (
                  <div
                    onClick={() => handleOpenService(service.link)}
                    key={index}
                    className="
                      p-4 md:p-6 rounded-lg border bg-white 
                      transition-all duration-300 ease-in-out
                      hover:border-gray-300 hover:shadow-lg hover:bg-gray-50
                      transform hover:-translate-y-1 cursor-pointer
                    "
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Need Professional Drywall Services?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free consultation and estimate
          </p>
          <div className="space-y-2">
            <p className="font-medium">
              Call us at:{" "}
              <a
                href="tel:+17786548629"
                className="text-blue-600 hover:text-blue-800"
              >
                (778) 654-8629
              </a>
            </p>
            <p className="font-medium">
              Email:{" "}
              <a
                href="mailto:info@burnabydrywall.ca"
                className="text-blue-600 hover:text-blue-800"
              >
                info@burnabydrywall.ca
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Locations;
