import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Settings, TestTube, Phone, Mail, Calendar, MessageSquare, HelpCircle, BookOpen, HeadphonesIcon } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  status: "connected" | "not-connected" | "available" | "coming-soon";
  stats?: Array<{ label: string; value: string }>;
  features?: string[];
  connectionDetails?: Array<{ label: string; value: string; variant?: "success" | "default" }>;
  lastSync?: string;
  phoneNumber?: string;
  provider?: string;
  liveStats?: { label: string; value: string; quota?: { current: number; max: number } }[];
  comingSoonDate?: string;
}

const IntegrationCard = ({ 
  name, 
  description, 
  icon, 
  status, 
  stats, 
  features, 
  connectionDetails,
  lastSync,
  phoneNumber,
  provider,
  liveStats,
  comingSoonDate
}: IntegrationCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "connected":
        return <Badge className="bg-[#A8B991] text-[#2C2C2C] hover:bg-[#A8B991]/90">Connected ✓</Badge>;
      case "not-connected":
        return <Badge className="bg-[#C17B7B] text-white hover:bg-[#C17B7B]/90">Not Connected</Badge>;
      case "available":
        return <Badge className="bg-[#C4B5A0] text-[#2C2C2C] hover:bg-[#C4B5A0]/90">Available</Badge>;
      case "coming-soon":
        return <Badge className="bg-[#C4B5A0] text-[#2C2C2C] hover:bg-[#C4B5A0]/90">Coming Soon</Badge>;
    }
  };

  const isDisabled = status === "coming-soon";

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#C4B5A0] bg-[#F5F1EA] ${isDisabled ? 'opacity-60' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl">{icon}</div>
          {getStatusBadge()}
        </div>
        <CardTitle className="text-xl font-playfair text-[#2C2C2C]">{name}</CardTitle>
        <CardDescription className="text-[#A8A595]">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {stats && (
          <div className="grid grid-cols-3 gap-2">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#C4B5A0]/30 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-[#2C2C2C]">{stat.value}</div>
                <div className="text-xs text-[#A8A595]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {features && (
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#8B7355] shrink-0 mt-0.5" />
                <span className="text-[#A8A595]">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {connectionDetails && (
          <div className="space-y-1 pt-2 border-t border-[#C4B5A0]">
            {connectionDetails.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <span className={detail.variant === "success" ? "text-[#A8B991]" : "text-[#A8A595]"}>
                  {detail.label}: {detail.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {liveStats && (
          <div className="space-y-3 pt-2 border-t border-[#C4B5A0]">
            {liveStats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[#2C2C2C] font-semibold">{stat.label}</span>
                  <span className="text-lg font-bold text-[#2C2C2C]">{stat.value}</span>
                </div>
                {stat.quota && (
                  <div className="space-y-1">
                    <Progress value={(stat.quota.current / stat.quota.max) * 100} className="h-2" />
                    <span className="text-xs text-[#A8A595]">{stat.quota.current}/{stat.quota.max} daily limit</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {comingSoonDate && (
          <div className="text-center py-4 text-[#A8A595]">
            Available {comingSoonDate}
          </div>
        )}

        {!isDisabled && (
          <div className="flex items-center gap-2 pt-2">
            {status === "connected" && (
              <>
                <Button variant="outline" className="flex-1 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1EA]">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
                <Button variant="outline" className="flex-1 border-[#C4B5A0] text-[#2C2C2C] hover:bg-[#C4B5A0]/20">
                  <TestTube className="w-4 h-4 mr-2" />
                  Test
                </Button>
                <Button variant="ghost" className="text-[#C17B7B] hover:text-[#C17B7B] hover:bg-[#C17B7B]/10">
                  Disconnect
                </Button>
              </>
            )}
            {(status === "not-connected" || status === "available") && (
              <Button className="w-full bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90">
                Connect {name}
              </Button>
            )}
          </div>
        )}
        
        {status === "not-connected" && (
          <p className="text-xs text-[#A8A595] italic text-center">Requires admin consent</p>
        )}
      </CardContent>
    </Card>
  );
};

export default function Integrations() {
  return (
    <DashboardLayout title="Connect Services" breadcrumb="Home > Integrations">
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-2">Connect Services</h1>
          <p className="text-[#A8A595] mb-4">Integrate your school's existing systems with SchoolBot</p>
          
          {/* Quick Stats Bar */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#A8B991] font-semibold">3 Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#8B7355] font-semibold">2 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A8A595]">Last sync: 2 min ago</span>
            </div>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IntegrationCard
            name="Google Classroom"
            description="Access student grades, assignments, rosters, and course data"
            icon="📚"
            status="connected"
            stats={[
              { label: "Courses", value: "15" },
              { label: "Teachers", value: "45" },
              { label: "Students", value: "823" }
            ]}
            connectionDetails={[
              { label: "Connected as", value: "admin@manipal.org" },
              { label: "Domain", value: "manipal.org" },
              { label: "Last sync", value: "2 minutes ago", variant: "success" }
            ]}
          />

          <IntegrationCard
            name="Microsoft Teams & Outlook"
            description="Post announcements, send emails, access calendars and meetings"
            icon="💼"
            status="not-connected"
            features={[
              "Send emails on behalf of teachers",
              "Post announcements to channels",
              "Access student calendar",
              "Integration with Outlook"
            ]}
          />

          <IntegrationCard
            name="WhatsApp Business API"
            description="Receive and send messages to parents via WhatsApp"
            icon="💬"
            status="connected"
            liveStats={[
              { 
                label: "Messages Today", 
                value: "234",
                quota: { current: 234, max: 1000 }
              },
              { label: "Active Conversations", value: "5" }
            ]}
            connectionDetails={[
              { label: "Phone", value: "+1 415 523 8886" },
              { label: "Provider", value: "Meta WhatsApp Cloud API" },
              { label: "Status", value: "All systems operational", variant: "success" }
            ]}
          />

          <IntegrationCard
            name="Gmail"
            description="Send emails directly from SchoolBot on behalf of teachers"
            icon="📧"
            status="available"
            features={[
              "Personalized email templates",
              "Bulk email sending",
              "Email tracking",
              "Parent communication logs"
            ]}
          />

          <IntegrationCard
            name="Slack Integration"
            description="Team collaboration and notifications"
            icon="💼"
            status="coming-soon"
            comingSoonDate="Q2 2025"
          />

          <IntegrationCard
            name="Zoom Meetings"
            description="Schedule and manage parent-teacher meetings"
            icon="🎥"
            status="coming-soon"
            comingSoonDate="Q2 2025"
          />
        </div>

        {/* Help Section */}
        <Card className="bg-[#8B7355]/10 border-[#8B7355]">
          <CardContent className="flex items-center gap-6 p-6">
            <div className="flex-shrink-0">
              <HelpCircle className="w-12 h-12 text-[#8B7355]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#2C2C2C] mb-1">Need help connecting your services?</h3>
              <p className="text-[#2C2C2C]">Check our integration guides or contact support</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1EA]">
                <BookOpen className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1EA]">
                <HeadphonesIcon className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
