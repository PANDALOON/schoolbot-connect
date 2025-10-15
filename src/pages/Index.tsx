import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plug, Bot, Lock, Users, MessageCircle, Zap, GraduationCap, 
  Twitter, Linkedin, Mail, Play, Check, Shield, Star 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-secondary/80 backdrop-blur-lg supports-[backdrop-filter]:bg-secondary/60 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-accent">SchoolBot</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#testimonial" className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <a href="#footer" className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors">
              Login
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-sm font-semibold text-accent">Made for Indian Schools</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground leading-tight">
              Transform Parent Communication with AI
            </h1>
            
            <div className="space-y-3 mb-8 text-lg">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Parents get instant answers about grades via WhatsApp</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Teachers save 10+ hours per week</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Zero app downloads required</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-base border-accent text-accent hover:bg-accent/10 shadow-md">
                <Play className="h-4 w-4 mr-2" />
                Watch 2min Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>DPDPA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>5min Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💯</span>
                <span>500+ Schools</span>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Mockup */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="bg-primary rounded-[2.5rem] p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <Bot className="h-6 w-6 text-whatsapp" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-white text-sm">SchoolBot</span>
                        <Check className="h-4 w-4 text-white fill-white" />
                      </div>
                      <span className="text-xs text-white/80">AI Assistant</span>
                    </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="bg-[#E5DDD5] p-4 space-y-3 min-h-[400px]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\" fill=\"%23D9D0C7\" fill-opacity=\"0.15\"/%3E%3C/svg%3E')"}}>
                    {/* Parent Message */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%] border border-gray-200">
                        <p className="text-sm text-gray-800">How is my child doing in Math?</p>
                        <span className="text-xs text-gray-500 mt-1 block">10:23 AM</span>
                      </div>
                    </div>
                    
                    {/* Bot Response */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-3 shadow-sm max-w-[85%]">
                        <p className="text-sm text-gray-800 font-medium mb-2">Great news! Riya is performing excellently in Math 📊</p>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p><span className="font-semibold">Current Grade:</span> A- (88%)</p>
                          <p><span className="font-semibold">Recent Assignments:</span> 92%, 85%, 87%</p>
                          <p><span className="font-semibold">Attendance:</span> 95%</p>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">She's above the class average of 76%. Keep up the great work! 🌟</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-xs text-gray-500">10:23 AM</span>
                          <Check className="h-3 w-3 text-blue-500" />
                          <Check className="h-3 w-3 text-blue-500 -ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10hrs</div>
              <div className="text-sm text-muted-foreground">Saved/Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Everything Your School Needs</h2>
            <p className="text-lg text-muted-foreground">Seamless integration, intelligent responses, complete security</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-2 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Plug className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl">Instant Integration</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Connect Google Classroom, Microsoft Teams, or Outlook in under 5 minutes. Our guided setup walks you through every step.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Google Classroom</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Microsoft 365</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Gmail & Outlook</span>
                  </div>
                </div>
                <a href="#" className="text-accent hover:text-accent-foreground text-sm font-medium inline-flex items-center gap-1">
                  Learn more →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl">Natural AI Conversations</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Powered by Claude AI. Parents ask questions naturally in Hindi, English, or Hinglish—get accurate, contextual answers instantly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-muted-foreground italic">"बच्चे का homework क्या है?"</p>
                  <p className="text-xs text-accent mt-1">✓ Understood & Answered</p>
                </div>
                <a href="#" className="text-accent hover:text-accent-foreground text-sm font-medium inline-flex items-center gap-1">
                  See examples →
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl">Enterprise Security</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Bank-grade encryption, DPDPA compliant, ISO certified. Your school's data never leaves India's servers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="border-accent text-accent">SOC2</Badge>
                  <Badge variant="outline" className="border-accent text-accent">ISO 27001</Badge>
                  <Badge variant="outline" className="border-accent text-accent">DPDPA</Badge>
                </div>
                <a href="#" className="text-accent hover:text-accent-foreground text-sm font-medium inline-flex items-center gap-1">
                  View security →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section id="how-it-works" className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Go Live in 4 Simple Steps</h2>
            <p className="text-lg text-muted-foreground">Most schools are fully operational within 24 hours</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-6 shadow-lg border-2 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Plug className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent">Connect Your Systems</h3>
                        <span className="text-sm text-muted-foreground">⏱️ 5 minutes</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">One-click OAuth integration with your existing tools</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-6 shadow-lg border-2 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent">Import Users</h3>
                        <span className="text-sm text-muted-foreground">⏱️ 10 minutes</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Automatically discover teachers and students from your LMS</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    3
                  </div>
                  <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-6 shadow-lg border-2 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent">Invite Parents</h3>
                        <span className="text-sm text-muted-foreground">⏱️ 15 minutes</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Send WhatsApp invitation links via bulk SMS or email</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 shadow-lg border-2 border-accent hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <Zap className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent">You're Live!</h3>
                        <span className="text-sm text-accent font-semibold">✨ Ready to use</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Parents start getting AI-powered responses immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-2 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-4xl">
                    👩‍🏫
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-foreground mb-4 italic">
                      "SchoolBot reduced our parent inquiry calls by 85%. Parents love the instant WhatsApp responses!"
                    </blockquote>
                    <div className="text-muted-foreground">
                      <p className="font-semibold text-accent">Dr. Priya Sharma</p>
                      <p className="text-sm">Principal, Manipal International School</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-accent/30 to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Ready to Transform Your School Communication?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join 500+ schools already using SchoolBot</p>
          <Button size="lg" className="text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Start Free 30-Day Trial
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required  |  Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-primary border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
                <span className="text-lg font-bold text-accent">SchoolBot</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Smarter school communication</p>
              <div className="flex gap-4">
                <a href="#twitter" className="text-muted-foreground hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#linkedin" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#email" className="text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#features" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Features</a>
                <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Pricing</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Demo</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">About</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Careers</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Privacy</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Terms</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-accent transition-colors">Security</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Join
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2025 SchoolBot. Made with ❤️ in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;