// Freelance engagement options shown in the "Work With Me" section.
// Adjust rates/terms here — the section renders from this data.

const freelanceRates = [
  {
    id: "hourly",
    badge: "Most Flexible",
    title: "Hourly Engagement",
    price: "$5",
    unit: "/hour",
    description:
      "Best for maintenance, bug fixes, small feature work, or ongoing support.",
    features: [
      "Frontend development (React, Vue, Angular)",
      "Bug fixes & performance tuning",
      "UI implementation from Figma/design",
      "Weekly progress updates",
    ],
    cta: {
      label: "Book hourly work",
      href: "mailto:dimasprasetyo485@gmail.com?subject=Hourly%20engagement",
    },
  },
  {
    id: "project",
    badge: "Best Value",
    title: "Project-Based",
    price: "Custom",
    unit: " quote",
    description:
      "Best for complete products — landing pages, web apps, dashboards, MVP builds.",
    features: [
      "Fixed scope & fixed price",
      "Milestone-based delivery",
      "SEO & performance optimization included",
      "Post-launch support period",
    ],
    cta: {
      label: "Get a project quote",
      href: "mailto:dimasprasetyo485@gmail.com?subject=Project%20quote%20request",
    },
    highlight: true,
  },
]

export default freelanceRates
