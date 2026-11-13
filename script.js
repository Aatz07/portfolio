const roles = [
  "Software Engineering",
  "Autonomous Driving",
  "Research",
  "Developer Tools",
  "Intelligent Mobility",
];

const eyeGazeFrames = {
  horizontal: [
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_46 AM-1.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_47 AM-2.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_47 AM-3.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_48 AM-4.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_49 AM-5.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_50 AM-6.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_51 AM-7.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_52 AM-8.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_52 AM-9.png",
    "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_22_53 AM-10.png",
  ],
  up: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_03 AM-1.png",
  down: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_04 AM-2.png",
  upLeft: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_05 AM-3.png",
  upRight: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_06 AM-4.png",
  downLeft: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_06 AM-5.png",
  downRight: "Images/eye frames/ChatGPT Image Oct 12, 2026, 01_23_07 AM-6.png",
};

const createMotionFrames = (folder, count) =>
  Array.from(
    { length: count },
    (_, index) => `Images/widget-motion/${folder}/frame-${String(index + 1).padStart(2, "0")}.png`,
  );

const beyondMotionFrames = {
  photography: createMotionFrames("photography", 10),
  travelling: createMotionFrames("travelling", 10),
  music: createMotionFrames("music", 10),
  cycling: createMotionFrames("cycling", 1),
};

const education = [
  {
    year: "2026",
    period: "Mar 2024 – Present",
    title: "M.Eng. Autonomous Driving",
    place: "Hochschule Coburg · Germany",
    grade: "1.8",
    description:
      "Advanced studies in autonomous mobility, focusing on the design, development, and implementation of intelligent vehicle systems. Gained practical experience in localization, sensor integration, trajectory planning, V2X communication, and real-time testing of autonomous driving applications.",
    highlights: [
      "Project-based curriculum covering Python, ROS 2, deep learning, computer vision, sensor fusion, and Linux.",
      "Hands-on work with LiDAR, cameras, and NVIDIA Jetson for perception and control.",
      "<strong>Key project:</strong> Group Start Platooning for Commuters: state-machine control logic, V2X (SPaT) messages, and machine-learning models for platoon coordination.",
    ],
    tags: [
      "Autonomous Driving",
      "Localization",
      "Sensor Fusion",
      "Trajectory Planning",
      "V2X Communication",
      "Real-Time Testing",
      "Research",
    ],
  },
  {
    year: "2023",
    period: "Jul 2019 – Jun 2023",
    title: "B.Tech. Computer Science & Engineering",
    place: "APJ Abdul Kalam Technological University · India",
    grade: "1.9",
    description:
      "Built a strong foundation in software engineering, computational problem-solving, and system architecture. Developed practical skills in programming, microprocessors and microcontrollers, system design, and translating technical concepts into functional applications.",
    highlights: [
      "Coursework and labs in AI, machine learning, DBMS, microprocessors, computer graphics, computer networks, and data structures.",
      "<strong>Final-year project:</strong> Medical Record System using Blockchain Technology, a secure platform for managing and sharing medical records.",
      "<strong>Publication:</strong> A review of machine-learning algorithms for heart-disease diagnosis and prediction (2022).",
    ],
    tags: [
      "Microprocessors & Microcontrollers",
      "System Design",
      "Concept Development",
      "Software Engineering",
      "Algorithms",
      "System Architecture",
    ],
  },
];

const experience = [
  {
    year: "2026",
    period: "Feb 2026 – Oct 2026",
    title: "Student Research Assistant & Master's Thesis Student",
    place: "German Aerospace Center (DLR) · Stuttgart, Germany",
    description:
      "Prepared geospatial datasets and urban study areas for DLR research projects on infrastructure for automated driving, and completed my master's thesis there.",
    highlights: [
      "Collected and prepared geospatial data (road networks, streetlights, traffic signals, bus stops) from OpenStreetMap and city open-data portals.",
      "Defined urban study areas and calculated their key characteristics, such as road length, intersections, and pole density, using Python and QGIS, delivering ready-to-use datasets for project teams.",
      "Compared the calculated study-area results with existing studies to check consistency and highlight differences.",
      "<strong>Master's thesis:</strong> finding sensor positions for self-driving cars using existing street poles (see the case study under Selected Work).",
    ],
    tags: ["Python", "QGIS", "OpenStreetMap", "Open Data", "GeoPandas", "Research"],
  },
  {
    year: "2022",
    period: "Jan 2022 – Jul 2022",
    title: "Student Developer · Web Application Development",
    place: "Dept. of Computer Science, VKCET · Thiruvananthapuram, India",
    description:
      "Academic project building a web-based Attendance Management System used by three different groups: professors, students, and parents.",
    highlights: [
      "Built separate login portals and dashboards for parents, professors, and students.",
      "Professors mark and update attendance, while students and parents view their own records.",
      "Added export of attendance data to Excel for reporting and record-keeping.",
      "Designed the interface in HTML and CSS and the database in SQL, with attention to data security.",
    ],
    tags: ["HTML", "CSS", "SQL", "Role-Based Access", "Web App"],
  },
  {
    year: "2021",
    period: "Jul 2021 – Aug 2021",
    title: "Intern · Mobile Application Development (Flutter)",
    place: "Fablab · Kochi, India",
    description:
      "Practical internship focused on cross-platform mobile development with Flutter, working in a small team under mentor guidance.",
    highlights: [
      "Designed user interfaces and built interactive pages for a prototype app.",
      "Learned cross-platform development, UI layout, and basic backend connectivity.",
      "Collaborated in a small team, experiencing a real mobile design and delivery workflow.",
    ],
    tags: ["Flutter", "Mobile UI", "Prototyping", "Teamwork"],
  },
];

const projects = [
  {
    title: "Finding Sensor Positions for Self-Driving Cars",
    category: "Master's Thesis · DLR & Hochschule Coburg",
    cover: "Thesis",
    period: "Apr – Oct 2026",
    hue: 356,
    officialTitle:
      "Application and evaluation of a methodology for defining infrastructure sensor positions with consideration of existing infrastructure",
    summary:
      "A Python tool that finds where roadside sensors are needed and positions them on existing streetlights and traffic-light poles. In tests, 59–75% of sensors needed no new pole.",
    stats: [
      ["59–75%", "of sensors placed on existing poles"],
      ["7", "city districts tested"],
      ["3", "cities: Hamburg, Cologne, Ingolstadt"],
    ],
    problem:
      "Self-driving cars cannot see around corners or past parked cars. Roadside sensors can fill these blind spots, but putting up new poles for them is expensive.",
    approach: [
      "Developed a Python tool that automatically decides where sensors are needed: at intersections, at bus stops, and along streets.",
      "Placed sensors on existing streetlights and traffic-light poles wherever possible, adding new poles only where nothing suitable exists.",
      "Tested the method in 7 city districts in Hamburg, Cologne, and Ingolstadt, from dense city centres and suburbs to historic old towns.",
      "Analysed how sensor spacing, search distance, and cost settings affect the result.",
    ],
    outcome:
      "About 59–75% of all sensors could be placed on existing poles, greatly reducing the need for new infrastructure and its cost.",
    tags: ["Python", "GeoPandas", "Shapely", "Pandas", "QGIS", "OpenStreetMap"],
  },
  {
    title: "Group Start Platooning for Commuters",
    category: "M.Eng. Key Project",
    cover: "Fleet",
    period: "Hochschule Coburg",
    hue: 6,
    summary:
      "Coordinating vehicles to start together at intersections using V2X signal data and state-machine control.",
    problem:
      "At signalised intersections, vehicles pull away one after another, which wastes green time. Platoons that start as a group could move more commuters per signal phase.",
    approach: [
      "Developed the state-machine control logic that governs platoon behaviour.",
      "Consumed V2X SPaT (Signal Phase and Timing) messages to anticipate signal changes.",
      "Applied machine-learning models to support platoon coordination decisions.",
    ],
    outcome:
      "A working coordination concept that combines infrastructure communication with onboard decision logic.",
    tags: ["ROS 2", "V2X / SPaT", "State Machines", "Machine Learning", "Python"],
  },
  {
    title: "Traffic Light Responder",
    category: "V2X Communication",
    cover: "V2X",
    period: "ROS 2",
    hue: 348,
    summary:
      "A ROS 2 node that lets an autonomous vehicle react to traffic-light states received over V2X.",
    problem:
      "Camera-only traffic-light detection struggles with occlusion and lighting. Receiving the signal state directly from the infrastructure gives the vehicle a reliable second source.",
    approach: [
      "Parsed SPaT messages to extract real-time event states for red and green phases.",
      "Implemented decision routines that map signal states to vehicle control responses.",
      "Packaged the logic as a ROS 2 node for intersection handling.",
    ],
    outcome:
      "A deeper understanding of V2X protocols, message parsing, and real-time decision control in cooperative traffic.",
    tags: ["ROS 2", "V2X", "SPaT", "Python"],
  },
  {
    title: "Obstacle Detection using LiDAR",
    category: "Perception",
    cover: "LiDAR",
    period: "ROS 2",
    hue: 0,
    summary:
      "Real-time obstacle detection from laser scans that publishes alerts for safe navigation.",
    problem:
      "A robot or vehicle needs to know immediately when something enters its path, using noisy, high-frequency sensor data.",
    approach: [
      "Subscribed to live LiDAR laser-scan data in ROS 2.",
      "Filtered sensor readings and applied distance thresholding to detect obstacles.",
      "Published real-time alert messages for downstream navigation logic.",
    ],
    outcome:
      "A working detection node and hands-on experience with sensor filtering and real-time message publishing.",
    tags: ["ROS 2", "LiDAR", "Sensor Processing", "Python"],
  },
  {
    title: "Robot State Machine",
    category: "Robotics Software",
    cover: "FSM",
    period: "ROS 2",
    hue: 352,
    summary:
      "A finite state machine for navigation and task transitions that mimics real vehicle behaviour handling.",
    problem:
      "Robotic systems must switch reliably between tasks as conditions change, without tangled, hard-to-test control code.",
    approach: [
      "Implemented a finite state machine in ROS 2 for navigation and task transitions.",
      "Integrated live sensor data so the system switches tasks in response to its environment.",
      "Applied a modular software design to improve reusability, maintainability, and testing.",
    ],
    outcome:
      "A clean, extensible control architecture and practical experience with real-time data handling.",
    tags: ["ROS 2", "Finite State Machines", "Modular Design"],
  },
  {
    title: "Blockchain Medical Records",
    category: "B.Tech. Final Project",
    cover: "Ledger",
    period: "2023",
    hue: 10,
    summary:
      "A hybrid medical-record platform: centralised storage for speed, blockchain validation for integrity.",
    problem:
      "Medical records must be quick to access yet tamper-proof and traceable when shared between doctors, patients, and hospitals.",
    approach: [
      "Combined centralised storage with blockchain-based decentralised validation.",
      "Implemented role-based access control for doctors, patients, and hospitals.",
      "Added hashing and transaction validation to prevent unauthorised changes.",
      "Led the system design and testing phases.",
    ],
    outcome:
      "A secure, traceable record-sharing system, and grounding in blockchain architecture and data security.",
    tags: ["Blockchain", "Hashing", "Access Control", "System Design"],
  },
];

// ---------- Skills ----------
// `level` is your self-rating out of 5 stars, shown when hovering a skill.
// 1 Beginner · 2 Familiar · 3 Proficient · 4 Advanced · 5 Expert
// Icon types: logo (full-colour file), mono (single-colour logo tinted with `color`), glyph (drawn icon).
const logo = (name, file, level) => ({ name, level, icon: { type: "logo", file } });
const mono = (name, file, color, level) => ({ name, level, icon: { type: "mono", file, color } });
const glyph = (name, shape, level) => ({ name, level, icon: { type: "glyph", shape } });

const skillGroups = [
  [
    "Programming",
    [
      logo("Python", "python.svg", 4),
      glyph("SQL", "database", 3),
      logo("C", "c.svg", 3),
      logo("HTML", "html5.svg", 4),
      logo("CSS", "css3.svg", 3),
    ],
  ],
  [
    "Autonomous Systems",
    [
      logo("ROS 2", "ros.svg", 4),
      glyph("LiDAR", "lidar", 3),
      glyph("V2X / SPaT", "signal", 4),
      glyph("Sensor Data", "wave", 3),
      mono("NVIDIA Jetson", "si-nvidia.svg", "#76B900", 3),
    ],
  ],
  [
    "Geospatial",
    [
      glyph("GeoPandas", "map", 4),
      glyph("Shapely", "polygon", 4),
      mono("QGIS", "si-qgis.svg", "#589632", 4),
      mono("OpenStreetMap", "si-openstreetmap.svg", "#7EBC6F", 4),
      logo("Pandas", "pandas.svg", 4),
    ],
  ],
  [
    "Dev Tools & Platforms",
    [
      logo("Git", "git.svg", 4),
      mono("GitHub", "si-github.svg", "#181717", 4),
      logo("GitLab", "gitlab.svg", 3),
      mono("Linux", "si-linux.svg", "#1a1a1a", 3),
    ],
  ],
  [
    "Design & Collaboration",
    [
      logo("Figma", "figma.svg", 3),
      logo("Canva", "canva.svg", 4),
      logo("Photoshop", "photoshop.svg", 3),
      mono("Miro", "si-miro.svg", "#050038", 3),
      glyph("Agile", "cycle", 3),
    ],
  ],
];

const skillLevels = ["", "Beginner", "Familiar", "Proficient", "Advanced", "Expert"];

// Simple line icons for skills without an official logo.
const skillGlyphs = {
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  lidar:
    '<circle cx="12" cy="12" r="1.8"/><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7a5 5 0 1 0 5 5"/><path d="M12 12l6.5-6.5"/>',
  signal:
    '<rect x="8.5" y="3" width="7" height="18" rx="2"/><circle cx="12" cy="7.5" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="16.5" r="1.3"/><path d="M5 8.5a5 5 0 0 0 0 7M19 8.5a5 5 0 0 1 0 7"/>',
  wave: '<path d="M2 12h3.5l2.5-7 4 14 3-10 2 3h5"/>',
  map: '<path d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
  polygon:
    '<path d="M12 3.5 20 9l-3 10H7L4 9z"/><circle cx="12" cy="3.5" r="1.4"/><circle cx="20" cy="9" r="1.4"/><circle cx="17" cy="19" r="1.4"/><circle cx="7" cy="19" r="1.4"/><circle cx="4" cy="9" r="1.4"/>',
  cycle: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v5h-5"/><path d="M9 12l2 2 4-4"/>',
};

function skillIcon({ icon }) {
  if (icon.type === "logo") {
    return `<img src="Images/skills/${icon.file}" alt="" loading="lazy" decoding="async" />`;
  }
  if (icon.type === "mono") {
    // Brand colour is baked into these files (see `color` above for reference).
    return `<img class="skill-mono" src="Images/skills/${icon.file}" alt="" loading="lazy" decoding="async" />`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${skillGlyphs[icon.shape]}</svg>`;
}

// Side projects in progress. Status: "Live", "In progress" or "Planning".
// Add a `link` to show an "Open the app" button.
const workbench = [
  {
    title: "Reinforcement Learning Project",
    status: "In progress",
    text: "Exploring reinforcement learning: agents that learn to make decisions through trial, error, and reward.",
  },
  {
    title: "Dashcam Road Data",
    status: "Planning",
    text: "Working with road footage I've recorded on a dashcam, to find out what real-world driving data can reveal.",
  },
  {
    title: "Family Ledger App",
    status: "Live",
    text: "An expense tracker for my family, built around features I designed myself and published as a Claude artifact.",
    link: "",
  },
];

const cefrLevels =["A1", "A2", "B1", "B2", "C1", "C2"];

const languages = [
  { name: "English", level: "C1", label: "Professional proficiency" },
  { name: "German", level: "B1", label: "Intermediate, still improving" },
];

const leadership = [
  {
    title: "Media Coordinator",
    event: "Tech Fest Prayan '22",
    date: "April 2022",
    points: [
      "Led the student media and promotion team for the annual college tech fest.",
      "Developed campaign ideas, poster designs, and visual concepts to drive participation.",
      "Coordinated design, content, and logistics teams for consistent branding.",
    ],
  },
  {
    title: "Sponsorship Coordinator",
    event: "Tech Fest Prayan '23",
    date: "April 2023",
    points: [
      "Managed the student sponsorship team and sponsor relationships.",
      "Ran meetings and negotiations to secure sponsorships and meet sponsor requirements.",
      "Promoted sponsor brands through media campaigns and on-site representation.",
    ],
  },
];

// Gallery photos, in display order: [photo number, caption, thumbnail width, thumbnail height].
// Files live in Images/gallery/thumbs (grid) and Images/gallery/web (full-screen viewer).
const galleryPhotos = [
  [26, "Green valleys and an alpine lake", 576, 720],
  [29, "Frauenkirche, Munich", 405, 720],
  [7, "Christmas market lights", 405, 720],
  [19, "Classic Mercedes-Benz roadsters", 405, 720],
  [1, "Autumn in a riverside town", 405, 720],
  [12, "Neue Synagoge, Berlin", 720, 405],
  [28, "The city through a stone archway", 405, 720],
  [4, "Golden autumn", 405, 720],
  [17, "Chrome, curves, and history", 405, 720],
  [13, "Sunset over the hills", 405, 720],
  [9, "Warm light on a quiet doorway", 720, 405],
  [3, "Classical facade in black and white", 405, 720],
  [23, "Porsche 911 on a summer street", 405, 720],
  [6, "Through a narrow gorge", 405, 720],
  [20, "Classic roadster cockpit", 405, 720],
  [11, "Fresh snow in the park", 720, 405],
  [32, "Church tower against a blue sky", 405, 720],
  [21, "Evening sky over the city", 405, 720],
  [18, "Vintage Mercedes-Benz postal bus", 576, 720],
  [2, "Autumn colours and morning mist", 720, 405],
  [25, "Light through the trees", 405, 720],
  [14, "Where the modern car began", 405, 720],
  [16, "Snowy footbridge", 405, 720],
  [27, "Flowers on old stone walls", 405, 720],
  [22, "Classic BMW convertible", 405, 720],
  [10, "Rainy day in the city", 720, 405],
  [5, "Frosty winter morning", 720, 405],
  [24, "Golden hour at the window", 405, 720],
  [15, "Vintage racing livery", 405, 720],
  [0, "Trains at dusk", 405, 720],
  [8, "Light and lines", 332, 720],
  [31, "Lights in the dark", 405, 720],
  [30, "Shadows on the wall", 405, 720],
];

const gallery = galleryPhotos.map(([number, caption, width, height]) => {
  const file = `photo-${String(number).padStart(2, "0")}.jpg`;
  return {
    caption,
    width,
    height,
    thumb: `Images/gallery/thumbs/${file}`,
    image: `Images/gallery/web/${file}`,
  };
});

// How many photos show before "Show all photos" is pressed.
const galleryPreviewCount = 6;

const socials = [
  ["GitHub", "@Aatz07", "https://github.com/Aatz07"],
  ["LinkedIn", "Aatiq Ali", "https://www.linkedin.com/in/aatiq-ali-0a8122251/"],
  ["Instagram", "@axtiq_", "https://www.instagram.com/axtiq_/"],
  ["Email", "aatiqali07", "mailto:aatiqali07@gmail.com"],
];

const socialBallImages = {
  GitHub: "Images/snooker/web/ChatGPT Image Oct 13, 2026, 09_47_00 PM-1.png",
  LinkedIn: "Images/snooker/web/ChatGPT Image Oct 13, 2026, 09_02_48 PM-10.png",
  Instagram: "Images/snooker/web/ChatGPT Image Oct 13, 2026, 09_08_42 PM-1.png",
  Email: "Images/snooker/web/gmail_frame_01.png",
};

const socialPreviews = {
  github: {
    avatar: "GH",
    title: "@Aatz07",
    subtitle: "Aatiq Ali on GitHub",
    description: "Open GitHub to explore Aatiq's repositories and development activity.",
    url: "github.com/Aatz07",
  },
  linkedin: {
    avatar: "IN",
    title: "Aatiq Ali",
    subtitle: "Professional profile on LinkedIn",
    description: "View Aatiq's professional profile, education, experience, and network.",
    url: "linkedin.com/in/aatiq-ali-0a8122251",
  },
  instagram: {
    avatar: "IG",
    title: "@axtiq_",
    subtitle: "Aatiq Ali on Instagram",
    description: "Open the profile to see Aatiq's latest posts and updates on Instagram.",
    url: "instagram.com/axtiq_",
  },
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));

  qs("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

function renderTimeline(target, items) {
  qs(target).innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-year">
            ${item.year}
            ${item.period ? `<small>${item.period}</small>` : ""}
          </div>
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card">
            <div class="timeline-card-head">
              <h3>${item.title}</h3>
              ${item.grade ? `<span class="grade-badge" title="German grading scale (1.0 = best)">Grade ${item.grade}</span>` : ""}
            </div>
            <p><strong>${item.place}</strong></p>
            <p>${item.description}</p>
            ${
              item.highlights
                ? `<ul class="timeline-highlights">${item.highlights.map((point) => `<li>${point}</li>`).join("")}</ul>`
                : ""
            }
            <div class="timeline-meta">
              ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  qs("#projectGrid").innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-card reveal"
          type="button"
          data-project-index="${index}"
          data-delay="${(index % 3) * 160}ms"
          aria-label="Open case study: ${project.title}"
          style="--hue: ${project.hue}"
        >
          <span class="project-cover" aria-hidden="true">
            <span class="project-cover-label">${project.cover}</span>
          </span>
          <span class="project-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-content">
            <span class="project-category">${project.category}</span>
            <span class="project-title">${project.title}</span>
            <span class="project-open">
              View case study
              <span aria-hidden="true">→</span>
            </span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderProjectDetail(project) {
  return `
    <header class="project-dialog-hero" style="--hue: ${project.hue}">
      <p class="eyebrow">${project.category} · ${project.period}</p>
      <h3 id="projectDialogTitle">${project.title}</h3>
      ${project.officialTitle ? `<p class="project-official-title">Official title: “${project.officialTitle}”</p>` : ""}
      <p>${project.summary}</p>
    </header>
    ${
      project.stats
        ? `<dl class="project-stats">${project.stats
            .map(([value, label]) => `<div><dt>${value}</dt><dd>${label}</dd></div>`)
            .join("")}</dl>`
        : ""
    }
    <div class="project-dialog-body">
      <section>
        <h4>The problem</h4>
        <p>${project.problem}</p>
      </section>
      <section>
        <h4>What I did</h4>
        <ul>${project.approach.map((step) => `<li>${step}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Outcome</h4>
        <p>${project.outcome}</p>
      </section>
      <section>
        <h4>Stack</h4>
        <div class="timeline-meta">
          ${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function initProjectDialog() {
  const dialog = qs("#projectDialog");
  const body = qs("#projectDialogBody");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const close = () => dialog.close();

  qsa("[data-project-index]").forEach((card) => {
    card.addEventListener("click", () => {
      body.innerHTML = renderProjectDetail(projects[Number(card.dataset.projectIndex)]);
      dialog.showModal();
      qsa(".project-stats dt", dialog).forEach((stat) => countUp(stat));
      document.body.classList.add("dialog-open");
      dialog.scrollTop = 0;
    });
  });

  qs("#projectDialogClose").addEventListener("click", close);
  qs("#projectDialogContact").addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

function renderWorkbench() {
  qs("#workbenchList").innerHTML = workbench
    .map(
      (item) => `
        <li class="workbench-item">
          <span class="status-chip is-${item.status.toLowerCase().replace(/\s+/g, "-")}">${item.status}</span>
          <div>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
            ${
              item.link
                ? `<a class="workbench-link" href="${item.link}" target="_blank" rel="noreferrer">Open the app <span aria-hidden="true">↗</span></a>`
                : ""
            }
          </div>
        </li>
      `,
    )
    .join("");
}

function renderLanguages() {
  const levelIndex = (level) => cefrLevels.indexOf(level) + 1;

  qs("#languageList").innerHTML = languages
    .map(
      (language) => `
        <li class="language-row">
          <div class="language-label">
            <strong>${language.name}</strong>
            <span>${language.level} · ${language.label}</span>
          </div>
          <div class="cefr-scale" role="img" aria-label="${language.name}: CEFR level ${language.level} of C2">
            ${cefrLevels
              .map(
                (level, index) =>
                  `<span class="${index < levelIndex(language.level) ? "is-filled" : ""}">${level}</span>`,
              )
              .join("")}
          </div>
        </li>
      `,
    )
    .join("");
}

function renderHighlights() {
  qs("#leadershipList").innerHTML = leadership
    .map(
      (role) => `
        <article class="highlight-card reveal">
          <p class="highlight-kicker">Leadership · ${role.date}</p>
          <h3>${role.title}</h3>
          <p class="highlight-sub">${role.event}</p>
          <ul class="timeline-highlights">
            ${role.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  qs("#skillsGrid").innerHTML = skillGroups
    .map(
      ([group, skills]) => `
        <article class="skill-group reveal">
          <h3>${group}</h3>
          <ul class="skill-tiles">
            ${skills
              .map(
                (skill, tileIndex) => `
                  <li
                    class="skill-tile"
                    style="--t:${tileIndex}"
                    tabindex="0"
                    aria-label="${skill.name}: ${skillLevels[skill.level]}, ${skill.level} of 5"
                  >
                    <span class="skill-icon${skill.icon.type === "glyph" ? " is-glyph" : ""}" aria-hidden="true">
                      ${skillIcon(skill)}
                    </span>
                    <span class="skill-name" aria-hidden="true">${skill.name}</span>
                    <span class="skill-rating" aria-hidden="true">
                      <span class="skill-stars">
                        ${[1, 2, 3, 4, 5]
                          .map(
                            (star) =>
                              `<span class="star${star <= skill.level ? " is-on" : ""}" style="--i:${star}">★</span>`,
                          )
                          .join("")}
                      </span>
                      <span class="skill-level">${skillLevels[skill.level]}</span>
                    </span>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("") +
    `
      <article class="skill-group reveal">
        <h3>Languages <span class="skill-group-note">CEFR</span></h3>
        <ul class="language-list" id="languageList"></ul>
      </article>
    `;
  renderLanguages();
}

function renderGallery() {
  const grid = qs("#galleryGrid");
  grid.innerHTML = gallery
    .map(
      (item, index) => `
        <button
          class="gallery-item reveal${index >= galleryPreviewCount ? " is-extra" : ""}"
          type="button"
          data-gallery-index="${index}"
          aria-label="Open photo: ${item.caption}"
        >
          <img
            src="${item.thumb}"
            alt="${item.caption}"
            width="${item.width}"
            height="${item.height}"
            loading="lazy"
            decoding="async"
          />
          <span>${item.caption}</span>
        </button>
      `,
    )
    .join("");

  const toggle = qs("#galleryToggle");
  if (!toggle) return;

  if (gallery.length <= galleryPreviewCount) {
    toggle.hidden = true;
    return;
  }

  const label = qs("[data-gallery-toggle-label]", toggle);
  const setLabel = () => {
    const expanded = grid.classList.contains("is-expanded");
    label.textContent = expanded ? "Show fewer photos" : `Show all ${gallery.length} photos`;
    toggle.setAttribute("aria-expanded", String(expanded));
  };

  setLabel();
  toggle.addEventListener("click", () => {
    const expanding = !grid.classList.contains("is-expanded");
    grid.classList.toggle("is-expanded", expanding);
    if (expanding) qsa(".gallery-item.is-extra", grid).forEach((item) => item.classList.add("is-visible"));
    else qs("#gallery").scrollIntoView({ behavior: "smooth" });
    setLabel();
  });
}

function renderSocials() {
  qs("#socialCards").innerHTML = socials
    .map(
      ([title, handle, href]) => `
        <a
          class="social-card social-card--${title.toLowerCase()}"
          href="${href}"
          target="${href.startsWith("mailto:") ? "_self" : "_blank"}"
          rel="noreferrer"
          aria-label="Open ${title}${href.startsWith("mailto:") ? "" : ` profile ${handle}`}"
          ${href.startsWith("mailto:") ? "" : `data-social-preview="${title.toLowerCase()}"`}
        >
          <span class="social-card-arrow" aria-hidden="true">&#8599;</span>
          <span class="social-ball-fallback" aria-hidden="true">${title}</span>
          <img
            class="social-ball-sprite"
            src="${socialBallImages[title]}"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <p>${handle}</p>
        </a>
      `,
    )
    .join("");
}

function initSocialPreview() {
  const preview = qs("#socialProfilePreview");
  const triggers = qsa("[data-social-preview]");
  let activeTrigger = null;

  const positionPreview = () => {
    if (!activeTrigger) return;

    const triggerRect = activeTrigger.getBoundingClientRect();
    const gap = 14;
    const edge = 12;
    const centeredLeft = triggerRect.left + triggerRect.width / 2 - preview.offsetWidth / 2;
    const left = Math.min(
      Math.max(centeredLeft, edge),
      window.innerWidth - preview.offsetWidth - edge,
    );
    let top = triggerRect.top - preview.offsetHeight - gap;

    if (top < edge) {
      top = Math.min(triggerRect.bottom + gap, window.innerHeight - preview.offsetHeight - edge);
    }

    preview.style.left = `${left}px`;
    preview.style.top = `${Math.max(top, edge)}px`;
  };

  const showPreview = (trigger) => {
    const platform = trigger.dataset.socialPreview;
    const content = socialPreviews[platform];

    if (!content) return;

    activeTrigger = trigger;
    preview.dataset.platform = platform;
    qs("[data-preview-avatar]", preview).textContent = content.avatar;
    qs("[data-preview-title]", preview).textContent = content.title;
    qs("[data-preview-subtitle]", preview).textContent = content.subtitle;
    qs("[data-preview-description]", preview).textContent = content.description;
    qs("[data-preview-url]", preview).textContent = content.url;
    positionPreview();
    preview.classList.add("is-open");
    preview.setAttribute("aria-hidden", "false");
  };

  const hidePreview = () => {
    activeTrigger = null;
    preview.classList.remove("is-open");
    preview.setAttribute("aria-hidden", "true");
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => showPreview(trigger));
    trigger.addEventListener("mouseleave", hidePreview);
    trigger.addEventListener("focus", () => showPreview(trigger));
    trigger.addEventListener("blur", hidePreview);
  });

  window.addEventListener("scroll", positionPreview, { passive: true });
  window.addEventListener("resize", positionPreview);
}

function initReveal() {
  const items = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = item.dataset.delay || `${Math.min(index % 8, 5) * 45}ms`;
    observer.observe(item);
  });
}

function initRoleRotator() {
  const target = qs("#roleRotator");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % roles.length;
    target.textContent = roles[index];
    target.classList.remove("is-changing");
    window.requestAnimationFrame(() => target.classList.add("is-changing"));
  }, 2100);
}

function initHeader() {
  const header = qs("#siteHeader");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const menu = qs("#mobileMenu");
  const toggle = qs("#menuToggle");

  const close = () => {
    document.body.classList.remove("menu-open");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-label", "Open menu");
  };

  const open = () => {
    document.body.classList.add("menu-open");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-label", "Close menu");
  };

  toggle.addEventListener("click", () => {
    menu.classList.contains("is-open") ? close() : open();
  });

  qsa("a", menu).forEach((link) => link.addEventListener("click", close));
}

function initTimelineFill() {
  const timelines = qsa(".timeline");

  const update = () => {
    timelines.forEach((timeline) => {
      const rect = timeline.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.72;
      const end = viewport * 0.2;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height)));
      timeline.style.setProperty("--fill", `${progress * 100}%`);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initLightbox() {
  const lightbox = qs("#lightbox");
  const image = qs("#lightboxImage");
  const caption = qs("#lightboxCaption");
  let current = 0;

  const open = (index) => {
    current = index;
    image.src = gallery[current].image;
    image.alt = gallery[current].caption;
    caption.textContent = `${gallery[current].caption}  ·  ${current + 1} / ${gallery.length}`;
    // Preload the neighbours so arrow-key browsing feels instant.
    [1, -1].forEach((step) => {
      new Image().src = gallery[(current + step + gallery.length) % gallery.length].image;
    });
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  const move = (direction) => {
    current = (current + direction + gallery.length) % gallery.length;
    open(current);
  };

  qsa("[data-gallery-index]").forEach((item) => {
    item.addEventListener("click", () => open(Number(item.dataset.galleryIndex)));
  });

  qs("#lightboxClose").addEventListener("click", close);
  qs("#lightboxPrev").addEventListener("click", () => move(-1));
  qs("#lightboxNext").addEventListener("click", () => move(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  window.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
}

/* ---------- Light & particle layer ---------- */
const isDarkTheme = () => document.documentElement.dataset.theme === "dark";

// Crimson glow palette: crimson, bright red, coral, and deep red,
// with a few near-white sparks. (Colours listed twice appear more often.)
const glowPalette = {
  dark: [
    [229, 38, 45],
    [229, 38, 45],
    [255, 77, 77],
    [255, 77, 77],
    [155, 17, 17],
    [255, 107, 107],
    [255, 228, 228],
  ],
  light: [
    [200, 30, 30],
    [155, 17, 17],
    [229, 62, 62],
  ],
};

const glowSprites = new Map();

// Pre-renders a soft glowing dot once, so hundreds can be drawn cheaply each frame.
function glowSprite(rgb, hotCore) {
  const key = `${rgb.join()}-${hotCore}`;
  if (glowSprites.has(key)) return glowSprites.get(key);

  const size = 64;
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = size;
  const context = sprite.getContext("2d");
  const [r, g, b] = rgb;
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, hotCore ? "rgba(255,255,255,1)" : `rgba(${r},${g},${b},1)`);
  gradient.addColorStop(0.16, `rgba(${r},${g},${b},0.95)`);
  gradient.addColorStop(0.42, `rgba(${r},${g},${b},0.3)`);
  gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  glowSprites.set(key, sprite);
  return sprite;
}

const pick = (list) => list[Math.floor(Math.random() * list.length)];

// Full-page ember field: glowing particles drift toward the viewer,
// speed into a light-streak "warp" while scrolling, and settle when you stop.
function initCanvas() {
  const canvas = qs("#heroCanvas");
  const ctx = canvas.getContext("2d");
  const reduced = !motionOK();
  const pointer = { x: 0.5, y: 0.5, sx: 0.5, sy: 0.5 };
  let embers = [];
  let orbs = [];
  let width = 0;
  let height = 0;
  let focal = 0;
  let warp = 0;
  let lastScroll = window.scrollY;
  let lastTime = performance.now();
  let animationFrame = 0;

  const spawn = (ember, far = true) => {
    ember.x = (Math.random() - 0.5) * 2.4;
    ember.y = (Math.random() - 0.5) * 2.4;
    ember.z = far ? 0.75 + Math.random() * 0.35 : 0.08 + Math.random() * 0.95;

    // Mixed sizes: mostly fine dust, some embers, and a few large soft bokeh lights.
    const roll = Math.random();
    if (roll < 0.62) {
      ember.kind = "dust";
      ember.size = 0.25 + Math.random() * 0.45;
    } else if (roll < 0.9) {
      ember.kind = "ember";
      ember.size = 0.8 + Math.random() * 1.2;
    } else {
      ember.kind = "bokeh";
      ember.size = 2.6 + Math.random() * 3.4;
    }
    // Each particle drifts at its own pace, which adds depth.
    ember.pace = ember.kind === "bokeh" ? 0.45 + Math.random() * 0.3 : 0.7 + Math.random() * 0.8;
    ember.color = pick(glowPalette[isDarkTheme() ? "dark" : "light"]);
    ember.hot = ember.kind === "ember" && Math.random() < 0.5;
    ember.px = null;
    ember.py = null;
    return ember;
  };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    focal = Math.max(width, height) * 0.42;

    const count = Math.round(Math.min(170, Math.max(55, (width * height) / 9500)));
    embers = Array.from({ length: count }, () => spawn({}, false));
    orbs = [
      { x: 0.18, y: 0.22, r: 0.42, speed: 0.00011, phase: 0, color: 0, depth: 0.08 },
      { x: 0.84, y: 0.58, r: 0.38, speed: 0.00009, phase: 2, color: 4, depth: 0.14 },
      { x: 0.5, y: 0.95, r: 0.34, speed: 0.00013, phase: 4, color: 2, depth: 0.2 },
    ];
  };

  const drawOrbs = (time, dark) => {
    const colors = glowPalette[dark ? "dark" : "light"];
    const strength = dark ? 0.15 : 0.08;
    orbs.forEach((orb) => {
      const [r, g, b] = colors[orb.color % colors.length];
      const drift = Math.sin(time * orb.speed + orb.phase);
      // Orbs slide at different depths as the page scrolls (parallax).
      const scrollShift = ((window.scrollY * orb.depth) % (height * 1.6)) / height;
      const x = (orb.x + drift * 0.06 + (pointer.sx - 0.5) * 0.04) * width;
      const y = (((orb.y - scrollShift + 1.6) % 1.6) - 0.2 + Math.cos(time * orb.speed + orb.phase) * 0.05) * height;
      const radius = orb.r * Math.max(width, height);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(${r},${g},${b},${strength})`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });
  };

  const draw = (time) => {
    const dt = Math.min(0.05, (time - lastTime) / 1000) || 0.016;
    lastTime = time;
    const dark = isDarkTheme();

    // Scroll speed drives the warp; it eases back to a calm drift.
    const scrolled = Math.abs(window.scrollY - lastScroll);
    lastScroll = window.scrollY;
    const target = Math.min(4, (scrolled / Math.max(dt * 1000, 1)) * 1.4);
    warp += (target - warp) * (target > warp ? 0.25 : 0.05);

    pointer.sx += (pointer.x - pointer.sx) * 0.05;
    pointer.sy += (pointer.y - pointer.sy) * 0.05;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    drawOrbs(time, dark);

    const speed = reduced ? 0 : 0.045 + warp * 0.32;
    const cx = width / 2 + (pointer.sx - 0.5) * -60;
    const cy = height / 2 + (pointer.sy - 0.5) * -40;

    embers.forEach((ember) => {
      ember.z -= speed * ember.pace * dt;
      if (ember.z < 0.06) spawn(ember);

      const sx = cx + (ember.x / ember.z) * focal;
      const sy = cy + (ember.y / ember.z) * focal;
      if (sx < -80 || sx > width + 80 || sy < -80 || sy > height + 80) {
        spawn(ember);
        return;
      }

      const fadeIn = Math.min(1, (1.1 - ember.z) * 2.5);
      const fadeOut = Math.min(1, (ember.z - 0.06) * 6);
      const kindAlpha = ember.kind === "bokeh" ? 0.22 : ember.kind === "dust" ? 0.75 : 1;
      const alpha = Math.max(0, fadeIn * fadeOut) * (dark ? 0.9 : 0.55) * kindAlpha;
      const size = (ember.size / ember.z) * 2.2;
      const [r, g, b] = ember.color;

      // Light streaks while warping.
      if (warp > 0.25 && ember.px !== null && ember.kind !== "bokeh") {
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * Math.min(1, warp / 2)})`;
        ctx.lineWidth = Math.max(0.6, size * 0.18);
        ctx.beginPath();
        ctx.moveTo(ember.px, ember.py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      ctx.globalAlpha = alpha;
      ctx.drawImage(glowSprite(ember.color, dark && ember.hot), sx - size, sy - size, size * 2, size * 2);
      ctx.globalAlpha = 1;
      ember.px = sx;
      ember.py = sy;
    });

    if (!reduced) animationFrame = requestAnimationFrame(draw);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX / window.innerWidth;
      pointer.y = event.clientY / window.innerHeight;
    },
    { passive: true },
  );
  window.addEventListener("resize", resize);
  qs("#themeToggle").addEventListener("click", () => setTimeout(resize, 0));

  resize();
  animationFrame = requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(animationFrame);
    if (!document.hidden) {
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(draw);
    }
  });
}

// Magic-wand cursor: a glowing tip, a soft light halo, and a sparkle trail.
function initWand() {
  if (!motionOK() || !finePointer()) return;

  const root = document.documentElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const tip = document.createElement("div");
  const halo = document.createElement("div");
  canvas.className = "wand-canvas";
  tip.className = "wand-tip";
  halo.className = "wand-halo";
  [halo, canvas, tip].forEach((element) => {
    element.setAttribute("aria-hidden", "true");
    document.body.append(element);
  });
  root.classList.add("has-wand");

  const pointer = { x: -200, y: -200, lastX: null, lastY: null };
  const glow = { x: -200, y: -200 };
  let sparks = [];
  let running = false;
  let lastTime = performance.now();
  let idleSince = performance.now();

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const emit = (x, y, count, burst = false) => {
    const colors = glowPalette[isDarkTheme() ? "dark" : "light"];
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const force = burst ? 0.8 + Math.random() * 1.6 : Math.random() * 0.35;
      const life = burst ? 0.4 + Math.random() * 0.35 : 0.3 + Math.random() * 0.35;
      sparks.push({
        x: x + (Math.random() - 0.5) * 3,
        y: y + (Math.random() - 0.5) * 3,
        vx: Math.cos(angle) * force,
        vy: Math.sin(angle) * force - 0.1,
        life,
        maxLife: life,
        size: burst ? 1 + Math.random() * 1.4 : 0.7 + Math.random() * 1.1,
        color: pick(colors),
        glint: false,
        spin: 0,
      });
    }
    if (sparks.length > 80) sparks = sparks.slice(-80);
    start();
  };

  const drawGlint = (spark, alpha, dark) => {
    const [r, g, b] = spark.color;
    const length = spark.size * 3.2;
    ctx.save();
    ctx.translate(spark.x, spark.y);
    ctx.rotate(spark.spin);
    ctx.strokeStyle = dark ? `rgba(255,255,255,${alpha})` : `rgba(${r},${g},${b},${alpha})`;
    ctx.lineWidth = 1.1;
    ctx.shadowColor = `rgba(${r},${g},${b},${alpha})`;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(-length, 0);
    ctx.lineTo(length, 0);
    ctx.moveTo(0, -length);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.restore();
  };

  const frame = (time) => {
    const dt = Math.min(0.05, (time - lastTime) / 1000) || 0.016;
    lastTime = time;
    const dark = isDarkTheme();

    glow.x += (pointer.x - glow.x) * 0.16;
    glow.y += (pointer.y - glow.y) * 0.16;
    halo.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0)`;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";

    sparks = sparks.filter((spark) => {
      spark.life -= dt;
      if (spark.life <= 0) return false;
      spark.vx *= 0.95;
      spark.vy = spark.vy * 0.95 + 0.035;
      spark.x += spark.vx * dt * 60;
      spark.y += spark.vy * dt * 60;
      spark.spin += dt * 2.4;

      const progress = spark.life / spark.maxLife;
      const alpha = Math.min(1, progress * 1.6);
      if (spark.glint) {
        drawGlint(spark, alpha, dark);
      } else {
        const size = spark.size * (0.6 + progress * 0.8) * 2.4;
        ctx.globalAlpha = alpha;
        ctx.drawImage(glowSprite(spark.color, dark), spark.x - size, spark.y - size, size * 2, size * 2);
        ctx.globalAlpha = 1;
      }
      return true;
    });

    const settled = Math.hypot(pointer.x - glow.x, pointer.y - glow.y) < 0.5;
    if (sparks.length || !settled || time - idleSince < 300) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  };

  function start() {
    if (running) return;
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(frame);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      tip.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
      root.classList.add("wand-visible");
      idleSince = performance.now();

      // Modal dialogs sit above everything, so the normal cursor returns over them.
      root.classList.toggle("wand-paused", Boolean(document.querySelector("dialog[open]")));

      if (pointer.lastX !== null) {
        const distance = Math.hypot(pointer.x - pointer.lastX, pointer.y - pointer.lastY);
        // A light trail: about one ember per 28px travelled, never more than two per move.
        const count = Math.min(2, Math.floor(distance / 28));
        for (let index = 0; index < count; index += 1) {
          const t = Math.random();
          emit(pointer.lastX + (pointer.x - pointer.lastX) * t, pointer.lastY + (pointer.y - pointer.lastY) * t, 1);
        }
      }
      pointer.lastX = pointer.x;
      pointer.lastY = pointer.y;
      start();
    },
    { passive: true },
  );

  window.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") emit(event.clientX, event.clientY, 8, true);
    root.classList.add("wand-pressed");
  });
  window.addEventListener("pointerup", () => root.classList.remove("wand-pressed"));

  document.addEventListener("pointerover", (event) => {
    const interactive = event.target.closest(
      "a, button, [role='button'], label, summary, .gallery-item, .project-card, input, textarea, select",
    );
    root.classList.toggle("wand-hover", Boolean(interactive));
  });
  root.addEventListener("pointerleave", () => {
    root.classList.remove("wand-visible");
    pointer.lastX = null;
  });

  window.addEventListener("resize", resize);
  resize();
}

function initParallax() {
  const hero = qs(".hero");
  const characterStage = qs("#heroCharacterStage");
  const character = qs("#heroCharacter");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchPointer = window.matchMedia("(pointer: coarse)").matches;

  if (!hero || !characterStage || !character || reducedMotion || touchPointer) return;

  let animationFrame;
  let requestedFrame = eyeGazeFrames.horizontal[5];
  const loadedFrames = new Set([requestedFrame]);
  const frameSources = [
    ...eyeGazeFrames.horizontal,
    eyeGazeFrames.up,
    eyeGazeFrames.down,
    eyeGazeFrames.upLeft,
    eyeGazeFrames.upRight,
    eyeGazeFrames.downLeft,
    eyeGazeFrames.downRight,
  ];

  frameSources.forEach((source) => {
    if (loadedFrames.has(source)) return;

    const frame = new Image();
    frame.decoding = "async";
    frame.addEventListener(
      "load",
      async () => {
        try {
          await frame.decode();
        } catch {
          // The loaded image is still safe to display when explicit decoding is unavailable.
        }

        loadedFrames.add(source);
        if (requestedFrame === source) character.src = source;
      },
      { once: true },
    );
    frame.src = source;
  });

  const getEyeFrame = (horizontal, vertical) => {
    const verticalThreshold = 0.34;
    const diagonalThreshold = 0.28;

    if (vertical < -verticalThreshold) {
      if (horizontal < -diagonalThreshold) return eyeGazeFrames.upLeft;
      if (horizontal > diagonalThreshold) return eyeGazeFrames.upRight;
      return eyeGazeFrames.up;
    }

    if (vertical > verticalThreshold) {
      if (horizontal < -diagonalThreshold) return eyeGazeFrames.downLeft;
      if (horizontal > diagonalThreshold) return eyeGazeFrames.downRight;
      return eyeGazeFrames.down;
    }

    const horizontalIndex = Math.round(
      ((horizontal + 1) / 2) * (eyeGazeFrames.horizontal.length - 1),
    );
    return eyeGazeFrames.horizontal[horizontalIndex];
  };

  const setCharacterPosition = (x, y, rotation, frameSource) => {
    requestedFrame = frameSource;
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      characterStage.style.setProperty("--character-x", `${x}px`);
      characterStage.style.setProperty("--character-y", `${y}px`);
      characterStage.style.setProperty("--character-rotate", `${rotation}deg`);

      if (loadedFrames.has(frameSource) && character.getAttribute("src") !== frameSource) {
        character.src = frameSource;
      }
    });
  };

  hero.addEventListener(
    "pointermove",
    (event) => {
      const rect = hero.getBoundingClientRect();
      const horizontal = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const vertical = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));

      setCharacterPosition(
        horizontal * 24,
        vertical * 8,
        horizontal * 1.4,
        getEyeFrame(horizontal, vertical),
      );
    },
    { passive: true },
  );

  hero.addEventListener("pointerleave", () => {
    setCharacterPosition(0, 0, 0, eyeGazeFrames.horizontal[5]);
  });
}

function initBeyondMotion() {
  const items = qsa(".beyond-motion-item[data-motion]");
  if (!items.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scenes = items
    .map((item, offset) => {
      const frames = beyondMotionFrames[item.dataset.motion];
      const image = qs("img", item);
      if (!frames || !image) return null;

      return { frames, image, index: offset % frames.length, offset };
    })
    .filter(Boolean);

  let isVisible = false;
  let isLoaded = false;
  let animationFrame = 0;
  let previousTime = 0;
  const frameDuration = 230;

  const animate = (time) => {
    if (!isVisible || reducedMotion.matches || document.hidden) {
      animationFrame = 0;
      return;
    }

    if (time - previousTime >= frameDuration) {
      scenes.forEach((scene) => {
        scene.index = (scene.index + 1) % scene.frames.length;
        scene.image.src = scene.frames[scene.index];
      });
      previousTime = time;
    }

    animationFrame = requestAnimationFrame(animate);
  };

  const start = () => {
    if (!isLoaded || animationFrame || !isVisible || reducedMotion.matches || document.hidden) return;
    animationFrame = requestAnimationFrame(animate);
  };

  const loadFrames = async () => {
    if (isLoaded) return;

    await Promise.all(
      scenes.flatMap((scene) =>
        scene.frames.map(
          (source) =>
            new Promise((resolve) => {
              const frame = new Image();
              frame.addEventListener("load", resolve, { once: true });
              frame.addEventListener("error", resolve, { once: true });
              frame.src = source;
            }),
        ),
      ),
    );

    isLoaded = true;
    items.forEach((item) => item.classList.add("is-motion-ready"));
    start();
  };

  const widget = qs(".beyond-widget");
  if ("IntersectionObserver" in window && widget) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          loadFrames();
          start();
        } else if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      },
      { rootMargin: "320px" },
    );
    observer.observe(widget);
  } else {
    isVisible = true;
    loadFrames();
  }

  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener("change", start);
}

function initContactForm() {
  const form = qs(".contact-form");
  const button = qs("button[type='submit']", form);
  const label = qs("[data-button-label]", form);
  const status = qs("#formStatus");
  const accessKey = qs("input[name='access_key']", form).value;
  const hasKey = accessKey && !accessKey.startsWith("YOUR_");

  const setStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);

    // Until a Web3Forms key is added, fall back to opening the visitor's email app.
    if (!hasKey) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`);
      window.location.href = `mailto:aatiqali07@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    button.disabled = true;
    label.textContent = "Sending...";
    setStatus("", "");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message || "Send failed");

      form.reset();
      setStatus("Thanks! Your message has been sent. I'll get back to you soon.", "success");
    } catch {
      setStatus(
        "Sorry, the message couldn't be sent. Please try again or email me at aatiqali07@gmail.com.",
        "error",
      );
    } finally {
      button.disabled = false;
      label.textContent = "Send Message";
    }
  });
}

/* ---------- Motion layer ----------
   All effects switch off for visitors who ask for reduced motion,
   and pointer-driven effects only run on devices with a mouse. */
const motionOK = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Runs `fn` at most once per animation frame.
const onFrame = (fn) => {
  let queued = false;
  return () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      fn();
    });
  };
};

function initScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.append(bar);

  const update = onFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  });
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

// Splits section headings into words that rise in one after another.
function initSplitHeadings() {
  if (!motionOK()) return;

  qsa(".section-heading h2, .contact-shell h2").forEach((heading) => {
    const text = heading.textContent.trim();
    heading.setAttribute("aria-label", text);
    heading.innerHTML = text
      .split(/\s+/)
      .map((word, index) => `<span class="word" aria-hidden="true"><span style="--i:${index}">${word}</span></span>`)
      .join(" ");
    heading.classList.add("split-heading");
  });
}

// Section labels like "05 / Selected Work" decode from random characters.
function initScrambleLabels() {
  if (!motionOK() || !("IntersectionObserver" in window)) return;

  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_";
  const scramble = (element) => {
    const finalText = element.textContent;
    const duration = 700;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const settled = Math.floor(progress * finalText.length);
      element.textContent = [...finalText]
        .map((char, index) =>
          index < settled || char === " " ? char : glyphs[Math.floor(Math.random() * glyphs.length)],
        )
        .join("");
      if (progress < 1) requestAnimationFrame(tick);
      else element.textContent = finalText;
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        scramble(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  qsa(".section-heading .eyebrow, .contact-shell .eyebrow").forEach((label) => observer.observe(label));
}

// Hero words drift apart and fade as the visitor scrolls away.
function initHeroScroll() {
  if (!motionOK()) return;
  const hero = qs(".hero");
  if (!hero) return;

  const update = onFrame(() => {
    const progress = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.85)));
    hero.style.setProperty("--hero-p", progress.toFixed(3));
  });
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// 3D tilt on project cards and a soft cursor spotlight on surface cards.
function initCardMotion() {
  if (!motionOK() || !finePointer()) return;

  qsa(".project-card").forEach((card) => {
    card.addEventListener("pointerenter", () => {
      card.style.transition = "rotate 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, transform 700ms ease";
    });
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.rotate = `${-y} ${x} 0 ${Math.hypot(x, y) * 14}deg`;
      card.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.rotate = "";
    });
  });

  qsa(".timeline-card, .skill-group, .highlight-card, .workbench").forEach((surface) => {
    surface.classList.add("spotlight");
    surface.addEventListener("pointermove", (event) => {
      const rect = surface.getBoundingClientRect();
      surface.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      surface.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

// Buttons lean slightly toward the cursor.
function initMagneticButtons() {
  if (!motionOK() || !finePointer()) return;

  qsa(".button, .resume-link").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.translate = `${x * 0.18}px ${y * 0.28}px`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.translate = "";
    });
  });
}

// Impact numbers count up the first time they scroll into view.
function initImpactStats() {
  const stats = qsa(".impact-value");
  if (!stats.length) return;
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target, 1600);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  stats.forEach((stat) => observer.observe(stat));
}

// Counts every number inside an element up from zero, e.g. "59–75%".
function countUp(element, duration = 1100) {
  const finalText = element.dataset.final || element.textContent;
  element.dataset.final = finalText;
  if (!motionOK()) return;

  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = finalText.replace(/\d+/g, (number) => Math.round(Number(number) * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function boot() {
  initTheme();
  renderTimeline("#educationTimeline", education);
  renderTimeline("#experienceTimeline", experience);
  renderProjects();
  renderWorkbench();
  renderSkills();
  renderHighlights();
  renderGallery();
  renderSocials();
  initSocialPreview();
  initReveal();
  initRoleRotator();
  initHeader();
  initMobileMenu();
  initTimelineFill();
  initLightbox();
  initProjectDialog();
  initCanvas();
  initParallax();
  initBeyondMotion();
  initContactForm();
  initScrollProgress();
  initSplitHeadings();
  initScrambleLabels();
  initHeroScroll();
  initCardMotion();
  initMagneticButtons();
  initWand();
  initImpactStats();
  qs("#year").textContent = new Date().getFullYear();
}

boot();
