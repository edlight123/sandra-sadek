import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import { TimelineItem, Award } from "@/data/types";

export default function AboutPage() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2025",
      title: "Freelance Journalist",
      description:
        "Covered U.S.-Mexico border for Puente News Collaborative, analyzing the impact of Trump's tariffs on cattle trade. Published in The Guardian and Palabras NAHJ. Also covered UN events during the 79th General Assembly for Doha News.",
    },
    {
      year: "2025",
      title: "Intern, EVN Report",
      description:
        "Wrote analytical articles on the evolving Armenian political landscape, including economic policies, international diplomacy, and regional changes. Explored the risk of Russian interference in upcoming 2026 elections.",
    },
    {
      year: "2022–2024",
      title: "Reporter, Fort Worth Report (Report for America)",
      description:
        "Covered housing, transportation, infrastructure, and economic development. Stories included discrimination against housing voucher recipients, which led to a city ordinance amendment. Produced audio report for KERA News (NPR affiliate).",
    },
    {
      year: "2020–2021",
      title: "Reporter, Community Impact Newspaper",
      description:
        "Covered local government and education in Grapevine and Southlake, including a controversial legal battle within the school district on diversity and equity.",
    },
    {
      year: "2025",
      title: "M.A. Journalism, CUNY Graduate School of Journalism",
      description:
        "Specialization in international reporting. Produced three short video features on the Bronx Documentary Center, a Palestinian artist in the diaspora, and combating senior isolation.",
    },
    {
      year: "2020",
      title: "B.A. Journalism, Texas State University",
      description:
        "Minor in International Relations. Graduated Summa Cum Laude with honors. Authored thesis on 'War in Yemen: Costs and Benefits to the United States.'",
    },
  ];

  const awards: Award[] = [
    {
      name: "SPJ-FW First Amendment Award",
      year: 2025,
      description: "Defending the Disadvantaged",
    },
    {
      name: "SPJ-FW Finalist",
      year: 2024,
      description: "Business Reporting",
    },
    {
      name: "Texas Managing Editors' Award",
      year: 2024,
      description: "First-place award for business reporting",
    },
    {
      name: "Housing Narrative Lab Awards",
      year: 2023,
      description: "Finalist",
    },
    {
      name: "Columbia University Age Boom Academy",
      year: 2023,
      description: "Cohort exploring America's housing crisis and its impact on an aging population",
    },
    {
      name: "Texas Press Association",
      year: 2020,
      description: "Part of the Katy Times team that placed 2nd for online coverage of summer 2020 Black Lives Matter protests in Katy",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="About"
        subtitle="Journalist based in New York, reporting on global politics, migration and trade"
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
              Sandra Sadek is an award-winning, multimedia journalist based in New York City. Her work focuses on international issues, including geopolitics, migration, and trade, with a human-centered approach.
            </p>
            <p className="text-lg leading-relaxed">
              She is currently available for freelance assignments in NYC.
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
                NYC
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

      {/* In the Field */}
      <div className="mb-20">
        <h3 className="text-2xl font-serif font-bold mb-8">
          In the Field
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/images/sandra/radio.jpg"
              alt="Sandra in the radio studio"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">Radio Studio</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/images/sandra/field.jpg"
              alt="Sandra reporting in the field"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">In the Field</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="/images/sandra/reporting.jpg"
              alt="Sandra on assignment"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">On Assignment</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
