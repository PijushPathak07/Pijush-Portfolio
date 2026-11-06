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
  heroArchitecture: '/src/assets/images/hero_data_architecture_1793980204682.jpg',
  supplyChain: '/src/assets/images/case_study_supply_chain_1793980204420.jpg',
  llmRag: '/src/assets/images/case_study_llm_rag_1793980206838.jpg',
  finFraud: '/src/assets/images/case_study_fin_fraud_1793980207367.jpg',
  portrait: '/src/assets/images/consultant_portrait_1793980207624.jpg',
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
    title: 'Multi-Agent RAG Compliance & Contract Intelligence Engine',
    clientType: 'Series C LegalTech & Financial Advisory Firm (New York / Remote)',
    industry: 'Financial & Legal Compliance',
    industryTag: 'Financial & Legal Compliance',
    duration: '14 Weeks',
    engagementModel: 'Direct Enterprise Retainer',
    headlineMetric: '-68% Contract Audit Cycle Time',
    secondaryMetric: '$1.42M Annual Analyst Bandwidth Saved',
    roiSummary: 'Reduced manual regulatory review from 4.5 hours per agreement to 19 minutes with 99.2% citation grounding accuracy.',
    twoSentenceSummary:
      'Architected a deterministic multi-agent Retrieval-Augmented Generation (RAG) system over 1.8 million SEC filings and commercial credit agreements. Eliminated hallucinated legal citations through hybrid dense-sparse vector indexing and cross-encoder re-ranking.',
    stack: ['Python', 'LangGraph', 'Qdrant', 'PostgreSQL', 'FastAPI', 'AWS Bedrock', 'Docker'],
    category: 'llm-agents',
    categoryLabel: 'LLM & Multi-Agent RAG',
    image: IMAGES.llmRag,
    problem: {
      overview:
        'The client’s compliance operations team manually audited over 12,000 institutional loan covenants and regulatory disclosures per quarter. Keyword search across fragmented PDF repositories missed nuanced cross-clause indemnification risks, while off-the-shelf LLM wrappers produced unverifiable citations that failed internal legal audit standards.',
      painPoints: [
        '4.5 hours average manual review time per complex multi-party credit agreement.',
        '23% false-positive rate in legacy regex and keyword-based compliance flagging pipelines.',
        'Strict SOC2 and zero-data-retention requirements prohibited public consumer LLM APIs.',
      ],
      baselineCost: '$2.1M annual expenditure on external contract review contractors and delayed deal closings.',
    },
    solution: {
      architectureOverview:
        'Designed and deployed a private, VPC-isolated multi-agent orchestration pipeline using LangGraph and FastAPI. Unstructured PDFs and scanned exhibits were parsed via layout-aware OCR into hierarchical parent-child document chunks, indexed in Qdrant with both dense BGE-Large embeddings and BM25 sparse vectors.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Hierarchical Document Parsing & Table Reconstruction',
          detail:
            'Built an ingestion pipeline converting complex financial tables and multi-column legal schedules into structured Markdown AST nodes, preserving clause hierarchy and section cross-references.',
        },
        {
          stepNumber: '02',
          title: 'Hybrid Dense-Sparse Retrieval with Cross-Encoder Reranking',
          detail:
            'Combined semantic vector search with exact legal statute token matching, followed by a Cohere Rerank v3 stage that boosted top-3 recall accuracy from 74% to 98.6%.',
        },
        {
          stepNumber: '03',
          title: 'Deterministic Citation Verification Agent',
          detail:
            'Implemented a secondary verification node that validates every generated claim against exact character offsets in the source document before surfacing the risk brief to compliance analysts.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '-68%', label: 'Reduction in end-to-end contract audit time', timeframe: 'Measured 90 days post-deployment' },
        { value: '99.2%', label: 'Verified clause-level citation accuracy', timeframe: 'Across 15,000+ production queries' },
        { value: '$1.42M', label: 'Net annual operational cost savings', timeframe: 'First 12 months annualized' },
        { value: '1.8s', label: 'P95 retrieval and synthesis latency', timeframe: 'Across 1.8M indexed document chunks' },
      ],
      executiveQuote: {
        quote:
          'Before bringing Pijush on board, two separate vendor agencies failed to get our RAG accuracy above 78%. Within 14 weeks, he re-architected our entire document ingestion and multi-agent verification layer, cutting audit turnaround from days to minutes with zero compliance incidents.',
        author: 'Marcus Vance',
        role: 'VP of Data & Risk Engineering',
        organization: 'Meridian Capital Advisory',
      },
    },
  },
  {
    id: 'global-supply-chain-demand-forecasting',
    number: '02',
    title: 'Probabilistic Demand Forecasting & Inventory Optimization Pipeline',
    clientType: 'Mid-Market Omnichannel Distribution Network (EU & North America)',
    industry: 'Supply Chain & Logistics',
    industryTag: 'Supply Chain & Logistics',
    duration: '12 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '$3.1M Working Capital Freed',
    secondaryMetric: '-34% Stockout Frequency Across 42,000 SKUs',
    roiSummary: 'Replaced brittle ERP moving-average spreadsheets with hierarchical Temporal Fusion Transformers and automated safety-stock replenishment.',
    twoSentenceSummary:
      'Engineered an automated end-to-end forecasting engine ingesting POS transactions, port congestion telemetry, and supplier lead-time variance across 18 regional warehouses. Improved 12-week SKU-level forecast WAPE by 29.4 percentage points.',
    stack: ['Python', 'PyTorch', 'XGBoost', 'Apache Airflow', 'Snowflake', 'dbt', 'Power BI'],
    category: 'predictive-ml',
    categoryLabel: 'Predictive ML & Forecasting',
    image: IMAGES.supplyChain,
    problem: {
      overview:
        'Operating 42,000 active SKUs across 18 fulfillment centers, the client relied on static 60-day moving averages inside a legacy ERP. Seasonal demand spikes and volatile ocean freight lead times triggered simultaneous dead-stock accumulation in slow-moving categories and costly stockouts in high-margin lines.',
      painPoints: [
        '$11.4M tied up in excess safety stock with >180 days inventory turnover.',
        '41.2% Weighted Absolute Percentage Error (WAPE) on 8-week horizon forecasts.',
        'Weekly inventory planning required 38 hours of manual SQL exports and Excel macros.',
      ],
      baselineCost: '$4.8M annual revenue leakage from unfulfilled backorders and warehouse holding penalties.',
    },
    solution: {
      architectureOverview:
        'Constructed a unified lakehouse pipeline in Snowflake orchestrated via Apache Airflow and dbt, feeding a hybrid ensemble of XGBoost (for intermittent tail SKUs) and PyTorch Temporal Fusion Transformers (for high-velocity seasonal categories) producing P10/P50/P90 quantile predictions.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Automated Feature Store & Exogenous Signal Ingestion',
          detail:
            'Unified 5 years of historical ERP ledger data with promotional calendars, regional weather indices, and vendor lead-time distributions inside dbt-modeled Snowflake marts.',
        },
        {
          stepNumber: '02',
          title: 'Hierarchical Quantile Forecasting Ensemble',
          detail:
            'Trained probabilistic models outputting P10, P50, and P90 demand bounds, reconciling SKU-warehouse forecasts with macro regional totals to prevent error amplification.',
        },
        {
          stepNumber: '03',
          title: 'Automated ERP Purchase Order Recommendations',
          detail:
            'Exposed daily reorder quantities and dynamic safety-stock thresholds directly into the procurement team’s Power BI and ERP execution workflow with automated drift monitoring.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '$3.1M', label: 'Working capital unlocked from excess inventory', timeframe: 'Within 2 quarters of launch' },
        { value: '-34%', label: 'Reduction in high-velocity SKU stockouts', timeframe: 'Verified across 18 warehouses' },
        { value: '11.8%', label: '8-week forecast WAPE (down from 41.2%)', timeframe: 'Production backtest & live run' },
        { value: '100%', label: 'Elimination of manual weekly Excel batching', timeframe: 'Fully automated Airflow DAGs' },
      ],
      executiveQuote: {
        quote:
          'Pijush operates with the rigor of a principal architect and the speed of a dedicated founder. His probabilistic forecasting pipeline paid for our entire engagement within the first seven weeks of live procurement runs.',
        author: 'Hendrik Lindqvist',
        role: 'Chief Supply Chain Officer',
        organization: 'NordicVantage Logistics Group',
      },
    },
  },
  {
    id: 'realtime-fintech-fraud-risk-engine',
    number: '03',
    title: 'Sub-50ms Real-Time Payment Anomaly & Synthetic Identity Engine',
    clientType: 'High-Growth Cross-Border B2B Payments Platform',
    industry: 'FinTech & Quantitative Risk',
    industryTag: 'FinTech & Quantitative Risk',
    duration: '16 Weeks',
    engagementModel: 'Direct Technical Advisory & Implementation',
    headlineMetric: '94.6% Fraud Recall at <0.3% False Positives',
    secondaryMetric: '38ms P99 Streaming Inference Latency',
    roiSummary: 'Intercepted $2.7M in annualized synthetic account takeovers while reducing legitimate merchant payment friction by 52%.',
    twoSentenceSummary:
      'Built a real-time streaming feature pipeline and graph-augmented gradient boosting risk scorer handling 4,200 transactions per second. Replaced static rule engines that were blocking legitimate B2B cross-border wire settlements.',
    stack: ['Python', 'Apache Kafka', 'LightGBM', 'Redis Enterprise', 'TensorFlow', 'Kubernetes', 'PostgreSQL'],
    category: 'data-engineering',
    categoryLabel: 'Data Engineering & Streaming',
    image: IMAGES.finFraud,
    problem: {
      overview:
        'As cross-border payment volume scaled past $1.8B annually, the client’s 140+ hardcoded SQL velocity rules flagged 8.4% of all legitimate corporate settlements for manual compliance hold, frustrating enterprise customers while failing to catch coordinated synthetic identity rings.',
      painPoints: [
        '8.4% false-positive manual review rate causing 24-hour settlement delays for prime merchants.',
        'Batch fraud scoring ran every 6 hours—too late to halt instant settlement rails.',
        'Zero graph visibility into shared device fingerprints, beneficial owner overlaps, and IP subnets.',
      ],
      baselineCost: '$3.3M combined annual chargeback losses and merchant churn from frozen accounts.',
    },
    solution: {
      architectureOverview:
        'Architected an event-driven streaming pipeline using Apache Kafka and Redis Enterprise for sub-10ms sliding-window velocity features, paired with an ONNX-compiled LightGBM + Graph Embedding inference microservice deployed on Kubernetes.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Real-Time Streaming Feature Aggregation',
          detail:
            'Engineered Kafka consumers computing 65+ real-time behavioral ratios (1-minute, 1-hour, and 30-day transaction velocity deltas) stored in low-latency Redis feature tables.',
        },
        {
          stepNumber: '02',
          title: 'Heterogeneous Graph Entity Resolution',
          detail:
            'Extracted bipartite graph embeddings linking corporate tax IDs, device telemetry, and beneficiary IBANs to expose multi-hop synthetic mule networks.',
        },
        {
          stepNumber: '03',
          title: 'ONNX Runtime Deployment & SHAP Reason Codes',
          detail:
            'Deployed quantized models serving predictions in 38ms P99, returning human-readable SHAP top-3 risk factors directly to the fraud analyst console.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '38ms', label: 'P99 end-to-end scoring latency at 4,200 TPS', timeframe: 'Live production telemetry' },
        { value: '-52%', label: 'Reduction in false-positive merchant holds', timeframe: 'First 60 days in production' },
        { value: '$2.7M', label: 'Annualized fraud losses prevented', timeframe: 'Audited risk ledger impact' },
        { value: '99.98%', label: 'Streaming pipeline uptime SLA', timeframe: 'Zero dropped settlement events' },
      ],
      executiveQuote: {
        quote:
          'Most data scientists hand you a Jupyter Notebook and wish you luck. Pijush built the Kafka streaming consumers, the Redis feature store, the ONNX inference service, and the monitoring alerts—production-grade from day one.',
        author: 'Elena Rostova',
        role: 'Head of Engineering',
        organization: 'PayBridge Global Technologies',
      },
    },
  },
  {
    id: 'clinical-nlp-ehr-extraction',
    number: '04',
    title: 'Clinical NLP Pipeline for Unstructured EHR & Oncology Trial Matching',
    clientType: 'Healthcare Analytics & Clinical Research Organization',
    industry: 'Healthcare & Life Sciences',
    industryTag: 'Healthcare & Life Sciences',
    duration: '10 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '4.2x Faster Patient Cohort Identification',
    secondaryMetric: '96.4% F1-Score on Biomarker Entity Extraction',
    roiSummary: 'Automated extraction of staging, biomarker mutations, and prior therapy timelines from 450,000 unstructured physician pathology notes.',
    twoSentenceSummary:
      'Fine-tuned domain-specific BioBERT and clinical LLM extractors to transform free-text oncology pathology reports into OMOP-standardized relational tables. Cut clinical trial cohort screening time from 6 weeks to 9 days.',
    stack: ['Python', 'PyTorch', 'HuggingFace', 'SpaCy', 'Snowflake', 'Docker', 'AWS SageMaker'],
    category: 'llm-agents',
    categoryLabel: 'LLM & Multi-Agent RAG',
    image: IMAGES.heroArchitecture,
    problem: {
      overview:
        'Over 80% of critical patient eligibility criteria (EGFR/ALK mutation status, ECOG performance scores, line-of-therapy progression) were locked inside unstructured clinician dictation notes and scanned pathology PDFs, requiring teams of registered nurses to manually read thousands of charts per trial.',
      painPoints: [
        '6+ weeks required to screen patient cohorts for Phase II/III oncology trials.',
        'High inter-annotator variance across manual chart abstraction teams.',
        'Strict HIPAA de-identification and audit logging constraints.',
      ],
      baselineCost: '$1.6M annual clinical nurse abstraction overhead and delayed trial enrollment milestones.',
    },
    solution: {
      architectureOverview:
        'Built a HIPAA-compliant clinical NLP pipeline combining deterministic negation/temporal assertion rules with fine-tuned BioClinicalBERT named-entity recognition and structured JSON schema extraction.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Automated PHI Scrubber & Clinical Sectionizer',
          detail:
            'Implemented a multi-pass de-identification filter and anatomical section splitter isolating pathology findings from family history and ruled-out diagnoses.',
        },
        {
          stepNumber: '02',
          title: 'Fine-Tuned Biomedical NER & Assertion Status',
          detail:
            'Trained custom entity recognition heads distinguishing confirmed positive mutations from negated or historical mentions with 96.4% macro F1.',
        },
        {
          stepNumber: '03',
          title: 'OMOP Common Data Model Normalization',
          detail:
            'Mapped extracted clinical entities to standard SNOMED-CT and RxNorm codes in Snowflake for instant SQL cohort querying by biostatisticians.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '4.2x', label: 'Acceleration in clinical trial cohort screening', timeframe: '6 weeks reduced to 9 days' },
        { value: '96.4%', label: 'Macro F1-score across 28 oncology entity types', timeframe: 'Validated against MD gold standard' },
        { value: '450k+', label: 'Pathology and EHR notes processed in batch', timeframe: 'Under $140 total compute cost' },
        { value: '100%', label: 'HIPAA Safe Harbor de-identification compliance', timeframe: 'Zero audit exceptions' },
      ],
      executiveQuote: {
        quote:
          'Pijush’s background at Blackcoffer and deep command of clinical NLP allowed us to unlock 450,000 legacy pathology records that were previously unsearchable. Our trial matching speed increased more than fourfold.',
        author: 'Dr. Aravind Krishnan',
        role: 'Director of Clinical Data Science',
        organization: 'Oncoigens Research Partners',
      },
    },
  },
  {
    id: 'saas-revenue-churn-intelligence',
    number: '05',
    title: 'Enterprise SaaS Telemetry Lakehouse & Predictive Churn Command Center',
    clientType: 'Series B B2B Cloud Infrastructure Platform ($65M ARR)',
    industry: 'Enterprise SaaS & Revenue Ops',
    industryTag: 'Enterprise SaaS & Revenue Ops',
    duration: '8 Weeks',
    engagementModel: 'Direct B2B Retainer',
    headlineMetric: '$1.95M At-Risk ARR Saved in 2 Quarters',
    secondaryMetric: '+14% Lift in Net Dollar Retention (NDR)',
    roiSummary: 'Unified product clickstream telemetry with Salesforce and Stripe billing data to predict enterprise churn 90 days before contract renewal.',
    twoSentenceSummary:
      'Architected a dbt + Snowflake telemetry lakehouse and survival-analysis churn propensity engine with automated Salesforce write-backs. Empowered Customer Success teams with SHAP account-health drivers and executive Power BI P&L dashboards.',
    stack: ['Python', 'XGBoost', 'Snowflake', 'dbt', 'Airflow', 'Power BI', 'Salesforce API'],
    category: 'bi-automation',
    categoryLabel: 'Decision BI & Automation',
    image: IMAGES.heroArchitecture,
    problem: {
      overview:
        'Customer Success Managers only discovered enterprise account dissatisfaction 30 days prior to annual renewal—when workspace adoption had already collapsed. Product telemetry lived in raw S3 JSON logs, completely disconnected from Salesforce CRM and Stripe billing ledgers.',
      painPoints: [
        '$4.2M in preventable annual logo churn across mid-market and enterprise tiers.',
        'RevOps spent 25+ hours every Monday manually reconciling ARR cohorts in spreadsheets.',
        'Zero visibility into feature-level adoption decay or seat utilization drops.',
      ],
      baselineCost: '$4.2M annual ARR churn and fragmented board reporting.',
    },
    solution: {
      architectureOverview:
        'Built an automated ELT lakehouse in Snowflake using Airflow and dbt, feeding a gradient-boosted survival analysis model that scores every enterprise account daily and syncs SHAP risk explanations directly into Salesforce Account records and Power BI.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'Unified Product Telemetry & Billing Marts',
          detail:
            'Modeled 180M+ monthly product events alongside Stripe invoice history and Zendesk support ticket sentiment inside modular dbt data marts.',
        },
        {
          stepNumber: '02',
          title: '90-Day Renewal Risk & SHAP Driver Attribution',
          detail:
            'Trained survival-analysis and XGBoost models identifying early seat-utilization decay 90 days ahead of renewal with 89.4% precision.',
        },
        {
          stepNumber: '03',
          title: 'Reverse-ETL CRM Write-Back & Executive BI Suite',
          detail:
            'Pushed daily health scores and top-3 risk reasons into Salesforce triggers while deploying a board-ready Power BI Net Dollar Retention command center.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '$1.95M', label: 'Annual Recurring Revenue retained via early intervention', timeframe: 'First 6 months post-launch' },
        { value: '89.4%', label: 'Precision on 90-day renewal risk predictions', timeframe: 'Validated across 1,400+ B2B accounts' },
        { value: '25 hrs/wk', label: 'RevOps manual spreadsheet reporting eliminated', timeframe: '100% automated dbt + Power BI' },
        { value: '+14%', label: 'Improvement in Net Dollar Retention (NDR)', timeframe: 'Year-over-year cohort delta' },
      ],
      executiveQuote: {
        quote:
          'We went from flying blind at renewal time to having a 90-day early warning radar inside Salesforce. Pijush bridged our raw engineering logs and executive revenue strategy seamlessly.',
        author: 'Claire Sterling',
        role: 'Chief Revenue Officer',
        organization: 'CloudScale Systems Inc.',
      },
    },
  },
  {
    id: 'industrial-iot-predictive-maintenance',
    number: '06',
    title: 'Industrial IoT Streaming Telemetry & Predictive Maintenance Engine',
    clientType: 'Global Precision Manufacturing & Energy Equipment Operator',
    industry: 'Industrial & Energy Analytics',
    industryTag: 'Industrial & Energy Analytics',
    duration: '12 Weeks',
    engagementModel: 'Upwork Enterprise Contract',
    headlineMetric: '-47% Unplanned Equipment Downtime',
    secondaryMetric: '$2.2M Annual Maintenance & Scrap Savings',
    roiSummary: 'Deployed real-time LSTM-Autoencoder vibration and thermal anomaly detection across 1,200+ industrial CNC and turbine assets.',
    twoSentenceSummary:
      'Engineered an edge-to-cloud MQTT and Apache Kafka telemetry pipeline processing 50Hz sensor waveforms into a PyTorch anomaly detection engine. Predicted bearing and spindle failures up to 18 days prior to catastrophic breakdown.',
    stack: ['Python', 'PyTorch', 'Apache Kafka', 'TimescaleDB', 'FastAPI', 'Docker', 'Streamlit'],
    category: 'predictive-ml',
    categoryLabel: 'Predictive ML & Forecasting',
    image: IMAGES.supplyChain,
    problem: {
      overview:
        'Unscheduled spindle and compressor failures across 6 manufacturing plants halted production lines for 14–36 hours per incident, costing $45,000 per hour in lost output and Emergency OEM part shipments.',
      painPoints: [
        'Reactive maintenance only triggered after physical vibration thresholds were breached.',
        'High-frequency 50Hz SCADA sensor logs were overwritten every 72 hours without historical analysis.',
        'Fixed-interval preventive maintenance replaced healthy components prematurely.',
      ],
      baselineCost: '$3.9M annual unplanned downtime losses and emergency maintenance spend.',
    },
    solution: {
      architectureOverview:
        'Built an edge-to-cloud streaming pipeline using Kafka and TimescaleDB, extracting Fast Fourier Transform (FFT) spectral features every 60 seconds and scoring Remaining Useful Life (RUL) via a PyTorch LSTM-Autoencoder.',
      engineeringSteps: [
        {
          stepNumber: '01',
          title: 'High-Frequency Spectral Feature Extraction',
          detail:
            'Processed raw 50Hz triaxial vibration, acoustic, and thermal sensor streams into rolling FFT harmonic energy bands stored in TimescaleDB.',
        },
        {
          stepNumber: '02',
          title: 'Unsupervised LSTM-Autoencoder & RUL Survival Model',
          detail:
            'Trained reconstruction-error anomaly detectors paired with Weibull survival heads predicting failure windows 14–18 days in advance.',
        },
        {
          stepNumber: '03',
          title: 'Plant Floor Control Console & Work-Order Automation',
          detail:
            'Built a real-time Streamlit & FastAPI plant reliability console that automatically generates SAP maintenance tickets when anomaly thresholds persist.',
        },
      ],
    },
    impact: {
      metrics: [
        { value: '-47%', label: 'Reduction in unplanned production line downtime', timeframe: 'Across 1,200+ monitored assets' },
        { value: '$2.2M', label: 'Annualized OEE and maintenance cost savings', timeframe: 'Audited plant P&L impact' },
        { value: '18 Days', label: 'Median advance warning prior to component failure', timeframe: 'At 93.8% precision' },
        { value: '60s', label: 'End-to-end sensor-to-alert telemetry latency', timeframe: '24/7 continuous edge streaming' },
      ],
      executiveQuote: {
        quote:
          'Pijush turned noisy SCADA sensor logs into an 18-day early warning system that our plant reliability engineers trust every single shift.',
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
