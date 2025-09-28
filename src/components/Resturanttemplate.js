import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  Plus,
  Edit3,
  Trash2,
  Eye,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Clock,
  Phone,
  MapPin,
  Star,
  Settings,
  BarChart3,
  Package,
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw,
  Menu,
  X,
  Home,
  Pizza,
  Coffee,
  Utensils,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Bot,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
  Monitor,
  PhoneCall,
  Mail,
  Smartphone,
  Wifi,
  Shield,
  Award,
  TrendingDown,
  Activity,
  CreditCard,
  FileText,
  UserCheck,
  Heart,
  ThumbsUp,
  MessageSquare,
  Headphones,
} from "lucide-react";

const SophisticatedRestaurantTemplate = () => {
  const [currentView, setCurrentView] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Chat state
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState("welcome");
  const [cart, setCart] = useState([]);
  const [isAutomationActive, setIsAutomationActive] = useState(true);
  const messagesEndRef = useRef(null);

  // Enhanced restaurant data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Signature Margherita",
      category: "pizzas",
      price: 18.99,
      description: "San Marzano tomatoes, buffalo mozzarella, fresh basil",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
      available: true,
      featured: true,
      prepTime: "12-15 min",
      rating: 4.9,
      orders: 247,
    },
    {
      id: 2,
      name: "Truffle Pepperoni Deluxe",
      category: "pizzas",
      price: 24.99,
      description: "Premium pepperoni, truffle oil, aged parmesan, arugula",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      available: true,
      featured: true,
      prepTime: "15-18 min",
      rating: 4.8,
      orders: 189,
    },
    {
      id: 3,
      name: "Mediterranean Caesar",
      category: "salads",
      price: 14.99,
      description:
        "Romaine hearts, aged parmesan, croutons, house Caesar dressing",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      available: true,
      featured: false,
      prepTime: "5-8 min",
      rating: 4.7,
      orders: 156,
    },
    {
      id: 4,
      name: "Artisan Pasta Primavera",
      category: "pasta",
      price: 19.99,
      description: "Fresh seasonal vegetables, garlic olive oil, herbs",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      available: true,
      featured: true,
      prepTime: "10-12 min",
      rating: 4.8,
      orders: 203,
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: "WA001",
      customerName: "Sarah Johnson",
      customerPhone: "+1 (555) 123-4567",
      items: [
        { name: "Signature Margherita", price: 18.99, quantity: 2 },
        { name: "Mediterranean Caesar", price: 14.99, quantity: 1 },
      ],
      total: 52.97,
      status: "preparing",
      timestamp: new Date(Date.now() - 300000),
      deliveryType: "delivery",
      address: "123 Oak Street, Downtown",
      paymentMethod: "WhatsApp Pay",
      source: "whatsapp",
    },
    {
      id: "WA002",
      customerName: "Michael Chen",
      customerPhone: "+1 (555) 987-6543",
      items: [
        { name: "Truffle Pepperoni Deluxe", price: 24.99, quantity: 1 },
        { name: "Artisan Pasta Primavera", price: 19.99, quantity: 1 },
      ],
      total: 44.98,
      status: "ready",
      timestamp: new Date(Date.now() - 600000),
      deliveryType: "pickup",
      address: null,
      paymentMethod: "Card on Delivery",
      source: "whatsapp",
    },
  ]);

  // Enhanced analytics
  const analyticsData = {
    totalRevenue: 4750.5,
    totalOrders: 89,
    averageOrder: 53.37,
    automationSavings: 2400,
    whatsappOrders: 82,
    conversionRate: 94.3,
    customerSatisfaction: 4.9,
    responseTime: "3.2s",
    dailyStats: [
      { day: "Mon", orders: 15, revenue: 780, whatsapp: 14 },
      { day: "Tue", orders: 18, revenue: 960, whatsapp: 17 },
      { day: "Wed", orders: 22, revenue: 1140, whatsapp: 21 },
      { day: "Thu", orders: 25, revenue: 1320, whatsapp: 23 },
      { day: "Fri", orders: 31, revenue: 1650, whatsapp: 29 },
      { day: "Sat", orders: 35, revenue: 1890, whatsapp: 33 },
      { day: "Sun", orders: 28, revenue: 1580, whatsapp: 26 },
    ],
  };

  // Auto-scroll chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Initialize chat
  useEffect(() => {
    if (currentView === "whatsapp-automation" && chatMessages.length === 0) {
      setTimeout(() => {
        addMessage(
          "🍕 Welcome to Bella Vista Italian Restaurant!\n\nI'm your AI assistant, ready to help you 24/7.\n\n✨ How can I help you today?\n\n1️⃣ 🍽️ Browse Our Menu\n2️⃣ 📋 Check My Orders  \n3️⃣ 🕐 Restaurant Hours\n4️⃣ 📍 Location & Contact\n5️⃣ 🎉 Today's Specials\n\nJust type a number or tell me what you need!",
          true
        );
      }, 1000);
    }
  }, [currentView]);

  const addMessage = (text, isBot = false) => {
    const message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, message]);
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;

    addMessage(chatInput, false);
    const userInput = chatInput.toLowerCase().trim();
    setChatInput("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      processChatMessage(userInput);
    }, 1500);
  };

  const processChatMessage = (input) => {
    if (input === "1" || input.includes("menu")) {
      showMenu();
    } else if (input === "2" || input.includes("order")) {
      showOrderHistory();
    } else if (input === "3" || input.includes("hours")) {
      showHours();
    } else if (
      input === "4" ||
      input.includes("location") ||
      input.includes("contact")
    ) {
      showLocation();
    } else if (input === "5" || input.includes("special")) {
      showSpecials();
    } else if (input.includes("book") || input.includes("reservation")) {
      handleReservation();
    } else {
      addMessage(
        "I understand you're looking for something specific! 🤔\n\nHere are your options:\n\n1️⃣ Browse Menu\n2️⃣ Check Orders\n3️⃣ Restaurant Hours\n4️⃣ Location & Contact\n5️⃣ Today's Specials\n\nOr just tell me what you need - I'm here to help! 😊",
        true
      );
    }
  };

  const showMenu = () => {
    addMessage(
      "🍽️ **BELLA VISTA MENU** 🍽️\n\n🍕 **SIGNATURE PIZZAS**\n\n1️⃣ Signature Margherita - $18.99\n   San Marzano tomatoes, buffalo mozzarella\n   ⭐ 4.9 rating • 12-15 min\n\n2️⃣ Truffle Pepperoni Deluxe - $24.99\n   Premium pepperoni, truffle oil, arugula\n   ⭐ 4.8 rating • 15-18 min\n\n🥗 **FRESH SALADS**\n\n3️⃣ Mediterranean Caesar - $14.99\n   Romaine hearts, aged parmesan\n   ⭐ 4.7 rating • 5-8 min\n\n🍝 **ARTISAN PASTA**\n\n4️⃣ Pasta Primavera - $19.99\n   Fresh seasonal vegetables, herbs\n   ⭐ 4.8 rating • 10-12 min\n\n**Type a number to add to cart!**\n💡 Or ask me about ingredients, allergies, or custom orders!",
      true
    );
  };

  const showOrderHistory = () => {
    addMessage(
      "📋 **YOUR ORDER HISTORY**\n\n🟢 **Recent Order #WA001**\n📅 Today, 2:30 PM\n🍕 2x Signature Margherita\n🥗 1x Mediterranean Caesar\n💰 Total: $52.97\n📍 Status: Preparing\n🚚 Delivery to Oak Street\n\n🟢 **Previous Order #WA002**\n📅 Yesterday, 7:15 PM\n🍕 1x Truffle Pepperoni\n🍝 1x Pasta Primavera\n💰 Total: $44.98\n✅ Status: Completed\n🏃‍♂️ Pickup\n\n**Need to reorder? Just say 'reorder last' or browse our menu!**",
      true
    );
  };

  const showHours = () => {
    addMessage(
      "🕐 **RESTAURANT HOURS**\n\n📍 **Bella Vista Italian Restaurant**\n\n**Today (Open)** 🟢\n⏰ 11:00 AM - 11:00 PM\n\n**Weekly Schedule:**\n📅 Mon-Thu: 11:00 AM - 10:00 PM\n📅 Fri-Sat: 11:00 AM - 11:00 PM  \n📅 Sunday: 12:00 PM - 10:00 PM\n\n🎯 **Currently:** Open for orders!\n⚡ **WhatsApp Ordering:** 24/7 available\n🚚 **Delivery:** Until 10:30 PM\n🏃‍♂️ **Pickup:** Until closing\n\n**Ready to order? Type 'menu' to get started!**",
      true
    );
  };

  const showLocation = () => {
    addMessage(
      "📍 **CONTACT & LOCATION**\n\n🏪 **Bella Vista Italian Restaurant**\n📍 456 Culinary Boulevard\n    Downtown Gourmet District\n    New York, NY 10001\n\n📞 **Phone:** (555) BELLA-NY\n📧 **Email:** hello@bellavista.com\n🌐 **Website:** www.bellavista-ny.com\n\n🚚 **Delivery Zones:**\n✅ Downtown (Free delivery)\n✅ Midtown ($2.99 delivery)\n✅ Upper East Side ($3.99 delivery)\n\n🎯 **Find Us:**\n• Next to Central Park South\n• 2 blocks from subway station\n• Valet parking available\n\n**Want directions? Just ask!**",
      true
    );
  };

  const showSpecials = () => {
    addMessage(
      "🎉 **TODAY'S SPECIALS** 🎉\n\n⚡ **Flash Deal (Next 2 Hours)**\n🍕 Buy Any Pizza + Get Caesar Salad FREE\n💰 Save up to $14.99!\n\n🌟 **Chef's Special**\n🍝 Lobster Ravioli - $28.99\n   Fresh Maine lobster, sage butter\n   ⭐ Limited quantity today!\n\n🥂 **Happy Hour** (5-7 PM)\n🍷 30% off all wine pairings\n🍸 $8 Italian cocktails\n\n🎂 **Birthday Special**\n🍰 FREE tiramisu with any entrée\n   (Just mention it's your birthday!)\n\n**Want to order a special? Type the item name or number!**",
      true
    );
  };

  const handleReservation = () => {
    addMessage(
      '🍽️ **TABLE RESERVATIONS**\n\n📅 **Available Today:**\n⏰ 6:00 PM - Table for 2-4\n⏰ 7:30 PM - Table for 2-6\n⏰ 9:00 PM - Table for 2-8\n\n📅 **Tomorrow:**\n⏰ Multiple slots available\n\n**To book:**\n1️⃣ Tell me your preferred time\n2️⃣ Number of guests\n3️⃣ Special requests (optional)\n\n💡 **Example:** "Book table for 4 at 7:30 PM"\n\n**Or continue with takeout/delivery orders!**',
      true
    );
  };

  const Sidebar = () => (
    <div className="w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white h-screen fixed left-0 top-0 z-40 border-r border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
            <Pizza className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Bella Vista</h1>
            <p className="text-orange-400 text-sm font-medium">
              Italian Restaurant
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                ChatBiz Automation Active
              </span>
            </div>
            <Bot className="w-4 h-4 text-orange-400" />
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {[
          {
            id: "overview",
            icon: Monitor,
            label: "Business Overview",
            color: "text-blue-400",
          },
          {
            id: "whatsapp-automation",
            icon: MessageCircle,
            label: "WhatsApp Automation",
            color: "text-green-400",
            badge: "LIVE",
          },
          {
            id: "orders",
            icon: ShoppingCart,
            label: "Order Management",
            color: "text-orange-400",
          },
          {
            id: "products",
            icon: Package,
            label: "Menu Management",
            color: "text-purple-400",
          },
          {
            id: "analytics",
            icon: BarChart3,
            label: "Analytics & Reports",
            color: "text-cyan-400",
          },
          {
            id: "customers",
            icon: Users,
            label: "Customer Database",
            color: "text-pink-400",
          },
          {
            id: "settings",
            icon: Settings,
            label: "Restaurant Settings",
            color: "text-gray-400",
          },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentView(item.id);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-800/50 transition-all group relative ${
              currentView === item.id
                ? "bg-gradient-to-r from-orange-600/20 to-red-600/20 border-r-2 border-orange-500 text-white"
                : "text-gray-300"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon
                className={`w-5 h-5 ${
                  currentView === item.id ? item.color : "text-gray-400"
                } group-hover:${item.color} transition-colors`}
              />
              <span
                className={`font-medium ${
                  currentView === item.id ? "text-white" : ""
                }`}
              >
                {item.label}
              </span>
            </div>
            {item.badge && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );

  const MobileHeader = () => (
    <div className="lg:hidden bg-white shadow-lg border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <Pizza className="w-4 h-4 text-white" />
        </div>
        <h1 className="font-bold text-gray-900">Bella Vista Dashboard</h1>
      </div>
      <div className="w-8" />
    </div>
  );
  const Overview = () => (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Pizza className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Business Overview
            </h1>
            <p className="text-gray-600 text-lg">
              Complete automation dashboard for Bella Vista Restaurant
            </p>
          </div>
        </div>

        {/* Automation Status Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  WhatsApp Automation Active
                </h3>
                <p className="text-green-100">
                  Handling customer orders 24/7 automatically
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {analyticsData.whatsappOrders}
              </div>
              <div className="text-green-100 text-sm">Orders Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Today's Revenue
              </p>
              <p className="text-3xl font-bold text-gray-900">
                ${analyticsData.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 text-sm font-medium">
              +18% from yesterday
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">
                {analyticsData.totalOrders}
              </p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 text-sm font-medium">
              {analyticsData.whatsappOrders} via WhatsApp
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Automation Savings
              </p>
              <p className="text-3xl font-bold text-gray-900">
                ${analyticsData.automationSavings}
              </p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Shield className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-600 text-sm font-medium">
              Monthly staff cost savings
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Response Time</p>
              <p className="text-3xl font-bold text-gray-900">
                {analyticsData.responseTime}
              </p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Activity className="w-4 h-4 text-orange-600 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              Average AI response
            </span>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Weekly Performance
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Total Orders</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">WhatsApp Orders</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {analyticsData.dailyStats.map((day, index) => (
              <div
                key={day.day}
                className="flex flex-col items-center flex-1 space-y-2"
              >
                <div className="relative w-full flex space-x-1">
                  <div
                    className="bg-orange-500 rounded-t-lg transition-all hover:bg-orange-600 flex-1"
                    style={{ height: `${(day.orders / 35) * 200}px` }}
                  ></div>
                  <div
                    className="bg-green-500 rounded-t-lg transition-all hover:bg-green-600 flex-1"
                    style={{ height: `${(day.whatsapp / 35) * 200}px` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  {day.day}
                </span>
                <span className="text-xs text-gray-500">{day.orders}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent WhatsApp Orders */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Recent WhatsApp Orders
            </h3>
            <MessageCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-4">
            {orders.slice(0, 4).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {order.customerName}
                    </p>
                    <p className="text-xs text-green-600">WhatsApp Order</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${order.total}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "preparing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "ready"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Items and Customer Satisfaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Popular Items */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Top Performing Items
          </h3>
          <div className="space-y-4">
            {products
              .filter((p) => p.featured)
              .sort((a, b) => b.orders - a.orders)
              .map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {product.orders} orders
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Customer Experience
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600">
                {analyticsData.customerSatisfaction}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                Satisfaction
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600">
                {analyticsData.conversionRate}%
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                <TrendingUp className="w-4 h-4 text-blue-500 mr-1" />
                Conversion
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <ThumbsUp className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">
                  Positive Reviews
                </span>
              </div>
              <span className="font-bold text-green-600">94%</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">
                  WhatsApp Rating
                </span>
              </div>
              <span className="font-bold text-blue-600">4.9/5</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-700 font-medium">
                  Repeat Customers
                </span>
              </div>
              <span className="font-bold text-red-600">78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const WhatsAppAutomation = () => (
    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50/30 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              WhatsApp Business Automation
            </h1>
            <p className="text-gray-600 text-lg">
              Live customer interactions on your business WhatsApp number
            </p>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Business Number: +1 (555) BELLA-NY
                </h3>
                <p className="text-green-100">
                  AI handling all customer messages automatically
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-green-100 font-medium">LIVE</span>
              </div>
              <div className="text-sm text-green-100">
                89 conversations today
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* WhatsApp Chat Interface */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* WhatsApp Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Pizza className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Bella Vista Restaurant
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <span className="text-green-100 text-sm">
                        Online • Automated by ChatBiz AI
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-100">
                    Business WhatsApp
                  </div>
                  <div className="font-bold">+1 (555) BELLA-NY</div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div
              className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-green-50/30 to-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f9ff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {chatMessages.map((message, index) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl relative ${
                      message.isBot
                        ? "bg-white text-gray-800 shadow-lg rounded-bl-sm border border-gray-200"
                        : "bg-green-500 text-white shadow-lg rounded-br-sm"
                    }`}
                  >
                    {/* Message tail */}
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
                          <CheckCircle className="w-3 h-3 text-green-200" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 rounded-bl-sm relative">
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent transform translate-y-full -translate-x-1"></div>
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-green-500" />
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

            {/* Input Area */}
            <div className="border-t bg-gray-50 p-6">
              <div className="flex space-x-4 items-end">
                <div className="flex-1 bg-white rounded-full border-2 border-gray-200 px-4 py-3 flex items-center shadow-sm">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                    placeholder="Type your message..."
                    className="flex-1 outline-none text-gray-800 placeholder-gray-500"
                    disabled={isTyping}
                  />
                </div>
                <button
                  onClick={handleChatSubmit}
                  disabled={isTyping || !chatInput.trim()}
                  className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setChatInput("1");
                    setTimeout(() => {
                      handleChatSubmit();
                    }, 100);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 text-orange-700 rounded-full text-sm hover:from-orange-200 hover:to-red-200 transition-all font-medium"
                >
                  Browse Menu
                </button>
                <button
                  onClick={() => {
                    setChatInput("2");
                    setTimeout(() => {
                      handleChatSubmit();
                    }, 100);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300 text-blue-700 rounded-full text-sm hover:from-blue-200 hover:to-indigo-200 transition-all font-medium"
                >
                  My Orders
                </button>
                <button
                  onClick={() => {
                    setChatInput("5");
                    setTimeout(() => {
                      handleChatSubmit();
                    }, 100);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-300 text-purple-700 rounded-full text-sm hover:from-purple-200 hover:to-violet-200 transition-all font-medium"
                >
                  Today's Specials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Analytics */}
        <div className="space-y-6">
          {/* Live Stats */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="w-5 h-5 text-green-500 mr-2" />
              Live Performance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Messages Today</span>
                <span className="font-bold text-gray-900">847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Orders Converted</span>
                <span className="font-bold text-green-600">
                  {analyticsData.conversionRate}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Avg Response</span>
                <span className="font-bold text-blue-600">
                  {analyticsData.responseTime}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Customer Rating</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-yellow-600 ml-1">
                    {analyticsData.customerSatisfaction}/5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Status */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Bot className="w-5 h-5 text-green-500 mr-2" />
              AI Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">WhatsApp Connection</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-600 font-medium">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Auto-Reply</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Menu Sync</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 font-medium">Real-time</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Payment Processing</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 font-medium">Integrated</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => setIsAutomationActive(!isAutomationActive)}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold transition-all ${
                  isAutomationActive
                    ? "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-lg"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg"
                }`}
              >
                {isAutomationActive ? (
                  <>
                    <PauseCircle className="w-4 h-4 mr-2" />
                    Pause Automation
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Resume Automation
                  </>
                )}
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium">
                <Settings className="w-4 h-4 mr-2" />
                Configure AI
              </button>
            </div>
          </div>

          {/* Recent Customer Feedback */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
              Customer Feedback
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Sarah J.</span>
                </div>
                <p className="text-sm text-gray-700">
                  "Super easy to order through WhatsApp! Fast delivery too."
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Mike C.</span>
                </div>
                <p className="text-sm text-gray-700">
                  "Love the instant responses! Ordering has never been easier."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Orders = () => (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50/30 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Order Management
            </h1>
            <p className="text-gray-600 text-lg">
              Manage all incoming orders from WhatsApp and other channels
            </p>
          </div>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Orders</p>
              <p className="text-2xl font-bold text-orange-600">12</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Preparing</p>
              <p className="text-2xl font-bold text-yellow-600">8</p>
            </div>
            <Pizza className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Ready</p>
              <p className="text-2xl font-bold text-green-600">5</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Today</p>
              <p className="text-2xl font-bold text-blue-600">89</p>
            </div>
            <Award className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Source
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">
                      {order.timestamp.toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {order.customerName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.customerPhone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.name} x{item.quantity}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-gray-900">
                      ${order.total}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "preparing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "ready"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-900">WhatsApp</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  const Products = () => (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-violet-50/30 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Menu Management
              </h1>
              <p className="text-gray-600 text-lg">
                Manage your restaurant menu and pricing
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </button>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.available ? "Available" : "Out of Stock"}
                </span>
              </div>
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">
                    {product.orders} orders
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {product.prepTime}
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Analytics = () => (
    <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50/30 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Analytics & Reports
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive business insights and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Growth
            </h3>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">+24%</div>
          <p className="text-sm text-gray-600">vs last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              WhatsApp Orders
            </h3>
            <MessageCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
          <p className="text-sm text-gray-600">of total orders</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Avg Order Value
            </h3>
            <DollarSign className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ${analyticsData.averageOrder}
          </div>
          <p className="text-sm text-gray-600">+$3.20 vs last week</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Retention
            </h3>
            <Users className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
          <p className="text-sm text-gray-600">returning customers</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Weekly Revenue Trend
          </h3>
          <div className="h-80 flex items-end justify-between space-x-2">
            {analyticsData.dailyStats.map((day) => (
              <div key={day.day} className="flex flex-col items-center flex-1">
                <div
                  className="bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg w-full transition-all hover:from-cyan-600 hover:to-blue-700"
                  style={{ height: `${(day.revenue / 2000) * 280}px` }}
                ></div>
                <span className="text-xs font-medium text-gray-600 mt-2">
                  {day.day}
                </span>
                <span className="text-xs text-gray-500">${day.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Order Sources
          </h3>
          <div className="flex items-center justify-center h-80">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">92%</div>
                    <div className="text-sm text-gray-600">WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span className="text-gray-700">WhatsApp Orders</span>
              </div>
              <span className="font-bold text-gray-900">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                <span className="text-gray-700">Phone Orders</span>
              </div>
              <span className="font-bold text-gray-900">8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Peak Hours</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Lunch (12-2 PM)</span>
              <span className="font-bold text-orange-600">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Dinner (7-9 PM)</span>
              <span className="font-bold text-red-600">38%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Evening (5-7 PM)</span>
              <span className="font-bold text-blue-600">17%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Customer Satisfaction
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">5 Stars</span>
              <span className="font-bold text-green-600">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">4 Stars</span>
              <span className="font-bold text-blue-600">18%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">3 Stars</span>
              <span className="font-bold text-yellow-600">4%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Automation Savings
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Staff Cost Saved</span>
              <span className="font-bold text-green-600">
                ${analyticsData.automationSavings}/mo
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Response Time</span>
              <span className="font-bold text-blue-600">
                {analyticsData.responseTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Uptime</span>
              <span className="font-bold text-purple-600">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Customers = () => (
    <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50/30 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Customer Database
              </h1>
              <p className="text-gray-600 text-lg">
                Manage customer relationships and preferences
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Customers</p>
              <p className="text-3xl font-bold text-gray-900">2,847</p>
            </div>
            <Users className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-green-600 text-sm mt-2">+127 this month</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">WhatsApp Customers</p>
              <p className="text-3xl font-bold text-green-600">2,618</p>
            </div>
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-green-600 text-sm mt-2">92% of all customers</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">VIP Customers</p>
              <p className="text-3xl font-bold text-purple-600">284</p>
            </div>
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-purple-600 text-sm mt-2">10+ orders each</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Lifetime Value</p>
              <p className="text-3xl font-bold text-blue-600">$186</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-blue-600 text-sm mt-2">+$23 vs last month</p>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Customer List</h3>
            <div className="flex space-x-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Orders
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Last Order
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: "Sarah Johnson",
                  phone: "+1 (555) 123-4567",
                  orders: 23,
                  spent: 482.5,
                  lastOrder: "2 hours ago",
                  status: "VIP",
                },
                {
                  name: "Michael Chen",
                  phone: "+1 (555) 987-6543",
                  orders: 15,
                  spent: 298.75,
                  lastOrder: "1 day ago",
                  status: "Regular",
                },
                {
                  name: "Emily Rodriguez",
                  phone: "+1 (555) 456-7890",
                  orders: 31,
                  spent: 647.25,
                  lastOrder: "3 hours ago",
                  status: "VIP",
                },
                {
                  name: "David Kim",
                  phone: "+1 (555) 234-5678",
                  orders: 8,
                  spent: 156.8,
                  lastOrder: "5 days ago",
                  status: "New",
                },
                {
                  name: "Lisa Wang",
                  phone: "+1 (555) 345-6789",
                  orders: 19,
                  spent: 385.9,
                  lastOrder: "1 day ago",
                  status: "Regular",
                },
              ].map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {customer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Customer since 2024
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-900">
                        {customer.phone}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {customer.orders}
                    </div>
                    <div className="text-sm text-gray-500">orders</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">
                      ${customer.spent}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {customer.lastOrder}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        customer.status === "VIP"
                          ? "bg-purple-100 text-purple-800"
                          : customer.status === "Regular"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Settingggs = () => (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-slate-50/30 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Restaurant Settings
            </h1>
            <p className="text-gray-600 text-lg">
              Configure your restaurant and automation settings
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Restaurant Information */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Restaurant Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  defaultValue="Bella Vista Italian Restaurant"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) BELLA-NY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  defaultValue="456 Culinary Boulevard, Downtown Gourmet District"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuisine Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Italian</option>
                  <option>Mexican</option>
                  <option>Chinese</option>
                  <option>American</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>$ (Moderate)</option>
                  <option>$ (Budget)</option>
                  <option>$$ (Expensive)</option>
                  <option>$$ (Very Expensive)</option>
                </select>
              </div>
            </div>
          </div>

          {/* WhatsApp Automation Settings */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              WhatsApp Automation
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Auto-Reply Messages
                    </h4>
                    <p className="text-sm text-gray-600">
                      Automatically respond to customer messages
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Order Notifications
                    </h4>
                    <p className="text-sm text-gray-600">
                      Send notifications for new orders
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Menu Sync</h4>
                    <p className="text-sm text-gray-600">
                      Automatically sync menu with WhatsApp
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Operating Hours
            </h3>
            <div className="space-y-4">
              {[
                { day: "Monday", open: "11:00", close: "22:00", enabled: true },
                {
                  day: "Tuesday",
                  open: "11:00",
                  close: "22:00",
                  enabled: true,
                },
                {
                  day: "Wednesday",
                  open: "11:00",
                  close: "22:00",
                  enabled: true,
                },
                {
                  day: "Thursday",
                  open: "11:00",
                  close: "22:00",
                  enabled: true,
                },
                { day: "Friday", open: "11:00", close: "23:00", enabled: true },
                {
                  day: "Saturday",
                  open: "11:00",
                  close: "23:00",
                  enabled: true,
                },
                { day: "Sunday", open: "12:00", close: "22:00", enabled: true },
              ].map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-24">
                    <span className="font-medium text-gray-900">
                      {schedule.day}
                    </span>
                  </div>
                  <input
                    type="time"
                    defaultValue={schedule.open}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="time"
                    defaultValue={schedule.close}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked={schedule.enabled}
                      className="rounded mr-2"
                    />
                    <span className="text-sm text-gray-600">Open</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sidebar Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center px-4 py-3 bg-orange-50 text-orange-700 rounded-xl hover:bg-orange-100 transition-colors">
                <Download className="w-4 h-4 mr-3" />
                Export Data
              </button>
              <button className="w-full flex items-center px-4 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                <RefreshCw className="w-4 h-4 mr-3" />
                Sync Menu
              </button>
              <button className="w-full flex items-center px-4 py-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors">
                <CheckCircle className="w-4 h-4 mr-3" />
                Test Automation
              </button>
              <button className="w-full flex items-center px-4 py-3 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors">
                <FileText className="w-4 h-4 mr-3" />
                Generate Report
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Support & Help
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                <Headphones className="w-4 h-4 mr-3" />
                Contact Support
              </button>
              <button className="w-full flex items-center px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                <FileText className="w-4 h-4 mr-3" />
                Documentation
              </button>
              <button className="w-full flex items-center px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="w-4 h-4 mr-3" />
                What's New
              </button>
            </div>
          </div>

          {/* ChatBiz Info */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="w-8 h-8 text-white" />
              <div>
                <h3 className="font-bold text-lg">ChatBiz Premium</h3>
                <p className="text-orange-100 text-sm">Restaurant Automation</p>
              </div>
            </div>
            <p className="text-orange-100 text-sm mb-4 leading-relaxed">
              This is a demo of our complete restaurant automation system.
              Transform your business today!
            </p>
            <button className="w-full bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
              Get ChatBiz Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case "overview":
        return <Overview />;
      case "whatsapp-automation":
        return <WhatsAppAutomation />;
      case "orders":
        return <Orders />;
      case "products":
        return <Products />;
      case "analytics":
        return <Analytics />;
      case "customers":
        return <Customers />;
      case "settings":
        return <Settingggs />;
      // Add other views here...
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <div className="lg:ml-72">{renderView()}</div>
    </div>
  );
};

export default SophisticatedRestaurantTemplate;
