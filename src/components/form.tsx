import React, { useState } from "react";
import { Check } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  projectType: string;
  roomType: string;
  urgency: string;
  email: string;
  address: string;
  projectDetails: string;
}

interface QuoteFormProps {
  type?: "residential" | "commercial";
  className?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  type = "residential",
  className = "",
}) => {
  const [urgency, setUrgency] = useState("");
  const [projectType, setProjectType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    projectType: "",
    roomType: "",
    urgency: "",
    email: "",
    address: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      projectType,
      roomType,
      urgency,
      formType: type,
    };

    try {
      // Send email notification
      const response = await fetch("/api/drywall_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        projectType: "",
        roomType: "",
        urgency: "",
        email: "",
        address: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const projectTypes =
    type === "residential"
      ? [
          "Repair",
          "New Installation",
          "Renovation",
          "Water Damage",
          "Soundproofing",
          "Texture Work",
        ]
      : [
          "Office Renovation",
          "Retail Space",
          "Restaurant",
          "Industrial",
          "New Construction",
          "Repair Work",
        ];

  const roomTypes =
    type === "residential"
      ? [
          "Living Room",
          "Bedroom",
          "Kitchen",
          "Bathroom",
          "Basement",
          "Garage",
          "Ceiling",
          "Entire Home",
        ]
      : [
          "Office Space",
          "Retail Area",
          "Warehouse",
          "Restaurant",
          "Medical Facility",
          "Industrial Space",
          "Common Areas",
          "Entire Building",
        ];

  return (
    <div className={`bg-gray-50 rounded-2xl shadow-lg p-8 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Project Type *
          </label>
          <select
            name="projectType"
            value={projectType}
            onChange={(e) => {
              setProjectType(e.target.value);
              handleInputChange(e);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {type === "residential" ? "Room Type *" : "Facility Type *"}
          </label>
          <select
            name="roomType"
            value={roomType}
            onChange={(e) => {
              setRoomType(e.target.value);
              handleInputChange(e);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          >
            <option value="">
              Select {type === "residential" ? "room" : "facility"} type
            </option>
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Urgency *
          </label>
          <select
            name="urgency"
            value={urgency}
            onChange={(e) => {
              setUrgency(e.target.value);
              handleInputChange(e);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          >
            <option value="">Select urgency level</option>
            <option value="emergency">
              Emergency (Need immediate attention)
            </option>
            <option value="urgent">Urgent (Within 24 hours)</option>
            <option value="standard">Standard (Within a week)</option>
            <option value="planned">Planned Project (Flexible timing)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Property Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Project Details
          </label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Please describe your project needs and any specific details..."
          ></textarea>
        </div>

        {showSuccess ? (
          <SuccessScreen
            email={formData.email}
            setShowSuccess={setShowSuccess}
          />
        ) : (
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Submit Quote Request
          </button>
        )}
        <p className="text-sm text-gray-600 text-center">
          Fast response • Expert service • Vancouver & Burnaby area
        </p>
      </form>
    </div>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (show: boolean) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">
        Quote Request Received
      </h3>
      <div className="space-y-2 text-center">
        <p className="text-gray-600">We will get back to you within 2 hours</p>
        <p className="text-gray-500 text-sm">
          A confirmation has been sent to your email
        </p>
      </div>
      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800"
      >
        Done
      </button>
    </div>
  );
};

export default QuoteForm;
