import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Navigation,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Hospital,
  Package,
  Navigation2,
  Github,
  UserPen,
  ArrowRight,
  Map,
  Code,
  Users,
  Star,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Unique 10-character codes",
      description: "Every 4m x 4m area in India gets a unique, memorable code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Privacy-respecting format",
      description: "No personal data stored, just precise location encoding",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Navigation className="h-7 w-7" />,
      title: "Bidirectional conversion",
      description: "Seamlessly convert between Bharat PIN and GPS coordinates",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Works offline",
      description: "No internet required for encoding/decoding operations",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Interactive visualization",
      description: "Leaflet-powered maps with real-time location pinpointing",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile-optimized",
      description: "Designed for smartphones and field operations",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const useCases = [
    {
      icon: <Hospital className="h-10 w-10" />,
      title: "Emergency Services",
      description: "Quick location sharing for ambulances and rescue teams",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Delivery Optimization",
      description: "Accurate last-mile delivery to exact locations",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Navigation2 className="h-10 w-10" />,
      title: "Accurate Navigation",
      description: "Navigate to precise spots without traditional addresses",
      gradient: "from-purple-500 to-violet-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Grid Division",
      description:
        "India's map is divided into uniform 4m x 4m grids for precise coverage",
      icon: <Map className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Code Generation",
      description:
        "Each cell gets a unique 10-digit Bharat PIN using advanced algorithms",
      icon: <Code className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Interactive Selection",
      description:
        "Click anywhere on the map to get instant Bharat PIN generation",
      icon: <MapPin className="h-8 w-8" />,
      color: "from-green-500 to-teal-500",
    },
    {
      number: "04",
      title: "Real-world Usage",
      description:
        "Deploy for logistics, navigation, emergency services, and more",
      icon: <Users className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <SEO
        title="Bharat Pin - India Map & Location Finder"
        description="Find and share precise locations across India with Bharat Pin. Explore the map and get your Bharat PIN."
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <MapPin className="h-7 w-7 text-green-600" />
              </div>
              <span className="text-xl font-bold">Bharat PIN</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-950/20 via-background to-green-950/20 pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div
            className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Bharat PIN
              </span>
              <br />
              <span className="text-foreground text-3xl md:text-5xl lg:text-6xl font-semibold">
                Geo-Coded Addressing
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                System for India
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              From Coordinates to Precision 🌎 Welcome to the
              <span className="font-semibold text-orange-600">
                {" "}
                Future of Digital Addressing
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/map">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Bharat-Pin
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-10 py-4 text-lg font-semibold bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Star className="mr-3 h-6 w-6" />
                Learn How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border/20">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  4m x 4m
                </div>
                <div className="text-muted-foreground font-medium">
                  Grid Precision
                </div>
              </div>
              <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border/20">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  10 Digital
                </div>
                <div className="text-muted-foreground font-medium">
                  Unique Code
                </div>
              </div>
              <div className="text-center p-6 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Offline
                </div>
                <div className="text-muted-foreground font-medium">
                  Ready System
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-900/30 text-green-400 border-green-800">
                Core Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for <span className="text-green-600">Precision</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for accurate, reliable, and efficient
                location addressing across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden transform hover:-translate-y-2"
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center group-hover:text-foreground transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How It Works Section */}
        <section
          id="how-it-works"
          className="py-24 bg-gradient-to-br from-muted/20 to-purple-950/10"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-900/30 text-purple-400 border-purple-800">
                How It Works
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple <span className="text-purple-600">Four Step</span>{" "}
                Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From grid division to real-world implementation, see how Bharat
                PIN transforms location addressing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {step.number}
                    </div>

                    <div
                      className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Use Cases Section */}
        <section id="use-cases" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-indigo-900/30 text-indigo-400 border-indigo-800">
                Use Cases
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming <span className="text-indigo-600">Industries</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming how India navigates, delivers, and coordinates
                across diverse sectors and industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card via-card/50 to-card overflow-hidden transform hover:-translate-y-3"
                >
                  <CardContent className="pt-8 pb-6 px-6 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${useCase.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="py-24 bg-gradient-to-r from-orange-950/20 via-background to-green-950/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-900/30 text-orange-400 border-orange-800">
                About Bharat PIN
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Inspired by Innovation,{" "}
                <span className="text-orange-600">Built for India</span>
              </h2>

              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/20 mb-8">
                <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p className="text-xl">
                    Bharat-Pin is an{" "}
                    <span className="font-semibold text-orange-600">
                      open-source initiative
                    </span>{" "}
                    inspired by DIGIPIN, designed to solve the challenge of
                    unstructured addressing in India. My system provides a
                    standardized, digital approach to location identification
                    that works seamlessly across urban and rural areas.
                  </p>
                  <p>
                    By offering{" "}
                    <span className="font-semibold text-green-600">
                      "Address as a Service"
                    </span>{" "}
                    for both public and private use, Bharat PIN aims to
                    modernize how we think about location addressing in the
                    digital age, making it more accessible, accurate, and
                    efficient for everyone.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Badge
                  variant="secondary"
                  className="text-base px-4 py-2 bg-card/80 backdrop-blur-sm shadow-lg"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Open Source
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-base px-4 py-2 bg-card/80 backdrop-blur-sm shadow-lg"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy First
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-base px-4 py-2 bg-card/80 backdrop-blur-sm shadow-lg"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Made in India
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Clean and Simple Footer */}
        <footer className="bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-green-600" />
                  </div>
                  <span className="text-lg font-bold">Bharat PIN</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Modernizing location addressing for India with precision and
                  simplicity.
                </p>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/asimar007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-muted"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://x.com/asim_ar007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-muted"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/asimar007/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-muted"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.asimsk.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-muted"
                    >
                      <UserPen className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="font-semibold mb-3 text-sm">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-foreground transition-colors text-sm"
                      onClick={() => {
                        document
                          .getElementById("features")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Features
                    </Button>
                  </li>
                  <li>
                    <Link
                      to="/map"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Live Demo
                    </Link>
                  </li>
                  <li>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-foreground transition-colors text-sm"
                      onClick={() => {
                        document
                          .getElementById("use-cases")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Use Cases
                    </Button>
                  </li>
                </ul>
              </div>

              {/* Developer Links */}
              <div>
                <h4 className="font-semibold mb-3 text-sm">Developers</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                    >
                      Documentation
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="font-semibold mb-3 text-sm">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
