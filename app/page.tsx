import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Star, Users, Smartphone } from "lucide-react"
import Link from "next/link"

const apps = [
  {
    id: "com.nuc.sundarban",
    name: "Sundarban Courier Service Tracking App",
    description: "Explore the beauty and wildlife of the Sundarban mangrove forests with our comprehensive guide app.",
    category: "Business",
    features: ["Package Tracking", "Real-time Updates", "Delivery Notifications", "History Log"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nuc.sundarban",
    icon: "/Sundarban.webp",
  },
  {
    id: "com.nuc.philpost",
    name: "PHL Post Tracker",
    description:
      "Track your Philippine postal service packages and mail with real-time updates and delivery notifications.",
    category: "Productivity",
    features: ["Package Tracking", "Real-time Updates", "Delivery Notifications", "History Log"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nuc.philpost",
    icon: "/PHL-Post.webp",
  },
  {
    id: "com.nuc.interparcel",
    name: "Interparcel Tracking",
    description: "International parcel tracking and shipping management for seamless global logistics.",
    category: "Business",
    features: ["Global Tracking", "Shipping Calculator", "Multi-carrier Support", "Cost Comparison"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nuc.interparcel",
    icon: "/international-parcel-shipping-app-icon.webp",
  },
  {
    id: "com.nuc.tforce",
    name: "TForce Logistics Tracking",
    description: "Professional logistics and fleet management solution for transportation companies.",
    category: "Business",
    features: ["Fleet Management", "Route Optimization", "Driver Tracking", "Analytics Dashboard"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nuc.tforce",
    icon: "/TForce.webp",
  },
  {
    id: "com.azad241.ABF",
    name: "ABF Freight",
    description: "Comprehensive freight management and tracking solution for logistics professionals.",
    category: "Business",
    features: ["Freight Tracking", "Load Management", "Document Scanner", "Customer Portal"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.azad241.ABF",
    icon: "/ABF.webp",
  },
]

const stats = [
  { icon: Smartphone, label: "Apps Published", value: "5+" },
  { icon: Download, label: "Total Downloads", value: "10K+" },
  { icon: Users, label: "Active Users", value: "5K+" },
  { icon: Star, label: "Average Rating", value: "4.5" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-space-grotesk font-bold text-xl text-foreground">Youth Empowerment Center Apps</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">
                Apps
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://play.google.com/store/apps/dev?id=4867051574317379371" target="_blank">
                View on Play Store
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Innovative Mobile Apps for Modern Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover our collection of professional mobile applications designed to streamline logistics, enhance
            productivity, and provide exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="#apps">
                Explore Our Apps
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://play.google.com/store/apps/dev?id=4867051574317379371" target="_blank">
                Play Store Profile
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-space-grotesk font-bold text-2xl text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Mobile Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade mobile solutions designed to meet diverse business and personal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <Card key={app.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={app.icon || "/placeholder.svg"}
                      alt={`${app.name} icon`}
                      className="w-16 h-16 rounded-xl shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="font-space-grotesk text-lg text-card-foreground group-hover:text-primary transition-colors">
                        {app.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {app.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">{app.description}</CardDescription>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-card-foreground">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                  >
                    <Link href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      Download on Play Store
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-foreground mb-6">About Youth Empowerment Center Apps</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are dedicated to creating innovative mobile applications that solve real-world problems. Our focus on
              logistics, productivity, and user experience drives us to develop apps that make a meaningful impact in
              people's daily lives and business operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-lg mb-2">Mobile-First</h3>
                <p className="text-muted-foreground text-sm">
                  Designed specifically for mobile devices with intuitive interfaces
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-lg mb-2">User-Centric</h3>
                <p className="text-muted-foreground text-sm">Built with user feedback and real-world testing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-lg mb-2">Quality Focus</h3>
                <p className="text-muted-foreground text-sm">Rigorous testing and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="font-space-grotesk font-bold text-xl">Youth Empowerment Center Apps</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Creating innovative mobile solutions for logistics, productivity, and beyond. Download our apps from
                Google Play Store.
              </p>
              <Button asChild variant="outline">
                <Link href="https://play.google.com/store/apps/dev?id=4867051574317379371" target="_blank">
                  View Developer Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div>
              <h3 className="font-space-grotesk font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#apps" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Apps
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-space-grotesk font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                    App Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Youth Empowerment Center Apps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
