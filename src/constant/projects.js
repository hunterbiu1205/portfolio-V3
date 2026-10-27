import images from "./images";

// Featured on the home page, in display order.
export const featuredProjects = [
  {
    title: "Beresford Shopify Store",
    url: "https://beresfordestate.com.au/",
    image: images.beresford,
    imageSize: [260, 126],
    imageAlt: "Beresford Estate online store home page",
    description:
      "Beresford Estate’s Shopify store was completely redesigned and developed to perfectly match the project requirements and objectives. The new Wine Club system where customers can subscribe to receive curated selections of our exceptional wines. The integration with QAD, our comprehensive CMS system, ensures efficient inventory management and order fulfillment.",
    tags: ["Liquid", "Shopify API", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Bickford's Australia",
    url: "https://www.bickfords.net/",
    image: images.bickfords,
    imageSize: [260, 143],
    imageAlt: "Bickford's Australia home page showing cordial bottles",
    description:
      "Bickford’s website underwent a successful redesign and development, aligning seamlessly with the requirements and brief provided by the marketing team. The results garnered positive reviews internally and externally.",
    tags: ["WordPress", "PHP", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Wheel&Barrow Cart Page Refresh",
    url: "https://wheelandbarrow.com.au/cart",
    image: images.wheelAndBarrow,
    imageSize: [260, 143],
    imageAlt: "Redesigned Wheel&Barrow shopping cart page",
    description:
      'Revamping the "Wheel & Barrow Cart Page," Redesigned, developed, and published a more organized and aesthetically pleasing layout—a success in enhancing the checkout user experience.',
    tags: ["Liquid", "JavaScript", "HTML & CSS", "jQuery"],
  },
  {
    title: "yerbi.com.au",
    url: "https://yerbi.com.au/",
    image: images.yerbi,
    imageSize: [260, 143],
    imageAlt: "Yerbi product landing page",
    description:
      "A visually stunning single-page website for the new product 'Yerbi,' based on the compelling mock-up designed by the UI designer. The website showcases the product's excellence with an appealing and user-friendly interface.",
    tags: ["WordPress", "PHP", "JavaScript", "HTML & CSS"],
  },
];

// Every project on the /archive page, newest first.
// link.github switches the icon from an arrow to the GitHub mark.
export const archiveProjects = [
  {
    year: 2024,
    title: "Beresford Shopify Store",
    madeAt: "Bickford's Group",
    tags: ["Shopify Liquid", "JavaScript", "HTML & CSS", "Shopify API", "jQuery"],
    link: { url: "https://beresfordestate.com.au/", label: "beresfordestate.com.au" },
  },
  {
    year: 2024,
    title: "Cafecino",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "HTML & CSS", "JavaScript"],
    link: { url: "https://cafecino.com.au/", label: "cafecino.com.au" },
  },
  {
    year: 2024,
    title: "Portfolio Website V3",
    madeAt: "Personal Project",
    tags: ["React", "SCSS", "Figma"],
    link: { url: "https://www.hunterdong.com/", label: "hunterdong.com" },
  },
  {
    year: 2024,
    title: "Bickford's Australia",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "Droow", "HTML & CSS", "JavaScript"],
    link: { url: "https://www.bickfords.net/", label: "bickfords.net" },
  },
  {
    year: 2023,
    title: "Weather App",
    madeAt: "Personal Project",
    tags: ["HTML & CSS", "JavaScript", "Rest API", "OpenWeatherMap"],
    link: { url: "https://github.com/hunterbiu1205/Weather-app", label: "GitHub", github: true },
  },
  {
    year: 2023,
    title: "Pacific Drifter",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "WooCommerce", "HTML & CSS", "JavaScript"],
    link: { url: "https://pacificdrifter.com.au/", label: "pacificdrifter.com.au" },
  },
  {
    year: 2023,
    title: "Portfolio Website V2",
    madeAt: "Personal Project",
    tags: ["React", "SCSS", "TypewriterJS", "EmailJS"],
    link: { url: "https://github.com/hunterbiu1205/portfolio-V2", label: "GitHub", github: true },
  },
  {
    year: 2023,
    title: "Beenleigh Rum",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "WooCommerce", "HTML & CSS", "JavaScript"],
    link: { url: "https://www.beenleighrum.com.au/", label: "beenleighrum.com.au" },
  },
  {
    year: 2023,
    title: "W&B Cart Page Refresh",
    madeAt: "Wheel&Barrow",
    tags: ["Shopify Liquid", "JavaScript", "HTML & CSS", "Figma"],
    link: { url: "https://wheelandbarrow.com.au/cart", label: "wheelandbarrow.com.au/cart" },
  },
  {
    year: 2023,
    title: "Yerbi",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "HTML & CSS", "JavaScript"],
    link: { url: "https://yerbi.com.au/", label: "yerbi.com.au" },
  },
  {
    year: 2022,
    title: "Bickford's Group",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "PHP", "HTML & CSS", "JavaScript"],
    link: { url: "https://www.bickfordsgroup.com/", label: "bickfordsgroup.com" },
  },
  {
    year: 2022,
    title: "Vok Beverage",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "PHP", "HTML & CSS", "JavaScript"],
    link: { url: "https://vok.com.au/", label: "vok.com.au" },
  },
  {
    year: 2022,
    title: "Five Square Mile",
    madeAt: "Bickford's Group",
    tags: ["WordPress", "HTML & CSS", "JavaScript"],
    link: { url: "https://5squaremiledistillery.com/", label: "5squaremiledistillery.com" },
  },
  {
    year: 2022,
    title: "Portfolio V1",
    madeAt: "Personal Project",
    tags: ["React", "SCSS", "Sanity", "Rest API"],
    link: { url: "https://github.com/hunterbiu1205/portfolio", label: "GitHub", github: true },
  },
  {
    year: 2022,
    title: "Modern UI/UX Restaurant",
    madeAt: "Personal Project",
    tags: ["React", "SCSS"],
    link: { url: "https://hunterbiu1205.github.io/Modern-UI-UX-Restaurant/", label: "Live demo" },
  },
];
