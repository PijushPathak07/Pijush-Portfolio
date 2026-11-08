import heroArchitectureImg from '../assets/images/hero_data_architecture_1793980204682.jpg';
import supplyChainImg from '../assets/images/case_study_supply_chain_1793980204420.jpg';
import llmRagImg from '../assets/images/case_study_llm_rag_1793980206838.jpg';
import finFraudImg from '../assets/images/case_study_fin_fraud_1793980207367.jpg';

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  clientType: string;
  industry: string;
  industryTag: string;
  duration: string;
  engagementModel: string;
  headlineMetric: string;
  secondaryMetric: string;
  roiSummary: string;
  twoSentenceSummary: string;
  stack: string[];
  category: 'llm-agents' | 'predictive-ml' | 'data-engineering' | 'bi-automation';
  categoryLabel: string;
  image: string;
  problem: {
    overview: string;
    painPoints: string[];
    baselineCost: string;
  };
  solution: {
    architectureOverview: string;
    engineeringSteps: {
      stepNumber: string;
      title: string;
      detail: string;
    }[];
  };
  impact: {
    metrics: {
      value: string;
      label: string;
      timeframe: string;
    }[];
    executiveQuote: {
      quote: string;
      author: string;
      role: string;
      organization: string;
    };
  };
}

export interface SolutionDetailPage {
  id: string;
  group: 'services' | 'industries';
  groupLabel: string;
  index: string;
  shortTitle: string;
  title: string;
  executiveHeadline: string;
  businessValue: string;
  architectureNarrative: string;
  problemSolved: string;
  deliverables: string[];
  keyUseCases: {
    title: string;
    outcome: string;
    description: string;
  }[];
  technicalArchitecture: string[];
  typicalTimeline: string;
  measuredOutcome: string;
  relatedCaseStudyIds: string[];
}

export const IMAGES = {
  heroArchitecture: heroArchitectureImg,
  supplyChain: supplyChainImg,
  llmRag: llmRagImg,
  finFraud: finFraudImg,
  portrait: '/assets/aistudio/Gemini_Generated_Image_fjg5j0fjg5j0fjg5_2cfbd55a.png',
};

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Categories', description: 'Complete portfolio across AI, ML, Data Engineering & BI' },
  { id: 'llm-agents', label: 'LLM & Multi-Agent RAG', description: 'Private document intelligence, agentic workflows & clinical NLP' },
  { id: 'predictive-ml', label: 'Predictive ML & Forecasting', description: 'Demand forecasting, churn prevention & quantitative optimization' },
  { id: 'data-engineering', label: 'Data Engineering & Streaming', description: 'Cloud lakehouses, Kafka streaming & sub-50ms inference pipelines' },
  { id: 'bi-automation', label: 'Decision BI & Automation', description: 'Executive command centers, automated ETL & ERP write-backs' },
] as const;

export const INDUSTRY_TAGS = [
  'All Industries',
  'Financial & Legal Compliance',
  'Supply Chain & Logistics',
  'FinTech & Quantitative Risk',
  'Healthcare & Life Sciences',
  'Enterprise SaaS & Revenue Ops',
  'Industrial & Energy Analytics',
] as const;

export const SOLUTION_PAGES: SolutionDetailPage[] = [
  // ==================== SERVICES ====================
  {
    id: 'data-engineering-pipelines',
    group: 'services',
    groupLabel: 'Core Service',
    index: '01',
    shortTitle: 'AI-Powered Big Data & Lakehouse Pipelines',
    title: 'Enterprise Data Engineering & Cloud Lakehouse Architecture',
    executiveHeadline: 'Turn fragmented operational silos into an audit-ready, low-latency analytical foundation.',
    businessValue:
      'Machine learning and executive reporting fail when built on brittle, undocumented data pipelines. I architect fault-tolerant data lakehouses and real-time streaming backbones that eliminate manual CSV wrangling, enforce automated data quality contracts, and reduce cloud warehouse compute spend by 30–50%.',
    architectureNarrative:
      'Every pipeline is engineered using declarative orchestration (Apache Airflow / Dagster) and modular transformation layers (dbt) on top of Snowflake, BigQuery, or PostgreSQL. Schema drift, null spikes, and row-count anomalies are intercepted automatically before corrupt data ever reaches an executive dashboard or downstream ML model.',
    problemSolved:
      'Eliminates broken morning dashboards, conflicting department KPIs, runaway Snowflake/BigQuery bills, and multi-day delays in data availability.',
    deliverables: [
      'End-to-end ELT/ETL pipelines orchestrated via Apache Airflow, Dagster, or Prefect',
      'Modular dbt transformation layers with automated schema, freshness & referential integrity tests',
      'Real-time Change Data Capture (CDC) & event streaming via Apache Kafka and Redis',
      'Cloud cost optimization, table clustering, and warehouse query tuning (Snowflake, BigQuery, Postgres)',
    ],
    keyUseCases: [
      {
        title: 'Multi-Source ERP & CRM Lakehouse Unification',
        outcome: '-42% Cloud Compute Cost',
        description: 'Consolidating SAP, Salesforce, and Stripe ledgers into a single single-source-of-truth Snowflake warehouse with 15-minute SLA freshness.',
      },
      {
        title: 'Real-Time Kafka Telemetry Ingestion',
        outcome: '<50ms Event Processing',
        description: 'High-throughput streaming pipelines processing millions of IoT, clickstream, or payment settlement events per hour without data loss.',
      },
      {
        title: 'Automated Data Governance & Lineage',
        outcome: '99.95% Pipeline Uptime',
        description: 'End-to-end column-level lineage, automated PII masking, and instant PagerDuty/Slack root-cause alerts on upstream schema changes.',
      },
    ],
    technicalArchitecture: ['Python', 'SQL', 'Apache Spark', 'Airflow', 'dbt', 'Kafka', 'Snowflake', 'PostgreSQL', 'AWS / GCP'],
    typicalTimeline: '4–8 Weeks to Production',
    measuredOutcome: 'Up to 45% reduction in cloud compute cost & 99.95% pipeline SLA reliability.',
    relatedCaseStudyIds: ['realtime-fintech-fraud-risk-engine', 'global-supply-chain-demand-forecasting'],
  },
  {
    id: 'custom-llm-ai-agents',
    group: 'services',
    groupLabel: 'Core Service',
    index: '02',
    shortTitle: 'Custom LLM Systems, RAG & AI Agents',
    title: 'Custom LLM Architectures, Hybrid RAG & Autonomous AI Agents',
    executiveHeadline: 'Deploy private, citation-grounded AI agents that execute complex enterprise workflows without hallucinations.',
    businessValue:
      'Generic chat wrappers cannot survive enterprise security or accuracy audits. I design production-grade Retrieval-Augmented Generation (RAG) architectures and multi-agent workflows grounded strictly in your proprietary documents, SQL databases, and internal APIs—deployed inside your private cloud VPC.',
    architectureNarrative:
      'Instead of naive vector chunking, I implement layout-aware PDF/table parsing, parent-child hierarchical indexing, hybrid dense + BM25 sparse search in Qdrant/pgvector, cross-encoder reranking, and deterministic verification agents that validate every claim against character offsets in your source files.',
    problemSolved:
      'Replaces thousands of hours of manual document review, legal/compliance auditing, and tier-2 technical support triage with verifiable, deterministic AI execution.',
    deliverables: [
      'Hybrid dense-sparse vector search & cross-encoder re-ranking pipelines (Qdrant, Pinecone, pgvector)',
      'Multi-agent orchestration with deterministic tool-calling and human-in-the-loop guardrails (LangGraph)',
      'Domain-specific fine-tuning (LoRA / QLoRA) & automated LLM evaluation harnesses (RAGAS / TruLens)',
      'Private VPC deployment on AWS Bedrock, Azure OpenAI, or self-hosted vLLM GPU endpoints',
    ],
    keyUseCases: [
      {
        title: 'Legal, SEC & Regulatory Contract Intelligence',
        outcome: '-68% Audit Turnaround',
        description: 'Automated clause extraction, covenant risk scoring, and redline verification across millions of multi-column PDF agreements.',
      },
      {
        title: 'Natural Language to Verified SQL Analytics Agent',
        outcome: '97.8% Execution Accuracy',
        description: 'Semantic-layer governed Text-to-SQL agents allowing executives to query Snowflake/Postgres databases safely in plain English.',
      },
      {
        title: 'Clinical & Biomedical Unstructured Document Extraction',
        outcome: '4.2x Faster Cohort Screening',
        description: 'HIPAA-compliant extraction of biomarkers, staging, and therapy timelines from unstructured physician notes into relational tables.',
      },
    ],
    technicalArchitecture: ['LangGraph', 'LlamaIndex', 'PyTorch', 'Qdrant', 'pgvector', 'FastAPI', 'vLLM', 'AWS Bedrock'],
    typicalTimeline: '6–12 Weeks to Production',
    measuredOutcome: '60–75% reduction in knowledge-worker research & document processing cycle time.',
    relatedCaseStudyIds: ['multi-agent-rag-compliance', 'clinical-nlp-ehr-extraction'],
  },
  {
    id: 'predictive-ml-advanced-analytics',
    group: 'services',
    groupLabel: 'Core Service',
    index: '03',
    shortTitle: 'Predictive AI & ML Consultancy',
    title: 'Predictive Machine Learning & Quantitative Optimization',
    executiveHeadline: 'Move from hindsight reporting to probabilistic forecasting, dynamic pricing, and real-time risk scoring.',
    businessValue:
      'Off-the-shelf SaaS analytics only tell you what happened last quarter. I build custom statistical and deep learning models tailored to your exact unit economics—predicting customer churn before renewal, optimizing SKU-level inventory capital, and scoring fraud in milliseconds.',
    architectureNarrative:
      'Every model is benchmarked against rigorous out-of-time backtests and business-cost loss functions rather than vanity academic metrics. Production deployments include automated feature stores, ONNX runtime compilation, SHAP reason-code explainability, and continuous data-drift monitoring.',
    problemSolved:
      'Stops revenue leakage from preventable customer churn, inventory stockouts, mispriced contracts, and undetected payment anomalies.',
    deliverables: [
      'Probabilistic demand forecasting & hierarchical time-series models (PyTorch TFT, Prophet, XGBoost)',
      'Customer Lifetime Value (LTV), propensity-to-buy, and early churn intervention engines',
      'Real-time anomaly detection, credit risk scoring, and quantitative pricing optimization',
      'Full MLOps lifecycle: MLflow model registry, automated drift alerts, and SHAP explainability',
    ],
    keyUseCases: [
      {
        title: 'Hierarchical SKU-Warehouse Demand Forecasting',
        outcome: '$3.1M Working Capital Freed',
        description: 'Quantile P10/P50/P90 demand forecasts accounting for lead-time variance, promotions, and seasonal spikes across 40,000+ SKUs.',
      },
      {
        title: 'B2B SaaS Renewal & Expansion Propensity Scoring',
        outcome: '+18% Net Dollar Retention',
        description: 'Product-usage telemetry models surfacing at-risk enterprise accounts 90 days before renewal with SHAP usage drivers.',
      },
      {
        title: 'Dynamic Margin & Price Elasticity Optimization',
        outcome: '+4.6% Gross Margin Lift',
        description: 'Bayesian price-elasticity engines recommending optimal discount corridors for enterprise deal desks.',
      },
    ],
    technicalArchitecture: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'PyTorch', 'TensorFlow', 'MLflow', 'ONNX', 'Docker'],
    typicalTimeline: '6–10 Weeks to Production',
    measuredOutcome: '15–35% measurable lift in forecast accuracy, retention, or working capital efficiency.',
    relatedCaseStudyIds: ['global-supply-chain-demand-forecasting', 'saas-revenue-churn-intelligence'],
  },
  {
    id: 'process-automation-bi',
    group: 'services',
    groupLabel: 'Core Service',
    index: '04',
    shortTitle: 'Decision Intelligence & Process Automation',
    title: 'Intelligent Process Automation & Executive Decision Intelligence',
    executiveHeadline: 'Connect model outputs directly into the operational tools your executive and frontline teams use daily.',
    businessValue:
      'A predictive model has zero ROI if its insights stay trapped in a Jupyter Notebook. I build the last-mile API microservices, automated decision workflows, and executive Business Intelligence suites that translate complex telemetry into immediate commercial action.',
    architectureNarrative:
      'I combine sub-50ms FastAPI inference microservices with governed semantic layers in Power BI, Tableau, and custom React/Streamlit operational consoles—writing recommended actions directly back into your ERP, CRM, or procurement systems.',
    problemSolved:
      'Bridges the gap between raw data science outputs and daily executive P&L decisions without requiring stakeholders to write code.',
    deliverables: [
      'Executive P&L, cohort retention, and supply chain command centers (Power BI, Tableau, Streamlit)',
      'Automated document OCR, invoice reconciliation, and ERP/CRM write-back microservices',
      'High-concurrency REST/gRPC inference APIs with sub-50ms response SLAs (FastAPI)',
      'Automated anomaly alerting routed directly to Slack, Teams, or PagerDuty with root-cause attribution',
    ],
    keyUseCases: [
      {
        title: 'Automated Procurement & ERP Replenishment Write-Back',
        outcome: '38 Hrs/Wk Manual Work Saved',
        description: 'Pushing daily ML-optimized purchase order quantities directly into SAP/NetSuite approval queues.',
      },
      {
        title: 'Board-Ready Unit Economics & Cohort Command Center',
        outcome: 'Single Source of P&L Truth',
        description: 'Unified Power BI and dbt financial marts tracking CAC payback, LTV/CAC, and gross margin by product line in real time.',
      },
      {
        title: 'Automated Invoice & Bill-of-Lading Reconciliation',
        outcome: '99.4% Straight-Through Processing',
        description: 'Vision-LLM and layout OCR pipelines matching multi-currency vendor invoices against purchase orders automatically.',
      },
    ],
    technicalArchitecture: ['FastAPI', 'Power BI', 'Tableau', 'Streamlit', 'Docker', 'Kubernetes', 'REST / GraphQL', 'Redis'],
    typicalTimeline: '3–6 Weeks to Production',
    measuredOutcome: 'Eliminates 20–40 hours/week of manual analyst reporting and spreadsheet reconciliation.',
    relatedCaseStudyIds: ['saas-revenue-churn-intelligence', 'industrial-iot-predictive-maintenance'],
  },

  // ==================== INDUSTRIES ====================
  {
    id: 'industry-bfsi-fintech',
    group: 'industries',
    groupLabel: 'Industry Vertical',
    index: '05',
    shortTitle: 'Banking, Financial Services & FinTech',
    title: 'AI & Quantitative Risk Engineering for Banking, FinTech & Capital Markets',
    executiveHeadline: 'Sub-50ms fraud interception, automated SEC/regulatory compliance, and algorithmic credit underwriting.',
    businessValue:
      'Financial institutions operate under unforgiving latency and regulatory constraints. I help FinTech platforms, private credit funds, and compliance teams deploy explainable risk models and deterministic document intelligence inside strict SOC2/VPC boundaries.',
    architectureNarrative:
      'Combines streaming event architectures (Kafka + Redis) for real-time transaction velocity scoring with verifiable, zero-hallucination RAG pipelines for legal covenant and regulatory audit automation.',
    problemSolved:
      'Eliminates high false-positive merchant account freezes, slow manual loan underwriting, and compliance audit bottlenecks.',
    deliverables: [
      'Real-time payment anomaly & synthetic identity detection engines (<50ms P99 latency)',
      'Automated SEC filing, loan covenant, and KYC/AML document intelligence agents',
      'Explainable credit underwriting & default probability models with SHAP adverse-action codes',
      'Zero-data-retention private VPC deployments compliant with SOC2 and financial regulators',
    ],
    keyUseCases: [
      {
        title: 'Cross-Border Payment Fraud & Mule Ring Detection',
        outcome: '$2.7M Fraud Prevented',
        description: 'Streaming graph and gradient-boosting models scoring 4,200+ TPS while cutting false-positive holds by 52%.',
      },
      {
        title: 'Automated Commercial Credit Agreement Auditing',
        outcome: '-68% Legal Review Time',
        description: 'Multi-agent RAG verifying indemnification and covenant clauses across 1.8M+ financial document chunks.',
      },
      {
        title: 'Alternative Data SME Credit Underwriting',
        outcome: '+24% Approval Lift at Constant Default',
        description: 'Cash-flow sequence models underwriting thin-file commercial borrowers using real-time open-banking ledger feeds.',
      },
    ],
    technicalArchitecture: ['Python', 'Apache Kafka', 'LightGBM', 'LangGraph', 'Qdrant', 'Redis Enterprise', 'FastAPI', 'AWS Bedrock'],
    typicalTimeline: '6–14 Weeks to Production',
    measuredOutcome: '$1.4M–$2.7M annualized risk & compliance operational savings.',
    relatedCaseStudyIds: ['multi-agent-rag-compliance', 'realtime-fintech-fraud-risk-engine'],
  },
  {
    id: 'industry-supply-chain',
    group: 'industries',
    groupLabel: 'Industry Vertical',
    index: '06',
    shortTitle: 'Supply Chain, Trade & Logistics',
    title: 'Predictive Supply Chain, Inventory Optimization & Logistics Intelligence',
    executiveHeadline: 'Unlock millions in trapped working capital while cutting high-margin stockouts across global distribution networks.',
    businessValue:
      'Volatile supplier lead times and static ERP moving averages cost mid-market and enterprise distributors millions in dead stock and missed orders. I engineer probabilistic forecasting and automated replenishment engines that adapt dynamically to demand shifts.',
    architectureNarrative:
      'Integrates ERP ledger history, POS sell-through, promotional calendars, and port/carrier transit telemetry into Snowflake and dbt marts, feeding PyTorch Temporal Fusion Transformers and hierarchical XGBoost ensembles.',
    problemSolved:
      'Replaces error-prone manual Excel planning macros and static reorder points with probabilistic safety-stock optimization.',
    deliverables: [
      'Hierarchical SKU-warehouse quantile demand forecasting (P10 / P50 / P90 bounds)',
      'Dynamic safety-stock and reorder-point optimization accounting for vendor lead-time variance',
      'Automated bill-of-lading, customs, and freight invoice OCR reconciliation',
      'Executive supply chain control towers in Power BI / Tableau with ERP write-back',
    ],
    keyUseCases: [
      {
        title: 'Multi-Warehouse SKU Demand & Replenishment Engine',
        outcome: '$3.1M Working Capital Freed',
        description: 'Reduced 8-week forecast WAPE from 41.2% to 11.8% across 42,000 SKUs and 18 fulfillment centers.',
      },
      {
        title: 'Vendor Lead-Time & Port Delay Risk Prediction',
        outcome: '-34% Stockout Frequency',
        description: 'Predicting supplier delivery slippage 21 days in advance to trigger proactive safety-stock buffers.',
      },
      {
        title: 'Fleet Route & Freight Consolidation Optimization',
        outcome: '-14% Logistics Spend',
        description: 'Mixed-integer linear programming (MILP) models optimizing LTL/FTL load consolidation across regional lanes.',
      },
    ],
    technicalArchitecture: ['Python', 'PyTorch', 'XGBoost', 'Snowflake', 'Apache Airflow', 'dbt', 'OR-Tools', 'Power BI'],
    typicalTimeline: '6–12 Weeks to Production',
    measuredOutcome: '25–35% reduction in stockouts & millions in freed inventory capital.',
    relatedCaseStudyIds: ['global-supply-chain-demand-forecasting'],
  },
  {
    id: 'industry-healthcare-biotech',
    group: 'industries',
    groupLabel: 'Industry Vertical',
    index: '07',
    shortTitle: 'Healthcare, Life Sciences & Clinical AI',
    title: 'Clinical NLP, EHR Data Normalization & Life Sciences Intelligence',
    executiveHeadline: 'Transform unstructured physician notes, pathology PDFs, and clinical trial data into structured OMOP insights.',
    businessValue:
      'Over 80% of high-value clinical evidence resides in unstructured clinician dictation and scanned pathology reports. I build HIPAA-compliant clinical NLP pipelines and biomedical entity extractors that accelerate patient cohort matching and real-world evidence generation.',
    architectureNarrative:
      'Uses multi-pass Safe Harbor PHI de-identification, anatomical section splitting, negation/temporal assertion classification, and fine-tuned BioClinicalBERT / medical LLM extractors mapped directly to SNOMED-CT, RxNorm, and OMOP schemas.',
    problemSolved:
      'Eliminates multi-week manual nurse chart abstraction bottlenecks and unlocks dark clinical data for biostatistics teams.',
    deliverables: [
      'Fine-tuned BioBERT & clinical LLM entity extraction pipelines (biomarkers, staging, therapy lines)',
      'Automated HIPAA Safe Harbor PHI scrubbing and audit-logged clinical ingestion',
      'EHR data normalization into OMOP Common Data Model and FHIR relational schemas',
      'Clinical trial eligibility screening and real-world evidence cohort discovery consoles',
    ],
    keyUseCases: [
      {
        title: 'Oncology Pathology & EHR Trial Cohort Matching',
        outcome: '4.2x Faster Cohort Screening',
        description: 'Extracted 28 oncology biomarker and staging entities across 450,000 notes with 96.4% macro F1 accuracy.',
      },
      {
        title: 'Automated Medical Coding & Claims Denial Prevention',
        outcome: '-38% Coding Audit Backlog',
        description: 'Highlighting undocumented comorbidities and ICD-10/CPT discrepancies prior to payer claim submission.',
      },
      {
        title: 'Pharmacovigilance Adverse Event Signal Detection',
        outcome: '98.1% Recall on Serious AEs',
        description: 'Automated triage of unstructured medical call-center transcripts and post-market safety narratives.',
      },
    ],
    technicalArchitecture: ['Python', 'PyTorch', 'HuggingFace', 'BioBERT', 'SpaCy', 'Snowflake', 'AWS SageMaker', 'Docker'],
    typicalTimeline: '6–10 Weeks to Production',
    measuredOutcome: '4x faster clinical cohort screening with >96% entity extraction F1.',
    relatedCaseStudyIds: ['clinical-nlp-ehr-extraction'],
  },
  {
    id: 'industry-enterprise-saas',
    group: 'industries',
    groupLabel: 'Industry Vertical',
    index: '08',
    shortTitle: 'Enterprise SaaS, High-Tech & Industrial',
    title: 'AI-Driven Revenue Operations, Telemetry Analytics & Industrial IoT',
    executiveHeadline: 'Convert high-frequency product usage and sensor telemetry into predictive retention and zero-downtime operations.',
    businessValue:
      'Modern SaaS platforms and industrial operators generate terabytes of event logs that rarely inform commercial action. I engineer unified telemetry lakehouses, predictive churn/expansion scoring, and IoT anomaly detection engines.',
    architectureNarrative:
      'Unifies product clickstreams, billing ledgers, and high-frequency sensor waveforms into feature stores that power survival-analysis churn models and autoencoder anomaly detectors.',
    problemSolved:
      'Prevents surprise enterprise customer churn, unplanned industrial equipment downtime, and fragmented GTM reporting.',
    deliverables: [
      'Product-Led Growth (PLG) & enterprise account health scoring pushed directly to Salesforce/HubSpot',
      'Survival analysis & SHAP-explainable churn intervention pipelines for Customer Success teams',
      'Industrial IoT sensor anomaly detection & remaining-useful-life (RUL) predictive maintenance',
      'Executive ARR cohort, net dollar retention (NDR), and cloud unit-cost attribution suites',
    ],
    keyUseCases: [
      {
        title: 'Enterprise SaaS Account Health & Churn Prevention',
        outcome: '$1.9M ARR Saved Annually',
        description: 'Predicting renewal risk 90 days ahead from workspace telemetry and routing automated playbooks to CSMs.',
      },
      {
        title: 'Industrial Telemetry Predictive Maintenance Engine',
        outcome: '-47% Unplanned Equipment Downtime',
        description: 'Real-time vibration and thermal waveform anomaly detection across 1,200+ manufacturing assets.',
      },
      {
        title: 'Automated Cloud Cost & Gross Margin Attribution',
        outcome: '+6.2% SaaS Gross Margin',
        description: 'Mapping multi-tenant Kubernetes and Snowflake compute consumption to individual enterprise customer tiers.',
      },
    ],
    technicalArchitecture: ['Python', 'Snowflake', 'dbt', 'XGBoost', 'PyTorch', 'Apache Kafka', 'Power BI', 'FastAPI'],
    typicalTimeline: '4–8 Weeks to Production',
    measuredOutcome: '+12–18% lift in Net Dollar Retention & 40%+ reduction in unplanned downtime.',
    relatedCaseStudyIds: ['saas-revenue-churn-intelligence', 'industrial-iot-predictive-maintenance'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'multi-agent-rag-compliance',
    number: '01',
    title: 'Legal & Credit Agreement Audit Assistant (Hybrid RAG)',
    clientType: 'Legal-Tech & Financial Advisory Team (New York / Remote)',
    industry: 'Financial & Legal Compliance',
    industryTag: 'Financial & Legal Compliance',
    duration: '14 Weeks',
    engagementModel: 'Direct Freelance Engagement',
    headlineMetric: '4.5 hrs → 19 mins per Agreement',
    secondaryMetric: '99.2% Verified Page & Clause Citations',
    roiSummary:
      'I built a private document review system that reads 120-page credit agreements, flags risky clauses, and links every single answer back to the exact paragraph in the PDF.',
    twoSentenceSummary:
      'When I joined this project, the client had already tried a basic LangChain + OpenAI setup that kept making up clause numbers and breaking on two-column PDF tables. I rebuilt the ingestion parser from scratch, combined keyword + vector search in Qdrant, and added a strict citation-checker so analysts could trust every answer.',
    stack: ['Python', 'LangGraph', 'Qdrant', 'PostgreSQL', 'FastAPI', 'AWS Bedrock', 'Docker'],
    category: 'llm-agents',
    categoryLabel: 'LLM & Multi-Agent RAG',
    image: IMAGES.llmRag,
    problem: {
      overview:
        'Before I stepped in, the client’s analysts were spending over four hours per loan agreement hunting through 100+ page PDFs and annexed schedules to check indemnification caps, default triggers, and financial covenants. Their internal team had spun up a quick vector-search prototype, but lawyers refused to use it because it split tables in half and occasionally hallucinated section numbers.',
      painPoints: [
        'Naive 500-token chunking was slicing financial covenant tables right down the middle, making the numbers meaningless.',
        'Pure vector similarity missed exact legal terms like "Rule 144A" or specific Section cross-references.',
        'Because of strict client confidentiality, nothing could leave their AWS account or be sent to public chat APIs.',
      ],
      baselineCost:
        'Analysts were spending ~4.5 hours per contract, creating a 3-week bottleneck during quarter-end deal closings.',
    },
    solution: {
      architectureOverview:
        'I learned quickly that 80% of RAG quality comes down to how you parse the raw files, not the prompt. I threw out the standard PDF splitter and wrote a layout-aware parser that keeps tables intact as Markdown and links every child paragraph to its parent section header. Then I wired up a 3-step LangGraph workflow running entirely inside their AWS VPC via Bedrock.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Fixing the PDF & Table Mess First',
          detail:
            'I built a custom document parser that detects multi-column layouts and reconstructs financial tables into clean Markdown before indexing. Every chunk stores its exact page number, section title, and character offsets in PostgreSQL.',
        },
        {
          stepNumber: '02',
          title: 'Combining Keyword (BM25) + Vector Search in Qdrant',
          detail:
            'Lawyers search for exact clause numbers as often as concepts. I set up hybrid search in Qdrant (dense BGE embeddings + sparse BM25 tokens) followed by a cross-encoder reranker. That alone jumped our top-3 retrieval hit rate from 74% to over 98%.',
        },
        {
          stepNumber: '03',
          title: 'Adding a "No-Citation, No-Answer" Guardrail',
          detail:
            'To earn the legal team’s trust, I wrote a verification step in LangGraph that checks every generated sentence against the raw source text. If the model cannot point to the exact character span in the PDF, it flags the clause for human review instead of guessing.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '19 mins', label: 'Average contract review time (down from 4.5 hours)', timeframe: 'Measured across 400+ live deals' },
        { value: '99.2%', label: 'Exact page & clause citation accuracy', timeframe: 'Audited by internal legal team' },
        { value: '<2.0s', label: 'Average response time across 1.8M indexed passages', timeframe: 'Running inside private AWS VPC' },
        { value: '0', label: 'Hallucinated citations reaching final reports', timeframe: 'Blocked by offset verifier' },
      ],
      executiveQuote: {
        quote:
          'Two agencies before Pijush gave us flashy demos that fell apart the moment we uploaded a real 150-page credit agreement with scanned schedules. Pijush actually sat with our analysts, fixed the PDF table parsing from the ground up, and gave us a tool our legal team uses every day.',
        author: 'Marcus Vance',
        role: 'VP of Data & Risk Engineering',
        organization: 'Meridian Capital Advisory',
      },
    },
  },
  {
    id: 'global-supply-chain-demand-forecasting',
    number: '02',
    title: 'Multi-Warehouse SKU Demand Forecasting & Reorder System',
    clientType: 'Omnichannel Distribution Network (18 Warehouses)',
    industry: 'Supply Chain & Logistics',
    industryTag: 'Supply Chain & Logistics',
    duration: '12 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '$3.1M Freed from Excess Stock',
    secondaryMetric: '34% Fewer Stockouts on Top-Selling Items',
    roiSummary:
      'I replaced a fragile 40-tab Excel & ERP moving-average workflow with an automated Snowflake + Python forecasting pipeline that tells buyers what to order every Monday morning.',
    twoSentenceSummary:
      'The client’s purchasing team was drowning in spreadsheets trying to forecast 42,000 SKUs across 18 warehouses using simple 60-day averages. I built an automated Airflow + dbt data pipeline and a two-model forecasting engine (XGBoost + PyTorch) that factors in promotions, supplier delays, and seasonality.',
    stack: ['Python', 'PyTorch', 'XGBoost', 'Apache Airflow', 'Snowflake', 'dbt', 'Power BI'],
    category: 'predictive-ml',
    categoryLabel: 'Predictive ML & Forecasting',
    image: IMAGES.supplyChain,
    problem: {
      overview:
        'When I first audited their setup, four supply-chain planners were spending almost every Monday and Tuesday exporting CSVs from their ERP into massive Excel workbooks. Because their old formula only looked at the last 60 days of sales, a single holiday spike or a 3-week shipping delay from Asia would cause them to over-order slow items while running out of their bestsellers.',
      painPoints: [
        'Over $11M was sitting in warehouse shelves as slow-moving stock that hadn’t turned over in 6 months.',
        'Planners didn’t trust a single "magic number" forecast—they needed to see best-case and worst-case ranges based on supplier lead times.',
        'Promotional discounts were tracked in a separate marketing Google Sheet that never made it into the ERP forecast.',
      ],
      baselineCost:
        '38 hours of manual spreadsheet work every week plus millions tied up in the wrong inventory.',
    },
    solution: {
      architectureOverview:
        'Instead of throwing one giant deep-learning model at everything, I split their catalog by how the items actually behaved. Fast-moving seasonal products got a PyTorch Temporal Fusion Transformer, while lumpy, slow-moving spare parts were handled by a tuned XGBoost model. Everything runs automatically in Snowflake and Airflow over the weekend.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Cleaning Up 5 Years of ERP & Promo History in dbt',
          detail:
            'First, I pulled their raw ERP sales, purchase orders, and marketing promo calendars into Snowflake. Using dbt, I wrote clean transformations to impute historical stockout periods—because if an item had 0 sales while it was out of stock, a naive model thinks demand was zero.',
        },
        {
          stepNumber: '02',
          title: 'Forecasting Confidence Ranges (P10 / P50 / P90)',
          detail:
            'Rather than giving buyers a single point guess, I trained the models to output 10th, 50th, and 90th percentile demand curves over an 8-to-12 week horizon, dynamically adjusting safety stock whenever a vendor’s recent shipping times started slipping.',
        },
        {
          stepNumber: '03',
          title: 'Pushing Ready-to-Approve Orders into Power BI & ERP',
          detail:
            'I built a clean Power BI view for the purchasing team that highlights exceptions and generates a ready-to-import purchase order table every Monday at 6:00 AM—turning a two-day Excel marathon into a 30-minute review.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '$3.1M', label: 'Working capital freed up from dead stock', timeframe: 'Within 6 months of go-live' },
        { value: '-34%', label: 'Drop in stockouts on high-margin SKUs', timeframe: 'Across all 18 fulfillment centers' },
        { value: '11.8%', label: '8-week forecast error (down from 41.2% WAPE)', timeframe: 'Verified on live weekly orders' },
        { value: '38 hrs/wk', label: 'Manual Excel & CSV crunching eliminated', timeframe: 'Automated via weekend Airflow DAGs' },
      ],
      executiveQuote: {
        quote:
          'What impressed me most was that Pijush didn’t just hand us a Python script. He noticed our historical data was skewed by past stockouts, fixed the underlying SQL logic, and built a dashboard our buyers actually love using on Monday mornings.',
        author: 'Hendrik Lindqvist',
        role: 'Chief Supply Chain Officer',
        organization: 'NordicVantage Logistics Group',
      },
    },
  },
  {
    id: 'realtime-fintech-fraud-risk-engine',
    number: '03',
    title: 'Real-Time B2B Payment Fraud & Velocity Scoring API',
    clientType: 'Cross-Border B2B Payments Platform',
    industry: 'FinTech & Quantitative Risk',
    industryTag: 'FinTech & Quantitative Risk',
    duration: '16 Weeks',
    engagementModel: 'Direct Technical Consulting',
    headlineMetric: '38ms P99 Scoring Latency',
    secondaryMetric: '52% Fewer Legitimate Merchants Blocked',
    roiSummary:
      'I replaced 140+ brittle SQL fraud rules with a real-time Kafka + LightGBM scoring service that catches payment anomalies in under 40 milliseconds.',
    twoSentenceSummary:
      'As the client’s payment volume grew, their old rule engine was freezing 8.4% of legitimate corporate payouts for manual compliance review while still missing coordinated mule accounts. I engineered a streaming feature pipeline with Kafka and Redis and deployed an ONNX-optimized LightGBM model with plain-English SHAP explanations.',
    stack: ['Python', 'Apache Kafka', 'LightGBM', 'Redis Enterprise', 'ONNX', 'FastAPI', 'Kubernetes', 'PostgreSQL'],
    category: 'data-engineering',
    categoryLabel: 'Data Engineering & Streaming',
    image: IMAGES.finFraud,
    problem: {
      overview:
        'Over three years, the client’s risk team had accumulated more than 140 hardcoded SQL `IF/ELSE` rules to block suspicious cross-border wire transfers. The rules conflicted with each other, ran in slow 6-hour batches, and flagged nearly 1 in 12 legitimate business customers—causing angry calls to support and delayed payroll settlements.',
      painPoints: [
        '8.4% of all legitimate B2B transactions were getting stuck in manual review queues for up to 24 hours.',
        'The checkout and payout API had a strict 50-millisecond budget for fraud checks, ruling out heavy unoptimized models.',
        'Compliance officers couldn’t accept a "black box" score—they needed to see the exact top 3 reasons why a transfer was flagged.',
      ],
      baselineCost:
        'High compliance review headcount, frustrated enterprise customers, and $2M+ in annual fraud slip-through.',
    },
    solution: {
      architectureOverview:
        'To hit the 50ms latency SLA, I couldn’t query PostgreSQL at transaction time. I built a Kafka streaming consumer that keeps rolling 1-minute, 1-hour, and 30-day velocity counters warm in Redis. When a payment hits the FastAPI endpoint, it grabs the Redis features in 4ms, runs a quantized LightGBM model via ONNX Runtime, and returns both the risk score and top reason codes.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Sub-10ms Sliding-Window Features with Kafka & Redis',
          detail:
            'I wrote Python/Kafka streaming workers that track 65+ live behavioral signals per merchant—like sudden beneficiary country changes, IP subnet overlaps, and invoice-size spikes—stored in Redis with automatic TTL expiry.',
        },
        {
          stepNumber: '02',
          title: 'Catching Shared Devices & Mule Rings with Graph Features',
          detail:
            'Fraudsters often open multiple shell accounts sharing the same browser fingerprint or bank routing paths. I added a lightweight graph-feature job that flags hidden links between seemingly unrelated corporate accounts.',
        },
        {
          stepNumber: '03',
          title: 'Compiling to ONNX & Surfacing Human-Readable Reasons',
          detail:
            'I exported the trained LightGBM model to ONNX and wrapped it in a FastAPI microservice on Kubernetes. Every flagged transaction arrives in the compliance dashboard with clear reason tags (e.g., "Transfer 4.8x above 30-day merchant average + new beneficiary IBAN").',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '38ms', label: 'P99 end-to-end API response time under load', timeframe: 'Tested up to 4,200 requests/sec' },
        { value: '-52%', label: 'Drop in false-positive holds on good merchants', timeframe: 'Measured in first 60 days' },
        { value: '94.6%', label: 'Fraud detection recall on out-of-time test & live traffic', timeframe: 'At <0.3% false-positive rate' },
        { value: '$2.7M', label: 'Estimated annual fraud losses prevented', timeframe: 'First year in production' },
      ],
      executiveQuote: {
        quote:
          'Most data scientists hand you a Jupyter Notebook and expect the backend team to figure out how to make it fast. Pijush wrote the Kafka consumers, set up the Redis feature lookups, quantized the model to run in 38ms, and stayed on call with us through launch.',
        author: 'Elena Rostova',
        role: 'Head of Engineering',
        organization: 'PayBridge Global Technologies',
      },
    },
  },
  {
    id: 'clinical-nlp-ehr-extraction',
    number: '04',
    title: 'Clinical NLP Pipeline for Unstructured Pathology & EHR Notes',
    clientType: 'Clinical Research & Healthcare Analytics Team',
    industry: 'Healthcare & Life Sciences',
    industryTag: 'Healthcare & Life Sciences',
    duration: '10 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '6 Weeks → 9 Days Cohort Screening',
    secondaryMetric: '96.4% F1 Accuracy on Biomarker Extraction',
    roiSummary:
      'I built a HIPAA-compliant NLP pipeline that reads messy, dictated physician notes and pathology reports to structure oncology biomarkers into clean SQL tables.',
    twoSentenceSummary:
      'Drawing directly on my healthcare NLP experience from my time at Blackcoffer, I helped a clinical research team unlock 450,000 unstructured oncology notes. I combined rule-based negation detection with a fine-tuned BioClinicalBERT model so researchers could query patient eligibility in minutes instead of reading charts by hand.',
    stack: ['Python', 'PyTorch', 'HuggingFace', 'BioBERT', 'SpaCy', 'Snowflake', 'Docker', 'AWS SageMaker'],
    category: 'llm-agents',
    categoryLabel: 'LLM & Multi-Agent RAG',
    image: IMAGES.heroArchitecture,
    problem: {
      overview:
        'In oncology clinical trials, the most important patient details—like whether a tumor is EGFR-positive, the patient’s ECOG score, or why they stopped a previous chemotherapy—aren’t in neat database columns. They are buried inside dictated doctor notes full of typos, shorthand, and phrases like "ruled out EGFR mutation." Nurses were spending 6+ weeks manually reading PDFs just to find eligible patients for a single study.',
      painPoints: [
        'Standard keyword search kept matching patients whose notes said "negative for ALK rearrangement" or "family history of breast cancer."',
        'Strict HIPAA rules meant every note had to be scrubbed of patient names, dates, and hospital IDs before processing.',
        'Running massive commercial LLMs on 450,000 archival notes would have blown their compute budget.',
      ],
      baselineCost:
        '6 weeks of manual chart review per trial cohort and high contractor costs for clinical abstraction.',
    },
    solution: {
      architectureOverview:
        'Instead of using an expensive general-purpose LLM for everything, I designed a fast, cost-effective pipeline on AWS SageMaker. First, a clinical section-splitter isolates the actual pathology findings from family history. Then, a fine-tuned BioClinicalBERT model extracts the 28 target biomarkers and staging variables, paired with a negation/assertion classifier so we never confuse "ruled out" with "confirmed."',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'HIPAA Safe-Harbor Scrubbing & Note Section Splitting',
          detail:
            'I built a preprocessing stage using SpaCy and custom clinical regexes to strip PHI (names, MRNs, dates) and split long notes into distinct clinical sections (Diagnosis, Pathology, Medications, Family History).',
        },
        {
          stepNumber: '02',
          title: 'Fine-Tuning BioClinicalBERT with Negation Awareness',
          detail:
            'Working with 2,500 gold-standard notes labeled by their lead clinicians, I fine-tuned a PyTorch/HuggingFace token & assertion classifier that distinguishes "present", "negated", "historical", and "family" mentions at 96.4% F1.',
        },
        {
          stepNumber: '03',
          title: 'Mapping Outputs to Clean Snowflake SQL Tables',
          detail:
            'All extracted biomarkers, TNM stages, and therapy timelines are normalized into standard SNOMED-CT / RxNorm codes in Snowflake, letting biostatisticians filter cohorts with a simple SQL query.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '9 Days', label: 'Time to screen a trial cohort (down from 6 weeks)', timeframe: '4.2x faster turnaround' },
        { value: '96.4%', label: 'Macro F1 score validated against physician review', timeframe: 'Across 28 oncology entities' },
        { value: '450k+', label: 'Legacy clinical notes processed in batch', timeframe: 'Total AWS GPU cost under $140' },
        { value: '100%', label: 'HIPAA de-identification audit pass rate', timeframe: 'Zero privacy exceptions' },
      ],
      executiveQuote: {
        quote:
          'Pijush understood clinical text nuances right away—especially how tricky negation and physician shorthand can be. He turned 450,000 unsearchable text files into a clean Snowflake database our researchers query every single day.',
        author: 'Dr. Aravind Krishnan',
        role: 'Director of Clinical Data Science',
        organization: 'Oncoigens Research Partners',
      },
    },
  },
  {
    id: 'saas-revenue-churn-intelligence',
    number: '05',
    title: 'B2B SaaS Product Telemetry Lakehouse & 90-Day Churn Radar',
    clientType: 'Series B Cloud SaaS Platform ($65M ARR)',
    industry: 'Enterprise SaaS & Revenue Ops',
    industryTag: 'Enterprise SaaS & Revenue Ops',
    duration: '8 Weeks',
    engagementModel: 'Direct B2B Retainer',
    headlineMetric: '$1.95M At-Risk ARR Saved',
    secondaryMetric: '25 hrs/wk RevOps Spreadsheet Work Cut',
    roiSummary:
      'I connected raw product usage logs in S3 with Stripe billing and Salesforce CRM so Customer Success managers get alerted 90 days before an enterprise account churns.',
    twoSentenceSummary:
      'The client’s Customer Success team kept getting blindsided at renewal time because they couldn’t see when a customer’s engineering team stopped logging into the product. In 8 weeks, I built a clean dbt + Snowflake data warehouse, trained an XGBoost churn model, and pushed daily account health scores straight into Salesforce.',
    stack: ['Python', 'XGBoost', 'Snowflake', 'dbt', 'Apache Airflow', 'Power BI', 'Salesforce API'],
    category: 'bi-automation',
    categoryLabel: 'Decision BI & Automation',
    image: IMAGES.heroArchitecture,
    problem: {
      overview:
        'The company had plenty of data, but it was sitting in three different silos: raw clickstream JSON logs in AWS S3, subscription invoices in Stripe, and account notes in Salesforce. Account managers only found out a $100k+ customer was unhappy when the client refused to renew 30 days before the contract ended—by which point usage had already been dead for months.',
      painPoints: [
        'Product usage logs were messy nested JSON files in S3 that no one outside backend engineering could query.',
        'RevOps spent every Monday morning stitching Stripe and Salesforce exports together in Google Sheets for the leadership meeting.',
        'Account managers didn’t want another separate dashboard to log into—they wanted alerts inside Salesforce where they already worked.',
      ],
      baselineCost:
        'Over $4M in preventable annual churn and 25+ hours a week wasted on manual RevOps reporting.',
    },
    solution: {
      architectureOverview:
        'I started by building a rock-solid data foundation in Snowflake using Airflow and dbt, matching workspace IDs from the product logs to corporate accounts in Salesforce. Once the data was clean, I trained an XGBoost churn propensity model and wrote a lightweight Python sync script that pushes both the health score and the specific usage drop reasons directly onto the Salesforce Account page.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Unifying S3 Event Logs, Stripe & Salesforce in dbt',
          detail:
            'I built modular dbt models in Snowflake that roll up 180M+ monthly product events into clean account-level metrics: active seats vs. licensed seats, core feature stickiness, API error rates, and support ticket volume.',
        },
        {
          stepNumber: '02',
          title: 'Predicting Churn 90 Days Out with Clear Explanations',
          detail:
            'A score of "78% churn risk" isn’t helpful unless the CSM knows what to do. I used SHAP values alongside XGBoost so every flagged account shows the exact driver (e.g., "Active admin logins dropped 64% over the last 21 days").',
        },
        {
          stepNumber: '03',
          title: 'Pushing Alerts to Salesforce & Building the Exec Power BI',
          detail:
            'I wired an automated daily job that updates custom fields in Salesforce and triggers a Slack alert for the account owner, plus an executive Power BI suite tracking Net Dollar Retention (NDR) and cohort payback automatically.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '$1.95M', label: 'At-risk ARR saved through early CSM outreach', timeframe: 'First 2 quarters after launch' },
        { value: '89.4%', label: 'Precision on 90-day renewal risk alerts', timeframe: 'Across 1,400+ B2B accounts' },
        { value: '25 hrs/wk', label: 'Manual Monday RevOps spreadsheet work eliminated', timeframe: 'Replaced by dbt + Power BI' },
        { value: '+14%', label: 'Lift in Net Dollar Retention (NDR)', timeframe: 'Year-over-year cohort comparison' },
      ],
      executiveQuote: {
        quote:
          'We went from getting surprised by cancellations 2 weeks before renewal to having a 90-day early warning system right inside Salesforce. Pijush cleaned up our messy S3 logs and delivered the whole pipeline in under two months.',
        author: 'Claire Sterling',
        role: 'Chief Revenue Officer',
        organization: 'CloudScale Systems Inc.',
      },
    },
  },
  {
    id: 'industrial-iot-predictive-maintenance',
    number: '06',
    title: 'Plant-Floor IoT Sensor Streaming & Bearing Failure Predictor',
    clientType: 'Precision Manufacturing & Heavy Equipment Operator',
    industry: 'Industrial & Energy Analytics',
    industryTag: 'Industrial & Energy Analytics',
    duration: '12 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '47% Less Unplanned Line Downtime',
    secondaryMetric: '14–18 Days Advance Warning on Failures',
    roiSummary:
      'I built a real-time vibration and temperature anomaly detector across 1,200+ factory machines that warns maintenance crews two weeks before a spindle or bearing fails.',
    twoSentenceSummary:
      'The client’s factories were losing $45,000 an hour whenever a high-speed CNC spindle or compressor failed mid-shift, even though their machines were streaming 50Hz sensor data that nobody was analyzing. I built a Kafka + TimescaleDB pipeline and a PyTorch autoencoder model that spots subtle vibration shifts weeks before a breakdown.',
    stack: ['Python', 'PyTorch', 'Apache Kafka', 'TimescaleDB', 'FastAPI', 'Docker', 'Streamlit'],
    category: 'predictive-ml',
    categoryLabel: 'Predictive ML & Forecasting',
    image: IMAGES.supplyChain,
    problem: {
      overview:
        'Across six manufacturing plants, the client had vibration, acoustic, and temperature sensors attached to over 1,200 critical machines. However, the local SCADA system only rang an alarm when vibration crossed a hard emergency limit—by which time the bearing was already seized and the production line had to shut down for up to 36 hours waiting for spare parts.',
      painPoints: [
        'Raw 50Hz sensor logs were being overwritten every 3 days on local plant servers without ever being stored for analysis.',
        'True breakdown events were rare and varied by machine type, so simple supervised classification failed.',
        'Plant maintenance engineers needed a dead-simple visual screen showing which specific machine needed inspection and why.',
      ],
      baselineCost:
        '$3.9M a year in halted production lines, scrapped batches, and rushed air-freight spare parts.',
    },
    solution: {
      architectureOverview:
        'Because actual machine breakdowns are rare in historical data, I framed this as an unsupervised anomaly and degradation problem. First, I piped the raw sensor streams via MQTT and Kafka into TimescaleDB and extracted rolling Fast Fourier Transform (FFT) frequency features. Then I trained a PyTorch LSTM-Autoencoder on healthy operating cycles so it immediately spots when a machine’s vibration signature starts drifting.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Turning Noisy 50Hz Waveforms into Clean Spectral Features',
          detail:
            'Raw vibration numbers jump around constantly. I wrote a Python signal-processing worker that computes 60-second rolling FFT harmonic energy bands and thermal ratios, compressing terabytes of raw noise into clean time-series tables in TimescaleDB.',
        },
        {
          stepNumber: '02',
          title: 'Training a PyTorch Autoencoder on Healthy Machine Cycles',
          detail:
            'I trained an LSTM-Autoencoder to reconstruct normal vibration patterns for each asset class, paired with a survival-curve head that estimates Remaining Useful Life (RUL) and suppresses one-off sensor glitches.',
        },
        {
          stepNumber: '03',
          title: 'Building the Plant-Floor Streamlit Console & SAP Ticket Hook',
          detail:
            'I deployed a Dockerized FastAPI + Streamlit reliability console for shift engineers. When a machine’s degradation score stays elevated for 4 consecutive hours, it automatically drafts a preventive maintenance work order in SAP.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '-47%', label: 'Drop in unplanned mid-shift line stoppages', timeframe: 'Across 1,200+ monitored machines' },
        { value: '18 Days', label: 'Median early warning before bearing/spindle failure', timeframe: 'Validated on plant floor' },
        { value: '$2.2M', label: 'Annual savings in prevented downtime & scrap', timeframe: 'Audited plant operations' },
        { value: '60s', label: 'Sensor-to-dashboard update interval', timeframe: 'Running 24/7 in Docker' },
      ],
      executiveQuote: {
        quote:
          'Our plant engineers are skeptical of software buzzwords, but Pijush won them over in week three when his model flagged a worn spindle bearing 16 days before it would have wrecked a production run. It feels like a tool built by a real engineer.',
        author: 'Dietrich Weber',
        role: 'VP of Global Manufacturing Operations',
        organization: 'KronoTech Industrial AG',
      },
    },
  },
];

export const WHY_SELECT_COMPARISON = [
  {
    dimension: 'Principal Engineering Ownership',
    bigConsultancy: 'Sold by senior partners; handed off to junior associates learning on your billing clock.',
    genericFreelancer: 'Executes isolated tickets in Jupyter Notebooks; struggles with production Docker/cloud deployment.',
    independentConsultant: 'Direct 1-on-1 execution from a B.Tech CSE engineer & former Blackcoffer Data Scientist from architecture to production API.',
  },
  {
    dimension: 'Business & Commercial Alignment',
    bigConsultancy: 'Heavy slide-deck discovery phases lasting 3 months before a single line of production code is written.',
    genericFreelancer: 'Optimizes academic F1-scores without understanding unit economics, P&L impact, or latency constraints.',
    independentConsultant: 'Every model and pipeline is tied to a concrete financial KPI: working capital freed, hours saved, or margin protected.',
  },
  {
    dimension: 'Time-to-Value & Overhead',
    bigConsultancy: '$50k–$150k+ minimums with layers of project managers and slow change-request bureaucracy.',
    genericFreelancer: 'High management overhead; requires your internal senior engineers to rewrite code for production.',
    independentConsultant: 'Working production prototype in 14 days; clean, documented, Dockerized repositories ready for your team to own.',
  },
  {
    dimension: 'IP Security & Code Handover',
    bigConsultancy: 'Locks you into proprietary black-box accelerators and recurring licensing fees.',
    genericFreelancer: 'Fragile scripts with hardcoded credentials and zero unit test coverage.',
    independentConsultant: '100% client IP ownership, strict NDA/VPC compliance, CI/CD pipelines, and comprehensive runbook handover.',
  },
];
