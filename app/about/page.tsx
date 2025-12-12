import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import { TimelineItem, Award } from "@/data/types";
import Link from "next/link";

export default function AboutPage() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2024",
      title: "Senior Reporter, Fort Worth Report",
      description:
        "Leading coverage of housing, economic development, and local government in North Texas.",
    },
    {
      year: "2023",
      title: "Freelance Correspondent, South Caucasus",
      description:
        "Reporting on democracy, geopolitics, and post-Soviet transitions for international outlets.",
    },
    {
      year: "2022",
      title: "Reporting Fellow, US-Mexico Border",
      description:
        "Documented migration, asylum policies, and cross-border communities for The Guardian and Texas Monthly.",
    },
    {
      year: "2021",
      title: "Graduate Studies, Columbia University",
      description:
        "Master's degree in Journalism with focus on international reporting and investigative techniques.",
    },
    {
      year: "2020",
      title: "Local Reporter, Texas Tribune",
      description:
        "Covered state politics, education policy, and rural communities across Texas.",
    },
    {
      year: "2018",
      title: "Student Journalist, University of Texas",
      description:
        "Editor of The Daily Texan, covering campus and Austin city issues.",
    },
  ];

  const awards: Award[] = [
    {
      name: "Press Club of Fort Worth Award",
      year: 2024,
      description: "Best Investigative Series for housing crisis coverage",
    },
    {
      name: "National Press Club Award",
      year: 2023,
      description: "Excellence in reporting on immigration",
    },
    {
      name: "Fulbright Fellowship",
      year: 2022,
      description: "Research on post-Soviet democratic transitions",
    },
    {
      name: "IRE Award Finalist",
      year: 2023,
      description: "Investigative Reporters and Editors recognition",
    },
    {
      name: "NAHJ Award",
      year: 2024,
      description: "National Association of Hispanic Journalists, border reporting",
    },
    {
      name: "Overseas Press Club Citation",
      year: 2023,
      description: "Coverage of South Caucasus conflicts",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="About"
        subtitle="Journalist based in Texas, reporting on housing, migration, trade, and global politics"
      />

      {/* Main Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left Column: Portrait and Summary */}
        <div>
          {/* Portrait */}
          <div className="aspect-[3/4] rounded-lg mb-6 max-w-md overflow-hidden">
            <img
              src="/images/sandra-portrait.jpg"
              alt="Sandra Sadek"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Sandra Sadek is an award-winning journalist covering housing,
              migration, trade, and geopolitics. Her work focuses on how policy
              decisions shape communities and individual lives.
            </p>
            <p className="text-lg leading-relaxed">
              She has reported from the US-Mexico border, the South Caucasus,
              and cities across North America, with bylines in The Guardian,
              Foreign Policy, Al Jazeera, and regional outlets including Fort
              Worth Report and EVN Report.
            </p>
            <p className="text-lg leading-relaxed">
              Sandra holds a Master's degree in Journalism from Columbia
              University and a BA in Government from the University of Texas at
              Austin.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-serif font-bold text-accent">
                6+
              </div>
              <div className="text-sm text-gray-600">Years Reporting</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent">4</div>
              <div className="text-sm text-gray-600">Primary Beats</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent">
                3
              </div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent">
                TX
              </div>
              <div className="text-sm text-gray-600">Based in</div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-8">Experience</h3>
          <Timeline items={timelineItems} />
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mb-20">
        <h3 className="text-2xl font-serif font-bold mb-8">
          Awards & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-sm text-accent font-semibold mb-2">
                {award.year}
              </div>
              <h4 className="font-serif font-bold text-lg mb-2">
                {award.name}
              </h4>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV/Resume */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-serif font-bold mb-4">
          Download Portfolio Materials
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/files/sandra-sadek-cv.pdf"
            className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </Link>
          <Link
            href="/files/sandra-sadek-resume.pdf"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
