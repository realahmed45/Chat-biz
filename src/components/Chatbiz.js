import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  Phone,
  ShoppingCart,
  Pizza,
  Star,
  ArrowRight,
  Bot,
  Scissors,
  Dumbbell,
  Car,
  Home,
  Briefcase,
  Coffee,
  Heart,
  GraduationCap,
  Zap,
  Globe,
  TrendingUp,
  Award,
  ExternalLink,
  Play,
  Sparkles,
  Rocket,
  Building,
  Menu,
  X,
  Check,
  Calculator,
  Mail,
  Monitor,
  BarChart3,
} from "lucide-react";
import RestaurantTemplate from "./Resturanttemplate";
const ChatBizPlatform = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState("welcome");
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const messagesEndRef = useRef(null);
  const [currentView, setCurrentView] = useState("main"); // Add this line
  const messagesContainerRef = useRef(null);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "demo",
        "templates",
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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // If restaurant template is selected, show it
  if (currentView === "restaurant-template") {
    return <RestaurantTemplate onBack={() => setCurrentView("main")} />;
  }
  // Business categories with demo data
  const businessCategories = [
    {
      id: "restaurant",
      name: "Restaurant",
      icon: Pizza,
      color: "from-orange-500 to-red-500",
      description: "Complete food ordering automation",
      stats: { customers: "2,500+", savings: "$3,200/mo", orders: "450/day" },
      menu: [
        {
          name: "Margherita Pizza",
          price: 14.99,
          description: "Fresh mozzarella, basil, tomato",
        },
        {
          name: "Chicken Burger",
          price: 12.99,
          description: "Grilled chicken, lettuce, mayo",
        },
        {
          name: "Caesar Salad",
          price: 9.99,
          description: "Crisp romaine, parmesan, croutons",
        },
      ],
    },
    {
      id: "salon",
      name: "Beauty Salon",
      icon: Scissors,
      color: "from-pink-500 to-purple-500",
      description: "Appointment booking & service management",
      stats: { customers: "1,800+", savings: "$2,400/mo", bookings: "120/day" },
      menu: [
        {
          name: "Hair Cut & Style",
          price: 45.0,
          description: "Professional cut and styling",
        },
        {
          name: "Facial Treatment",
          price: 65.0,
          description: "Deep cleansing facial",
        },
        {
          name: "Manicure & Pedicure",
          price: 35.0,
          description: "Complete nail care",
        },
      ],
    },
    {
      id: "gym",
      name: "Fitness Center",
      icon: Dumbbell,
      color: "from-green-500 to-teal-500",
      description: "Membership & class scheduling automation",
      stats: { customers: "3,200+", savings: "$4,100/mo", classes: "85/day" },
      menu: [
        {
          name: "Monthly Membership",
          price: 79.99,
          description: "Full gym access + classes",
        },
        {
          name: "Personal Training",
          price: 120.0,
          description: "1-on-1 training session",
        },
        {
          name: "Group Fitness Class",
          price: 25.0,
          description: "High-intensity group workout",
        },
      ],
    },
    {
      id: "automotive",
      name: "Auto Service",
      icon: Car,
      color: "from-blue-500 to-indigo-500",
      description: "Service booking & maintenance tracking",
      stats: { customers: "1,200+", savings: "$2,800/mo", services: "65/day" },
      menu: [
        {
          name: "Oil Change Service",
          price: 49.99,
          description: "Full synthetic oil change",
        },
        {
          name: "Brake Inspection",
          price: 89.99,
          description: "Complete brake system check",
        },
        {
          name: "Tire Rotation",
          price: 29.99,
          description: "4-wheel tire rotation",
        },
      ],
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: Home,
      color: "from-emerald-500 to-green-500",
      description: "Property inquiry & viewing automation",
      stats: { customers: "850+", savings: "$3,500/mo", inquiries: "180/day" },
      menu: [
        {
          name: "Property Viewing",
          price: 0.0,
          description: "Schedule a property tour",
        },
        {
          name: "Market Analysis",
          price: 150.0,
          description: "Comprehensive market report",
        },
        {
          name: "Consultation",
          price: 0.0,
          description: "Free real estate consultation",
        },
      ],
    },
    {
      id: "consulting",
      name: "Business Consulting",
      icon: Briefcase,
      color: "from-purple-500 to-violet-500",
      description: "Client consultation & project management",
      stats: {
        customers: "650+",
        savings: "$5,200/mo",
        consultations: "45/day",
      },
      menu: [
        {
          name: "Strategy Consultation",
          price: 250.0,
          description: "2-hour strategy session",
        },
        {
          name: "Business Plan Review",
          price: 400.0,
          description: "Complete plan analysis",
        },
        {
          name: "Market Research",
          price: 350.0,
          description: "Industry analysis report",
        },
      ],
    },
    {
      id: "cafe",
      name: "Coffee Shop",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      description: "Coffee ordering & loyalty programs",
      stats: { customers: "1,950+", savings: "$1,800/mo", orders: "320/day" },
      menu: [
        {
          name: "Espresso Latte",
          price: 4.5,
          description: "Rich espresso with steamed milk",
        },
        {
          name: "Blueberry Muffin",
          price: 3.25,
          description: "Fresh baked with real blueberries",
        },
        {
          name: "Iced Americano",
          price: 3.75,
          description: "Cold brew with ice",
        },
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      description: "Appointment scheduling & patient management",
      stats: {
        customers: "2,100+",
        savings: "$4,500/mo",
        appointments: "95/day",
      },
      menu: [
        {
          name: "General Consultation",
          price: 120.0,
          description: "45-minute consultation",
        },
        {
          name: "Health Checkup",
          price: 200.0,
          description: "Comprehensive health screening",
        },
        {
          name: "Follow-up Visit",
          price: 80.0,
          description: "25-minute follow-up",
        },
      ],
    },
    {
      id: "education",
      name: "Education Center",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-500",
      description: "Course enrollment & student management",
      stats: {
        customers: "1,400+",
        savings: "$2,900/mo",
        enrollments: "75/day",
      },
      menu: [
        {
          name: "Web Development Course",
          price: 599.0,
          description: "12-week intensive program",
        },
        {
          name: "Digital Marketing",
          price: 399.0,
          description: "8-week certification course",
        },
        {
          name: "Python Programming",
          price: 499.0,
          description: "10-week beginner to advanced",
        },
      ],
    },
    {
      id: "retail",
      name: "Retail Store",
      icon: ShoppingCart,
      color: "from-teal-500 to-green-500",
      description: "Product ordering & inventory management",
      stats: { customers: "3,500+", savings: "$2,600/mo", orders: "280/day" },
      menu: [
        {
          name: "Wireless Headphones",
          price: 89.99,
          description: "Bluetooth 5.0, 24hr battery",
        },
        {
          name: "Smart Watch",
          price: 199.99,
          description: "Fitness tracking, GPS enabled",
        },
        {
          name: "Phone Case",
          price: 24.99,
          description: "Drop-proof protection",
        },
      ],
    },
  ];

  const packages = [
    {
      name: "Business Starter",
      monthlyPrice: "$97",
      setup: "$497",
      description:
        "Perfect for small businesses ready to automate customer interactions",
      features: [
        "Complete WhatsApp automation setup",
        "Any business type supported",
        "Up to 500 automated interactions/month",
        "Smart conversation handling",
        "Business dashboard",
        "Customer database",
        "Payment processing integration",
        "25+ language support",
        "Email support",
        "Basic analytics",
        "Monthly system backup",
        "Mobile app access",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Building,
      savings: "Saves $1,500/month in staff costs",
    },
    {
      name: "Business Pro",
      monthlyPrice: "$197",
      setup: "$697",
      description:
        "Complete automation for growing businesses across all industries",
      features: [
        "Advanced WhatsApp automation",
        "Unlimited business interactions",
        "AI-powered conversation handling",
        "Advanced business dashboard",
        "Multi-payment integration",
        "Inventory/appointment management",
        "Customer targeting & segmentation",
        "Broadcast to 1000+ customers",
        "Advanced reporting & analytics",
        "Priority support",
        "Discount & promotion automation",
        "Weekly optimization calls",
        "Staff training included",
        "Custom integrations",
      ],
      popular: true,
      color: "from-orange-500 to-red-500",
      icon: Rocket,
      savings: "Saves $3,200/month in staff costs",
    },
    {
      name: "Enterprise",
      monthlyPrice: "$297",
      setup: "$997",
      description: "Enterprise solution for multi-location businesses",
      features: [
        "Multi-location management",
        "Unlimited everything",
        "Advanced AI with custom training",
        "Enterprise-wide analytics",
        "Custom API integrations",
        "Advanced automation workflows",
        "Unlimited broadcasting",
        "Real-time business intelligence",
        "24/7 dedicated support",
        "Multi-user management",
        "Custom feature development",
        "Daily optimization",
        "Enterprise security & compliance",
        "Dedicated success manager",
      ],
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: Award,
      savings: "Saves $8,000+/month in staff costs",
    },
  ];

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description:
        "Smart chatbots handle complete customer interactions across any business type with natural conversation flow.",
      details: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-turn conversations",
        "Industry-specific training",
      ],
    },
    {
      icon: Globe,
      title: "Global Multi-Language Support",
      description:
        "Serve customers worldwide with automatic translation and localization for 25+ languages.",
      details: [
        "Real-time translation",
        "Cultural localization",
        "Currency conversion",
        "Timezone handling",
      ],
    },
    {
      icon: Zap,
      title: "5-Minute Setup",
      description:
        "Get your business automation running instantly with our plug-and-play system.",
      details: [
        "One-click WhatsApp integration",
        "Pre-built industry templates",
        "Automatic configuration",
        "Instant deployment",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Real-time insights into customer behavior, sales performance, and automation effectiveness.",
      details: [
        "Live performance dashboards",
        "Customer journey tracking",
        "Revenue analytics",
        "Optimization recommendations",
      ],
    },
  ];

  const results = [
    {
      business: "Mediterranean Restaurant Chain",
      location: "London, UK",
      before: "$4,500/month staff costs + missed orders",
      after: "$197/month automation + zero missed orders",
      savings: "$4,303/month savings",
      improvement: "400% more orders processed",
    },
    {
      business: "Elite Fitness Centers",
      location: "Dubai, UAE",
      before: "$3,200/month booking staff + scheduling errors",
      after: "$197/month automation + perfect scheduling",
      savings: "$3,003/month savings",
      improvement: "24/7 class booking, 300% member satisfaction",
    },
    {
      business: "Premium Auto Service",
      location: "Toronto, Canada",
      before: "$2,800/month appointment staff + limited hours",
      after: "$97/month automation + 24/7 booking",
      savings: "$2,703/month savings",
      improvement: "500% increase in after-hours bookings",
    },
  ];

  const globalStats = [
    { label: "Active Businesses", value: "25,000+", icon: Building },
    { label: "Countries Served", value: "47", icon: Globe },
    { label: "Daily Transactions", value: "500K+", icon: TrendingUp },
    { label: "Customer Satisfaction", value: "99.8%", icon: Star },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const contactUs = () => {
    const message =
      "Hi! I want WhatsApp automation for my business. Can you show me how this works?";
    const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const viewDashboard = () => {
    window.open("https://pizza-shop-dashboard.vercel.app/", "_blank");
  };

  // Demo functions
  const scrollToBottom = () => {
    // Scroll only within the messages container, not the entire page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const addMessage = (text, isBot = true) => {
    const message = {
      id: Date.now() + Math.random(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const simulateTyping = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const startDemo = (businessType) => {
    setSelectedDemo(businessType);
    setMessages([]);
    setCart([]);
    simulateTyping(() => {
      const business = businessCategories.find((b) => b.id === businessType.id);
      addMessage(`🤖 **Welcome to ${business.name} WhatsApp Business!**

📱 **This is YOUR business WhatsApp number after ChatBiz automation:**

✨ **Complete WhatsApp Business Automation**
🔹 Customers message your REAL business WhatsApp number
🔹 AI handles ALL conversations automatically  
🔹 No staff needed to respond to messages
🔹 Works 24/7 on your existing WhatsApp Business account

📊 **Live Results**: ${business.stats.customers} customers served automatically
💰 **Average Savings**: ${business.stats.savings} per month

**AUTOMATED WHATSAPP MENU:**
1️⃣ Browse ${
        business.name === "Real Estate"
          ? "Services"
          : business.name === "Healthcare"
          ? "Appointments"
          : "Products/Services"
      }
2️⃣ Special Offers  
3️⃣ Business Hours & Contact
4️⃣ My Account & Order History

**Type any number (1-4) to continue!**

🚀 **ChatBiz Promise**: Your customers will chat with your REAL WhatsApp Business number - we just make it completely automated so you never have to manually respond again!

📱 **Your number**: +1 (555) YOUR-BUSINESS  
🤖 **Powered by**: ChatBiz AI Automation`);
      setConversationState("main_menu");
    });
  };

  const handleUserMessage = (message) => {
    addMessage(message, false);

    simulateTyping(() => {
      processUserMessage(message.toLowerCase().trim());
    }, 800);
  };

  const processUserMessage = (message) => {
    switch (conversationState) {
      case "main_menu":
        handleMainMenu(message);
        break;
      case "browsing_items":
        handleItemBrowsing(message);
        break;
      case "cart_actions":
        handleCartActions(message);
        break;
      default:
        if (message === "menu" || message === "start" || message === "0") {
          showMainMenu();
        } else {
          addMessage(
            `❌ **Invalid input!** Please type a valid option or "menu" to start over.`
          );
        }
        break;
    }
  };

  const handleCartActions = (choice) => {
    switch (choice) {
      case "1":
        // Continue Shopping - back to main menu
        setConversationState("main_menu");
        showMainMenu();
        break;
      case "2":
        // Proceed to Checkout
        proceedToCheckout();
        break;
      case "3":
        // View Full Cart
        showFullCart();
        break;
      default:
        addMessage(`❌ **Invalid choice!** Please select option 1, 2, or 3.`);
        break;
    }
  };

  const proceedToCheckout = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const orderId = `CB${Date.now()}`;

    addMessage(`✅ **ORDER CONFIRMED!** ✅

🎉 **Thank you for choosing ${selectedDemo.name}!**

📋 **Order Details:**
🆔 Order ID: **${orderId}**
💰 Total: **${total.toFixed(2)}**
📞 Phone: **Your WhatsApp Number**
⏰ Processing Time: **Instant**
💳 Payment: **As per your preference**

🚀 **CHATBIZ AUTOMATION SUCCESS!**

**Your complete order was processed automatically:**
✅ Zero human staff involvement
✅ Instant order confirmation  
✅ Real-time business notification
✅ Automatic order tracking
✅ Professional customer experience

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 **Want ChatBiz automation for YOUR ${selectedDemo.name.toLowerCase()}?**

🌐 Website: **www.chatbiz.com**
📱 WhatsApp: **+92-332-993-4858**
📧 Email: **chatbiz50@gmail.com**

**Transform your ${selectedDemo.name.toLowerCase()} today!**
✨ Eliminate manual order handling
✨ Handle unlimited customers simultaneously  
✨ 24/7 automated operations
✨ Never miss another order

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Type **"menu"** to try another order!`);

    // Reset cart and go back to main menu
    setCart([]);
    setConversationState("main_menu");
  };

  const showFullCart = () => {
    if (cart.length === 0) {
      addMessage(`🛒 **YOUR CART IS EMPTY**

Ready to add some items? Type "menu" to browse our ${selectedDemo.name.toLowerCase()} options!`);
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    let response = `🛒 **YOUR CART**

📋 **Order Summary:**\n`;

    cart.forEach((item, index) => {
      response += `\n${index + 1}. ${item.name}
   💰 ${item.price.toFixed(2)} x ${item.quantity}`;
    });

    response += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 **TOTAL: ${total.toFixed(2)}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**What would you like to do?**

1️⃣ Continue Shopping
2️⃣ Proceed to Checkout
3️⃣ Clear Cart

**Select an option (1-3)**`;

    addMessage(response);
    setConversationState("cart_actions");
  };

  const showMainMenu = () => {
    if (!selectedDemo) return;

    setConversationState("main_menu");
    addMessage(`🤖 Welcome back to ${selectedDemo.name} Automation!

**MAIN MENU:**
1️⃣ Browse ${
      selectedDemo.name === "Real Estate"
        ? "Services"
        : selectedDemo.name === "Healthcare"
        ? "Appointments"
        : "Products/Services"
    }
2️⃣ Special Offers
3️⃣ Business Hours & Contact
4️⃣ My Account

**Type any number (1-4) to continue!**

🚀 **ChatBiz**: Your automated business assistant is ready to help!`);
  };

  const handleMainMenu = (choice) => {
    switch (choice) {
      case "1":
        setConversationState("browsing_items");
        showItems();
        break;
      case "2":
        showSpecialOffers();
        break;
      case "3":
        showBusinessInfo();
        break;
      case "4":
        showAccount();
        break;
      default:
        addMessage(
          `❌ **Invalid choice!** Please select a valid option (1-4) from the menu above.`
        );
        break;
    }
  };

  const showItems = () => {
    const business = selectedDemo;
    let response = `🏪 **${business.name.toUpperCase()} CATALOG**

**Premium ${
      business.name === "Healthcare" ? "Services" : "Products/Services"
    } Available:**\n`;

    business.menu.forEach((item, index) => {
      response += `\n${index + 1}️⃣ **${item.name}**`;
      if (item.price > 0) {
        response += `\n   💰 $${item.price.toFixed(2)}`;
      } else {
        response += `\n   💰 FREE`;
      }
      response += `\n   📝 ${item.description}\n`;
    });

    response += `\n**Select any number to add to cart!**\n\n🤖 **ChatBiz**: Real-time inventory from business system!`;
    addMessage(response);
  };

  const handleItemBrowsing = (choice) => {
    const itemIndex = parseInt(choice) - 1;
    if (itemIndex >= 0 && itemIndex < selectedDemo.menu.length) {
      const selectedItem = selectedDemo.menu[itemIndex];
      addToCart(selectedItem.name, selectedItem.price);
    } else {
      addMessage(
        `❌ **Invalid choice!** Please select option 1-${selectedDemo.menu.length}.`
      );
    }
  };

  const addToCart = (itemName, price) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: price,
      quantity: 1,
    };
    setCart((prev) => [...prev, newItem]);

    const newTotal = [...cart, newItem].reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    addMessage(`✅ **ADDED TO CART!** ✅

🛒 **${itemName}**
💰 ${price.toFixed(2)}

📋 **Cart Total: ${newTotal.toFixed(2)}**

**What's next?**

1️⃣ 🛒 Continue Shopping
2️⃣ 🚚 Proceed to Checkout  
3️⃣ 👀 View Full Cart

**Select an option (1-3)**

🤖 **ChatBiz Automation**: Your order processed instantly with zero human involvement!

🌟 **This is exactly how YOUR ${selectedDemo.name.toLowerCase()} will work:**
✅ Customers order via WhatsApp automatically
✅ No staff needed to handle orders
✅ Perfect accuracy every time
✅ Works 24/7 without breaks

📱 **Ready to automate YOUR business?**
**Contact**: +92-332-993-4858`);

    setConversationState("cart_actions");
  };

  const showSpecialOffers = () => {
    addMessage(`🔥 **SPECIAL OFFERS** 🔥

💥 **Limited Time Deals:**

1️⃣ **New Customer Special** - 25% OFF first order
2️⃣ **Loyalty Program** - Earn points with every purchase  
3️⃣ **Bulk Discount** - Save up to 40% on large orders
4️⃣ **Referral Bonus** - $20 credit for each referral

🚀 **ChatBiz**: Automated promotions increase sales by 60%!`);
  };

  const showBusinessInfo = () => {
    addMessage(`📍 **BUSINESS INFORMATION**

🏪 **${selectedDemo.name} Location:**
📍 123 Business Avenue, Global City
📞 Phone: (555) CHAT-BIZ
🕐 Hours: 24/7 Automated Service
🌐 Website: www.chatbiz.com

🤖 **THIS IS A CHATBIZ DEMO**
**Showcasing complete business automation!**

✨ **Real Benefits:**
💰 Eliminate staff costs (Save $2,000-8,000/month)
📈 Handle unlimited customers simultaneously  
🕐 24/7 automated operations
❌ Zero missed opportunities
⭐ Professional customer experience

🚀 **GET CHATBIZ FOR YOUR BUSINESS!**
📱 **WhatsApp**: +92-332-993-4858
🌐 **Website**: www.chatbiz.com`);
  };

  const showAccount = () => {
    addMessage(`👤 **ACCOUNT DASHBOARD**

**Customer Profile:**
📧 Email: demo@customer.com
📱 Phone: +1-555-DEMO
🏆 Status: VIP Customer
💎 Points: 2,450 pts

**Recent Activity:**
🛍️ Last Order: $45.99 (3 days ago)
📊 Total Orders: 47
💰 Total Spent: $2,180.50
🎯 Savings Earned: $327.25

🤖 **ChatBiz**: Complete customer management automation!`);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      handleUserMessage(inputValue);
      setInputValue("");
    }
  };

  // If demo is selected, show chat interface
  if (selectedDemo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Demo Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-orange-200 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${selectedDemo.color} rounded-2xl flex items-center justify-center mr-4`}
                >
                  <selectedDemo.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedDemo.name} Automation Demo
                  </h2>
                  <p className="text-orange-600">
                    Experience your business automated
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="bg-orange-100 text-orange-600 px-4 py-2 rounded-xl hover:bg-orange-200 transition-all"
              >
                ← Back to Categories
              </button>
            </div>
          </div>

          {/* Chat Interface - WhatsApp Style */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[600px] flex flex-col">
            {/* WhatsApp-style Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <selectedDemo.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    {selectedDemo.name} Official
                  </h3>
                  <div className="flex items-center text-green-100">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm">
                      Online • Automated by ChatBiz
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-100">
                    WhatsApp Business
                  </div>
                  <div className="text-sm font-semibold">+1 (555) DEMO-BIZ</div>
                </div>
              </div>
            </div>

            {/* Messages Area - Fixed Height with Scroll */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-green-50 to-white scroll-smooth"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f9ff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                minHeight: "400px",
                maxHeight: "450px",
                scrollBehavior: "smooth",
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl relative ${
                      message.isBot
                        ? "bg-white text-gray-800 shadow-md rounded-bl-sm border border-gray-200"
                        : "bg-green-500 text-white shadow-md rounded-br-sm"
                    }`}
                  >
                    {/* WhatsApp Message Tail */}
                    {message.isBot && (
                      <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent transform translate-y-full -translate-x-1"></div>
                    )}
                    {!message.isBot && (
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[8px] border-t-green-500 border-l-[8px] border-l-transparent transform translate-y-full translate-x-1"></div>
                    )}

                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.text}
                    </div>
                    <div
                      className={`text-xs mt-2 flex items-center justify-end gap-1 ${
                        message.isBot ? "text-gray-500" : "text-green-100"
                      }`}
                    >
                      <span>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {!message.isBot && (
                        <div className="flex">
                          <div className="w-4 h-4 text-green-200">✓✓</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-200 rounded-bl-sm relative">
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent transform translate-y-full -translate-x-1"></div>
                    <div className="flex items-center space-x-2">
                      <selectedDemo.icon className="w-4 h-4 text-gray-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp-style Cart Summary */}
            {cart.length > 0 && (
              <div className="bg-yellow-50 border-t border-yellow-200 p-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm font-semibold text-orange-800">
                      🛒 {cart.length} item{cart.length !== 1 ? "s" : ""} • Tap
                      to review
                    </span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    $
                    {cart
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            {/* WhatsApp-style Input Area */}
            <div className="border-t bg-gray-50 p-4 flex-shrink-0">
              <div className="flex space-x-3 items-end">
                <div className="flex-1 bg-white rounded-full border border-gray-300 px-4 py-2 flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 outline-none text-gray-800 placeholder-gray-500"
                    disabled={isTyping}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  className="w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* WhatsApp-style Quick Replies */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => handleUserMessage("menu")}
                  className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition-colors"
                >
                  📋 Main Menu
                </button>
                <button
                  onClick={() => handleUserMessage("1")}
                  className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition-colors"
                >
                  🛒 Browse Items
                </button>
                {cart.length > 0 && (
                  <button
                    onClick={() => handleUserMessage("3")}
                    className="px-3 py-1 bg-orange-100 border border-orange-300 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors"
                  >
                    🛒 View Cart ({cart.length})
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Demo Benefits */}
          <div className="mt-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              This is YOUR {selectedDemo.name} Tomorrow
            </h3>
            <p className="text-gray-600 mb-4">
              Complete automation handling unlimited customers simultaneously.
              Zero staff needed, perfect experience every time.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$0</div>
                <div className="text-sm text-gray-600">Staff Costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5 Min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = `Hi! I want WhatsApp automation for my ${selectedDemo.name.toLowerCase()}. Can you show me how this works for my business?`;
                  const whatsappUrl = `https://wa.me/923329934858?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Get This For My {selectedDemo.name}
              </button>

              <button
                onClick={() => setSelectedDemo(null)}
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all"
              >
                Try Another Business Type
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main website layout
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="ChatBiz Logo"
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    // Fallback to gradient background with Bot icon if logo fails to load
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-r",
                      "from-orange-500",
                      "to-red-500"
                    );
                    const botIcon = document.createElement("div");
                    botIcon.innerHTML = "🤖";
                    botIcon.className =
                      "w-7 h-7 text-white flex items-center justify-center";
                    e.target.parentElement.appendChild(botIcon);
                  }}
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ChatBiz
                </span>
                <div className="text-xs text-gray-500">
                  Universal Business Automation
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Live Demos", id: "demo" },
                { name: "Templates", id: "templates" },
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
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600" />
                  )}
                </button>
              ))}

              <button
                onClick={viewDashboard}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
              >
                <Monitor className="w-4 h-4 mr-2" />
                View Dashboard
              </button>

              <button
                onClick={contactUs}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Get Started
              </button>
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
            <div className="lg:hidden pb-4 border-t border-orange-100">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { name: "Home", id: "home" },
                  { name: "Live Demos", id: "demo" },
                  { name: "Templates", id: "templates" },
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
                  onClick={viewDashboard}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-center flex items-center justify-center"
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  View Dashboard
                </button>
                <button
                  onClick={contactUs}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-gray-700 font-medium">
                Trusted by 25,000+ Businesses Worldwide
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight">
              Automate Any Business
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent block mt-4">
                In Just 5 Minutes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              AI-powered WhatsApp automation for restaurants, salons, gyms,
              shops - ANY business type. Choose your industry below and see
              instant automation magic.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection("demo")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Play className="ml-0 mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Try Live Demos Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={viewDashboard}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                <Monitor className="ml-0 mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Dashboard
                <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={contactUs}
                className="border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Get Quote
              </button>
            </div>

            {/* Global Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {globalStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200"
                >
                  <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Rocket className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-700 font-medium">
                Interactive Business Demos
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Business Type
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
                See Instant Automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exactly how ChatBiz will automate YOUR business. Click
              any category below to see industry-specific automation in action.
            </p>
          </div>

          {/* Business Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {businessCategories.map((business, index) => (
              <div
                key={business.id}
                className="group cursor-pointer"
                onClick={() => startDemo(business)}
              >
                <div
                  className={`bg-gradient-to-br ${business.color} p-6 rounded-3xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/20`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <business.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {business.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {business.description}
                    </p>

                    {/* Quick stats */}
                    <div className="space-y-1 mb-4">
                      <div className="text-xs text-white/90">
                        <span className="font-semibold">
                          {business.stats.customers}
                        </span>{" "}
                        customers
                      </div>
                      <div className="text-xs text-white/90">
                        <span className="font-semibold">
                          {business.stats.savings}
                        </span>{" "}
                        avg savings
                      </div>
                    </div>

                    <div className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Try Demo
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Stats */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              These Demo Systems Handle:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  500K+
                </div>
                <div className="text-gray-600 font-medium">Orders/Day</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">10s</div>
                <div className="text-gray-600 font-medium">Avg Response</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-orange-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  $0
                </div>
                <div className="text-gray-600 font-medium">Staff Needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Templates Section */}
      <section
        id="templates"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Monitor className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">
                Professional Business Templates
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Business Systems
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Ready to Deploy
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience complete business automation systems with professional
              dashboards and WhatsApp integration. These are the exact systems
              your business will receive.
            </p>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Restaurant Template */}
            <div
              className="group cursor-pointer"
              onClick={() => setCurrentView("restaurant-template")}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Pizza className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    Restaurant Automation
                  </h3>
                  <p className="text-orange-100 text-center text-sm">
                    Complete food ordering & management system
                  </p>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span>WhatsApp ordering automation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span>Professional dashboard</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span>Order management system</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span>Menu management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      <span>Customer analytics</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600 mb-1">
                        Live Demo Available
                      </div>
                      <div className="text-sm text-orange-700">
                        Experience the full system
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all group-hover:scale-105">
                    Explore Template
                  </button>
                </div>
              </div>
            </div>

            {/* Coming Soon Templates */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden opacity-60">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Beauty Salon
                </h3>
                <p className="text-pink-100 text-center text-sm">
                  Appointment booking & service management
                </p>
              </div>

              <div className="p-8">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-600 mb-2">
                    Coming Soon
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    Professional template in development
                  </div>
                  <button className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-xl font-semibold cursor-not-allowed">
                    In Development
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden opacity-60">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Fitness Center
                </h3>
                <p className="text-green-100 text-center text-sm">
                  Membership & class scheduling automation
                </p>
              </div>

              <div className="p-8">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-600 mb-2">
                    Coming Soon
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    Professional template in development
                  </div>
                  <button className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-xl font-semibold cursor-not-allowed">
                    In Development
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Template Benefits */}
          <div className="bg-white rounded-2xl shadow-lg border p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Template Benefits
            </h3>
            <p className="text-gray-600 mb-8">
              Each template includes everything you need to run your business
              automation professionally
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Monitor className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  Complete Dashboard
                </div>
                <div className="text-sm text-gray-600">
                  Professional business management interface
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  WhatsApp Integration
                </div>
                <div className="text-sm text-gray-600">
                  Automated customer interactions
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  Analytics & Reports
                </div>
                <div className="text-sm text-gray-600">
                  Real-time business insights
                </div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  Ready to Deploy
                </div>
                <div className="text-sm text-gray-600">
                  Install and start using immediately
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentView("restaurant-template")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Try Restaurant Template
              </button>
              <button
                onClick={contactUs}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                Request Custom Template
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why 25,000+ Businesses Choose ChatBiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete business automation designed for any industry. From order
              taking to customer management - everything automated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-orange-200 group hover:-translate-y-2"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple Worldwide Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One-time setup, small monthly fee. Save thousands in staff costs
              while never missing another customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 relative overflow-hidden hover:-translate-y-2 ${
                  pkg.popular
                    ? "border-orange-500 ring-4 ring-orange-100"
                    : "border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 font-semibold">
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

                  <button
                    onClick={contactUs}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all hover:-translate-y-1 hover:shadow-xl ${
                      pkg.popular
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                        : "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                    }`}
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ROI Example: Average Business
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">$2,400</div>
                  <div className="text-gray-600">Current Monthly Cost</div>
                  <div className="text-sm text-red-600">
                    WhatsApp staff + missed opportunities
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">$197</div>
                  <div className="text-gray-600">ChatBiz Monthly Cost</div>
                  <div className="text-sm text-blue-600">
                    Complete automation
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">
                    $2,203
                  </div>
                  <div className="text-gray-600">Monthly Savings</div>
                  <div className="text-sm text-green-600">
                    Pays for itself in 10 days
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>Annual Savings:</strong> $26,436 |
                <strong> Setup Payback:</strong> 10 days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={contactUs}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate My Savings
                </button>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Try Demo First
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Business Results
            </h2>
            <p className="text-xl text-gray-600">
              Businesses worldwide using ChatBiz automation are saving thousands
              while serving more customers than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {result.business.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {result.business}
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
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Get These Results?
              </h3>
              <p className="text-gray-600 mb-8">
                Join these successful businesses. Setup takes only 5 minutes and
                you'll start saving immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("demo")}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Demo First
                </button>

                <button
                  onClick={contactUs}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start My Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 25,000+ businesses worldwide. Get your automation setup in
              just 5 minutes and start saving thousands in staff costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get Started Today
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
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
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                    <MessageCircle className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        WhatsApp Us
                      </div>
                      <a
                        href="https://wa.me/923329934858?text=I want WhatsApp automation for my business"
                        className="text-orange-200 hover:text-white transition-colors"
                      >
                        Get Instant Quote
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                    <Mail className="w-8 h-8 text-white" />
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <a
                        href="mailto:chatbiz50@gmail.com"
                        className="text-orange-200 hover:text-white transition-colors"
                      >
                        chatbiz50@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Demo Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Try Before You Buy
                </h3>
                <p className="text-orange-100 mb-6">
                  Experience automation for any business type. No signup
                  required.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => scrollToSection("demo")}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try Demos
                  </button>
                  <button
                    onClick={viewDashboard}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Dashboard
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
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
                      Business Analysis
                    </h4>
                    <p className="text-orange-100">
                      We analyze your business type and create industry-specific
                      automation flows.
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
                      We build your personalized WhatsApp automation with your
                      branding and workflows.
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
                      Complete testing and team training to ensure smooth
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
                      Go Live in 5 Minutes
                    </h4>
                    <p className="text-orange-100">
                      Your business operates automatically with 24/7 WhatsApp
                      automation and zero manual work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection("demo")}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Play className="mr-3 w-5 h-5" />
                Try Demo First
              </button>

              <a
                href="tel:+923329934858"
                className="bg-white text-orange-600 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                <Phone className="mr-3 w-5 h-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/923329934858?text=I want WhatsApp automation for my business"
                className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-3 w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="ChatBiz Logo"
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      // Fallback to gradient background with Bot icon if logo fails to load
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "bg-gradient-to-r",
                        "from-orange-500",
                        "to-red-500"
                      );
                      const botIcon = document.createElement("div");
                      botIcon.innerHTML = "🤖";
                      botIcon.className =
                        "w-6 h-6 text-white flex items-center justify-center";
                      e.target.parentElement.appendChild(botIcon);
                    }}
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold">ChatBiz</span>
                  <div className="text-sm text-gray-400">
                    Universal Business Automation
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                WhatsApp automation specialists for all business types. We
                eliminate manual work and help businesses serve customers 24/7.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Globe className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400 text-sm">
                  Serving 47 countries worldwide
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Business Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Restaurant Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Retail & E-commerce
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Healthcare & Appointments
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Beauty & Wellness
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Professional Services
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Platform Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  WhatsApp Integration
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  AI Conversation Handling
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Multi-Language Support
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Analytics & Reporting
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Custom Integrations
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
                    href="mailto:chatbiz50@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    chatbiz50@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  <a
                    href="https://wa.me/923329934858?text=I need business automation support"
                    className="hover:text-white transition-colors"
                  >
                    24/7 WhatsApp Support
                  </a>
                </li>
                <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-3" />
                  <span className="text-gray-400">www.chatbiz.com</span>
                </li>
              </ul>

              <div className="mt-6">
                <button
                  onClick={contactUs}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Started Today
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 ChatBiz Universal Business Automation. All rights
                reserved. Transforming businesses worldwide through intelligent
                WhatsApp automation.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Business Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatBizPlatform;
