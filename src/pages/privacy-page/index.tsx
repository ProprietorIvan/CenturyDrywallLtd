import React from "react";
import Navigation from "@/components/Navigation";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-gray-900" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600">Last updated: February 18, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-600">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              Century Drywall Ltd (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) operates the website burnabydrywall.ca. This page
              informs you of our policies regarding the collection, use, and
              disclosure of personal information when you use our website and
              the choices you have associated with that data.
            </p>
            <p>
              We use your data to provide and improve our services. By using the
              website, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information Collection and Use
            </h2>
            <p className="mb-4">
              We collect several different types of information for various
              purposes to provide and improve our service to you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Project details and requirements</li>
              <li>Property location and specifications</li>
              <li>Communication preferences</li>
              <li>Website usage data</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Use of Data
            </h2>
            <p className="mb-4">
              Century Drywall Ltd uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>
                To provide analysis or valuable information to improve our
                service
              </li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Protection
            </h2>
            <p>
              We take appropriate security measures to protect against
              unauthorized access, alteration, disclosure, or destruction of
              your personal information. These measures include internal reviews
              of our data collection, storage, and processing practices and
              security measures, as well as physical security measures to guard
              against unauthorized access to systems where we store personal
              data.
            </p>
          </section>

          {/* Cookie Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h2>
            <p className="mb-4">
              Cookies are files with a small amount of data that are commonly
              used as unique anonymous identifiers. We use cookies and similar
              tracking technologies to track the activity on our service and
              hold certain information.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p>
              We may employ third-party companies and individuals to facilitate
              our service, provide service-related services, or assist us in
              analyzing how our service is used. These third parties have access
              to your personal data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;last updated&quot; date at the top of this
              Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="space-y-2">
              <li>By email: info@burnabydrywall.ca</li>
              <li>By phone: (778) 654-8629</li>
              <li>By mail: 266 E 58th Avenue, Vancouver, BC V5X 1V9</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
