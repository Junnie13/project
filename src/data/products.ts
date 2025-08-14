export interface Product {
  id: string;
  name: string;
  industry: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 'forensic-data-analytics',
    name: 'Forensic Data Analytics',
    industry: 'Government and Law Enforcement',
    description: 'An analytics platform for processing forensic data in investigations.',
    longDescription: 'This platform processes digital evidence using advanced search and machine learning to uncover relevant information.',
    keyFeatures: [
      'Advanced search capabilities',
      'Machine learning for data classification',
      'Integration with forensic tools',
      'Real-time analysis',
      'Secure data handling',
      'Multi-format support'
    ],
    category: 'F'
  },
  {
    id: 'fraud-detection-public-benefits',
    name: 'Fraud Detection for Public Benefits',
    industry: 'Government and Law Enforcement',
    description: 'A tool that identifies fraudulent claims in public benefits programs.',
    longDescription: 'This tool uses analytics and cross-referencing to spot irregularities in applications and payments, helping agencies safeguard funds and maintain program integrity.',
    keyFeatures: [
      'Application data analysis',
      'Payment anomaly detection',
      'Integration with citizen databases',
      'Real-time alerts',
      'Case management tools',
      'Audit reporting',
      'Secure data encryption',
      'Behavioral pattern recognition',
      'Multi-agency data sharing',
      'Compliance with privacy laws'
    ],
    category: 'F'
  },
  {
    id: 'healthcare-analytics-platform',
    name: 'Healthcare Analytics Platform',
    industry: 'Healthcare',
    description: 'Comprehensive analytics for healthcare providers and insurers.',
    longDescription: 'Advanced analytics platform designed to help healthcare organizations optimize patient care, reduce costs, and improve operational efficiency.',
    keyFeatures: [
      'Patient outcome analysis',
      'Cost optimization',
      'Predictive modeling',
      'Clinical decision support',
      'Population health management',
      'Risk assessment'
    ],
    category: 'H'
  },
  {
    id: 'financial-risk-assessment',
    name: 'Financial Risk Assessment',
    industry: 'Financial Services',
    description: 'AI-powered risk assessment tools for financial institutions.',
    longDescription: 'Leverage machine learning and big data to assess credit risk, detect fraud, and ensure regulatory compliance in financial operations.',
    keyFeatures: [
      'Credit risk modeling',
      'Fraud detection algorithms',
      'Regulatory compliance',
      'Portfolio analysis',
      'Real-time monitoring',
      'Stress testing'
    ],
    category: 'F'
  }
];

export const industries = [
  'All Industries',
  'Government and Law Enforcement',
  'Healthcare',
  'Financial Services',
  'Technology',
  'Education & Research',
  'Manufacturing'
];