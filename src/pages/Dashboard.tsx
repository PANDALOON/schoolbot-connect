import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Parents",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      color: "text-[#8B7355]",
      bgColor: "bg-[#8B7355]/10",
    },
    {
      title: "Messages Today",
      value: "1,429",
      change: "+8.2%",
      changeType: "positive",
      icon: MessageSquare,
      color: "text-[#8B7355]",
      bgColor: "bg-[#8B7355]/10",
    },
    {
      title: "Response Rate",
      value: "98.6%",
      change: "+2.4%",
      changeType: "positive",
      icon: TrendingUp,
      color: "text-[#A8A595]",
      bgColor: "bg-[#A8A595]/10",
    },
    {
      title: "Avg Response Time",
      value: "2.3s",
      change: "-0.5s",
      changeType: "positive",
      icon: Clock,
      color: "text-[#A8A595]",
      bgColor: "bg-[#A8A595]/10",
    },
  ];

  const recentActivity = [
    { user: "Priya Sharma", action: "Asked about Math grades", time: "2 min ago", status: "resolved" },
    { user: "Rajesh Kumar", action: "Requested assignment details", time: "5 min ago", status: "resolved" },
    { user: "Anita Patel", action: "Inquired about attendance", time: "12 min ago", status: "resolved" },
    { user: "Vikram Singh", action: "Asked about upcoming events", time: "18 min ago", status: "resolved" },
    { user: "Meera Reddy", action: "Requested fee payment info", time: "25 min ago", status: "pending" },
  ];

  const quickStats = [
    { label: "Active Integrations", value: "3/5" },
    { label: "Teachers", value: "45" },
    { label: "Students", value: "850" },
    { label: "This Month Messages", value: "38,429" },
  ];

  return (
    <DashboardLayout title="Dashboard" breadcrumb="Home > Dashboard">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="bg-[#F5F1EA] border-[#C4B5A0] hover:shadow-lg transition-shadow"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#2C2C2C]">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2C2C2C] mb-1">
                {stat.value}
              </div>
              <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 bg-[#F5F1EA] border-[#C4B5A0]">
          <CardHeader>
            <CardTitle className="text-xl font-playfair text-[#2C2C2C]">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-[#C4B5A0] hover:border-[#8B7355] transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-[#2C2C2C]">{activity.user}</p>
                    <p className="text-sm text-[#A8A595]">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#A8A595] mb-1">{activity.time}</p>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === 'resolved' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-[#F5F1EA] border-[#C4B5A0]">
          <CardHeader>
            <CardTitle className="text-xl font-playfair text-[#2C2C2C]">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quickStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 bg-white/50 rounded-lg border border-[#C4B5A0]"
                >
                  <span className="text-sm text-[#A8A595]">{stat.label}</span>
                  <span className="font-semibold text-lg text-[#2C2C2C]">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* System Status */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-700">System Status</span>
              </div>
              <p className="text-sm text-green-600">All services operational</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration Status */}
      <Card className="mt-6 bg-[#F5F1EA] border-[#C4B5A0]">
        <CardHeader>
          <CardTitle className="text-xl font-playfair text-[#2C2C2C]">Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-[#C4B5A0]">
              <div>
                <p className="font-medium text-[#2C2C2C]">Google Classroom</p>
                <p className="text-xs text-[#A8A595]">Last sync: 5 min ago</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-[#C4B5A0]">
              <div>
                <p className="font-medium text-[#2C2C2C]">Microsoft Teams</p>
                <p className="text-xs text-[#A8A595]">Last sync: 12 min ago</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-[#C4B5A0]">
              <div>
                <p className="font-medium text-[#2C2C2C]">WhatsApp Business</p>
                <p className="text-xs text-[#A8A595]">Last sync: 1 min ago</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Dashboard;
