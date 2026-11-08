/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CASE_STUDIES,
  SOLUTION_PAGES,
  PORTFOLIO_CATEGORIES,
  INDUSTRY_TAGS,
  WHY_SELECT_COMPARISON,
  IMAGES,
  CaseStudy,
  SolutionDetailPage,
} from './data/portfolioData';
import { HTML_EXPORTS } from './data/htmlTemplates';

type RouteView =
  | 'home'
  | 'solutions-hub'
  | 'solution-detail'
  | 'portfolio'
  | 'project-detail'
  | 'about'
  | 'contact';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackSubtitle: string;
  className?: string;
}

function ResilientImage({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = 'w-full h-full object-cover',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#111522] via-[#0D1017] to-[#090A0F] flex flex-col justify-end p-6 border border-slate-800/80">
        <p className="text-xs font-mono-tabular text-blue-400">{fallbackSubtitle}</p>
        <p className="mt-1 text-base font-semibold text-slate-200">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<RouteView>('home');
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTION_PAGES[0].id);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>(CASE_STUDIES[0].id);

  // Portfolio Category & Industry Filter State
  const [portfolioCategory, setPortfolioCategory] = useState<string>('all');
  const [portfolioIndustry, setPortfolioIndustry] = useState<string>('All Industries');
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState<boolean>(false);

  // Top Header Mega-Dropdown State
  const [openHeaderMenu, setOpenHeaderMenu] = useState<'solutions' | 'portfolio' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Code Export Modal State
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [selectedHtmlExport, setSelectedHtmlExport] = useState<string>('index.html');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  // Contact & Calendar Booking State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    organization: '',
    initiative: 'Custom LLM Systems, RAG & AI Agents',
    brief: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const WEB3FORMS_ACCESS_KEY = 'f0ddd9c8-dba6-4690-b973-dc2613aba7bf';
  const CALENDLY_URL = 'https://calendly.com/workingwiththethunder/30min';
  const DIRECT_EMAIL = 'workingwiththethunder@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/pijush-pathak/';
  const GITHUB_URL = 'https://github.com/PijushPathak07';

  // Close header dropdowns on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenHeaderMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenHeaderMenu(null);
        setPortfolioDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setActiveView('home');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateSolutionsHub = () => {
    setActiveView('solutions-hub');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const openSolutionDetailPage = (solutionId: string) => {
    setSelectedSolutionId(solutionId);
    setActiveView('solution-detail');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const navigatePortfolio = (categoryId?: string, industryName?: string) => {
    if (categoryId !== undefined) {
      setPortfolioCategory(categoryId);
    }
    if (industryName !== undefined) {
      setPortfolioIndustry(industryName);
    }
    setActiveView('portfolio');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const openProjectDetailPage = (projectId: string) => {
    setSelectedCaseStudyId(projectId);
    setActiveView('project-detail');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateAbout = () => {
    setActiveView('about');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const navigateContact = (defaultInitiative?: string) => {
    if (defaultInitiative) {
      setContactForm((prev) => ({ ...prev, initiative: defaultInitiative }));
    }
    setActiveView('contact');
    setOpenHeaderMenu(null);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const activeSolution: SolutionDetailPage =
    SOLUTION_PAGES.find((s) => s.id === selectedSolutionId) || SOLUTION_PAGES[0];

  const activeCaseStudy: CaseStudy =
    CASE_STUDIES.find((c) => c.id === selectedCaseStudyId) || CASE_STUDIES[0];

  const servicePages = SOLUTION_PAGES.filter((s) => s.group === 'services');
  const industryPages = SOLUTION_PAGES.filter((s) => s.group === 'industries');

  const filteredPortfolioProjects = CASE_STUDIES.filter((project) => {
    const matchesCat = portfolioCategory === 'all' || project.category === portfolioCategory;
    const matchesInd =
      portfolioIndustry === 'All Industries' || project.industryTag === portfolioIndustry;
    return matchesCat && matchesInd;
  });

  const handleCopyCode = (filename: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2200);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.includes('@') || !contactForm.brief.trim()) {
      setFormError(
        'Please provide your full name, a valid work email, and a brief summary of your technical goal.'
      );
      return;
    }
    setFormError(null);
    setFormSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Technical Brief from ${contactForm.name} (${contactForm.organization || 'Direct Inquiry'})`,
          from_name: contactForm.name,
          email: contactForm.email,
          to_email: DIRECT_EMAIL,
          company_organization: contactForm.organization || 'Not specified',
          selected_initiative: contactForm.initiative,
          technical_brief: contactForm.brief,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        setFormError(result.message || 'Unable to send brief right now. Please email workingwiththethunder@gmail.com directly.');
      }
    } catch {
      setFormError('Network error while sending brief. Please email workingwiththethunder@gmail.com directly.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const currentExportObj =
    HTML_EXPORTS.find((item) => item.filename === selectedHtmlExport) || HTML_EXPORTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#090A0F] text-slate-100">
      {/* =====================================================================
          TOP NAVIGATION BAR (Strict 3-Zone Contract + Mega-Dropdowns)
         ===================================================================== */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-[#090A0F]/95 backdrop-blur-md border-b border-slate-800/80"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={navigateHome}
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Pijush Pathak
          </button>

          {/* Zone 2: 5 Single-Line Navigation Controls (with Solutions & Portfolio Dropdowns) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              type="button"
              onClick={navigateHome}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1.5 ${
                activeView === 'home'
                  ? 'text-white underline underline-offset-8 decoration-blue-500 decoration-2'
                  : 'hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Solutions Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setOpenHeaderMenu('solutions')}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenHeaderMenu(openHeaderMenu === 'solutions' ? null : 'solutions')
                }
                className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  openHeaderMenu === 'solutions' ||
                  activeView === 'solutions-hub' ||
                  activeView === 'solution-detail'
                    ? 'text-white border border-slate-600 bg-[#141722]'
                    : 'hover:text-white border border-transparent'
                }`}
              >
                <span>Solutions</span>
                <i
                  className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-150 ${
                    openHeaderMenu === 'solutions' ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
            </div>

            {/* Portfolio Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setOpenHeaderMenu('portfolio')}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenHeaderMenu(openHeaderMenu === 'portfolio' ? null : 'portfolio')
                }
                className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  openHeaderMenu === 'portfolio' ||
                  activeView === 'portfolio' ||
                  activeView === 'project-detail'
                    ? 'text-white border border-slate-600 bg-[#141722]'
                    : 'hover:text-white border border-transparent'
                }`}
              >
                <span>Portfolio</span>
                <i
                  className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-150 ${
                    openHeaderMenu === 'portfolio' ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
            </div>

            {/* About Link */}
            <button
              type="button"
              onClick={navigateAbout}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1.5 ${
                activeView === 'about'
                  ? 'text-white underline underline-offset-8 decoration-blue-500 decoration-2'
                  : 'hover:text-white'
              }`}
            >
              About
            </button>
          </nav>

          {/* Zone 3: 1 Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigateContact()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#141722] border border-slate-700 hover:border-blue-500 hover:bg-blue-600 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden px-3 py-2 text-xs font-medium text-slate-300 border border-slate-800 rounded-lg hover:text-white whitespace-nowrap shrink-0"
            >
              Menu
            </button>
          </div>
        </div>

        {/* =================================================================
            BLACKCOFFER-STYLE MEGA DROPDOWN FOR "SOLUTIONS"
           ================================================================= */}
        {openHeaderMenu === 'solutions' && (
          <div
            onMouseLeave={() => setOpenHeaderMenu(null)}
            className="hidden md:block w-full bg-[#1C1D21] border-b border-slate-800 shadow-2xl"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-10">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800/90">
                <button
                  type="button"
                  onClick={navigateSolutionsHub}
                  className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Solutions</span>
                  <span className="w-6 h-6 bg-blue-600 text-white text-xs inline-flex items-center justify-center rounded-xs">
                    <i className="fa-solid fa-chevron-right" />
                  </span>
                </button>
                <span className="text-xs text-slate-400">
                  Select any Industry or Service below to open its dedicated architecture page
                </span>
              </div>

              <div className="grid grid-cols-12 gap-12">
                <div className="col-span-6">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-5">
                    Industries
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-xs text-slate-200">
                    {industryPages.map((ind) => (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => openSolutionDetailPage(ind.id)}
                        className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer flex items-center justify-between group"
                      >
                        <span>{ind.shortTitle}</span>
                        <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('industry-bfsi-fintech')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Capital Markets &amp; Private Credit
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('industry-healthcare-biotech')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Enhanced Life Sciences Research
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('industry-supply-chain')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Fast Moving Consumer Goods (FMCG)
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('industry-enterprise-saas')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Energy &amp; Industrial IoT Insights
                    </button>
                  </div>
                </div>

                <div className="col-span-6 border-l border-slate-800 pl-10">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-5">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-xs text-slate-200">
                    {servicePages.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => openSolutionDetailPage(srv.id)}
                        className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer flex items-center justify-between group"
                      >
                        <span>{srv.shortTitle}</span>
                        <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('custom-llm-ai-agents')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Enterprise Multi-Agent Orchestration
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('data-engineering-pipelines')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Cloud Data Warehouse Modernization
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('predictive-ml-advanced-analytics')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      AI for Strategic Decision-Making
                    </button>
                    <button
                      type="button"
                      onClick={() => openSolutionDetailPage('process-automation-bi')}
                      className="text-left hover:text-blue-400 transition-colors py-0.5 cursor-pointer"
                    >
                      Executive BI &amp; Automated Reporting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================
            MEGA DROPDOWN FOR "PORTFOLIO" (Categories + Direct Project Links)
           ================================================================= */}
        {openHeaderMenu === 'portfolio' && (
          <div
            onMouseLeave={() => setOpenHeaderMenu(null)}
            className="hidden md:block w-full bg-[#1C1D21] border-b border-slate-800 shadow-2xl"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-10">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800/90">
                <button
                  type="button"
                  onClick={() => navigatePortfolio('all', 'All Industries')}
                  className="inline-flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Portfolio &amp; Works</span>
                  <span className="w-6 h-6 bg-blue-600 text-white text-xs inline-flex items-center justify-center rounded-xs">
                    <i className="fa-solid fa-chevron-right" />
                  </span>
                </button>
                <span className="text-xs text-slate-400">
                  Filter by technical category or jump directly into a dedicated project deep dive
                </span>
              </div>

              <div className="grid grid-cols-12 gap-12">
                <div className="col-span-5">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
                    Project Categories
                  </p>
                  <div className="space-y-2.5">
                    {PORTFOLIO_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => navigatePortfolio(cat.id, 'All Industries')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-800/70 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-blue-400">
                            {cat.label}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{cat.description}</p>
                        </div>
                        <i className="fa-solid fa-chevron-right text-[10px] text-slate-500 group-hover:text-blue-400" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-span-7 border-l border-slate-800 pl-10">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
                    Featured Projects (Click to Open Dedicated Page)
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {CASE_STUDIES.map((proj) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => openProjectDetailPage(proj.id)}
                        className="text-left p-3.5 rounded-xl border border-slate-800 bg-[#12151E] hover:border-blue-500/70 transition-colors cursor-pointer group"
                      >
                        <p className="text-[11px] font-mono-tabular text-blue-400">
                          Project {proj.number} · {proj.categoryLabel}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white group-hover:text-blue-300 line-clamp-1">
                          {proj.title}
                        </p>
                        <p className="mt-1 text-[11px] font-mono-tabular text-slate-400">
                          {proj.headlineMetric}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#12141C] px-6 py-5 space-y-4 text-sm">
            <button
              type="button"
              onClick={navigateHome}
              className="block w-full text-left font-medium text-white py-1"
            >
              Home
            </button>
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <button
                type="button"
                onClick={navigateSolutionsHub}
                className="block w-full text-left font-semibold text-blue-400"
              >
                Solutions Directory
              </button>
              <div className="pl-3 space-y-1.5 text-xs text-slate-300">
                {SOLUTION_PAGES.map((sol) => (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => openSolutionDetailPage(sol.id)}
                    className="block w-full text-left py-1 hover:text-white"
                  >
                    {sol.index}. {sol.shortTitle}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <button
                type="button"
                onClick={() => navigatePortfolio('all', 'All Industries')}
                className="block w-full text-left font-semibold text-blue-400"
              >
                Portfolio Categories
              </button>
              <div className="pl-3 space-y-1.5 text-xs text-slate-300">
                {PORTFOLIO_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => navigatePortfolio(cat.id, 'All Industries')}
                    className="block w-full text-left py-1 hover:text-white"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={navigateAbout}
              className="block w-full text-left font-medium text-white border-t border-slate-800/80 pt-3"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => navigateContact()}
              className="block w-full text-left font-semibold text-blue-400 border-t border-slate-800/80 pt-3"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Sub-Header Trust Bar */}
      <div className="border-b border-slate-800/80 bg-[#0D1017]">
        <div className="max-w-[1200px] mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <p className="text-slate-300 font-medium">
            Available for Upwork Enterprise &amp; Direct Freelance Engagements · B.Tech CSE · Former Data Scientist at Blackcoffer
          </p>
          <div className="flex items-center gap-5">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <i className="fa-brands fa-linkedin text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <i className="fa-brands fa-github text-slate-200" />
              <span>GitHub</span>
            </a>
            <button
              type="button"
              onClick={() => setCodeModalOpen(true)}
              className="text-xs font-mono-tabular text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
            >
              Export Pure HTML5 Source Files
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          MAIN VIEW ROUTER (Animated Page Transitions & Scroll Reveals)
         ===================================================================== */}
      <main className="flex-1 relative overflow-hidden">
        {/* Ambient Cyber Glow Backdrop */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-tech-grid opacity-60" />
        <div className="pointer-events-none absolute -top-36 left-1/4 w-[480px] h-[480px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute top-48 right-1/5 w-[380px] h-[380px] rounded-full bg-cyan-500/8 blur-[110px] animate-float-slow" />

        <AnimatePresence mode="wait">
          {/* =========================================================
              1. HOME VIEW
             ========================================================= */}
          {activeView === 'home' && (
            <motion.div
              key="view-home"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              {/* Hero Split Section */}
              <section className="max-w-[1200px] mx-auto px-6 pt-14 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-7 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-mono-tabular text-blue-400 tracking-wide">
                        Independent Data Science, AI &amp; Machine Learning Consultant · India (Global Delivery)
                      </p>
                      <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.12]">
                        Building Production AI &amp; Data Systems That Actually Ship and Pay Off.
                      </h1>
                      <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-[65ch]">
                        Most machine learning and LLM projects look great in a slide deck or a Jupyter Notebook and then fall apart when they hit real-world messy data. I work directly with founders, CTOs, and engineering leads to build reliable data pipelines, citation-backed AI agents, and forecasting models that run cleanly in production—without agency middlemen.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => navigateContact()}
                          className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-blue-600/20"
                        >
                          Book a Consultation
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => navigatePortfolio('all', 'All Industries')}
                          className="px-6 py-3 text-sm font-medium text-slate-200 border border-slate-700 rounded-lg hover:border-blue-500/60 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Explore Portfolio Projects
                        </motion.button>
                      </div>
                      <p className="mt-4 text-xs text-slate-400">
                        1-on-1 Execution by Pijush Pathak · 100% Client IP Ownership · Working Prototype in 14 Days
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 flex flex-col"
                  >
                    <div className="relative h-full min-h-[340px] rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors bg-[#11141D] overflow-hidden flex flex-col justify-between group shadow-2xl">
                      <div className="h-0.5 w-full stream-line" />
                      <div className="relative h-64 lg:h-full w-full overflow-hidden">
                        <ResilientImage
                          src={IMAGES.heroArchitecture}
                          alt="Enterprise Neural Network and Distributed Cloud Data Pipeline Architecture"
                          fallbackTitle="Enterprise AI & Lakehouse Architecture"
                          fallbackSubtitle="Distributed Ingestion · Multi-Agent RAG · Real-Time Inference"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/40 to-transparent" />
                      </div>
                      <div className="relative z-10 p-6 bg-[#11141D]/95 border-t border-slate-800/80">
                        <p className="text-xs font-mono-tabular text-blue-400">
                          End-to-End Engineering Ownership
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          From Raw Kafka &amp; Snowflake Pipelines to Fast, Dockerized APIs
                        </p>
                        <p className="mt-2 text-xs font-mono-tabular text-slate-400">
                          Python · PyTorch · LangGraph · Airflow · dbt · Qdrant · FastAPI · AWS
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Full-Width 4-Column KPI Strip */}
                <div className="mt-12 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      val: '$8.8M+',
                      title: 'Verified Client Impact',
                      sub: 'Across freed inventory capital, fraud blocked & analyst hours saved',
                    },
                    {
                      val: '4.5h → 19m',
                      title: 'Contract & Document Audit Time',
                      sub: 'Achieved with hybrid keyword + vector RAG over 1.8M+ passages',
                    },
                    {
                      val: '99.2%',
                      title: 'Citation Grounding Accuracy',
                      sub: 'Every answer linked back to exact PDF page & paragraph offsets',
                    },
                    {
                      val: '14 Days',
                      title: 'Time to Working Prototype',
                      sub: 'Deployed directly inside your private AWS, GCP, or Azure account',
                    },
                  ].map((kpi, idx) => (
                    <motion.div
                      key={kpi.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                    >
                      <p className="text-3xl font-bold font-mono-tabular text-white">{kpi.val}</p>
                      <p className="mt-1.5 text-xs text-slate-300 font-medium">{kpi.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{kpi.sub}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Core Solutions Preview */}
              <section className="border-t border-slate-800/80 bg-[#0B0D14] py-20">
                <div className="max-w-[1200px] mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                  >
                    <div>
                      <p className="text-xs font-mono-tabular text-blue-400">
                        What I Build
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-white">
                        Practical Data &amp; AI Systems Built Around Your Bottom Line
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={navigateSolutionsHub}
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Explore All Solutions &amp; Industries &rarr;
                    </button>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.4 }}
                      className="lg:col-span-5 rounded-2xl border border-slate-800 hover:border-blue-500/60 bg-[#11141D] p-8 flex flex-col justify-between transition-colors"
                    >
                      <div>
                        <p className="text-xs font-mono-tabular text-blue-400">
                          01. Data Engineering &amp; Pipelines
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-white">
                          Clean Warehouses &amp; Automated Airflow / dbt Pipelines
                        </h3>
                        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                          If your data is scattered across ERP tables, Stripe, Salesforce, and S3 logs, no AI model will save you. I build clean, tested Snowflake, BigQuery, and PostgreSQL pipelines that run on schedule and cut cloud compute bills by up to 45%.
                        </p>
                      </div>
                      <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                        <span className="text-xs font-mono-tabular text-slate-400">
                          Airflow · dbt · Snowflake · Kafka · Spark
                        </span>
                        <button
                          type="button"
                          onClick={() => openSolutionDetailPage('data-engineering-pipelines')}
                          className="text-xs font-semibold text-white hover:text-blue-400 whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Open Solution Page &rarr;
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.4, delay: 0.08 }}
                      className="lg:col-span-7 rounded-2xl border border-slate-800 hover:border-blue-500/60 bg-[#11141D] p-8 flex flex-col justify-between transition-colors"
                    >
                      <div>
                        <p className="text-xs font-mono-tabular text-blue-400">
                          02. Predictive ML &amp; Custom LLM / RAG Agents
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-white">
                          Hallucination-Free Document AI &amp; Forecasting Models
                        </h3>
                        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                          Whether you need a private RAG assistant that reads 150-page PDFs with exact page citations, or PyTorch &amp; XGBoost models that forecast warehouse inventory and catch payment fraud in 38 milliseconds, I build and tune them end-to-end.
                        </p>
                      </div>
                      <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                        <span className="text-xs font-mono-tabular text-slate-400">
                          PyTorch · LangGraph · Qdrant · XGBoost · AWS Bedrock
                        </span>
                        <button
                          type="button"
                          onClick={() => openSolutionDetailPage('custom-llm-ai-agents')}
                          className="text-xs font-semibold text-white hover:text-blue-400 whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Open Solution Page &rarr;
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, delay: 0.14 }}
                      className="lg:col-span-12 rounded-2xl border border-slate-800 hover:border-blue-500/60 bg-[#11141D] p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-colors"
                    >
                      <div className="max-w-3xl">
                        <p className="text-xs font-mono-tabular text-blue-400">
                          03. Business Intelligence &amp; Workflow Automation
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                          Executive Dashboards &amp; FastAPI Microservices That Plug Into Your Tools
                        </h3>
                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                          A model sitting in a notebook doesn’t help your team on Monday morning. I wrap predictions in fast REST APIs, push alerts straight into Salesforce or SAP, and build clear Power BI, Tableau, and Streamlit dashboards your team will actually use.
                        </p>
                        <p className="mt-4 text-xs font-mono-tabular text-slate-400">
                          FastAPI · Power BI · Tableau · Streamlit · Docker · Kubernetes
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => openSolutionDetailPage('process-automation-bi')}
                        className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-blue-600 hover:border-blue-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Open Solution Page &rarr;
                      </button>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Why Select Me Section */}
              <section className="py-20 border-t border-slate-800/80">
                <div className="max-w-[1200px] mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="max-w-3xl mb-12"
                  >
                    <p className="text-xs font-mono-tabular text-blue-400">
                      Why Work With Me Directly
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                      Senior Engineering Execution Without the Agency Runaround
                    </h2>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      With a B.Tech in Computer Science &amp; Engineering and hands-on experience building enterprise systems as a Data Scientist at Blackcoffer, I work directly with your team—so nothing gets lost in translation between a sales partner and a junior developer.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#11141D]"
                  >
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-slate-800 text-xs font-mono-tabular text-slate-400 bg-[#0D1017]">
                          <th className="py-4 px-6">Evaluation Criterion</th>
                          <th className="py-4 px-6">Traditional Big Consultancy</th>
                          <th className="py-4 px-6">Generic Freelance Coder</th>
                          <th className="py-4 px-6 text-blue-400">
                            Pijush Pathak (Independent Consultant)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {WHY_SELECT_COMPARISON.map((row) => (
                          <tr key={row.dimension} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-5 px-6 font-semibold text-white align-top whitespace-nowrap">
                              {row.dimension}
                            </td>
                            <td className="py-5 px-6 text-slate-400 align-top">
                              {row.bigConsultancy}
                            </td>
                            <td className="py-5 px-6 text-slate-400 align-top">
                              {row.genericFreelancer}
                            </td>
                            <td className="py-5 px-6 text-slate-100 font-medium align-top">
                              {row.independentConsultant}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </div>
              </section>

              {/* Featured Portfolio Projects Preview */}
              <section className="py-20 border-t border-slate-800/80 bg-[#0B0D14]">
                <div className="max-w-[1200px] mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                  >
                    <div>
                      <p className="text-xs font-mono-tabular text-blue-400">
                        Hands-On Work I’ve Shipped
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-white">
                        Featured Portfolio Projects
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigatePortfolio('all', 'All Industries')}
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      View All Portfolio Projects &rarr;
                    </button>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {CASE_STUDIES.slice(0, 3).map((study, idx) => (
                      <motion.article
                        key={study.id}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        onClick={() => openProjectDetailPage(study.id)}
                        className="rounded-2xl border border-slate-800 bg-[#11141D] hover:border-blue-500/70 transition-colors overflow-hidden flex flex-col justify-between cursor-pointer group shadow-lg"
                      >
                        <div>
                          <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-800 bg-slate-950 relative">
                            <ResilientImage
                              src={study.image}
                              alt={study.title}
                              fallbackTitle={study.title}
                              fallbackSubtitle={study.industry}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#11141D] via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-5 right-5">
                              <p className="text-xs font-mono-tabular text-blue-400">
                                Project {study.number} · {study.industry}
                              </p>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-sm font-mono-tabular font-semibold text-white">
                              {study.headlineMetric}
                            </p>
                            <h3 className="mt-2 text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-snug">
                              {study.title}
                            </h3>
                            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                              {study.twoSentenceSummary}
                            </p>
                          </div>
                        </div>

                        <div className="px-6 pb-6 pt-4 border-t border-slate-800/80">
                          <p className="text-xs font-mono-tabular text-slate-400 truncate">
                            {study.stack.join(' · ')}
                          </p>
                          <span className="mt-4 block w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 group-hover:bg-blue-600 rounded-lg transition-colors">
                            Open Project Page &rarr;
                          </span>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* =========================================================
              2. SOLUTIONS HUB VIEW
             ========================================================= */}
          {activeView === 'solutions-hub' && (
            <motion.div
              key="view-solutions-hub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-[1200px] mx-auto px-6 py-16"
            >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-800/80">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    Solutions
                  </h1>
                  <span className="w-8 h-8 bg-blue-600 text-white text-sm inline-flex items-center justify-center rounded-sm">
                    <i className="fa-solid fa-chevron-right" />
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-300 leading-relaxed">
                  Select any Industry vertical or technical Service below—or use the quick dropdown selector—to open its dedicated architecture and commercial ROI page.
                </p>
              </div>

              <div className="w-full lg:w-96 bg-[#141722] border border-slate-700 rounded-xl p-4">
                <label className="block text-xs font-mono-tabular text-blue-400 mb-2">
                  Select a Solution to Open Its Dedicated Page:
                </label>
                <div className="relative">
                  <select
                    value={selectedSolutionId}
                    onChange={(e) => openSolutionDetailPage(e.target.value)}
                    className="w-full appearance-none rounded-lg bg-[#090A0F] border border-slate-700 px-4 py-2.5 pr-10 text-xs font-medium text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <optgroup label="Core Services">
                      {servicePages.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.index}. {s.shortTitle}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Industry Solutions">
                      {industryPages.map((ind) => (
                        <option key={ind.id} value={ind.id}>
                          {ind.index}. {ind.shortTitle}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <i className="fa-solid fa-chevron-down text-xs text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-slate-800 bg-[#16181F] p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-6">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase pb-3 border-b border-slate-800">
                    Industries
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industryPages.map((ind) => (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => openSolutionDetailPage(ind.id)}
                        className="text-left p-5 rounded-xl border border-slate-800/90 bg-[#0D1017] hover:border-blue-500 transition-colors flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs font-mono-tabular text-blue-400">
                            Industry {ind.index}
                          </p>
                          <h2 className="mt-1.5 text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                            {ind.shortTitle}
                          </h2>
                          <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                            {ind.executiveHeadline}
                          </p>
                        </div>
                        <span className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-slate-200 group-hover:text-blue-400 inline-flex items-center gap-2">
                          <span>Open Dedicated Page</span>
                          <i className="fa-solid fa-arrow-right text-[10px]" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 lg:border-l border-slate-800 lg:pl-10">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase pb-3 border-b border-slate-800">
                    Services
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {servicePages.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => openSolutionDetailPage(srv.id)}
                        className="text-left p-5 rounded-xl border border-slate-800/90 bg-[#0D1017] hover:border-blue-500 transition-colors flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs font-mono-tabular text-blue-400">
                            Service {srv.index}
                          </p>
                          <h2 className="mt-1.5 text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                            {srv.shortTitle}
                          </h2>
                          <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                            {srv.executiveHeadline}
                          </p>
                        </div>
                        <span className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-slate-200 group-hover:text-blue-400 inline-flex items-center gap-2">
                          <span>Open Dedicated Page</span>
                          <i className="fa-solid fa-arrow-right text-[10px]" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================
            3. SEPARATE DEDICATED SOLUTION PAGE (solution-detail)
           ========================================================= */}
        {activeView === 'solution-detail' && (
          <motion.div
            key={`view-solution-${activeSolution.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1200px] mx-auto px-6 py-14"
          >
            <div className="mb-10 p-4 rounded-xl border border-slate-800 bg-[#11141D] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={navigateSolutionsHub}
                  className="text-slate-300 hover:text-white font-medium inline-flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-left text-[10px]" />
                  <span>All Solutions</span>
                </button>
                <span className="text-slate-600">/</span>
                <span className="text-blue-400 font-mono-tabular">
                  {activeSolution.groupLabel} {activeSolution.index}
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-white font-semibold truncate max-w-[260px]">
                  {activeSolution.shortTitle}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 whitespace-nowrap">Switch Solution:</span>
                <div className="relative">
                  <select
                    value={activeSolution.id}
                    onChange={(e) => openSolutionDetailPage(e.target.value)}
                    className="appearance-none rounded-lg bg-[#090A0F] border border-slate-700 px-3.5 py-2 pr-8 text-xs font-medium text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    <optgroup label="Services">
                      {servicePages.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.index}. {s.shortTitle}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Industries">
                      {industryPages.map((ind) => (
                        <option key={ind.id} value={ind.id}>
                          {ind.index}. {ind.shortTitle}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <i className="fa-solid fa-chevron-down text-[10px] text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <p className="text-xs font-mono-tabular text-blue-400">
                  {activeSolution.groupLabel} {activeSolution.index} · {activeSolution.shortTitle}
                </p>
                <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  {activeSolution.title}
                </h1>
                <p className="mt-4 text-lg text-slate-200 font-medium leading-snug">
                  {activeSolution.executiveHeadline}
                </p>
                <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                  {activeSolution.businessValue}
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-[#11141D] p-7 space-y-5">
                <div>
                  <p className="text-xs font-mono-tabular text-blue-400">
                    Measured Commercial Outcome
                  </p>
                  <p className="mt-1.5 text-base font-bold text-white">
                    {activeSolution.measuredOutcome}
                  </p>
                </div>
                <div className="border-t border-slate-800/80 pt-4">
                  <p className="text-xs font-mono-tabular text-slate-400">
                    Typical Time to Production
                  </p>
                  <p className="mt-1 text-sm font-mono-tabular text-slate-200">
                    {activeSolution.typicalTimeline}
                  </p>
                </div>
                <div className="border-t border-slate-800/80 pt-4">
                  <p className="text-xs font-mono-tabular text-slate-400">
                    Core Technical Architecture
                  </p>
                  <p className="mt-1.5 text-xs font-mono-tabular text-slate-300 leading-relaxed">
                    {activeSolution.technicalArchitecture.join(' · ')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateContact(activeSolution.shortTitle)}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  Scope This Solution With Pijush &rarr;
                </button>
              </div>
            </div>

            <section className="py-14 border-b border-slate-800/80">
              <p className="text-xs font-mono-tabular text-blue-400">
                High-ROI Enterprise Use Cases
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Where This Architecture Moves the P&amp;L
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeSolution.keyUseCases.map((uc) => (
                  <div
                    key={uc.title}
                    className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-sm font-mono-tabular font-bold text-blue-400">
                        {uc.outcome}
                      </p>
                      <h3 className="mt-2 text-base font-bold text-white">{uc.title}</h3>
                      <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-14 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-mono-tabular text-blue-400">
                  Architectural Methodology
                </p>
                <h2 className="text-2xl font-bold text-white">
                  How It Is Engineered for Production
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeSolution.architectureNarrative}
                </p>
                <div className="p-5 rounded-xl border border-slate-800 bg-[#11141D]">
                  <p className="text-xs font-mono-tabular text-slate-400">
                    Operational Bottleneck Eliminated
                  </p>
                  <p className="mt-1.5 text-sm text-white">{activeSolution.problemSolved}</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-7">
                  <p className="text-xs font-mono-tabular text-blue-400 mb-4">
                    Concrete Engineering Deliverables
                  </p>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {activeSolution.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-3">
                        <span className="text-blue-400 font-mono-tabular">&bull;</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="pt-14">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-mono-tabular text-blue-400">
                    Verified Proof of Execution
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Related Projects in This Domain
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigatePortfolio('all', 'All Industries')}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  View All Portfolio Projects &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CASE_STUDIES.filter((cs) =>
                  activeSolution.relatedCaseStudyIds.includes(cs.id)
                ).map((cs) => (
                  <article
                    key={cs.id}
                    onClick={() => openProjectDetailPage(cs.id)}
                    className="rounded-2xl border border-slate-800 bg-[#11141D] hover:border-blue-500 transition-colors p-7 flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <p className="text-xs font-mono-tabular text-blue-400">
                        Project {cs.number} · {cs.industry}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cs.title}
                      </h3>
                      <p className="mt-2 text-xs font-mono-tabular text-slate-200">
                        {cs.headlineMetric} · {cs.secondaryMetric}
                      </p>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        {cs.twoSentenceSummary}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-mono-tabular text-slate-400">
                        {cs.stack.slice(0, 4).join(' · ')}
                      </span>
                      <span className="text-xs font-semibold text-white group-hover:text-blue-400">
                        Open Project &rarr;
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* =========================================================
            4. PORTFOLIO VIEW
           ========================================================= */}
        {activeView === 'portfolio' && (
          <motion.div
            key="view-portfolio"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1200px] mx-auto px-6 py-16"
          >
            <div className="max-w-3xl pb-10">
              <p className="text-xs font-mono-tabular text-blue-400">
                Portfolio &amp; Works · Categorized Production Systems
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Explore Projects by Category &amp; Industry.
              </h1>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Use the category dropdown or horizontal domain bar below to filter projects. Click any project card to open its dedicated deep-dive architectural page.
              </p>
            </div>

            <div className="py-5 border-y border-slate-800/90 flex flex-wrap items-center gap-x-7 gap-y-4 text-xs font-semibold">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                  className="pb-1.5 border-b-2 border-white text-white inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>{portfolioIndustry}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-[10px] transition-transform ${
                      portfolioDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {portfolioDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-700 bg-[#161821] p-2 shadow-2xl z-30">
                    {INDUSTRY_TAGS.map((indTag) => (
                      <button
                        key={indTag}
                        type="button"
                        onClick={() => {
                          setPortfolioIndustry(indTag);
                          setPortfolioDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                          portfolioIndustry === indTag
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        {indTag}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {PORTFOLIO_CATEGORIES.map((cat, idx) => {
                const active = portfolioCategory === cat.id;
                const colors = [
                  'text-indigo-400 hover:text-indigo-300',
                  'text-emerald-400 hover:text-emerald-300',
                  'text-cyan-400 hover:text-cyan-300',
                  'text-pink-400 hover:text-pink-300',
                  'text-amber-400 hover:text-amber-300',
                ];
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setPortfolioCategory(cat.id)}
                    className={`transition-colors cursor-pointer whitespace-nowrap pb-1 ${
                      active
                        ? 'text-white border-b-2 border-blue-500'
                        : colors[idx % colors.length]
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <p>
                Showing <span className="text-white font-mono-tabular">{filteredPortfolioProjects.length}</span> production projects in{' '}
                <span className="text-blue-400">
                  {PORTFOLIO_CATEGORIES.find((c) => c.id === portfolioCategory)?.label}
                </span>{' '}
                · <span className="text-slate-200">{portfolioIndustry}</span>
              </p>
              {(portfolioCategory !== 'all' || portfolioIndustry !== 'All Industries') && (
                <button
                  type="button"
                  onClick={() => {
                    setPortfolioCategory('all');
                    setPortfolioIndustry('All Industries');
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolioProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.38, delay: idx * 0.06 }}
                  onClick={() => openProjectDetailPage(project.id)}
                  className="rounded-2xl border border-slate-800 bg-[#11141D] hover:border-blue-500 transition-colors overflow-hidden flex flex-col justify-between cursor-pointer group shadow-lg"
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden border-b border-slate-800 bg-slate-950 relative">
                      <ResilientImage
                        src={project.image}
                        alt={project.title}
                        fallbackTitle={project.title}
                        fallbackSubtitle={project.industry}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#11141D] via-[#11141D]/20 to-transparent" />
                      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between">
                        <span className="text-[11px] font-mono-tabular text-blue-400">
                          Project {project.number} · {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-mono-tabular font-semibold text-white">
                        {project.headlineMetric}
                      </p>
                      <h2 className="mt-2 text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-snug">
                        {project.title}
                      </h2>
                      <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                        {project.twoSentenceSummary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono-tabular text-slate-400 truncate">
                      {project.stack.join(' · ')}
                    </p>
                    <span className="mt-4 block w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 group-hover:bg-blue-500 rounded-lg transition-colors">
                      Explore Project Deep Dive &rarr;
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* =========================================================
            5. DEDICATED PORTFOLIO PROJECT DEEP-DIVE PAGE
           ========================================================= */}
        {activeView === 'project-detail' && (
          <motion.div
            key={`view-project-${activeCaseStudy.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1200px] mx-auto px-6 py-14"
          >
            <div className="mb-10 p-4 rounded-xl border border-slate-800 bg-[#11141D] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => navigatePortfolio()}
                  className="text-slate-200 hover:text-blue-400 font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-left text-[10px]" />
                  <span>Back to Portfolio</span>
                </button>
                <span className="text-slate-600">·</span>
                <span className="text-blue-400 font-mono-tabular">
                  Project {activeCaseStudy.number} of {CASE_STUDIES.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 whitespace-nowrap">Jump to Project:</span>
                <div className="relative">
                  <select
                    value={activeCaseStudy.id}
                    onChange={(e) => openProjectDetailPage(e.target.value)}
                    className="appearance-none rounded-lg bg-[#090A0F] border border-slate-700 px-3.5 py-2 pr-8 text-xs font-medium text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    {CASE_STUDIES.map((cs) => (
                      <option key={cs.id} value={cs.id}>
                        {cs.number}. {cs.title}
                      </option>
                    ))}
                  </select>
                  <i className="fa-solid fa-chevron-down text-[10px] text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono-tabular text-blue-400">
                  Project {activeCaseStudy.number} · {activeCaseStudy.industry} ·{' '}
                  {activeCaseStudy.duration} · {activeCaseStudy.engagementModel}
                </p>
                <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  {activeCaseStudy.title}
                </h1>
                <p className="mt-4 text-base text-slate-300 leading-relaxed">
                  {activeCaseStudy.roiSummary}
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  Client Profile: <span className="text-slate-200">{activeCaseStudy.clientType}</span>
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl border border-slate-800 overflow-hidden bg-slate-950">
                  <ResilientImage
                    src={activeCaseStudy.image}
                    alt={activeCaseStudy.title}
                    fallbackTitle={activeCaseStudy.title}
                    fallbackSubtitle={activeCaseStudy.industry}
                  />
                </div>
              </div>
            </div>

            <section className="py-10 border-b border-slate-800/80">
              <p className="text-xs font-mono-tabular text-blue-400 mb-6">
                Results &amp; Impact in Production
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeCaseStudy.impact.metrics.map((m, idx) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="rounded-xl border border-slate-800 bg-[#11141D] p-6"
                  >
                    <p className="text-3xl font-bold font-mono-tabular text-white">{m.value}</p>
                    <p className="mt-2 text-xs font-medium text-slate-200">{m.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{m.timeframe}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="py-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <p className="text-xs font-mono-tabular text-blue-400">01. What Was Broken</p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  The Real-World Problem I Walked Into
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-base text-slate-300 leading-relaxed">
                  {activeCaseStudy.problem.overview}
                </p>
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 space-y-3">
                  <p className="text-xs font-mono-tabular text-slate-400">
                    What Was Causing the Bottleneck
                  </p>
                  {activeCaseStudy.problem.painPoints.map((pt) => (
                    <p key={pt} className="text-sm text-slate-200 flex items-start gap-2.5">
                      <span className="text-blue-400 font-mono-tabular">&bull;</span>
                      <span>{pt}</span>
                    </p>
                  ))}
                  <div className="pt-4 mt-4 border-t border-slate-800/80">
                    <p className="text-xs font-mono-tabular text-slate-400">
                      What It Was Costing the Team:{' '}
                      <span className="text-white">{activeCaseStudy.problem.baselineCost}</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <p className="text-xs font-mono-tabular text-blue-400">
                  02. How I Built It
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Architecture &amp; Step-by-Step Execution
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-base text-slate-300 leading-relaxed">
                  {activeCaseStudy.solution.architectureOverview}
                </p>
                <div className="space-y-4">
                  {activeCaseStudy.solution.engineeringSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="rounded-2xl border border-slate-800 bg-[#11141D] p-6"
                    >
                      <p className="text-xs font-mono-tabular text-blue-400">
                        Step {step.stepNumber} · {step.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <p className="text-xs font-mono-tabular text-blue-400">03. Tools &amp; Stack</p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  What I Used in Production
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6">
                  <p className="text-xs text-slate-400 mb-3">
                    Core tools, databases, and libraries I used to build and ship this system:
                  </p>
                  <p className="text-sm font-mono-tabular text-white leading-relaxed">
                    {activeCaseStudy.stack.join(' · ')}
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-[#11141D] p-8">
                <p className="text-lg font-serif-editorial italic text-slate-100 leading-relaxed">
                  "{activeCaseStudy.impact.executiveQuote.quote}"
                </p>
                <p className="mt-4 text-xs font-mono-tabular text-slate-400">
                  {activeCaseStudy.impact.executiveQuote.author} ·{' '}
                  {activeCaseStudy.impact.executiveQuote.role} ·{' '}
                  {activeCaseStudy.impact.executiveQuote.organization}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <p className="text-sm text-slate-300 mb-4 lg:text-right">
                  Facing a similar data or AI bottleneck on your team? Let’s talk through how I’d approach it.
                </p>
                <button
                  type="button"
                  onClick={() => navigateContact(activeCaseStudy.title)}
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Book a Technical Consultation
                </button>
              </div>
            </section>
          </motion.div>
        )}

        {/* =========================================================
            6. ABOUT ME VIEW
           ========================================================= */}
        {activeView === 'about' && (
          <motion.div
            key="view-about"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1200px] mx-auto px-6 py-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono-tabular text-blue-400">
                  About Me · Strategic Partner &amp; Principal Architect
                </p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Computer Science Rigor Meets Enterprise Consulting Execution.
                </h1>

                <div className="mt-6 space-y-5 text-base text-slate-300 leading-relaxed">
                  <p>
                    I am <strong className="text-white font-semibold">Pijush Pathak</strong>, an Independent Technology Consultant specializing in Data Science, Artificial Intelligence, and Production Machine Learning Systems.
                  </p>
                  <p>
                    My engineering approach was forged at the intersection of formal computer science fundamentals—earning my{' '}
                    <strong className="text-white font-semibold">
                      B.Tech in Computer Science &amp; Engineering (CSE)
                    </strong>
                    —and high-velocity enterprise consulting as a{' '}
                    <strong className="text-white font-semibold">
                      Data Scientist at Blackcoffer
                    </strong>
                    , where I architected data pipelines, NLP engines, and predictive models for global clients across FinTech, Healthcare, and Supply Chain.
                  </p>
                  <p>
                    In the enterprise market, technical leaders frequently face a broken trade-off: hire a massive consulting firm that bills six figures for preliminary slide decks while delegating actual coding to junior analysts, or hire a generalist freelancer who builds fragile scripts that fail the moment real-world data drift occurs.
                  </p>
                  <p>
                    I operate as a <strong className="text-white font-semibold">solo strategic partner</strong>. When you engage me—whether directly or via Upwork Enterprise—you work 1-on-1 with the principal architect who interrogates the unit economics, designs the cloud schema, trains the model, and ships the containerized production microservice.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">Academic Pedigree</p>
                    <p className="mt-1 text-sm font-semibold text-white">B.Tech in CSE</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      Algorithms, Distributed Systems &amp; Statistical Learning
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">Enterprise Tenure</p>
                    <p className="mt-1 text-sm font-semibold text-white">Ex-Blackcoffer</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      Data Scientist delivering global B2B AI &amp; analytics solutions
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">Operating Base</p>
                    <p className="mt-1 text-sm font-semibold text-white">India · Global Remote</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      Seamless overlap with US EST, EU CET &amp; APAC teams
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors bg-[#11141D] overflow-hidden shadow-2xl group">
                  <div className="aspect-[3/4] max-h-[460px] w-full overflow-hidden bg-slate-950">
                    <ResilientImage
                      src={IMAGES.portrait}
                      alt="Pijush Pathak — Independent Data Science, AI and Machine Learning Consultant"
                      fallbackTitle="Pijush Pathak"
                      fallbackSubtitle="Independent Data Science & AI Consultant"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 border-t border-slate-800/80">
                    <p className="text-base font-bold text-white">Pijush Pathak</p>
                    <p className="mt-1 text-xs font-mono-tabular text-slate-400">
                      Independent Technology Consultant · Data Science, AI &amp; Machine Learning.
                    </p>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                      "My commitment is simple: every data pipeline or AI agent we put into production must pay for itself many times over in measurable operational leverage."
                    </p>
                    <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-5 text-xs">
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2 font-medium"
                      >
                        <i className="fa-brands fa-linkedin text-blue-400 text-sm" />
                        <span>LinkedIn Profile</span>
                      </a>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
                      >
                        <i className="fa-brands fa-github text-white text-sm" />
                        <span>GitHub (@PijushPathak07)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4-Stage Consulting Methodology */}
            <section className="pt-16">
              <div className="max-w-2xl mb-10">
                <p className="text-xs font-mono-tabular text-blue-400">How We Work Together</p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  The 4-Stage Production Engineering Methodology
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Designed to eliminate technical risk early and deliver production-ready infrastructure without multi-month discovery bloat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">01 · Days 1–5</p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Commercial &amp; Telemetry Audit
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      We define the exact financial KPI to move, audit your raw SQL/cloud schemas for leakage or sparsity, and establish a deterministic baseline metric.
                    </p>
                  </div>
                  <p className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono-tabular text-slate-400">
                    Output: Architecture RFC &amp; ROI Spec
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">02 · Days 6–14</p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Vertical Slice Prototype
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      Within 14 days, I ship an end-to-end working vertical slice inside your private cloud VPC so stakeholders can test live predictions on real company data.
                    </p>
                  </div>
                  <p className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono-tabular text-slate-400">
                    Output: Live Staging API &amp; Benchmark
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">03 · Weeks 3–8</p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Hardening &amp; Evaluation
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      Iterative hyperparameter tuning, RAG hallucination guardrails, Dockerization, CI/CD automation, and load testing to meet strict latency SLAs.
                    </p>
                  </div>
                  <p className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono-tabular text-slate-400">
                    Output: Production Container &amp; Tests
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular text-blue-400">04 · Handover</p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Zero-Lock-In Ownership
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      Complete Git repository handover, automated model-drift monitoring alerts, and live training sessions for your internal engineering team.
                    </p>
                  </div>
                  <p className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono-tabular text-slate-400">
                    Output: 100% Client IP &amp; Runbooks
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* =========================================================
            7. CONTACT VIEW (Web3Forms + Free Calendar Booking + Calendly)
           ========================================================= */}
        {activeView === 'contact' && (
          <motion.div
            key="view-contact"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-[1200px] mx-auto px-6 py-16"
          >
            <div className="max-w-3xl pb-12 border-b border-slate-800/80">
              <p className="text-xs font-mono-tabular text-blue-400">
                Get In Touch · Direct Principal Consultation
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Let’s Scope Your Next High-ROI Data or AI System.
              </h1>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Complete the technical brief below or reserve a free 30-minute discovery slot directly. Every submission is delivered straight to <span className="text-white font-mono-tabular">{DIRECT_EMAIL}</span> and reviewed personally by Pijush Pathak.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Enterprise Contact Form (Wired to Web3Forms -> workingwiththethunder@gmail.com) */}
              <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#11141D] p-8">
                <h2 className="text-xl font-bold text-white">Submit an Architectural Brief</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Strict confidentiality guaranteed. Happy to execute a mutual NDA prior to deep-dive schema review.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 rounded-xl border border-emerald-800/80 bg-emerald-950/30 p-6">
                    <p className="text-xs font-mono-tabular text-emerald-400">
                      Confirmed · Delivered to {DIRECT_EMAIL}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Thank you, {contactForm.name}.
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      Your technical brief regarding{' '}
                      <span className="text-white font-medium">{contactForm.initiative}</span> has been emailed directly to Pijush Pathak (<span className="font-mono-tabular text-white">{DIRECT_EMAIL}</span>). You will receive a response at{' '}
                      <span className="font-mono-tabular text-white">{contactForm.email}</span>{' '}
                      within 4 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setContactForm({
                          ...contactForm,
                          name: '',
                          email: '',
                          organization: '',
                          brief: '',
                        });
                      }}
                      className="mt-5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-6 space-y-5" noValidate>
                    {formError && (
                      <div className="p-3.5 rounded-lg border border-rose-800 bg-rose-950/40 text-xs text-rose-300">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="e.g., David Chen"
                          className="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="d.chen@company.com"
                          className="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={contactForm.organization}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, organization: e.target.value })
                          }
                          placeholder="Acme Enterprise Inc."
                          className="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Selected Solution / Initiative
                        </label>
                        <select
                          value={contactForm.initiative}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, initiative: e.target.value })
                          }
                          className="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                        >
                          {SOLUTION_PAGES.map((s) => (
                            <option key={s.id} value={s.shortTitle}>
                              {s.shortTitle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Current Data Stack, Key Bottleneck &amp; Target Timeline *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={contactForm.brief}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, brief: e.target.value })
                        }
                        placeholder="Share your current cloud/database stack, the problem you are solving, and your target launch window..."
                        className="w-full rounded-lg bg-[#090A0F] border border-slate-800 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {formSubmitting ? 'Sending Brief...' : 'Send Technical Brief'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Contact Coordinates & Free Calendar Booking Embed */}
              <div className="lg:col-span-5 space-y-6">
                {/* Direct Contact Coordinates Card (No Contracting Vehicles) */}
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-8 space-y-4">
                  <p className="text-xs font-mono-tabular text-blue-400">
                    Direct Contact Coordinates
                  </p>
                  <div className="space-y-3.5 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">Direct Email</p>
                      <a
                        href={`mailto:${DIRECT_EMAIL}`}
                        className="font-mono-tabular text-white hover:text-blue-400 underline underline-offset-4 break-all"
                      >
                        {DIRECT_EMAIL}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Location &amp; Operating Hours</p>
                      <p className="text-white font-medium">
                        India (IST / UTC+5:30) · Available Any Day (9:00 AM – 12:00 AM IST)
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-5 text-xs">
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-blue-400 transition-colors inline-flex items-center gap-2 font-medium"
                      >
                        <i className="fa-brands fa-linkedin text-blue-400 text-sm" />
                        <span>linkedin.com/in/pijush-pathak</span>
                      </a>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
                      >
                        <i className="fa-brands fa-github text-white text-sm" />
                        <span>github.com/PijushPathak07</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Calendar Booking Embed */}
                <div className="rounded-2xl border border-slate-800 bg-[#11141D] p-8">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-mono-tabular text-blue-400">
                      Calendar Booking Embed
                    </p>
                    <span className="text-xs font-mono-tabular text-emerald-400 font-semibold">
                      Free
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    Book a Technical Discovery Call
                  </h3>

                  <div className="mt-4 p-1 rounded-lg bg-[#090A0F] border border-slate-800 text-xs">
                    <div className="w-full py-1.5 px-3 rounded-md font-medium text-center bg-blue-600 text-white">
                      Quick Slot Request
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090A0F] h-[420px]">
                      <iframe
                        src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=090a0f&text_color=f1f5f9&primary_color=2563eb`}
                        title="Pijush Pathak Calendly Technical Discovery Call"
                        className="w-full h-full border-0"
                      />
                    </div>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 px-4 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
                    >
                      Open Calendly in New Tab ({CALENDLY_URL}) &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </main>

      {/* =====================================================================
          QUIET ENTERPRISE FOOTER (Exact Requested Text, Social Links & Vertical Navigation)
         ===================================================================== */}
      <footer className="border-t border-slate-800/80 bg-[#07080C] py-14 text-xs text-slate-400">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <p className="text-base font-bold text-white">Pijush Pathak</p>
            <p className="mt-1.5 text-slate-400">
              Independent Technology Consultant · Data Science, AI &amp; Machine Learning.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <a
                href={`mailto:${DIRECT_EMAIL}`}
                className="hover:text-white transition-colors font-mono-tabular"
              >
                {DIRECT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fa-brands fa-linkedin text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fa-brands fa-github text-white" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Vertical Navigation Stack Without .html */}
          <div className="flex flex-col space-y-2.5 text-slate-400 font-medium">
            <button
              type="button"
              onClick={navigateHome}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={navigateSolutionsHub}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              type="button"
              onClick={() => navigatePortfolio('all', 'All Industries')}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              type="button"
              onClick={navigateAbout}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => navigateContact()}
              className="text-left hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* Standalone Pure HTML5 Code Export Modal */}
      {codeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-5xl rounded-2xl border border-slate-800 bg-[#0D1017] overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-white">
                  Copy-Pasteable Pure HTML5 + Tailwind CDN Source Files
                </h2>
                <p className="text-xs text-slate-400">
                  Select any of the 6 architectural files below to inspect or copy its standalone HTML5 code.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCodeModalOpen(false)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg hover:text-white cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="px-6 py-3 border-b border-slate-800 bg-[#090A0F] flex flex-wrap items-center gap-2">
              {HTML_EXPORTS.map((file) => (
                <button
                  key={file.filename}
                  type="button"
                  onClick={() => setSelectedHtmlExport(file.filename)}
                  className={`px-3 py-1.5 text-xs font-mono-tabular rounded-lg transition-colors cursor-pointer ${
                    selectedHtmlExport === file.filename
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-[#11141D] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {file.filename.replace('.html', '')}
                </button>
              ))}
            </div>

            <div className="px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#11141D]">
              <p className="text-xs text-slate-300">{currentExportObj.description}</p>
              <button
                type="button"
                onClick={() => handleCopyCode(currentExportObj.filename, currentExportObj.code)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedFile === currentExportObj.filename
                  ? `Copied!`
                  : `Copy HTML5 Code`}
              </button>
            </div>

            <div className="p-6 overflow-y-auto font-mono-tabular text-xs text-slate-300 bg-[#07080C]">
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                {currentExportObj.code}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
