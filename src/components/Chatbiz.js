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
  TrendingUp,
  Clock,
  Bot,
  MessageSquare,
  Target,
  Rocket,
  Award,
  CheckCircle,
  Calendar,
  Video,
  Pizza,
  ExternalLink,
  Monitor,
  DollarSign,
  Utensils,
  Coffee,
} from "lucide-react";

const RestaurantAutomationWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "demo",
        "features",
        "pricing",
        "results",
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

  const contactUs = () => {
    const message =
      "Hi! I want WhatsApp automation for my restaurant. Can you show me how this works for my business?";
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

  const packages = [
    {
      name: "Restaurant Starter",
      monthlyPrice: "$97",
      setup: "$497",
      description:
        "Perfect for small restaurants ready to automate WhatsApp orders",
      features: [
        "Complete WhatsApp automation setup",
        "Up to 50 menu items",
        "300 automated orders per month",
        "Smart ordering chatbot",
        "Restaurant dashboard",
        "Order tracking & management",
        "Customer database",
        "Payment processing",
        "Email support",
        "Cash on Delivery support",
        "Basic analytics",
        "Monthly backup",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Utensils,
      savings: "Saves $1,200/month in staff costs",
    },
    {
      name: "Restaurant Pro",
      monthlyPrice: "$197",
      setup: "$697",
      description: "Complete automation for growing restaurants",
      features: [
        "Advanced WhatsApp automation",
        "Unlimited menu items",
        "Unlimited automated orders",
        "AI-powered conversation handling",
        "Advanced restaurant dashboard",
        "Multi-payment integration",
        "Inventory management",
        "Customer targeting",
        "Broadcast to 500 customers",
        "Advanced reporting",
        "Priority support",
        "Discount & promotion automation",
        "Weekly optimization",
        "Staff training included",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
      savings: "Saves $2,400/month in staff costs",
    },
    {
      name: "Multi-Location",
      monthlyPrice: "$297",
      setup: "$997",
      description: "Enterprise solution for restaurant chains",
      features: [
        "Multi-location management",
        "Unlimited everything",
        "Advanced AI conversations",
        "Chain-wide analytics",
        "Custom integrations",
        "Advanced inventory automation",
        "Unlimited broadcasting",
        "Real-time business intelligence",
        "24/7 dedicated support",
        "Staff management tools",
        "Custom feature development",
        "Daily optimization",
        "Enterprise security",
        "Dedicated success manager",
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
      icon: Award,
      savings: "Saves $5,000+/month in staff costs",
    },
  ];

  const features = [
    {
      icon: Bot,
      title: "Smart WhatsApp Ordering",
      description:
        "AI chatbot handles complete customer conversations, takes orders, and processes payments automatically.",
      details: [
        "Natural conversation flow",
        "Menu browsing automation",
        "Order customization",
        "Automatic checkout",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Complete Order Management",
      description:
        "End-to-end order processing from customer inquiry to delivery confirmation.",
      details: [
        "Automated order taking",
        "Kitchen notifications",
        "Delivery tracking",
        "Customer updates",
      ],
    },
    {
      icon: BarChart3,
      title: "Restaurant Dashboard",
      description:
        "Real-time analytics showing orders, revenue, popular items, and customer insights.",
      details: [
        "Live order monitoring",
        "Sales analytics",
        "Menu performance",
        "Customer behavior",
      ],
    },
    {
      icon: Users,
      title: "Customer Database",
      description:
        "Automatically build and manage customer relationships with purchase history.",
      details: [
        "Auto customer profiles",
        "Order history tracking",
        "Loyalty programs",
        "Targeted marketing",
      ],
    },
  ];

  const results = [
    {
      restaurant: "Mario's Pizza Palace",
      location: "Karachi",
      before: "$800/month staff costs + missed orders",
      after: "$97/month automation + zero missed orders",
      savings: "$703/month savings",
      improvement: "300% more orders processed",
    },
    {
      restaurant: "Spice Garden Restaurant",
      location: "Lahore",
      before: "$1,200/month staff costs + order errors",
      after: "$197/month automation + perfect accuracy",
      savings: "$1,003/month savings",
      improvement: "24/7 operations, no staff needed",
    },
    {
      restaurant: "Delhi Darbar",
      location: "Islamabad",
      before: "$1,500/month staff + limited hours",
      after: "$197/month automation + 24/7 service",
      savings: "$1,303/month savings",
      improvement: "500% increase in night orders",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>
          ChatBiz Restaurant Automation | Stop Missing WhatsApp Orders Forever
        </title>
        <meta
          name="description"
          content="Automate your restaurant's WhatsApp orders completely. Zero staff needed, 24/7 operations, never miss an order again. See live demo!"
        />
        <meta
          name="keywords"
          content="restaurant automation, whatsapp orders, pizza shop automation, restaurant chatbot, food delivery automation"
        />
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
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Pizza className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ChatBiz
                </span>
                <div className="text-xs text-gray-500">
                  Restaurant Automation
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Live Demo", id: "demo" },
                { name: "Features", id: "features" },
                { name: "Pricing", id: "pricing" },
                { name: "Results", id: "results" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-orange-600 transition-colors font-medium relative ${
                    activeSection === item.id ? "text-orange-600" : ""
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600"
                    />
                  )}
                </button>
              ))}

              <motion.button
                onClick={tryPizzaDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
              >
                <Pizza className="w-4 h-4 mr-2" />
                Try Demo
              </motion.button>

              <motion.button
                onClick={contactUs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
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
                  { name: "Live Demo", id: "demo" },
                  { name: "Features", id: "features" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Results", id: "results" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={tryPizzaDemo}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-center flex items-center justify-center"
                >
                  <Pizza className="w-4 h-4 mr-2" />
                  Try Demo
                </button>
                <button
                  onClick={contactUs}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
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
        className="pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5"></div>
        <motion.div
          style={{ y: yRange }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 relative">
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
                Trusted by 100+ Restaurants
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight"
            >
              Stop Missing
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent block mt-4">
                WhatsApp Orders Forever
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Automate your restaurant's WhatsApp ordering completely. Customers
              browse menu, place orders, and pay automatically while you
              eliminate staff costs and operate 24/7.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.button
                onClick={tryPizzaDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Pizza className="ml-0 mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Try Live Demo Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={viewDashboard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Monitor className="ml-0 mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Dashboard
                <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={contactUs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Get Quote
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-gray-600 font-medium">Staff Costs</div>
                <div className="text-sm text-gray-500 mt-2">
                  100% automated ordering
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Operations</div>
                <div className="text-sm text-gray-500 mt-2">
                  Never miss an order
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
                <div className="text-gray-600 font-medium">Days Setup</div>
                <div className="text-sm text-gray-500 mt-2">
                  Ready in one week
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Pizza className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">
                Live System Working Now
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See It Work Live
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                Your Restaurant Tomorrow
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our live pizza shop automation right now. This is exactly how
              your restaurant will work - customers order automatically, no
              staff needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Try WhatsApp Ordering
                    </h3>
                    <p className="text-green-700 font-medium">
                      +92 332 994 5014
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-6 border-l-4 border-green-500">
                  <p className="text-gray-700 font-medium mb-2">Simply send:</p>
                  <p className="text-2xl font-bold text-green-600">menu</p>
                  <p className="text-sm text-gray-600 mt-2">
                    The bot will handle everything automatically
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-2">
                      What You'll See:
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Smart menu display</li>
                      <li>• Easy ordering process</li>
                      <li>• Size & customization</li>
                      <li>• Automatic checkout</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-800 mb-2">
                      No Staff Needed:
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 24/7 availability</li>
                      <li>• Perfect accuracy</li>
                      <li>• Instant responses</li>
                      <li>• Unlimited capacity</li>
                    </ul>
                  </div>
                </div>

                <motion.button
                  onClick={tryPizzaDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Try Live Demo Now
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
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Restaurant Dashboard
                    </h3>
                    <p className="text-blue-700 font-medium">
                      Real-time Management
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  See exactly how you'll manage your automated restaurant. Live
                  orders, analytics, menu management - everything in one
                  dashboard.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="font-semibold text-purple-800 mb-2">
                      Live Tracking:
                    </div>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Real-time orders</li>
                      <li>• Customer data</li>
                      <li>• Sales analytics</li>
                      <li>• Popular items</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800 mb-2">
                      Easy Control:
                    </div>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Menu editing</li>
                      <li>• Price updates</li>
                      <li>• Order status</li>
                      <li>• Customer messaging</li>
                    </ul>
                  </div>
                </div>

                <motion.button
                  onClick={viewDashboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center text-lg"
                >
                  <Monitor className="w-5 h-5 mr-2" />
                  View Live Dashboard
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              This Demo System Handles:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600 font-medium">Orders/Day</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">15s</div>
                <div className="text-gray-600 font-medium">Avg Response</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  $0
                </div>
                <div className="text-gray-600 font-medium">Staff Needed</div>
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
              How Restaurant Automation Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete WhatsApp automation designed specifically for
              restaurants. From order taking to kitchen notifications -
              everything automated.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
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
              Simple Restaurant Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One-time setup, small monthly fee. Save thousands in staff costs
              while never missing another order.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 relative overflow-hidden ${
                  pkg.popular
                    ? "border-purple-500 ring-4 ring-purple-100"
                    : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-semibold">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? "pt-16" : ""}`}>
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
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {pkg.monthlyPrice}
                      </div>
                      <div className="text-gray-600 mb-2">per month</div>
                      <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span>One-time setup:</span>
                          <span className="font-medium">{pkg.setup}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-sm text-green-600 font-medium bg-green-50 rounded-lg p-3">
                      💰 {pkg.savings}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-800">
                      Everything Included:
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
                    onClick={contactUs}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                        : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg"
                    }`}
                  >
                    Get Started Today
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
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ROI Example: Small Restaurant
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">$800</div>
                  <div className="text-gray-600">Current Monthly Cost</div>
                  <div className="text-sm text-red-600">
                    WhatsApp staff + missed orders
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">$97</div>
                  <div className="text-gray-600">ChatBiz Monthly Cost</div>
                  <div className="text-sm text-blue-600">
                    Complete automation
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">$703</div>
                  <div className="text-gray-600">Monthly Savings</div>
                  <div className="text-sm text-green-600">
                    Pays for itself in 3 weeks
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>Annual Savings:</strong> $8,436 |
                <strong> Setup Payback:</strong> 21 days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={contactUs}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate My Savings
                </motion.button>
                <motion.button
                  onClick={tryPizzaDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Try Demo First
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results"
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
              Real Restaurant Results
            </h2>
            <p className="text-xl text-gray-600">
              Local restaurants using ChatBiz automation are saving thousands
              while handling more orders than ever before.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {result.restaurant.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {result.restaurant}
                    </div>
                    <div className="text-sm text-gray-600">
                      {result.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="font-medium text-red-800 mb-1">Before:</div>
                    <div className="text-sm text-red-700">{result.before}</div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="font-medium text-green-800 mb-1">
                      After:
                    </div>
                    <div className="text-sm text-green-700">{result.after}</div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-blue-800">
                          {result.savings}
                        </div>
                        <div className="text-xs text-blue-600">
                          {result.improvement}
                        </div>
                      </div>
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Get These Results?
              </h3>
              <p className="text-gray-600 mb-8">
                Join these successful restaurants. Setup takes only 7 days and
                you'll start saving immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={tryPizzaDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Pizza className="w-5 h-5 mr-2" />
                  Try Demo First
                </motion.button>

                <motion.button
                  onClick={contactUs}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start My Setup
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden"
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
              Ready to Automate Your Restaurant?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop missing orders and eliminate staff costs. Get your restaurant
              automation setup in just 7 days.
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
                  Get Started Today
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <Phone className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">Call Now</div>
                      <a
                        href="tel:+923329934858"
                        className="text-orange-200 hover:text-white transition-colors"
                      >
                        +92 332 993 4858
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <MessageCircle className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        WhatsApp Us
                      </div>
                      <a
                        href="https://wa.me/923329934858?text=I want WhatsApp automation for my restaurant"
                        className="text-orange-200 hover:text-white transition-colors"
                      >
                        Get Instant Quote
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl"
                  >
                    <Mail className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <a
                        href="mailto:realahmedali4@gmail.com"
                        className="text-orange-200 hover:text-white transition-colors"
                      >
                        realahmedali4@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Live Demo Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Try Before You Buy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                    <Pizza className="w-8 h-8 text-orange-300" />
                    <div>
                      <div className="text-white font-semibold">
                        Live Pizza Demo
                      </div>
                      <div className="text-orange-200 text-sm">
                        +92 332 994 5014 - Send "menu"
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={tryPizzaDemo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
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
                      Dashboard
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
                Setup Process
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Menu & Requirements
                    </h4>
                    <p className="text-orange-100">
                      We analyze your menu and ordering process to design the
                      perfect automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Custom Bot Development
                    </h4>
                    <p className="text-orange-100">
                      We build your personalized WhatsApp ordering system with
                      your menu and branding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Testing & Training
                    </h4>
                    <p className="text-orange-100">
                      Complete testing and staff training to ensure smooth
                      operations from day one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Go Live in 7 Days
                    </h4>
                    <p className="text-orange-100">
                      Your restaurant operates automatically with 24/7 WhatsApp
                      ordering and zero manual work.
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
                onClick={tryPizzaDemo}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Pizza className="mr-3 w-5 h-5" />
                Try Demo First
              </motion.button>

              <motion.a
                href="tel:+923329934858"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/923329934858?text=I want WhatsApp automation for my restaurant"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Pizza className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">ChatBiz</span>
                  <div className="text-sm text-gray-400">
                    Restaurant Automation
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                WhatsApp automation specialists for restaurants. We eliminate
                manual work and help restaurants handle unlimited orders 24/7.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Pizza className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400 text-sm">
                  Trusted by 100+ restaurants
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">
                Restaurant Solutions
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp Order Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Menu Management System
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Customer Database Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Payment Processing
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Analytics & Reporting
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact & Support</h3>
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
                  <MessageCircle className="w-4 h-4 mr-3" />
                  <a
                    href="https://wa.me/923329934858?text=I need restaurant automation support"
                    className="hover:text-white transition-colors"
                  >
                    24/7 WhatsApp Support
                  </a>
                </li>
                <li className="flex items-center">
                  <Pizza className="w-4 h-4 mr-3" />
                  <a
                    href="https://wa.me/923329945014?text=menu"
                    className="hover:text-white transition-colors"
                  >
                    Try Live Demo
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <motion.button
                  onClick={contactUs}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Started Today
                </motion.button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 ChatBiz Restaurant Automation. All rights reserved.
                Transforming restaurants through intelligent WhatsApp
                automation.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Restaurant Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantAutomationWebsite;
