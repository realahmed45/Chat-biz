import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  ShoppingCart,
  BarChart3,
  Users,
  Zap,
  Check,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  CreditCard,
  Globe,
  Shield,
  Settings,
  TrendingUp,
  Clock,
  HeadphonesIcon,
  Database,
  Layers,
  Workflow,
  Bot,
  Bell,
  Lock,
  Code,
  PieChart,
  MessageSquare,
  Target,
  Rocket,
  Award,
  CheckCircle,
  ArrowDown,
  Play,
  Eye,
  Heart,
  ThumbsUp,
  Calendar,
  Video,
  Sparkles,
} from "lucide-react";

const ChatBizWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "features",
        "services",
        "pricing",
        "portfolio",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bookDemo = () => {
    const message =
      "Hi! I'd like to book a demo according to my business requirements. Please help me understand how ChatBiz automation can work for my business.";
    const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const getCustomQuote = () => {
    const message =
      "Hi! I'm interested in a customized package for my business. Can we discuss pricing based on my specific business needs?";
    const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const packages = [
    {
      name: "Starter",
      price: "PKR 6,050",
      priceUSD: "$20",
      setup: "PKR 27,500",
      setupUSD: "$89",
      description: "Perfect for small restaurants & home-based businesses",
      features: [
        "Up to 50 products in catalog",
        "150 orders per month",
        "Basic WhatsApp chatbot",
        "Simple admin dashboard",
        "Order tracking system",
        "Customer management",
        "Email support (48hr response)",
        "Cash on Delivery support",
        "Basic analytics",
        "Monthly data backup",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Smartphone,
    },
    {
      name: "Professional",
      price: "PKR 13,200",
      priceUSD: "$43",
      setup: "PKR 55,000",
      setupUSD: "$178",
      description: "Ideal for growing businesses & retail shops",
      features: [
        "Up to 200 products in catalog",
        "500 orders per month",
        "Advanced WhatsApp chatbot",
        "Complete admin dashboard",
        "Payment gateway integration",
        "Inventory management",
        "Customer segmentation",
        "Broadcast messaging (250 contacts)",
        "Advanced analytics & reports",
        "Priority support (24hr response)",
        "Discount codes & referrals",
        "Weekly data backup",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
    },
    {
      name: "Enterprise",
      price: "PKR 24,200",
      priceUSD: "$78",
      setup: "PKR 93,500",
      setupUSD: "$304",
      description: "For restaurant chains & large retailers",
      features: [
        "Unlimited products catalog",
        "Unlimited orders",
        "AI-powered chatbot with NLP",
        "Multi-location management",
        "Custom integrations & API",
        "Advanced inventory & supplier management",
        "Unlimited broadcast messaging",
        "Real-time analytics dashboard",
        "24/7 dedicated support",
        "Staff role management",
        "Custom feature development",
        "Daily data backup & security",
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
      icon: Award,
    },
    {
      name: "Custom Package",
      price: "Custom Pricing",
      priceUSD: "Quote Based",
      setup: "Custom Setup",
      setupUSD: "As Required",
      description:
        "Tailored specifically for your unique business requirements",
      features: [
        "✨ Fully customized features",
        "✨ Industry-specific automation",
        "✨ Unlimited scalability",
        "✨ Custom integrations",
        "✨ Dedicated development team",
        "✨ Priority implementation",
        "✨ Advanced AI capabilities",
        "✨ Custom workflow automation",
        "✨ Personalized training",
        "✨ 24/7 premium support",
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      icon: Sparkles,
      isCustom: true,
    },
  ];

  const features = [
    {
      icon: Bot,
      title: "Intelligent WhatsApp Chatbot",
      description:
        "AI-powered conversational bot that understands customer queries, handles product browsing, takes orders, and processes payments seamlessly.",
      details: [
        "Natural language processing",
        "24/7 automated responses",
        "Order confirmation & tracking",
        "Payment processing",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Complete E-commerce Suite",
      description:
        "Full-featured online store that runs entirely on WhatsApp with product catalogs, inventory management, and order processing.",
      details: [
        "Product catalog management",
        "Real-time inventory tracking",
        "Order management system",
        "Customer order history",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Business Analytics",
      description:
        "Comprehensive insights into your business performance with sales tracking, customer analytics, and detailed reporting.",
      details: [
        "Sales performance metrics",
        "Customer behavior analysis",
        "Revenue tracking",
        "Custom report generation",
      ],
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Solutions",
      description:
        "Accept payments through various methods including mobile wallets, bank transfers, and card payments with secure processing.",
      details: [
        "Cash on Delivery (COD)",
        "Easypaisa & JazzCash",
        "Bank transfer integration",
        "Card payment processing",
      ],
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description:
        "Build and maintain customer relationships with detailed profiles, purchase history, and targeted marketing campaigns.",
      details: [
        "Customer profile management",
        "Purchase history tracking",
        "Segmentation & targeting",
        "Loyalty program management",
      ],
    },
    {
      icon: Bell,
      title: "Marketing Automation",
      description:
        "Automate your marketing with broadcast messages, promotional campaigns, and customer engagement tools.",
      details: [
        "Broadcast messaging",
        "Promotional campaigns",
        "Customer engagement",
        "Referral programs",
      ],
    },
  ];

  const services = [
    {
      icon: Bot,
      title: "Customized Chatbot Development",
      description:
        "Custom intelligent chatbots that completely replace human staff for WhatsApp customer service and order management.",
      process: [
        "Bot intelligence design",
        "Conversation flow automation",
        "Integration & testing",
        "24/7 automated deployment",
      ],
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description:
        "Complete automation of your business workflows - from customer acquisition to order fulfillment without manual intervention.",
      process: [
        "Process analysis & mapping",
        "Automation design",
        "System integration",
        "Automated optimization",
      ],
    },
    {
      icon: Settings,
      title: "Custom Automation Solutions",
      description:
        "Tailored automation systems designed specifically for your business needs and industry requirements.",
      process: [
        "Requirements analysis",
        "Custom automation development",
        "Integration & testing",
        "Performance optimization",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Automation Support & Maintenance",
      description:
        "Ongoing support to ensure your automated systems run smoothly and continuously optimize performance.",
      process: [
        "Performance monitoring",
        "System optimization",
        "Issue resolution",
        "Feature updates",
      ],
    },
  ];

  const portfolioItems = [
    {
      title: "Hassan's Restaurant Chain",
      category: "Food & Beverage Automation",
      description:
        "Complete automation system handling 500+ daily orders across 5 locations with zero manual WhatsApp management.",
      metrics: [
        "100% automated order processing",
        "Zero manual replies needed",
        "500+ orders handled daily by bots",
      ],
      image: "🤖",
    },
    {
      title: "Fashion Hub Boutique",
      category: "Retail Process Automation",
      description:
        "Customized chatbot completely replaced human staff for customer service, order taking, and inventory management.",
      metrics: [
        "90% reduction in staff costs",
        "24/7 automated customer service",
        "Zero manual order processing",
      ],
      image: "⚡",
    },
    {
      title: "TechMart Electronics",
      category: "Business Process Automation",
      description:
        "Fully automated e-commerce operations from product inquiry to delivery confirmation without human intervention.",
      metrics: [
        "100% automated operations",
        "Zero manual work required",
        "24/7 intelligent customer support",
      ],
      image: "🔧",
    },
    {
      title: "Sweet Corner Bakery",
      category: "Custom Order Automation",
      description:
        "Advanced automation system handling complex custom orders, special requests, and delivery scheduling automatically.",
      metrics: [
        "Complex order automation",
        "Zero manual coordination",
        "100% automated scheduling",
      ],
      image: "🎯",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      business: "Hassan's Restaurant Chain",
      role: "Owner",
      text: "We completely eliminated the need for WhatsApp staff! The customized bot handles all 500+ daily orders automatically. Our operational costs dropped by 80% and we never miss an order.",
      rating: 5,
      avatar: "AH",
      metrics: "Zero manual work needed",
    },
    {
      name: "Fatima Khan",
      business: "Fashion Hub Boutique",
      role: "Founder",
      text: "No more hiring staff for WhatsApp management! The intelligent customized bot understands customer queries perfectly and handles everything automatically. We save PKR 50,000 monthly on staff costs.",
      rating: 5,
      avatar: "FK",
      metrics: "100% automated operations",
    },
    {
      name: "Ali Raza",
      business: "TechMart Electronics",
      role: "Managing Director",
      text: "The automation is incredible! Our customized bot handles complex technical queries, processes orders, and manages inventory automatically. We operate 24/7 without any manual intervention.",
      rating: 5,
      avatar: "AR",
      metrics: "24/7 automated service",
    },
    {
      name: "Sara Ahmed",
      business: "Sweet Corner Bakery",
      role: "Co-owner",
      text: "Even complex custom cake orders are handled automatically! The customized bot collects all specifications, schedules delivery, and processes payments without any manual work from our side.",
      rating: 5,
      avatar: "SA",
      metrics: "Complex automation success",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  // Add this inside your ChatBizWebsite component, before the return statement:
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChatBiz WhatsApp Automation",
    description:
      "Complete WhatsApp e-commerce automation platform for Pakistani businesses",
    url: "https://www.chatbiz.site",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "6050",
      priceCurrency: "PKR",
      priceValidUntil: "2025-12-31",
    },
  };

  // Add this JSX right after your opening <div> tag:
  <Helmet>
    <title>
      ChatBiz - WhatsApp Business Automation Pakistan | Custom E-commerce Bots
    </title>
    <meta
      name="description"
      content="Pakistan's #1 WhatsApp business automation platform. Custom chatbots for e-commerce, order management, and customer service. 100% automated solutions for Pakistani businesses."
    />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("home")}
              style={{ cursor: "pointer" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ChatBiz
                </span>
                <div className="text-xs text-gray-500">Business Automation</div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Features", id: "features" },
                { name: "Services", id: "services" },
                { name: "Pricing", id: "pricing" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Reviews", id: "testimonials" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative ${
                    activeSection === item.id ? "text-blue-600" : ""
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              ))}

              {/* Book Demo Button in Navigation */}
              <motion.button
                onClick={bookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
              >
                <Video className="w-4 h-4 mr-2" />
                Book Demo
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 border-t border-gray-100"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Features", id: "features" },
                  { name: "Services", id: "services" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Reviews", id: "testimonials" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={bookDemo}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-center flex items-center justify-center"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Book Demo
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        itemScope
        itemType="https://schema.org/Organization"
        className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <motion.div
          style={{ y: yRange }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium">
                Pakistan's Leading Business Automation Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                WhatsApp Commerce Automation
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Complete e-commerce solution that runs entirely on WhatsApp. Fully
              customized for your business needs with business process
              automation. Let customers browse, order, and pay without leaving
              their favorite chat app.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.button
                onClick={bookDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Calendar className="ml-0 mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Demo for Your Business
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                Get Custom Solution
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("pricing")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-all flex items-center justify-center"
              >
                <Eye className="mr-3 w-5 h-5" />
                View Pricing
              </motion.button>
            </motion.div>

            {/* Prominent Demo Booking Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-16 max-w-4xl mx-auto border border-green-200"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    See ChatBiz in Action!
                  </h3>
                  <p className="text-gray-600">
                    Book a personalized demo according to your business
                    requirements. See exactly how automation will work for your
                    industry.
                  </p>
                </div>
                <motion.button
                  onClick={bookDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center whitespace-nowrap"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Book Free Demo Now
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Custom Solutions
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Tailored to your business
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Automated Sales</div>
                <div className="text-sm text-gray-500 mt-2">
                  Never miss an order
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">Scalability</div>
                <div className="text-sm text-gray-500 mt-2">
                  Grows with your business
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose ChatBiz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that every business is unique. That's why we don't
              offer one-size-fits-all solutions with business automation
              capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Custom-Built for Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We analyze your specific business requirements and build a
                  solution that perfectly fits your workflow, customer behavior,
                  and growth objectives with automation features. No generic
                  templates here.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <Rocket className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pakistani Market Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep understanding of local business practices, customer
                  preferences, payment methods, and market dynamics. Built by
                  Pakistanis, for Pakistani businesses.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <HeadphonesIcon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dedicated Support & Training
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive training for your team, ongoing support, and
                  regular consultations to ensure you're getting maximum value
                  from your investment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>

                <div className="relative">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    The ChatBiz Difference
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        No cookie-cutter solutions
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Local payment gateway integrations
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Urdu & English language support
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Industry-specific customizations
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Business process automation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Dedicated account management
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={bookDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Your Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features that can be customized and
              configured to match your exact business requirements with
              automation capabilities.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete automation solutions that eliminate manual work and
              reduce your need for human staff by up to 90%.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">
                        Our Process:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-xs font-semibold text-blue-600">
                                {idx + 1}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automation Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your automation level. All plans eliminate manual work and
              include intelligent bots that handle everything automatically.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 relative overflow-hidden ${
                  pkg.popular
                    ? "border-purple-500"
                    : pkg.isCustom
                    ? "border-yellow-500"
                    : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}

                {pkg.isCustom && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-3 font-semibold">
                    Fully Customized
                  </div>
                )}

                <div
                  className={`p-8 ${
                    pkg.popular || pkg.isCustom ? "pt-16" : ""
                  }`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      <span className="text-lg text-gray-600">
                        {pkg.priceUSD}
                      </span>
                    </div>
                    <div className="text-gray-600 mb-3">
                      {pkg.isCustom ? "Based on requirements" : "per month"}
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span>Setup Cost:</span>
                        <span className="font-medium">
                          {pkg.setup} ({pkg.setupUSD})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-800">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={
                      pkg.isCustom
                        ? getCustomQuote
                        : () => scrollToSection("contact")
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                        : pkg.isCustom
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {pkg.isCustom ? "Get Custom Quote" : "Contact for Setup"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Enterprise Automation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need complete business transformation? We build enterprise-grade
                automation systems that can handle thousands of orders daily
                with zero manual intervention. Perfect for large operations and
                franchises.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    100% Automated
                  </div>
                  <div className="text-gray-600">Zero manual work</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    Unlimited
                  </div>
                  <div className="text-gray-600">Order processing capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Automated operations</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={bookDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Book Enterprise Demo
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Discuss Full Automation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our intelligent automation has completely eliminated
              manual work for businesses across Pakistan.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{item.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <span className="text-sm text-purple-600 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  <h4 className="font-semibold text-gray-800">Key Results:</h4>
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Business Owners Say About Our Automation
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from business owners who eliminated manual work
              completely with our intelligent automation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      {testimonial.business}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-gray-800">
                      {testimonial.metrics}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        itemScope
        itemType="https://schema.org/Organization"
        className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          style={{ y: yRange }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready for Complete Automation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop manual work forever. Let our intelligent bots and automation
              systems handle your entire business process while you focus on
              growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get Complete Automation
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <Bot className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        Call for Bot Demo
                      </div>
                      <a
                        href="tel:+923329934858"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        +92 332 993 4858
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <Workflow className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        Email for Automation
                      </div>
                      <a
                        href="mailto:realahmedali4@gmail.com"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        realahmedali4@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <MessageSquare className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        WhatsApp Us
                      </div>
                      <a
                        href="https://wa.me/923329934858?text=I want complete business automation"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        Start Automation
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                How We Automate Your Business
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Process Analysis
                    </h4>
                    <p className="text-blue-100">
                      We analyze your current manual processes and identify
                      automation opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Customized Bot Development
                    </h4>
                    <p className="text-blue-100">
                      We build intelligent customized bots that completely
                      replace human staff for WhatsApp management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Automation Setup
                    </h4>
                    <p className="text-blue-100">
                      Complete automation deployment with testing to ensure 100%
                      reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Go Live</h4>
                    <p className="text-blue-100">
                      Your business runs automatically 24/7 without any manual
                      intervention needed.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={bookDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Video className="mr-3 w-5 h-5" />
                Book Free Demo
              </motion.button>

              <motion.a
                href="tel:+923329934858"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Bot className="mr-3 w-5 h-5" />
                Call for Automation
              </motion.a>

              <motion.a
                href="https://wa.me/923329934858?text=I want complete business automation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
              >
                <Workflow className="mr-3 w-5 h-5" />
                WhatsApp Automation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">ChatBiz</span>
                  <div className="text-sm text-gray-400">
                    Business Automation Solutions
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Pakistan's leading business automation platform, providing
                intelligent bots and process automation that eliminate manual
                work completely.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">
                  100% Automated & Customized Bots
                </span>
              </div>

              {/* Prominent Demo Booking in Footer */}
              <motion.button
                onClick={bookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Demo Now
              </motion.button>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Our Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Intelligent Customized Chatbots
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Business Process Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  24/7 Automated Operations
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Staff Replacement Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Custom Automation Development
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  24/7 Automation Support
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Bot Training & Setup
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Process Optimization
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Automation Consulting
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-3" />
                    <a
                      href="tel:+923329934858"
                      className="hover:text-white transition-colors"
                    >
                      +92 332 993 4858
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-3" />
                    <a
                      href="mailto:realahmedali4@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      realahmedali4@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-3" />
                    Rawalpindi, Pakistan
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    <a
                      href="https://wa.me/923329934858?text=I want automation support"
                      className="hover:text-white transition-colors"
                    >
                      Automation Support 24/7
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 ChatBiz. All rights reserved. Built with ❤️ for Pakistani
                businesses seeking complete automation.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatBizWebsite;
