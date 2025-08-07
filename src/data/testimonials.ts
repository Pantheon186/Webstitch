export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  featured: boolean;
  project?: string;
  results?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 'rajesh-fintech',
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'FinTech Innovations',
    content: 'WebStitch transformed our financial platform with AI-powered automation that reduced processing time by 85% and saved us over ₹2 crores annually. Their expertise in machine learning and process optimization is unmatched. The ROI was incredible - we saw results within the first month.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: true,
    project: 'AI-Powered Financial Processing System',
    results: ['85% faster processing', '₹2 crore annual savings', '99.7% accuracy rate']
  },
  {
    id: 'priya-ecommerce',
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'StyleHub Fashion',
    content: 'The e-commerce platform WebStitch built for us increased our online sales by 300% within six months. Their attention to user experience and mobile optimization was exceptional. The AI-powered recommendation engine they implemented has become our biggest revenue driver.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: true,
    project: 'AI-Enhanced E-commerce Platform',
    results: ['300% sales increase', '45% higher conversion rate', '60% mobile engagement boost']
  },
  {
    id: 'amit-healthcare',
    name: 'Dr. Amit Verma',
    role: 'Medical Director',
    company: 'HealthCare Plus',
    content: 'WebStitch developed a comprehensive patient management system that streamlined our operations and improved patient care quality. The automated appointment scheduling and AI-powered diagnosis assistance have revolutionized how we serve our patients.',
    avatar: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: true,
    project: 'Healthcare Management System',
    results: ['50% reduction in wait times', '95% appointment accuracy', '40% operational efficiency gain']
  },
  {
    id: 'sneha-education',
    name: 'Sneha Gupta',
    role: 'Principal',
    company: 'Future Learning Academy',
    content: 'The learning management system created by WebStitch has transformed our educational delivery. Students are more engaged, teachers have better tools, and parents stay informed. The AI-powered personalized learning paths have improved student performance by 40%.',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: false,
    project: 'AI-Powered Learning Management System',
    results: ['40% improvement in student performance', '90% teacher satisfaction', '85% parent engagement']
  },
  {
    id: 'vikash-manufacturing',
    name: 'Vikash Singh',
    role: 'Operations Manager',
    company: 'Smart Manufacturing Co.',
    content: 'WebStitch implemented an IoT-based monitoring system that reduced our equipment downtime by 70% and increased overall productivity by 45%. Their predictive maintenance algorithms have saved us millions in potential losses.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: false,
    project: 'IoT Manufacturing Monitoring System',
    results: ['70% reduction in downtime', '45% productivity increase', '₹50 lakh cost savings']
  },
  {
    id: 'anita-retail',
    name: 'Anita Joshi',
    role: 'Marketing Director',
    company: 'Retail Excellence',
    content: 'The digital marketing automation platform developed by WebStitch increased our lead generation by 250% and improved conversion rates by 180%. Their AI-powered customer segmentation and personalized campaigns have been game-changers for our business.',
    avatar: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: false,
    project: 'AI-Driven Marketing Automation',
    results: ['250% increase in leads', '180% better conversion rates', '65% reduction in marketing costs']
  },
  {
    id: 'rohit-logistics',
    name: 'Rohit Agarwal',
    role: 'CEO',
    company: 'Swift Logistics',
    content: 'WebStitch built an intelligent route optimization system that reduced our delivery costs by 35% and improved customer satisfaction scores by 90%. The real-time tracking and AI-powered logistics management have given us a significant competitive advantage.',
    avatar: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: false,
    project: 'AI-Powered Logistics Management',
    results: ['35% cost reduction', '90% customer satisfaction improvement', '25% faster deliveries']
  },
  {
    id: 'kavya-startup',
    name: 'Kavya Reddy',
    role: 'Co-Founder',
    company: 'TechStart Innovations',
    content: 'As a startup, we needed a technology partner who could understand our vision and deliver quickly. WebStitch exceeded our expectations by building our MVP in just 8 weeks and helping us secure our first round of funding. Their technical expertise and business acumen are outstanding.',
    avatar: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    featured: false,
    project: 'Startup MVP Development',
    results: ['8-week MVP delivery', 'Successful funding round', '200% user growth in 3 months']
  }
];