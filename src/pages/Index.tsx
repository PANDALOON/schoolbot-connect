import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plug, Bot, Lock, Users, MessageCircle, Zap, GraduationCap, Twitter, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SchoolBot</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#footer" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#footer" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Login
            </a>
            <Button>Get Started Free</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transform Parent Communication with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Parents get instant answers about grades, assignments, and attendance via WhatsApp. 
              Teachers save hours. No app downloads needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-base">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-8 shadow-lg">
            <div className="bg-background rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Parent</p>
                  <p className="text-sm bg-muted p-3 rounded-lg">How is my child doing in Math?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="bg-primary rounded-full p-2">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm font-medium mb-1">SchoolBot AI</p>
                  <div className="text-sm bg-primary/10 p-3 rounded-lg text-left">
                    <p className="font-medium mb-2">Current Grade: A- (88%)</p>
                    <p className="text-xs text-muted-foreground">Recent assignments: 92%, 85%, 87%</p>
                    <p className="text-xs text-muted-foreground">Attendance: 95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your School Needs</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Plug className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription className="text-base">
                  Connect Google Classroom, Microsoft Teams, and Outlook in minutes. No technical setup required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Responses</CardTitle>
                <CardDescription className="text-base">
                  Natural conversations powered by Claude AI. Parents ask questions in any language, get instant answers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DPDPA Compliant</CardTitle>
                <CardDescription className="text-base">
                  Secure, encrypted, and fully compliant with India's Digital Personal Data Protection Act.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Set Up in 4 Simple Steps</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Plug className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect Your Systems</h3>
              <p className="text-sm text-muted-foreground">Link Google Classroom or Microsoft Teams</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Map Users</h3>
              <p className="text-sm text-muted-foreground">Import teachers and students</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Parents Join WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Send invite links to parents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Start Communicating</h3>
              <p className="text-sm text-muted-foreground">Parents get instant AI responses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">SchoolBot</span>
              </div>
              <p className="text-sm text-muted-foreground">Smarter school communication</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:justify-center">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
            
            <div className="flex gap-4 md:justify-end">
              <a href="#twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2025 SchoolBot. Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;