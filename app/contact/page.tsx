import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Contact"
        subtitle="For assignments, collaborations, and speaking engagements"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="font-serif font-bold text-xl mb-6">Get in Touch</h3>

            {/* Email */}
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 mb-2">
                Email
              </div>
              <a
                href="mailto:contact@sandrasadek.com"
                className="text-lg text-accent hover:underline"
              >
                contact@sandrasadek.com
              </a>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 mb-2">
                Based in
              </div>
              <div className="text-lg">New York, NY</div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 mb-2">
                Availability
              </div>
              <div className="text-lg">
                Available for freelance assignments and speaking engagements
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-sm font-medium text-gray-500 mb-3">
                Connect
              </div>
              <div className="flex gap-4">
                <a
                  href="https://x.com/ssadek19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sandrasadek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ssadek19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Response Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex">
              <svg
                className="w-5 h-5 text-accent mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="font-medium mb-1">Response Time</div>
                <p className="text-sm text-gray-700">
                  I typically respond to messages within 24-48 hours. For urgent
                  requests, please indicate your deadline in the form.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="font-serif font-bold text-xl mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="mt-20 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-serif font-bold mb-8 text-center">
          Areas of Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-accent text-4xl mb-3">🏘️</div>
            <h4 className="font-semibold mb-2">Housing & Development</h4>
            <p className="text-sm text-gray-600">
              Affordable housing, gentrification, urban policy
            </p>
          </div>
          <div className="text-center">
            <div className="text-accent text-4xl mb-3">🌍</div>
            <h4 className="font-semibold mb-2">Migration & Borders</h4>
            <p className="text-sm text-gray-600">
              Asylum, immigration policy, cross-border communities
            </p>
          </div>
          <div className="text-center">
            <div className="text-accent text-4xl mb-3">📊</div>
            <h4 className="font-semibold mb-2">Trade & Economy</h4>
            <p className="text-sm text-gray-600">
              Global commerce, supply chains, economic policy
            </p>
          </div>
          <div className="text-center">
            <div className="text-accent text-4xl mb-3">🗳️</div>
            <h4 className="font-semibold mb-2">Democracy & Geopolitics</h4>
            <p className="text-sm text-gray-600">
              Post-Soviet transitions, political movements, governance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
