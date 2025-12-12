import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Sandra Sadek</h3>
            <p className="text-gray-600 text-sm">
              Journalist covering housing, migration, trade, and global politics
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-gray-600 hover:text-accent">
                  Reporting
                </Link>
              </li>
              <li>
                <Link href="/multimedia" className="text-gray-600 hover:text-accent">
                  Multimedia
                </Link>
              </li>
              <li>
                <Link href="/photography" className="text-gray-600 hover:text-accent">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-600 hover:text-accent">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@sandrasadek.com"
                  className="text-gray-600 hover:text-accent"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ssadek19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sandrasadek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ssadek19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {currentYear} Sandra Sadek. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
