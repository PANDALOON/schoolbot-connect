import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  Upload, 
  Calendar, 
  Info, 
  FileText, 
  CheckCircle,
  Save,
  X
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [typingDelay, setTypingDelay] = useState([2]);

  const handleSave = () => {
    toast({
      title: "Settings saved successfully",
      description: "Your changes have been applied.",
      className: "bg-success text-charcoal",
    });
  };

  return (
    <DashboardLayout title="Settings" breadcrumb="Home > Settings">
      <div className="space-y-6">
        <Tabs defaultValue="school-info" className="w-full">
          <TabsList className="bg-secondary border-b border-muted w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger 
              value="school-info" 
              className="data-[state=active]:border-b-[3px] data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent rounded-none text-muted data-[state=active]:shadow-none"
            >
              School Info
            </TabsTrigger>
            <TabsTrigger 
              value="bot-behavior"
              className="data-[state=active]:border-b-[3px] data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent rounded-none text-muted data-[state=active]:shadow-none"
            >
              Bot Behavior
            </TabsTrigger>
            <TabsTrigger 
              value="privacy"
              className="data-[state=active]:border-b-[3px] data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent rounded-none text-muted data-[state=active]:shadow-none"
            >
              Privacy & Data
            </TabsTrigger>
            <TabsTrigger 
              value="notifications"
              className="data-[state=active]:border-b-[3px] data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent rounded-none text-muted data-[state=active]:shadow-none"
            >
              Notifications
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: SCHOOL INFORMATION */}
          <TabsContent value="school-info">
            <Card className="bg-secondary border-muted">
              <CardHeader>
                <CardTitle className="text-charcoal text-xl">School Information</CardTitle>
                <CardDescription className="text-muted">Basic details about your institution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="school-name" className="text-charcoal">School Name</Label>
                  <Input 
                    id="school-name" 
                    defaultValue="Manipal International School"
                    placeholder="Enter school name"
                    className="border-muted focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school-domain" className="text-charcoal">School Domain</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="school-domain" 
                      defaultValue="manipal"
                      className="border-muted focus:border-accent"
                    />
                    <span className="text-muted text-sm">.org</span>
                  </div>
                  <p className="text-xs text-muted italic">Used for email addresses</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-charcoal">School Address</Label>
                  <Textarea 
                    id="address"
                    rows={3}
                    defaultValue="123 School Street&#10;Manipal, Karnataka&#10;India - 576104"
                    className="border-muted focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-charcoal">Contact Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
                      <Input 
                        id="email"
                        type="email"
                        defaultValue="admin@manipal.org"
                        className="pl-10 border-muted focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-charcoal">Contact Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-accent" />
                      <Input 
                        id="phone"
                        defaultValue="+91-80-12345678"
                        className="pl-10 border-muted focus:border-accent"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-charcoal">Time Zone</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-accent" />
                    <select 
                      id="timezone"
                      className="w-full pl-10 h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      defaultValue="asia-kolkata"
                    >
                      <option value="asia-kolkata">Asia/Kolkata (IST) - UTC+05:30</option>
                      <option value="asia-mumbai">Asia/Mumbai (IST) - UTC+05:30</option>
                      <option value="asia-delhi">Asia/Delhi (IST) - UTC+05:30</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal">School Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full border-2 border-muted bg-background flex items-center justify-center">
                      <span className="text-muted text-xs">No Logo</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-secondary">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload New Logo
                      </Button>
                      <button className="text-xs text-destructive hover:underline">Remove Logo</button>
                    </div>
                  </div>
                  <p className="text-xs text-muted italic">Recommended: 512x512px, PNG or JPG, max 2MB</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-muted">
                  <p className="text-xs text-muted">Last saved: 2 hours ago</p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-muted text-charcoal">
                      Discard Changes
                    </Button>
                    <Button onClick={handleSave} className="bg-accent text-secondary hover:bg-accent/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: BOT BEHAVIOR */}
          <TabsContent value="bot-behavior">
            <Card className="bg-secondary border-muted">
              <CardHeader>
                <CardTitle className="text-charcoal text-xl">Bot Configuration</CardTitle>
                <CardDescription className="text-muted">Customize how SchoolBot responds to parents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bot-name" className="text-charcoal">Bot Name</Label>
                  <Input 
                    id="bot-name"
                    defaultValue="SchoolBot"
                    className="border-muted focus:border-accent"
                  />
                  <p className="text-xs text-muted italic">Name shown in WhatsApp conversations</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-charcoal font-bold">Response Style</Label>
                    <p className="text-sm text-muted">Choose how the bot communicates</p>
                  </div>

                  <RadioGroup value={responseStyle} onValueChange={setResponseStyle} className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 rounded-lg border border-muted hover:border-accent transition-colors">
                      <RadioGroupItem value="professional" id="professional" className="mt-1" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="professional" className="text-charcoal font-medium cursor-pointer">
                          Professional
                        </Label>
                        <p className="text-xs text-muted">
                          Formal, structured responses suitable for official communication
                        </p>
                        <div className="p-3 bg-background rounded border border-muted text-xs text-charcoal">
                          Good afternoon. Riya's current Mathematics grade is A- (88%). Her recent assignment scores are 92%, 85%, and 87%.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-success bg-success/5 transition-colors">
                      <RadioGroupItem value="friendly" id="friendly" className="mt-1" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="friendly" className="text-charcoal font-medium cursor-pointer">
                          Friendly
                        </Label>
                        <p className="text-xs text-muted">
                          Warm, approachable tone while maintaining professionalism
                        </p>
                        <div className="p-3 bg-background rounded border border-success text-xs text-charcoal">
                          Great news! 📊 Riya is doing excellently in Math! Current grade: A- (88%). She's above class average. Keep it up! 🌟
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 rounded-lg border border-muted hover:border-accent transition-colors">
                      <RadioGroupItem value="casual" id="casual" className="mt-1" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="casual" className="text-charcoal font-medium cursor-pointer">
                          Casual
                        </Label>
                        <p className="text-xs text-muted">
                          Conversational and relaxed, like chatting with a teacher
                        </p>
                        <div className="p-3 bg-background rounded border border-muted text-xs text-charcoal">
                          Hey! Riya's crushing it in Math! 🎉 She got 88% overall. Recent tests: 92%, 85%, 87%. She's doing awesome!
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="text-charcoal">Default Language</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-accent" />
                    <select 
                      id="language"
                      className="w-full pl-10 h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      defaultValue="english"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="hinglish">Hinglish</option>
                      <option value="tamil">Tamil</option>
                      <option value="telugu">Telugu</option>
                    </select>
                  </div>
                  <p className="text-xs text-muted italic">Bot will respond in this language unless parent specifies otherwise</p>
                </div>

                <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-charcoal">Enable multi-language detection</p>
                    <p className="text-xs text-muted">Automatically detect and respond in parent's language</p>
                  </div>
                  <Switch />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-charcoal font-bold">Auto-Reply Schedule</Label>
                    <p className="text-sm text-muted">Set when the bot automatically responds</p>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                    <p className="text-sm font-medium text-charcoal">Enable auto-reply schedule</p>
                    <Switch defaultChecked />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pl-4">
                    <div className="space-y-2">
                      <Label className="text-charcoal text-sm">From</Label>
                      <select className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm">
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-charcoal text-sm">To</Label>
                      <select className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm">
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                      </select>
                    </div>
                    <p className="text-xs text-muted col-span-2">Monday - Friday</p>
                  </div>

                  <div className="flex items-center space-x-2 pl-4">
                    <input type="checkbox" id="weekend" className="rounded border-muted" />
                    <Label htmlFor="weekend" className="text-sm text-charcoal cursor-pointer">
                      Enable weekend auto-replies
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="greeting" className="text-charcoal font-bold">Welcome Message</Label>
                  <p className="text-sm text-muted">First message sent to new users</p>
                  <Textarea 
                    id="greeting"
                    rows={4}
                    defaultValue="Hello! 👋 I'm SchoolBot, your automated assistant for Manipal International School. I can help you with information about grades, assignments, attendance, and more. How can I help you today?"
                    className="border-muted focus:border-accent"
                  />
                  <p className="text-xs text-muted">167/1000 characters</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-charcoal">Typing Indicator</Label>
                    <p className="text-sm text-muted">Show 'typing...' for {typingDelay[0]} seconds before responding</p>
                  </div>
                  <Slider 
                    value={typingDelay}
                    onValueChange={setTypingDelay}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted">
                    <span>0s</span>
                    <span>1s</span>
                    <span>2s</span>
                    <span>3s</span>
                    <span>4s</span>
                    <span>5s</span>
                  </div>
                  <p className="text-xs text-muted italic">Makes responses feel more natural</p>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-muted">
                  <Button variant="outline" className="border-muted text-charcoal">
                    Discard Changes
                  </Button>
                  <Button onClick={handleSave} className="bg-accent text-secondary hover:bg-accent/90">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: PRIVACY & DATA */}
          <TabsContent value="privacy">
            <Card className="bg-secondary border-muted">
              <CardHeader>
                <CardTitle className="text-charcoal text-xl">Privacy & Compliance</CardTitle>
                <CardDescription className="text-muted">Data protection and retention settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Data Retention Policies</h3>

                  <div className="space-y-2">
                    <Label htmlFor="chat-retention" className="text-charcoal">Chat History Retention</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-accent" />
                      <select 
                        id="chat-retention"
                        className="w-full pl-10 h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm"
                        defaultValue="90"
                      >
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="365">1 year</option>
                        <option value="forever">Forever</option>
                      </select>
                    </div>
                    <p className="text-xs text-muted italic">WhatsApp conversations auto-delete after this period</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-logs" className="text-charcoal">API Logs Retention</Label>
                    <select 
                      id="api-logs"
                      className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm"
                      defaultValue="30"
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                    </select>
                    <p className="text-xs text-muted italic">Technical logs for debugging</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activity-logs" className="text-charcoal">Activity Logs Retention</Label>
                    <select 
                      id="activity-logs"
                      className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm"
                      defaultValue="365"
                    >
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">1 year</option>
                      <option value="730">2 years</option>
                    </select>
                    <p className="text-xs text-muted italic">User activity history for compliance</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">AI & Third-Party Processing</h3>
                  
                  <div className="p-4 bg-success/10 border border-success rounded-lg flex gap-3">
                    <Info className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="text-sm text-charcoal">
                        We use Anthropic Claude AI for generating responses. Messages are processed per their Data Processing Agreement with 30-day maximum retention.
                      </p>
                      <a href="#" className="text-sm text-accent underline hover:text-accent/80">
                        View Anthropic DPA →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="ai-logging" className="rounded border-muted" />
                    <div>
                      <Label htmlFor="ai-logging" className="text-sm text-charcoal cursor-pointer">
                        Log AI interactions for quality improvement
                      </Label>
                      <p className="text-xs text-muted">Helps improve response accuracy (data anonymized)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Parental Consent Management</h3>

                  <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Require consent before first interaction</p>
                      <p className="text-xs text-muted">Parents must explicitly consent before using the system</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2 pl-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent-whatsapp" defaultChecked className="rounded border-muted" />
                      <Label htmlFor="consent-whatsapp" className="text-sm text-charcoal cursor-pointer">
                        Send consent form via WhatsApp
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent-renewal" className="rounded border-muted" />
                      <Label htmlFor="consent-renewal" className="text-sm text-charcoal cursor-pointer">
                        Require annual consent renewal
                      </Label>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="border-accent text-accent">
                      Preview Consent Form
                    </Button>
                    <Button variant="outline" className="border-muted text-charcoal">
                      Edit Consent Text
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Compliance Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Button variant="outline" className="border-accent text-accent justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Privacy Policy Template
                    </Button>
                    <Button variant="outline" className="border-accent text-accent justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Consent Form Template
                    </Button>
                    <Button variant="outline" className="border-accent text-accent justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Parent Info Sheet
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">User Rights Management</h3>
                  <p className="text-sm text-muted">How parents can exercise their data rights</p>

                  <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Enable self-service data requests</p>
                      <p className="text-xs text-muted">Parents can request data export/deletion via WhatsApp</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deletion-timeline" className="text-charcoal">Data Deletion Timeline</Label>
                    <Input 
                      id="deletion-timeline"
                      defaultValue="Within 48 hours"
                      className="border-muted focus:border-accent"
                    />
                    <p className="text-xs text-muted italic">How quickly you respond to deletion requests</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-muted">
                  <Button variant="outline" className="border-muted text-charcoal">
                    Discard Changes
                  </Button>
                  <Button onClick={handleSave} className="bg-accent text-secondary hover:bg-accent/90">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 4: NOTIFICATIONS */}
          <TabsContent value="notifications">
            <Card className="bg-secondary border-muted">
              <CardHeader>
                <CardTitle className="text-charcoal text-xl">Notification Preferences</CardTitle>
                <CardDescription className="text-muted">Choose when and how you receive alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Email Alerts</h3>
                    <p className="text-sm text-muted">Sent to admin@manipal.org</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: "new-user", label: "New user registration", checked: true },
                      { id: "integration", label: "Integration connection/disconnection", checked: true },
                      { id: "errors", label: "System errors or failures", checked: true },
                      { id: "daily", label: "Daily activity summary (sent at 9 AM)", checked: true },
                      { id: "weekly", label: "Weekly analytics report", checked: false },
                      { id: "deletion", label: "Data deletion requests", checked: true },
                      { id: "consent", label: "Parental consent withdrawals", checked: true },
                      { id: "quota", label: "Low message quota warning", checked: false },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id={item.id} 
                          defaultChecked={item.checked}
                          className="rounded border-muted" 
                        />
                        <Label htmlFor={item.id} className="text-sm text-charcoal cursor-pointer font-normal">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">WhatsApp Alerts</h3>
                    <p className="text-sm text-muted">Sent to admin's WhatsApp</p>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                    <p className="text-sm font-medium text-charcoal">Enable WhatsApp notifications</p>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2 pl-4">
                    {[
                      { id: "critical", label: "Critical system errors", checked: true },
                      { id: "integration-fail", label: "Integration failures", checked: true },
                      { id: "daily-wa", label: "Daily summary", checked: false },
                      { id: "complaints", label: "Parent complaint flagged", checked: false },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id={item.id} 
                          defaultChecked={item.checked}
                          className="rounded border-muted" 
                        />
                        <Label htmlFor={item.id} className="text-sm text-charcoal cursor-pointer font-normal">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Notification Frequency</h3>
                  <p className="text-sm text-muted">Summary Frequency</p>

                  <RadioGroup defaultValue="daily" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="freq-daily" />
                      <Label htmlFor="freq-daily" className="text-sm text-charcoal cursor-pointer font-normal">
                        Daily (9 AM)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="freq-weekly" />
                      <Label htmlFor="freq-weekly" className="text-sm text-charcoal cursor-pointer font-normal">
                        Weekly (Monday 9 AM)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="freq-monthly" />
                      <Label htmlFor="freq-monthly" className="text-sm text-charcoal cursor-pointer font-normal">
                        Monthly (1st of month)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Quiet Hours</h3>
                  
                  <div className="flex items-center justify-between p-4 border border-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Enable quiet hours</p>
                      <p className="text-xs text-muted">Don't send non-critical notifications during these hours</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pl-4">
                    <div className="space-y-2">
                      <Label className="text-charcoal text-sm">From</Label>
                      <select className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm" defaultValue="22:00">
                        <option>22:00</option>
                        <option>23:00</option>
                        <option>00:00</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-charcoal text-sm">To</Label>
                      <select className="w-full h-10 rounded-md border border-muted bg-background px-3 py-2 text-sm" defaultValue="07:00">
                        <option>06:00</option>
                        <option>07:00</option>
                        <option>08:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal">Alert Thresholds</h3>

                  <div className="space-y-2">
                    <Label htmlFor="failed-threshold" className="text-charcoal">Failed Messages Threshold</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="failed-threshold"
                        type="number"
                        defaultValue="10"
                        className="border-muted focus:border-accent w-24"
                      />
                      <span className="text-sm text-charcoal">messages</span>
                    </div>
                    <p className="text-xs text-muted italic">Alert when this many messages fail to send</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="response-threshold" className="text-charcoal">Response Time Threshold</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="response-threshold"
                        type="number"
                        defaultValue="30"
                        className="border-muted focus:border-accent w-24"
                      />
                      <span className="text-sm text-charcoal">seconds</span>
                    </div>
                    <p className="text-xs text-muted italic">Alert when responses take longer than this</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-muted">
                  <Button variant="outline" className="border-muted text-charcoal">
                    Discard Changes
                  </Button>
                  <Button onClick={handleSave} className="bg-accent text-secondary hover:bg-accent/90">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
