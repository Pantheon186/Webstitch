import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Github, 
  Award, 
  Star, 
  TrendingUp, 
  Users, 
  Filter,
  Search,
  Calendar,
  Tag,
  ArrowRight,
  Play,
  Eye,
  Code,
  Smartphone,
  Globe,
  Brain,
  Zap,
  BarChart3
} from 'lucide-react';
import { MetaTags } from '../components/SEO/MetaTags';
import { OptimizedImage } from '../components/Performance/OptimizedImage';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
  client: string;
  industry: string;
  projectType: 'Web App' | 'Mobile App' | 'AI Solution' | 'E-commerce' | 'Dashboard';
}

const projects: Project[] = [
  {
    id: 'fintech-ai-platform',
    title: 'AI-Powered FinTech Platform',
    description: 'Revolutionary financial processing system with machine learning algorithms that reduced processing time by 85% and achieved 99.7% accuracy.',
    longDescription: 'A comprehensive financial technology platform that leverages artificial intelligence and machine learning to automate complex financial processes. The system includes real-time fraud detection, automated risk assessment, intelligent document processing, and predictive analytics for investment recommendations.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI Solutions',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    features: [
      'Real-time fraud detection with 99.7% accuracy',
      'Automated document processing and verification',
      'Predictive analytics for investment recommendations',
      'Advanced risk assessment algorithms',
      'Real-time transaction monitoring',
      'Compliance automation and reporting'
    ],
    results: [
      '85% reduction in processing time',
      '₹2 crore annual cost savings',
      '99.7% fraud detection accuracy',
      '50% improvement in customer satisfaction'
    ],
    liveUrl: 'https://fintech-demo.webstitch.in',
    featured: true,
    completedAt: '2024-11-15',
    client: 'FinTech Innovations',
    industry: 'Financial Services',
    projectType: 'AI Solution'
  },
  {
    id: 'ecommerce-ai-platform',
    title: 'AI-Enhanced E-commerce Platform',
    description: 'Smart e-commerce solution with AI-powered recommendations that increased sales by 300% and improved conversion rates by 45%.',
    longDescription: 'A next-generation e-commerce platform featuring AI-powered product recommendations, intelligent inventory management, automated customer service, and advanced analytics. The platform includes personalized shopping experiences, dynamic pricing optimization, and predictive demand forecasting.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redis', 'Docker'],
    features: [
      'AI-powered product recommendations',
      'Intelligent inventory management',
      'Automated customer service chatbot',
      'Dynamic pricing optimization',
      'Advanced analytics dashboard',
      'Multi-channel integration'
    ],
    results: [
      '300% increase in online sales',
      '45% higher conversion rate',
      '60% improvement in mobile engagement',
      '40% reduction in cart abandonment'
    ],
    liveUrl: 'https://stylehub-demo.webstitch.in',
    featured: true,
    completedAt: '2024-10-20',
    client: 'StyleHub Fashion',
    industry: 'Retail & Fashion',
    projectType: 'E-commerce'
  },
  {
    id: 'healthcare-management-system',
    title: 'Healthcare Management System',
    description: 'Comprehensive patient management platform with AI-powered diagnosis assistance that improved patient care quality by 40%.',
    longDescription: 'An integrated healthcare management system that streamlines hospital operations, patient care, and medical record management. Features include AI-powered diagnosis assistance, automated appointment scheduling, telemedicine capabilities, and comprehensive reporting tools.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Healthcare',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS', 'TensorFlow'],
    features: [
      'AI-powered diagnosis assistance',
      'Automated appointment scheduling',
      'Electronic health records (EHR)',
      'Telemedicine integration',
      'Prescription management',
      'Insurance claim processing'
    ],
    results: [
      '50% reduction in patient wait times',
      '95% appointment scheduling accuracy',
      '40% improvement in operational efficiency',
      '90% patient satisfaction score'
    ],
    featured: true,
    completedAt: '2024-09-30',
    client: 'HealthCare Plus',
    industry: 'Healthcare',
    projectType: 'Web App'
  },
  {
    id: 'learning-management-system',
    title: 'AI-Powered Learning Platform',
    description: 'Intelligent education platform with personalized learning paths that improved student performance by 40%.',
    longDescription: 'A comprehensive learning management system that uses artificial intelligence to create personalized learning experiences. The platform includes adaptive assessments, intelligent tutoring systems, progress tracking, and collaborative learning tools.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Python', 'Scikit-learn'],
    features: [
      'Personalized learning paths',
      'AI-powered content recommendations',
      'Interactive virtual classrooms',
      'Automated grading system',
      'Progress analytics and reporting',
      'Collaborative learning tools'
    ],
    results: [
      '40% improvement in student performance',
      '90% teacher satisfaction rate',
      '85% increase in parent engagement',
      '60% reduction in administrative tasks'
    ],
    featured: false,
    completedAt: '2024-08-15',
    client: 'Future Learning Academy',
    industry: 'Education',
    projectType: 'Web App'
  },
  {
    id: 'iot-manufacturing-system',
    title: 'IoT Manufacturing Monitor',
    description: 'Smart manufacturing system with IoT sensors and predictive maintenance that reduced downtime by 70%.',
    longDescription: 'An IoT-based manufacturing monitoring system that provides real-time insights into production processes, equipment health, and quality control. Features predictive maintenance algorithms, automated quality assurance, and comprehensive production analytics.',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'IoT',
    technologies: ['React', 'Node.js', 'InfluxDB', 'Grafana', 'Python', 'MQTT'],
    features: [
      'Real-time equipment monitoring',
      'Predictive maintenance algorithms',
      'Quality control automation',
      'Production analytics dashboard',
      'Alert and notification system',
      'Mobile monitoring app'
    ],
    results: [
      '70% reduction in equipment downtime',
      '45% increase in overall productivity',
      '₹50 lakh annual cost savings',
      '95% prediction accuracy for maintenance'
    ],
    featured: false,
    completedAt: '2024-07-10',
    client: 'Smart Manufacturing Co.',
    industry: 'Manufacturing',
    projectType: 'Dashboard'
  },
  {
    id: 'logistics-optimization-app',
    title: 'AI Logistics Optimization',
    description: 'Intelligent route optimization system that reduced delivery costs by 35% and improved customer satisfaction by 90%.',
    longDescription: 'A comprehensive logistics management platform featuring AI-powered route optimization, real-time tracking, automated dispatch, and predictive delivery analytics. The system integrates with multiple carriers and provides end-to-end visibility of the supply chain.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Logistics',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Python', 'Redis'],
    features: [
      'AI-powered route optimization',
      'Real-time package tracking',
      'Automated dispatch system',
      'Driver mobile application',
      'Customer notification system',
      'Analytics and reporting dashboard'
    ],
    results: [
      '35% reduction in delivery costs',
      '90% improvement in customer satisfaction',
      '25% faster delivery times',
      '80% reduction in manual planning time'
    ],
    featured: false,
    completedAt: '2024-06-25',
    client: 'Swift Logistics',
    industry: 'Logistics',
    projectType: 'Mobile App'
  }
];

const categories = ['All', 'AI Solutions', 'E-commerce', 'Healthcare', 'Education', 'IoT', 'Logistics'];
const technologies = ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS', 'TypeScript', 'Next.js'];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesTech && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'AI Solution': return Brain;
      case 'Mobile App': return Smartphone;
      case 'Web App': return Globe;
      case 'E-commerce': return Code;
      case 'Dashboard': return BarChart3;
      default: return Code;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Portfolio - Our Best Work & Success Stories"
        description="Explore WebStitch's portfolio of successful projects including AI solutions, e-commerce platforms, mobile apps, and web applications. See our client success stories."
        keywords="web development portfolio, AI projects, e-commerce development, mobile app portfolio, client success stories, Greater Noida projects"
        url="/portfolio"
      />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our successful projects and the impact we've made for businesses across various industries.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Projects Delivered', value: '200+', icon: Award },
              { label: 'Client Satisfaction', value: '99.5%', icon: Star },
              { label: 'Average Performance', value: '96/100', icon: TrendingUp },
              { label: 'Industries Served', value: '15+', icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-80 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => {
                  const IconComponent = getProjectIcon(project.projectType);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="relative">
                          <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(project.completedAt).getFullYear()}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {project.client} • {project.industry}
                            </div>
                            <div className="flex items-center gap-2">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                              <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'All Projects' : `${selectedCategory} Projects`}
            </h2>
            
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No projects found matching your criteria.
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => {
                  const IconComponent = getProjectIcon(project.projectType);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
                        <div className="relative">
                          <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                              {project.title}
                            </h3>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(project.completedAt).getFullYear()}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {project.client}
                            </div>
                            <div className="flex items-center gap-2">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                              <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
              >
                <Zap className="w-6 h-6 mr-3" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <OptimizedImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {selectedProject.projectType}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.client} • {selectedProject.industry}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Zap className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Results Achieved
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};