import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Mail, 
  Shield, 
  CheckCircle, 
  Info,
  Send,
  Bell,
  Calendar,
  AlertCircle,
  Users,
  Settings,
  MessageCircle,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function GmailSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOAuthConnected, setIsOAuthConnected] = useState(false);
  const [testEmail, setTestEmail] = useState("admin@manipal.org");
  const [testMessage, setTestMessage] = useState("This is a test email from SchoolBot.\n\nIf you receive this, Gmail integration is working correctly!\n\n- SchoolBot Team");
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleOAuthConnect = () => {
    // Simulate OAuth connection
    setTimeout(() => {
      setIsOAuthConnected(true);
      toast({
        title: "Gmail connected successfully!",
        className: "bg-success text-charcoal",
      });
    }, 1500);
  };

  const handleSendTestEmail = () => {
    setIsSending(true);
    // Simulate sending email
    setTimeout(() => {
      setIsSending(false);
      setEmailSent(true);
      toast({
        title: "Test email sent!",
        description: "Check your inbox to verify.",
        className: "bg-success text-charcoal",
      });
    }, 2000);
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary border-b border-muted py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/dashboard" className="text-xl font-bold text-charcoal">
            SchoolBot
          </Link>
          <h1 className="text-xl font-serif text-charcoal">Setup Gmail</h1>
          <span className="text-sm text-muted">Step {currentStep} of 3</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-secondary border-b border-muted py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step < currentStep
                      ? "bg-success text-background"
                      : step === currentStep
                      ? "bg-accent text-secondary scale-110"
                      : "border-2 border-muted text-muted bg-background"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step < currentStep ? "bg-success" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted mt-2">
            <span>Introduction</span>
            <span>OAuth</span>
            <span>Complete</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {/* STEP 1: INTRODUCTION */}
          {currentStep === 1 && (
            <div className="bg-secondary border border-muted rounded-lg p-8 space-y-6 animate-fade-in">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-[#EA4335] rounded-full flex items-center justify-center">
                  <Mail className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-serif text-charcoal mb-2">Connect Gmail</h2>
                <p className="text-muted">Enable teachers to send emails through SchoolBot</p>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-3">
                <h3 className="text-charcoal font-bold">With Gmail connected, you can:</h3>
                <ul className="space-y-2">
                  {[
                    "Send emails on behalf of teachers",
                    "Send bulk announcements to parents",
                    "Track email delivery and opens",
                    "Send automated grade notifications",
                    "Combine WhatsApp + Email communication"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-charcoal font-bold">Before you start:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                    <span>Google Workspace admin access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                    <span>Your school's domain (e.g., manipal.org)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                    <span>2 minutes to complete setup</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-charcoal font-bold">We'll request:</h3>
                <div className="flex items-start gap-3 text-sm text-charcoal">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <span>Send emails only - We'll never read or access existing emails</span>
                </div>
              </div>

              <div className="bg-success/10 border border-success rounded-lg p-4 flex gap-3">
                <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal">
                  Gmail uses the same OAuth connection as Google Classroom. If you've already connected Google Classroom, this will be even faster.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" className="border-muted text-charcoal" asChild>
                  <Link to="/dashboard/integrations">Cancel</Link>
                </Button>
                <Button 
                  onClick={() => setCurrentStep(2)}
                  className="bg-accent text-secondary hover:bg-accent/90"
                >
                  Continue to Gmail →
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: OAUTH CONNECTION */}
          {currentStep === 2 && (
            <div className="bg-secondary border border-muted rounded-lg p-8 space-y-6 animate-fade-in">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-[#EA4335] rounded-full flex items-center justify-center">
                  <Mail className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-serif text-charcoal mb-2">Authorize Gmail Access</h2>
                <p className="text-muted">Grant SchoolBot permission to send emails</p>
              </div>

              <div className="bg-background border border-muted rounded-lg p-6 space-y-3">
                <h3 className="text-charcoal font-bold mb-3">Instructions:</h3>
                <ol className="space-y-2 list-decimal list-inside text-sm text-charcoal">
                  <li>Click the button below</li>
                  <li>Sign in with your admin account (@manipal.org)</li>
                  <li>Review permissions (send email only)</li>
                  <li>Click "Allow"</li>
                </ol>
              </div>

              <div className="bg-success/10 border border-success rounded-lg p-4 flex gap-3">
                <Info className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal">
                  Since you've already connected Google Classroom, you'll see the same Google account. Just grant the email permission.
                </p>
              </div>

              <div className="flex justify-center py-4">
                <Button
                  onClick={handleOAuthConnect}
                  disabled={isOAuthConnected}
                  className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-[#4285F4] shadow-md h-12 px-8"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {isOAuthConnected ? "Connected!" : "Sign in with Google"}
                </Button>
              </div>

              {isOAuthConnected ? (
                <div className="text-center">
                  <p className="text-success font-bold flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Gmail connected successfully!
                  </p>
                </div>
              ) : (
                <div className="text-center text-sm text-muted">
                  Waiting for authorization...
                </div>
              )}

              <div className="bg-background border border-muted rounded-lg p-4 space-y-2">
                <h4 className="text-charcoal font-bold text-sm">Specific permission:</h4>
                <code className="text-xs bg-charcoal/5 px-2 py-1 rounded block">
                  https://www.googleapis.com/auth/gmail.send
                </code>
                <p className="text-xs text-muted italic">
                  This allows sending emails only. We cannot read or access your inbox.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(1)}
                  className="border-muted text-charcoal"
                >
                  ← Back
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)}
                  disabled={!isOAuthConnected}
                  className="bg-accent text-secondary hover:bg-accent/90 disabled:opacity-50"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: COMPLETE & TEST */}
          {currentStep === 3 && (
            <div className="bg-secondary border border-muted rounded-lg p-8 space-y-6 animate-fade-in">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-serif text-charcoal mb-2">Gmail Connected!</h2>
                <p className="text-success font-medium">You can now send emails through SchoolBot</p>
              </div>

              <div className="bg-background border border-muted rounded-lg p-6 space-y-2">
                <h3 className="text-charcoal font-bold mb-3">Connection Details:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted">Connected as:</span>
                    <p className="text-charcoal font-medium">admin@manipal.org</p>
                  </div>
                  <div>
                    <span className="text-muted">Domain:</span>
                    <p className="text-charcoal font-medium">manipal.org</p>
                  </div>
                  <div>
                    <span className="text-muted">Permission:</span>
                    <p className="text-success font-medium">Send emails ✅</p>
                  </div>
                  <div>
                    <span className="text-muted">Status:</span>
                    <p className="text-success font-medium">Active ✅</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-charcoal font-bold mb-1">Send Test Email</h3>
                  <p className="text-sm text-muted">Verify the connection by sending a test email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-email" className="text-charcoal">Send test email to:</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
                    <Input 
                      id="test-email"
                      type="email"
                      value={testEmail}
                      onChange={(e) => setTestEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="pl-10 border-muted focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-message" className="text-charcoal">Test message:</Label>
                  <Textarea 
                    id="test-message"
                    rows={4}
                    value={testMessage}
                    onChange={(e) => setTestMessage(e.target.value)}
                    className="border-muted focus:border-accent"
                  />
                </div>

                <Button 
                  onClick={handleSendTestEmail}
                  disabled={isSending || emailSent}
                  className="bg-accent text-secondary hover:bg-accent/90 w-full"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : emailSent ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Test email sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Test Email
                    </>
                  )}
                </Button>

                {emailSent && (
                  <p className="text-sm text-success text-center">
                    ✅ Test email sent! Check your inbox.
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-charcoal font-bold mb-1">Email Templates</h3>
                  <p className="text-sm text-muted">Pre-configured templates for common scenarios</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { icon: Bell, title: "Grade Notification", desc: "Send grade updates to parents" },
                    { icon: Calendar, title: "Event Reminder", desc: "Parent-teacher meeting reminders" },
                    { icon: AlertCircle, title: "Urgent Alert", desc: "Important school announcements" }
                  ].map((template, idx) => (
                    <div key={idx} className="bg-background border border-muted rounded-lg p-4 space-y-2">
                      <template.icon className="w-6 h-6 text-accent" />
                      <h4 className="text-sm font-bold text-charcoal">{template.title}</h4>
                      <p className="text-xs text-muted">{template.desc}</p>
                      <span className="inline-block text-xs bg-muted px-2 py-1 rounded text-charcoal">
                        Coming Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-warning/10 border border-warning rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-charcoal font-bold text-sm mb-1">Gmail Sending Limits</h4>
                    <p className="text-xs text-charcoal mb-2">
                      Google Workspace allows 2,000 emails per day per account. SchoolBot will track your usage and alert you before reaching limits.
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted">Today's usage</span>
                        <span className="text-charcoal font-medium">0 / 2,000</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-charcoal font-bold">What's Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { icon: Users, title: "Verify Teacher Emails", desc: "Make sure all teachers have valid Gmail addresses", link: "/dashboard/users" },
                    { icon: Settings, title: "Configure Email Settings", desc: "Set sender name, signature, and preferences", link: "/dashboard/settings" },
                    { icon: MessageCircle, title: "Combine with WhatsApp", desc: "Use both channels for better reach", link: "/dashboard/integrations" }
                  ].map((next, idx) => (
                    <div key={idx} className="bg-background border border-muted rounded-lg p-4 space-y-3">
                      <next.icon className="w-6 h-6 text-accent" />
                      <div>
                        <h4 className="text-sm font-bold text-charcoal mb-1">{next.title}</h4>
                        <p className="text-xs text-muted mb-3">{next.desc}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-secondary" asChild>
                        <Link to={next.link}>View</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="bg-accent text-secondary hover:bg-accent/90 px-12" asChild>
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
