import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  ShoppingCart,
  BarChart3,
  Users,
  Calculator,
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
  Pizza,
  ExternalLink,
  Monitor,
  Briefcase,
  DollarSign,
  Store,
  Utensils,
  Coffee,
  ShirtIcon,
  Laptop,
  Building,
  Factory,
  Truck,
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
        "products",
        "pizza-demo",
        "features",
        "pricing",
        "industries",
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
      "Hi! I want to see how ChatBiz automation can eliminate manual work in my business. Please show me a live demo of your automation systems.";
    const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const tryPizzaDemo = () => {
    const message = "menu";
    const whatsappUrl = `https://wa.me/923329945014?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const viewDashboard = () => {
    window.open("https://pizza-shop-dashboard.vercel.app/", "_blank");
  };

  const getCustomQuote = () => {
    const message =
      "Hi! I want a custom automation solution for my business. Can we discuss pricing and implementation based on my specific business needs?";
    const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const packages = [
    {
      name: "Starter Automation",

      monthlyPrice: "$97",
      setup: "$697",
      description:
        "Perfect for small businesses ready to eliminate manual WhatsApp work",
      features: [
        "Complete WhatsApp automation system",
        "Up to 50 products in automated catalog",
        "300 automated orders per month",
        "Intelligent chatbot with natural language",
        "Professional admin dashboard",
        "Order tracking & management",
        "Customer database automation",
        "Payment processing automation",
        "Email support with 48hr response",
        "Cash on Delivery support",
        "Basic analytics & reporting",
        "Monthly data backup & security",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Smartphone,
      savings: "Replaces 1-2 staff members",
    },
    {
      name: "Professional Automation",

      monthlyPrice: "$197",
      setup: "$1,297",
      description:
        "Complete automation for growing businesses - zero manual work needed",
      features: [
        "Advanced WhatsApp automation platform",
        "Up to 200 products with smart categorization",
        "Unlimited automated orders",
        "AI-powered conversation management",
        "Advanced admin dashboard with analytics",
        "Multi-payment gateway integration",
        "Automated inventory management",
        "Customer segmentation & targeting",
        "Broadcast automation (500 contacts)",
        "Advanced reporting & insights",
        "Priority support with 24hr response",
        "Automated discount & promotion systems",
        "Weekly performance optimization",
        "Staff training & onboarding included",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
      savings: "Replaces 2-4 staff members",
    },
    {
      name: "Enterprise Automation",

      monthlyPrice: "$397",
      setup: "$2,997",
      description:
        "Complete business transformation - 100% automated operations",
      features: [
        "Enterprise-grade automation platform",
        "Unlimited products & categories",
        "Unlimited automated orders & customers",
        "AI with advanced natural language processing",
        "Multi-location management automation",
        "Custom integrations & API access",
        "Advanced supplier & inventory automation",
        "Unlimited broadcast automation",
        "Real-time business intelligence",
        "24/7 dedicated automation support",
        "Staff role & permission management",
        "Custom feature development included",
        "Daily monitoring & optimization",
        "Enterprise security & compliance",
        "Dedicated success manager",
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
      icon: Award,
      savings: "Replaces 5-10 staff members",
    },
    {
      name: "Custom Automation",
      price: "Custom Quote",
      monthlyPrice: "Based on Scale",
      setup: "Tailored Setup",
      description:
        "Fully customized automation built specifically for your unique business model",
      features: [
        "✨ Completely custom automation design",
        "✨ Industry-specific workflow automation",
        "✨ Unlimited scalability & features",
        "✨ Custom integrations with existing systems",
        "✨ Dedicated development team",
        "✨ Priority implementation timeline",
        "✨ Advanced AI & machine learning",
        "✨ Custom workflow & process automation",
        "✨ Comprehensive team training program",
        "✨ 24/7 premium support & monitoring",
        "✨ Regular optimization & updates",
        "✨ Enterprise-grade security",
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      icon: Sparkles,
      isCustom: true,
      savings: "Eliminates entire manual workforce",
    },
  ];

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Food",
      description:
        "Complete automation for food orders, menu management, and delivery coordination",
      examples: [
        "Pizza shops",
        "Restaurants",
        "Cloud kitchens",
        "Catering services",
      ],
    },
    {
      icon: Store,
      title: "Retail & E-commerce",
      description:
        "Automated product browsing, inventory management, and order processing",
      examples: [
        "Clothing stores",
        "Electronics",
        "Home goods",
        "Beauty products",
      ],
    },
    {
      icon: Coffee,
      title: "Services & Bookings",
      description:
        "Automated appointment scheduling, service bookings, and customer management",
      examples: [
        "Salons & spas",
        "Consultants",
        "Repair services",
        "Healthcare",
      ],
    },
    {
      icon: Building,
      title: "B2B & Wholesale",
      description:
        "Automated bulk ordering, price quotes, and supplier management",
      examples: ["Distributors", "Manufacturers", "Suppliers", "Wholesalers"],
    },
  ];

  const features = [
    {
      icon: Bot,
      title: "Intelligent WhatsApp Automation",
      description:
        "AI-powered system that completely replaces human staff for WhatsApp customer service and sales.",
      details: [
        "Natural language understanding",
        "24/7 automated responses",
        "Smart conversation management",
        "Zero manual intervention needed",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Complete Sales Automation",
      description:
        "End-to-end automation from product browsing to payment processing - no manual work required.",
      details: [
        "Automated product catalog",
        "Smart inventory management",
        "Automated order processing",
        "Payment automation",
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Dashboard",
      description:
        "Real-time insights and analytics with automated reporting and performance monitoring.",
      details: [
        "Live sales analytics",
        "Customer behavior insights",
        "Automated performance reports",
        "ROI tracking & optimization",
      ],
    },
    {
      icon: Users,
      title: "Customer Relationship Automation",
      description:
        "Automated customer management, segmentation, and personalized marketing campaigns.",
      details: [
        "Automated customer profiles",
        "Smart segmentation",
        "Personalized automation",
        "Loyalty program automation",
      ],
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Complete business process automation - from lead generation to order fulfillment.",
      details: [
        "Workflow automation",
        "Task automation",
        "Integration automation",
        "Quality assurance automation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description:
        "Handle unlimited customers and orders without hiring additional staff.",
      details: [
        "Unlimited scalability",
        "No capacity constraints",
        "Performance optimization",
        "Growth acceleration",
      ],
    },
  ];

  const testimonials = [
    {
      name: "David Chen",
      business: "Golden Dragon Restaurant",
      role: "Owner",
      location: "Toronto, Canada",
      text: "We eliminated our entire WhatsApp order staff! The automation handles 800+ daily orders perfectly. Our operational costs dropped by 75% and we never miss an order anymore.",
      rating: 5,
      avatar: "DC",
      metrics: "800+ daily orders automated",
      savings: "$8,400/month staff savings",
    },
    {
      name: "Sarah Williams",
      business: "Fashion Forward Boutique",
      role: "Founder",
      location: "London, UK",
      text: "No more manual customer service! The intelligent automation understands customer queries perfectly and processes orders automatically. We're growing 300% faster now.",
      rating: 5,
      avatar: "SW",
      metrics: "300% growth acceleration",
      savings: "Zero manual work needed",
    },
    {
      name: "Ahmed Hassan",
      business: "TechMart Electronics",
      role: "Managing Director",
      location: "Dubai, UAE",
      text: "Complete business transformation! Our automation handles complex technical queries, processes bulk orders, and manages everything automatically. We operate 24/7 effortlessly.",
      rating: 5,
      avatar: "AH",
      metrics: "24/7 automated operations",
      savings: "$15,000/month operational savings",
    },
    {
      name: "Maria Rodriguez",
      business: "Sweet Treats Bakery",
      role: "Co-owner",
      location: "Madrid, Spain",
      text: "Even complex custom orders are handled automatically! The system collects specifications, schedules delivery, and processes payments without any manual intervention.",
      rating: 5,
      avatar: "MR",
      metrics: "Complex automation success",
      savings: "100% manual work eliminated",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ChatBiz WhatsApp Business Automation",
    description:
      "Global WhatsApp business automation platform that eliminates manual work for online businesses",
    url: "https://www.chatbiz.site",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "1497",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>
          ChatBiz - Global WhatsApp Business Automation | Eliminate Manual Work
          Forever
        </title>
        <meta
          name="description"
          content="Transform your business with intelligent WhatsApp automation. Eliminate manual work, handle unlimited orders 24/7, and scale without hiring staff. Used by 1000+ businesses worldwide."
        />
        <meta
          name="keywords"
          content="whatsapp automation, business automation, chatbot, staff replacement, sales automation, order management"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="ChatBiz Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ChatBiz
                </span>
                <div className="text-xs text-gray-500">Global Automation</div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Products", id: "products" },
                { name: "Live Demo", id: "pizza-demo" },
                { name: "Features", id: "features" },
                { name: "Pricing", id: "pricing" },
                { name: "Industries", id: "industries" },
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
                Get Started
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
                  { name: "Products", id: "products" },
                  { name: "Live Demo", id: "pizza-demo" },
                  { name: "Features", id: "features" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Industries", id: "industries" },
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
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
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

        <div className="max-w-7xl mx-auto px-4  mt-10 sm:px-6 lg:px-8 relative">
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
                Trusted by 1000+ Businesses Worldwide
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight"
            >
              Automate Every Business
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-10">
                Scale Without Hesitation
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your business with intelligent WhatsApp automation. Let
              customers browse, order, and pay automatically while you eliminate
              90% of manual work and scale without hiring staff.
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
                Book Free Automation Demo
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={tryPizzaDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Pizza className="ml-0 mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Try Live Pizza Demo
                <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("pricing")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-all flex items-center justify-center"
              >
                <DollarSign className="mr-3 w-5 h-5" />
                View Pricing
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-600 font-medium">
                  Manual Work Eliminated
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Replace human staff with automation
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">
                  Automated Operations
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Never miss an order again
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">
                  Unlimited Scalability
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Handle any order volume
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Automation Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent automation systems designed to eliminate manual work
              and transform how businesses operate on WhatsApp.
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
                <Bot className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  WhatsApp Business Automation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete automation platform that replaces your entire
                  WhatsApp customer service team. Handles everything from
                  product inquiries to order completion automatically.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <Workflow className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Process Automation Systems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end business process automation that eliminates manual
                  work across your entire operation - from lead generation to
                  order fulfillment.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <Target className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Custom Automation Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored automation systems built specifically for your
                  industry and business model. Complete customization to match
                  your exact requirements.
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
                    Why Businesses Choose ChatBiz
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Eliminate 90% of manual work
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Replace entire customer service teams
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Handle unlimited orders 24/7
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Custom solutions for any industry
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Proven ROI within 30 days
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Global support & maintenance
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

      {/* Live Pizza Demo Section */}
      <section
        id="pizza-demo"
        className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Pizza className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-gray-700 font-medium">
                Live Demo Available Now
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pizza Shop Automation
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
                Live Demo System
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our complete automation system in action. See how a
              pizza shop operates with ZERO manual work - from customer orders
              to dashboard management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      WhatsApp Ordering Bot
                    </h3>
                    <p className="text-gray-600">+92 332 994 5014</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Try our live pizza ordering system. Type "menu" to experience
                  complete automation - browse products, customize orders, and
                  checkout automatically.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-semibold text-green-800">Features</div>
                    <ul className="text-sm text-green-700 mt-2 space-y-1">
                      <li>• Intelligent conversation</li>
                      <li>• Product customization</li>
                      <li>• Automatic checkout</li>
                      <li>• Order tracking</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-800">Results</div>
                    <ul className="text-sm text-blue-700 mt-2 space-y-1">
                      <li>• Zero manual work</li>
                      <li>• 24/7 operations</li>
                      <li>• Unlimited capacity</li>
                      <li>• Perfect accuracy</li>
                    </ul>
                  </div>
                </div>
                <motion.button
                  onClick={tryPizzaDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Try Live WhatsApp Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Business Dashboard
                    </h3>
                    <p className="text-gray-600">Real-time Management</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  View the complete business dashboard that shows live orders,
                  customer analytics, and automated operations in real-time.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-purple-800">
                      Analytics
                    </div>
                    <ul className="text-sm text-purple-700 mt-2 space-y-1">
                      <li>• Live order tracking</li>
                      <li>• Customer insights</li>
                      <li>• Revenue analytics</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="font-semibold text-orange-800">
                      Management
                    </div>
                    <ul className="text-sm text-orange-700 mt-2 space-y-1">
                      <li>• Menu management</li>
                      <li>• Order processing</li>
                      <li>• Customer database</li>
                      <li>• Automation controls</li>
                    </ul>
                  </div>
                </div>
                <motion.button
                  onClick={viewDashboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Monitor className="w-5 h-5 mr-2" />
                  View Live Dashboard
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Demo Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Pizza Shop Automation Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-gray-600 font-medium">Staff Costs</div>
                <div className="text-sm text-green-600 mt-1">
                  100% automated
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Operations</div>
                <div className="text-sm text-blue-600 mt-1">Never closes</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">Order Capacity</div>
                <div className="text-sm text-purple-600 mt-1">
                  Unlimited scale
                </div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  15s
                </div>
                <div className="text-gray-600 font-medium">Response Time</div>
                <div className="text-sm text-orange-600 mt-1">
                  Instant service
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
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
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation capabilities designed to eliminate manual
              work and transform your business operations completely.
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Investment in Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional automation systems that eliminate staff costs and
              generate massive ROI. Choose your level of automation
              transformation.
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
                    ? "border-purple-500 ring-4 ring-purple-100"
                    : pkg.isCustom
                    ? "border-yellow-500 ring-4 ring-yellow-100"
                    : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-semibold">
                    ⭐ Most Popular
                  </div>
                )}

                {pkg.isCustom && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-3 font-semibold">
                    ✨ Fully Custom
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
                    </div>
                    <div className="text-gray-600 mb-1">
                      {pkg.monthlyPrice}/month
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span>Setup Investment:</span>
                        <span className="font-medium">{pkg.setup}</span>
                      </div>
                    </div>
                    {pkg.savings && (
                      <div className="text-sm text-green-600 font-medium bg-green-50 rounded-lg p-2 text-center">
                        💰 {pkg.savings}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-800">
                      Automation Includes:
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
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg"
                    }`}
                  >
                    {pkg.isCustom ? "Get Custom Quote" : "Start Automation"}
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ROI Calculation: Starter Package Example
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">$1,500</div>
                  <div className="text-gray-600">Monthly Staff Costs</div>
                  <div className="text-sm text-red-600">
                    1-2 WhatsApp staff @ $750-1500/month
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">$97</div>
                  <div className="text-gray-600">ChatBiz Monthly Cost</div>
                  <div className="text-sm text-blue-600">
                    Complete automation system
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">
                    $1,403
                  </div>
                  <div className="text-gray-600">Monthly Savings</div>
                  <div className="text-sm text-green-600">
                    1,447% ROI every month
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>Payback Period:</strong> 17 days |{" "}
                <strong>Annual Savings:</strong> $16,836
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={bookDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Your ROI
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Start Saving Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
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
              Automation for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automation systems work for any business that sells online.
              From restaurants to retail, we eliminate manual work across all
              industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">
                        Perfect for:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {industry.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-sm text-gray-600">
                              {example}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Businesses worldwide have eliminated manual work and transformed
              their operations with ChatBiz automation
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
                    <div className="text-xs text-gray-500">
                      {testimonial.location}
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

                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-800">
                        {testimonial.metrics}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-800">
                        {testimonial.savings}
                      </span>
                    </div>
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
              Ready to Eliminate Manual Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent automation. Stop manual
              work forever and scale without limits.
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
                  Start Your Automation Journey
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <Bot className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        Global Support Hotline
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
                    <Mail className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        Automation Specialists
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
                        WhatsApp Automation
                      </div>
                      <a
                        href="https://wa.me/923329934858?text=I want to eliminate manual work with automation"
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        Get Instant Quote
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Live Demo Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Try Our Live Demo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                    <Pizza className="w-8 h-8 text-orange-400" />
                    <div>
                      <div className="text-white font-semibold">
                        Pizza Shop Demo
                      </div>
                      <div className="text-blue-200 text-sm">
                        +92 332 994 5014 - Type "menu"
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={tryPizzaDemo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Try Bot
                    </motion.button>
                    <motion.button
                      onClick={viewDashboard}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                    >
                      <Monitor className="w-4 h-4 mr-2" />
                      View Dashboard
                    </motion.button>
                  </div>
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
                Our Automation Process
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Business Analysis
                    </h4>
                    <p className="text-blue-100">
                      We analyze your current manual processes and identify
                      automation opportunities for maximum impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Custom Automation Design
                    </h4>
                    <p className="text-blue-100">
                      We design and build intelligent automation systems
                      specifically tailored to your business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Implementation & Training
                    </h4>
                    <p className="text-blue-100">
                      Complete system deployment with comprehensive team
                      training and optimization for perfect performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      24/7 Automated Operations
                    </h4>
                    <p className="text-blue-100">
                      Your business operates automatically with zero manual
                      intervention, unlimited scalability, and continuous
                      optimization.
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
                Call Automation Experts
              </motion.a>

              <motion.a
                href="https://wa.me/923329934858?text=I want to eliminate manual work with automation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all inline-flex items-center justify-center"
              >
                <Workflow className="mr-3 w-5 h-5" />
                Start Automation
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
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="ChatBiz Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold">ChatBiz</span>
                  <div className="text-sm text-gray-400">
                    Global Business Automation
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Leading provider of intelligent business automation solutions.
                We eliminate manual work for businesses worldwide through
                cutting-edge WhatsApp automation technology.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">
                  Trusted by 1000+ businesses globally
                </span>
              </div>

              <motion.button
                onClick={bookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Demo
              </motion.button>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">
                Automation Solutions
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp Business Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Process Automation Systems
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Custom Automation Development
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Staff Replacement Solutions
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  24/7 Automated Operations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Support & Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  24/7 Global Support
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Implementation Services
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Training & Optimization
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Enterprise Solutions
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-semibold mb-4 text-lg">
                  Global Headquarters
                </h4>
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
                    Global Operations
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    <a
                      href="https://wa.me/923329934858?text=I need automation support"
                      className="hover:text-white transition-colors"
                    >
                      24/7 WhatsApp Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 ChatBiz Global. All rights reserved. Transforming
                businesses worldwide through intelligent automation.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Global Support
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
