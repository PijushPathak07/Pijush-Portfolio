export interface HtmlFileExport {
  filename: string;
  label: string;
  description: string;
  code: string;
}

const SHARED_HEAD = (title: string, desc: string) => `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Fraunces"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,600;9..144,1,400&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <!-- FontAwesome 6 via CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
</head>`;

const SHARED_HEADER = (activePage: string) => `  <!-- Top Navigation Bar with Mega-Dropdowns -->
  <header class="sticky top-0 z-50 bg-[#090A0F]/95 backdrop-blur-md border-b border-slate-800/80">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
      <a href="index.html" class="text-lg font-bold tracking-tight text-slate-100 whitespace-nowrap shrink-0">
        Pijush Pathak
      </a>
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
        <a href="index.html" class="${activePage === 'index.html' ? 'text-white underline underline-offset-8 decoration-blue-500' : 'hover:text-white transition-colors'} whitespace-nowrap shrink-0">Home</a>
        <div class="relative group">
          <a href="solutions.html" class="${activePage === 'solutions.html' ? 'text-white underline underline-offset-8 decoration-blue-500' : 'hover:text-white transition-colors'} whitespace-nowrap shrink-0 inline-flex items-center gap-1.5">
            Solutions <i class="fa-solid fa-chevron-down text-[10px]"></i>
          </a>
          <div class="hidden group-hover:block absolute left-0 top-full pt-3 w-[640px]">
            <div class="rounded-xl border border-slate-800 bg-[#12151E] p-6 shadow-2xl grid grid-cols-2 gap-8">
              <div>
                <p class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Industries</p>
                <div class="flex flex-col space-y-2 text-xs text-slate-200">
                  <a href="solutions.html#industry-bfsi-fintech" class="hover:text-blue-400">Banking, Financial Services &amp; FinTech</a>
                  <a href="solutions.html#industry-supply-chain" class="hover:text-blue-400">Supply Chain, Trade &amp; Logistics</a>
                  <a href="solutions.html#industry-healthcare-biotech" class="hover:text-blue-400">Healthcare, Life Sciences &amp; Clinical AI</a>
                  <a href="solutions.html#industry-enterprise-saas" class="hover:text-blue-400">Enterprise SaaS, High-Tech &amp; Industrial</a>
                </div>
              </div>
              <div>
                <p class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Services</p>
                <div class="flex flex-col space-y-2 text-xs text-slate-200">
                  <a href="solutions.html#data-engineering-pipelines" class="hover:text-blue-400">AI-Powered Big Data &amp; Lakehouse Pipelines</a>
                  <a href="solutions.html#custom-llm-ai-agents" class="hover:text-blue-400">Custom LLM Systems, RAG &amp; AI Agents</a>
                  <a href="solutions.html#predictive-ml-advanced-analytics" class="hover:text-blue-400">Predictive AI &amp; ML Consultancy</a>
                  <a href="solutions.html#process-automation-bi" class="hover:text-blue-400">Decision Intelligence &amp; Process Automation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group">
          <a href="portfolio.html" class="${activePage === 'portfolio.html' ? 'text-white underline underline-offset-8 decoration-blue-500' : 'hover:text-white transition-colors'} whitespace-nowrap shrink-0 inline-flex items-center gap-1.5">
            Portfolio <i class="fa-solid fa-chevron-down text-[10px]"></i>
          </a>
          <div class="hidden group-hover:block absolute left-0 top-full pt-3 w-72">
            <div class="rounded-xl border border-slate-800 bg-[#12151E] p-5 shadow-2xl flex flex-col space-y-2.5 text-xs text-slate-200">
              <a href="portfolio.html?cat=all" class="hover:text-blue-400">All Categories</a>
              <a href="portfolio.html?cat=llm-agents" class="hover:text-blue-400">LLM &amp; Multi-Agent RAG</a>
              <a href="portfolio.html?cat=predictive-ml" class="hover:text-blue-400">Predictive ML &amp; Forecasting</a>
              <a href="portfolio.html?cat=data-engineering" class="hover:text-blue-400">Data Engineering &amp; Streaming</a>
              <a href="portfolio.html?cat=bi-automation" class="hover:text-blue-400">Decision BI &amp; Automation</a>
            </div>
          </div>
        </div>
        <a href="about.html" class="${activePage === 'about.html' ? 'text-white underline underline-offset-8 decoration-blue-500' : 'hover:text-white transition-colors'} whitespace-nowrap shrink-0">About</a>
      </nav>
      <div class="flex items-center gap-3 shrink-0">
        <a href="contact.html" class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0">
          Get In Touch
        </a>
      </div>
    </div>
  </header>`;

const SHARED_FOOTER = `  <!-- Enterprise Footer (Vertical Navigation Links Without .html) -->
  <footer class="border-t border-slate-800/80 bg-[#07080C] py-14 text-sm text-slate-400">
    <div class="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
      <div>
        <p class="text-base font-bold text-white">Pijush Pathak</p>
        <p class="mt-1.5 text-xs text-slate-400">Independent Technology Consultant · Data Science, AI &amp; Machine Learning.</p>
        <div class="mt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
          <a href="mailto:workingwiththethunder@gmail.com" class="hover:text-white transition-colors font-mono">workingwiththethunder@gmail.com</a>
          <a href="https://www.linkedin.com/in/pijush-pathak/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1.5"><i class="fa-brands fa-linkedin text-blue-400"></i> LinkedIn</a>
          <a href="https://github.com/PijushPathak07" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors inline-flex items-center gap-1.5"><i class="fa-brands fa-github text-white"></i> GitHub</a>
        </div>
      </div>
      <div class="flex flex-col space-y-2.5 text-xs font-medium text-slate-400">
        <a href="index.html" class="hover:text-white transition-colors">Home</a>
        <a href="solutions.html" class="hover:text-white transition-colors">Solutions</a>
        <a href="portfolio.html" class="hover:text-white transition-colors">Portfolio</a>
        <a href="about.html" class="hover:text-white transition-colors">About</a>
        <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

export const HTML_EXPORTS: HtmlFileExport[] = [
  {
    filename: 'index.html',
    label: '1. index.html (Home Page)',
    description: 'ROI-driven Hero, Upwork Enterprise & Direct Freelance Trust Bar, Asymmetric Core Solutions Preview, Why Select Me Comparison, and Featured Case Studies.',
    code: `${SHARED_HEAD('Pijush Pathak — Principal AI & Data Science Consultant', 'Enterprise Data Architecture, Custom LLM Agents, and Predictive Machine Learning Solutions.')}
<body class="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
${SHARED_HEADER('index.html')}

  <div class="border-b border-slate-800/80 bg-[#0D1017]">
    <div class="max-w-[1200px] mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
      <p class="font-medium text-slate-300">
        Available for Upwork Enterprise &amp; Direct Freelance Engagements · B.Tech CSE · Former Data Scientist at Blackcoffer
      </p>
      <div class="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/pijush-pathak/" target="_blank" rel="noopener noreferrer" class="hover:text-white"><i class="fa-brands fa-linkedin text-blue-400"></i> LinkedIn</a>
        <a href="https://github.com/PijushPathak07" target="_blank" rel="noopener noreferrer" class="hover:text-white"><i class="fa-brands fa-github text-white"></i> GitHub</a>
      </div>
    </div>
  </div>

  <main>
    <section class="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p class="text-xs font-mono text-blue-400 tracking-wide mb-4">
              Independent AI, ML &amp; Data Architecture Practice
            </p>
            <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Architecting Production AI &amp; Data Systems That Compound Enterprise Margin.
            </h1>
            <p class="mt-6 text-base text-slate-300 leading-relaxed max-w-[65ch]">
              Most data initiatives stall in experimental notebooks. I partner directly with CTOs, VPs of Engineering, and funded founders to engineer fault-tolerant data pipelines, citation-grounded LLM agents, and predictive ML engines that deliver measurable P&amp;L returns within weeks—without big-consultancy bloat.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
            <a href="contact.html" class="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap">
              Book a Consultation
            </a>
            <a href="portfolio.html" class="px-6 py-3 text-sm font-medium text-slate-200 border border-slate-700 rounded-lg hover:border-slate-500 hover:text-white transition-colors whitespace-nowrap">
              Explore Portfolio Projects
            </a>
          </div>
        </div>
        <div class="lg:col-span-5">
          <div class="h-full rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between">
            <div>
              <p class="text-xs font-mono text-slate-400">Production Architecture Blueprint</p>
              <h2 class="mt-2 text-lg font-semibold text-white">End-to-End Ownership from Raw Ingestion to Sub-50ms Inference</h2>
              <p class="mt-2 text-sm text-slate-400">Every engagement delivers Dockerized, test-covered systems deployed directly inside your AWS, GCP, or Azure VPC.</p>
            </div>
            <div class="my-6 space-y-4 border-y border-slate-800/80 py-5 text-xs font-mono text-slate-300">
              <div class="flex justify-between"><span>01. Ingestion &amp; Lakehouse</span><span class="text-slate-400">Kafka · Airflow · Snowflake · dbt</span></div>
              <div class="flex justify-between"><span>02. Modeling &amp; Multi-Agent RAG</span><span class="text-slate-400">PyTorch · LangGraph · XGBoost</span></div>
              <div class="flex justify-between"><span>03. Serving &amp; Decision BI</span><span class="text-slate-400">FastAPI · Docker · Power BI</span></div>
            </div>
            <p class="text-xs text-slate-400">100% Client IP Ownership · SOC2 / HIPAA Ready Workflows</p>
          </div>
        </div>
      </div>
    </section>
  </main>

${SHARED_FOOTER}`,
  },
  {
    filename: 'solutions.html',
    label: '2. solutions.html (Solutions Dropdown & Dedicated Pages)',
    description: 'Blackcoffer-style Solutions mega-selector (Industries & Services) with dedicated deep-dive views for each solution.',
    code: `${SHARED_HEAD('Solutions & Capabilities — Pijush Pathak', 'Enterprise Data Engineering, Custom LLM Agents, Predictive Machine Learning, and Intelligent Process Automation.')}
<body class="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
${SHARED_HEADER('solutions.html')}

  <main class="max-w-[1200px] mx-auto px-6 py-16">
    <div class="max-w-3xl pb-12 border-b border-slate-800/80">
      <p class="text-xs font-mono text-blue-400">Solutions · Industries &amp; Services</p>
      <h1 class="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
        Select an Industry or Service Architecture.
      </h1>
    </div>
  </main>

${SHARED_FOOTER}`,
  },
  {
    filename: 'portfolio.html',
    label: '3. portfolio.html (Category Dropdown & Project Explorer)',
    description: 'Interactive category dropdown and horizontal industry selector leading into individual project deep-dive pages.',
    code: `${SHARED_HEAD('Portfolio & Works — Pijush Pathak', 'Production AI, Machine Learning, and Data Architecture Portfolio.')}
<body class="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
${SHARED_HEADER('portfolio.html')}

  <main class="max-w-[1200px] mx-auto px-6 py-16">
    <div class="max-w-3xl pb-12 border-b border-slate-800/80">
      <p class="text-xs font-mono text-blue-400">Portfolio · Categorized Production Systems</p>
      <h1 class="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
        Filter by Category &amp; Inspect Deep-Dive Project Pages.
      </h1>
    </div>
  </main>

${SHARED_FOOTER}`,
  },
  {
    filename: 'about.html',
    label: '4. about.html (About Me)',
    description: 'Executive bio highlighting B.Tech CSE foundation, experience scaling enterprise data solutions as a Data Scientist at Blackcoffer, LinkedIn & GitHub profiles, and 4-stage consulting methodology.',
    code: `${SHARED_HEAD('About Pijush Pathak — Principal AI & Data Science Consultant', 'B.Tech CSE Engineer and former Data Scientist at Blackcoffer.')}
<body class="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
${SHARED_HEADER('about.html')}

  <main class="max-w-[1200px] mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-white">About Pijush Pathak</h1>
  </main>

${SHARED_FOOTER}`,
  },
  {
    filename: 'contact.html',
    label: '5. contact.html (Get In Touch — Web3Forms + Free Calendar Booking + Calendly)',
    description: 'Enterprise intake form wired to Web3Forms (f0ddd9c8-dba6-4690-b973-dc2613aba7bf -> workingwiththethunder@gmail.com), LinkedIn & GitHub coordinates, and Free Technical Discovery Call booking via Calendly.',
    code: `${SHARED_HEAD('Contact & Book a Consultation — Pijush Pathak', 'Schedule a free technical discovery call or send an architectural brief to workingwiththethunder@gmail.com.')}
<body class="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
${SHARED_HEADER('contact.html')}

  <main class="max-w-[1200px] mx-auto px-6 py-16">
    <div class="max-w-3xl pb-12 border-b border-slate-800/80">
      <p class="text-xs font-mono text-blue-400">Get In Touch · Direct Principal Consultation</p>
      <h1 class="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
        Let’s Scope Your Next High-ROI Data or AI System.
      </h1>
      <p class="mt-4 text-base text-slate-300 leading-relaxed">
        Complete the technical brief below or reserve a free 30-minute discovery slot directly. Every submission is delivered straight to <span class="text-white font-mono">workingwiththethunder@gmail.com</span>.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Left Column: Enterprise Contact Form (Web3Forms) -->
      <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#11141D] p-8">
        <h2 class="text-xl font-bold text-white">Submit an Architectural Brief</h2>
        <p class="mt-1 text-xs text-slate-400">Strict confidentiality guaranteed. Happy to execute a mutual NDA prior to deep-dive schema review.</p>

        <form action="https://api.web3forms.com/submit" method="POST" class="mt-6 space-y-5">
          <input type="hidden" name="access_key" value="f0ddd9c8-dba6-4690-b973-dc2613aba7bf" />
          <input type="hidden" name="subject" value="New Technical Brief — Portfolio Website" />

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-2">Full Name *</label>
              <input type="text" name="name" required placeholder="e.g., David Chen" class="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-2">Work Email *</label>
              <input type="email" name="email" required placeholder="d.chen@company.com" class="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-2">Company / Organization</label>
              <input type="text" name="organization" placeholder="Acme Enterprise Inc." class="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-2">Selected Solution / Initiative</label>
              <select name="initiative" class="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none">
                <option>Custom LLM Systems, RAG &amp; AI Agents</option>
                <option>AI-Powered Big Data &amp; Lakehouse Pipelines</option>
                <option>Predictive AI &amp; ML Consultancy</option>
                <option>Decision Intelligence &amp; Process Automation</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-medium text-slate-300 mb-2">Current Data Stack, Key Bottleneck &amp; Target Timeline *</label>
            <textarea name="message" rows="5" required placeholder="Share your current cloud/database stack, the problem you are solving, and your target launch window..." class="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"></textarea>
          </div>

          <button type="submit" class="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
            Send Technical Brief
          </button>
        </form>
      </div>

      <!-- Right Column: Direct Contact Coordinates & Free Calendar Booking -->
      <div class="lg:col-span-5 space-y-6">
        <div class="rounded-2xl border border-slate-800 bg-[#11141D] p-8 space-y-4">
          <p class="text-xs font-mono text-blue-400">Direct Contact Coordinates</p>
          <div class="space-y-3.5 text-sm">
            <div>
              <p class="text-xs text-slate-400">Direct Email</p>
              <a href="mailto:workingwiththethunder@gmail.com" class="font-mono text-white hover:text-blue-400 underline underline-offset-4">workingwiththethunder@gmail.com</a>
            </div>
            <div>
              <p class="text-xs text-slate-400">Location &amp; Operating Hours</p>
              <p class="text-white font-medium">India (IST / UTC+5:30) · Available Any Day (9:00 AM – 12:00 AM IST)</p>
            </div>
            <div class="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-5 text-xs">
              <a href="https://www.linkedin.com/in/pijush-pathak/" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-blue-400 inline-flex items-center gap-2"><i class="fa-brands fa-linkedin text-blue-400"></i> linkedin.com/in/pijush-pathak</a>
              <a href="https://github.com/PijushPathak07" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-white inline-flex items-center gap-2"><i class="fa-brands fa-github text-white"></i> github.com/PijushPathak07</a>
            </div>
          </div>
        </div>

        <!-- Calendar Booking Embed -->
        <div class="rounded-2xl border border-slate-800 bg-[#11141D] p-8">
          <div class="flex items-center justify-between gap-2">
            <p class="text-xs font-mono text-blue-400">Calendar Booking Embed</p>
            <span class="text-xs font-mono text-emerald-400 font-semibold">Free</span>
          </div>
          <h3 class="mt-2 text-lg font-bold text-white">Book a Technical Discovery Call</h3>

          <div class="mt-4 p-1 rounded-lg bg-[#090A0F] border border-slate-800 text-xs">
            <div class="w-full py-1.5 px-3 rounded-md font-medium text-center bg-blue-600 text-white">
              Quick Slot Request
            </div>
          </div>

          <div class="mt-5 space-y-3">
            <div class="rounded-xl overflow-hidden border border-slate-800 bg-[#090A0F] h-[420px]">
              <iframe src="https://calendly.com/workingwiththethunder/30min?hide_gdpr_banner=1&amp;background_color=090a0f&amp;text_color=f1f5f9&amp;primary_color=2563eb" title="Pijush Pathak Calendly Technical Discovery Call" class="w-full h-full border-0"></iframe>
            </div>
            <a href="https://calendly.com/workingwiththethunder/30min" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-2.5 px-4 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4">
              Open Calendly in New Tab (https://calendly.com/workingwiththethunder/30min) &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

${SHARED_FOOTER}`,
  },
];
