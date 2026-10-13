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
    year: "2024",
    title: "M.Eng. Autonomous Driving",
    place: "Hochschule Coburg · Germany",
    description:
      "Advanced studies across autonomous mobility, perception, systems thinking, and applied engineering.",
    tags: ["Autonomous Driving", "Research", "Mobility"],
  },
  {
    year: "2019",
    title: "B.Tech Computer Science & Engineering",
    place: "A P J Abdul Kalam Technical University, India",
    description:
      "Foundation in software engineering, algorithms, databases, and practical computing systems.",
    tags: ["Computer Science", "Software", "Systems"],
  },
];

const experience = [
  {
    year: "2026",
    title: "Research / Engineering Experience",
    place: "Organization placeholder",
    description:
      "Replace this with your current role, internship, thesis, working student position, or research assistant work.",
    tags: ["Python", "Research", "Autonomous Driving"],
  },
  {
    year: "2025",
    title: "Project-Based Engineering",
    place: "University and independent work",
    description:
      "Technical work across prototypes, analysis, software tools, simulations, and documentation.",
    tags: ["Development", "Data", "Documentation"],
  },
];

const projects = [
  {
    title: "Autonomous Mobility Study",
    summary: "A case-study slot for perception, planning, simulation, or traffic intelligence.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "AI", "Mobility"],
  },
  {
    title: "Geospatial Analysis Tool",
    summary: "A project slot for QGIS, transport data, route analysis, or map-based decision tools.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["GIS", "Data", "Research"],
  },
  {
    title: "Developer Portfolio System",
    summary: "This website itself can become a case study in product thinking and frontend craft.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    tags: ["Frontend", "Design", "Animation"],
  },
];

const skillGroups = [
  ["Languages", ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"]],
  ["Tools", ["Git", "Linux", "Docker", "QGIS", "VS Code", "Excel"]],
  ["Domains", ["Autonomous Driving", "Data Analysis", "Simulation", "Research", "Web"]],
];

const gallery = [
  {
    caption: "Stuttgart — 2026",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
  },
  {
    caption: "University life",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
  },
  {
    caption: "Research notes",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    caption: "Field work",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    caption: "Travel and perspective",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    caption: "Events and people",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
];

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
          <div class="timeline-year">${item.year}</div>
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card">
            <h3>${item.title}</h3>
            <p><strong>${item.place}</strong></p>
            <p>${item.description}</p>
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
        <a class="project-card reveal" href="#contact" aria-label="${project.title}">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="project-content">
            <div class="project-index">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="timeline-meta">
              ${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
          </div>
        </a>
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
          <div class="skill-list">
            ${skills.map((skill) => `<span class="tech">${skill}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGallery() {
  qs("#galleryGrid").innerHTML = gallery
    .map(
      (item, index) => `
        <button class="gallery-item reveal" type="button" data-gallery-index="${index}">
          <img src="${item.image}" alt="${item.caption}" loading="lazy" />
          <span>${item.caption}</span>
        </button>
      `,
    )
    .join("");
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
    item.style.transitionDelay = `${Math.min(index % 8, 5) * 45}ms`;
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
    caption.textContent = gallery[current].caption;
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

function initCanvas() {
  const canvas = qs("#heroCanvas");
  const ctx = canvas.getContext("2d");
  const pointer = { x: 0.5, y: 0.5 };
  let points = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(34, Math.floor((width * height) / 32000));
    points = Array.from({ length: count }, (_, index) => ({
      x: (index * 97) % width,
      y: (index * 53) % height,
      vx: Math.sin(index) * 0.16,
      vy: Math.cos(index * 1.4) * 0.16,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.dataset.theme === "dark";
    const line = isDark ? "rgba(168,85,247,0.18)" : "rgba(126,34,206,0.16)";
    const dot = isDark ? "rgba(216,180,254,0.4)" : "rgba(92,34,132,0.3)";

    points.forEach((point, index) => {
      const pullX = (pointer.x * width - point.x) * 0.0008;
      const pullY = (pointer.y * height - point.y) * 0.0008;
      point.x += point.vx + pullX;
      point.y += point.vy + pullY;

      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const next = points[nextIndex];
        const distance = Math.hypot(point.x - next.x, point.y - next.y);
        if (distance < 150) {
          ctx.strokeStyle = line;
          ctx.globalAlpha = 1 - distance / 150;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = dot;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrame = requestAnimationFrame(draw);
  };

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  });
  window.addEventListener("resize", resize);

  resize();
  draw();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }
  });
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

  form.addEventListener("submit", () => {
    const button = qs("button", form);
    button.textContent = "Opening Email...";
  });
}

function boot() {
  initTheme();
  renderTimeline("#educationTimeline", education);
  renderTimeline("#experienceTimeline", experience);
  renderProjects();
  renderSkills();
  renderGallery();
  renderSocials();
  initSocialPreview();
  initReveal();
  initRoleRotator();
  initHeader();
  initMobileMenu();
  initTimelineFill();
  initLightbox();
  initCanvas();
  initParallax();
  initBeyondMotion();
  initContactForm();
  qs("#year").textContent = new Date().getFullYear();
}

boot();
