import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Download,
  Upload,
  FileSpreadsheet,
  Search,
  GraduationCap,
  Users as UsersIcon,
  User,
  AlertCircle,
  Mail,
  Phone,
  MoreVertical,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  subtitle: string;
  role: "teacher" | "parent" | "student" | "admin";
  email: string;
  phone?: string;
  whatsappVerified: boolean;
  googleAccount?: string;
  googleSynced: boolean;
  status: "active" | "pending" | "inactive";
  linkedTo?: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    subtitle: "Teacher - Math Department",
    role: "teacher",
    email: "rajesh@manipal.org",
    phone: "+91-98765 43210",
    whatsappVerified: true,
    googleAccount: "rajesh@manipal.org",
    googleSynced: true,
    status: "active",
  },
  {
    id: "2",
    name: "Priya Sharma",
    subtitle: "Parent of Riya Sharma (Class 10A)",
    role: "parent",
    email: "priya.sharma@gmail.com",
    phone: "+91-98765 12345",
    whatsappVerified: true,
    googleSynced: false,
    status: "pending",
  },
  {
    id: "3",
    name: "Riya Sharma",
    subtitle: "Student - Class 10A",
    role: "student",
    email: "riya@manipal.org",
    whatsappVerified: false,
    googleAccount: "riya@manipal.org",
    googleSynced: true,
    status: "active",
    linkedTo: "Priya Sharma",
  },
  {
    id: "4",
    name: "Admin User",
    subtitle: "System Administrator",
    role: "admin",
    email: "admin@manipal.org",
    phone: "+91-98765 00000",
    whatsappVerified: true,
    googleAccount: "admin@manipal.org",
    googleSynced: true,
    status: "active",
  },
];

export default function Users() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newUserRole, setNewUserRole] = useState<string>("teacher");

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(mockUsers.map((u) => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "teacher":
        return "bg-[#A8B991] text-[#2C2C2C]";
      case "parent":
        return "bg-[#C4B5A0] text-[#2C2C2C]";
      case "student":
        return "bg-[#A8C8D4] text-[#2C2C2C]";
      case "admin":
        return "bg-[#8B7355] text-[#F5F1EA]";
      default:
        return "bg-[#A8A595] text-[#2C2C2C]";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-[#A8B991] text-[#2C2C2C] hover:bg-[#A8B991]/80">Active ✅</Badge>;
      case "pending":
        return <Badge className="bg-[#D4A574] text-[#2C2C2C] hover:bg-[#D4A574]/80">⚠️ Consent Pending</Badge>;
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout title="Users" breadcrumb="Home > Users">
      <div className="space-y-6">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setIsAddUserOpen(true)}
              className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
            <Button variant="outline" className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355]/10">
              <Download className="mr-2 h-4 w-4" />
              Import from Google
            </Button>
            <Button variant="outline" className="border-[#C4B5A0] text-[#2C2C2C] hover:bg-[#C4B5A0]/10">
              <Upload className="mr-2 h-4 w-4" />
              Bulk Upload CSV
            </Button>
            <Button variant="outline" className="border-[#C4B5A0] text-[#2C2C2C] hover:bg-[#C4B5A0]/10">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
          <div className="text-[#2C2C2C] font-bold">150 Users</div>
        </div>

        {/* Filter/Search Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8B7355]" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-[#C4B5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[#A8A595] text-sm">Role:</span>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[140px] border-[#C4B5A0]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-[#A8A595] text-sm">Status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px] border-[#C4B5A0]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending Consent</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="link" className="text-[#8B7355]" onClick={() => {
              setSearchQuery("");
              setRoleFilter("all");
              setStatusFilter("all");
            }}>
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[#2C2C2C]">45</div>
              <div className="text-sm text-[#A8A595]">Teachers</div>
            </div>
            <GraduationCap className="h-6 w-6 text-[#8B7355]" />
          </div>
          <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[#2C2C2C]">98</div>
              <div className="text-sm text-[#A8A595]">Parents</div>
            </div>
            <UsersIcon className="h-6 w-6 text-[#8B7355]" />
          </div>
          <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[#2C2C2C]">823</div>
              <div className="text-sm text-[#A8A595]">Students</div>
            </div>
            <User className="h-6 w-6 text-[#8B7355]" />
          </div>
          <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-[#D4A574]">7</div>
              <div className="text-sm text-[#A8A595]">Pending Consent</div>
            </div>
            <AlertCircle className="h-6 w-6 text-[#D4A574]" />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#C4B5A0]">
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedUsers.length === mockUsers.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold">Name</TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold">Role</TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold">Contact</TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold">Google Account</TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold">Status</TableHead>
                  <TableHead className="text-[#2C2C2C] font-bold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className={`border-b border-[#C4B5A0]/30 hover:bg-[#FAF7F2] transition-colors ${
                      selectedUsers.includes(user.id) ? "bg-[#A8B991]/10" : ""
                    }`}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={(checked) =>
                          handleSelectUser(user.id, checked as boolean)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#C4B5A0] border-2 border-[#C4B5A0] flex items-center justify-center text-[#2C2C2C] font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[#2C2C2C]">{user.name}</div>
                          <div className="text-xs text-[#A8A595]">{user.subtitle}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeClass(user.role)}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm text-[#2C2C2C]">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                        {user.phone && (
                          <div className="flex items-center gap-1 text-xs text-[#A8A595]">
                            <Phone className="h-3 w-3" />
                            {user.phone}
                            {user.whatsappVerified && <span className="text-[#A8B991]">✓</span>}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {user.googleAccount ? (
                        <div>
                          <div className="text-sm text-[#2C2C2C]">{user.googleAccount}</div>
                          {user.googleSynced && (
                            <div className="text-xs text-[#A8B991]">Synced ✅</div>
                          )}
                        </div>
                      ) : (
                        <span className="text-[#A8A595]">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(user.status)}
                      {user.linkedTo && (
                        <div className="text-xs text-[#A8A595] mt-1">
                          Linked to: {user.linkedTo}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#8B7355] hover:text-[#8B7355] hover:bg-[#8B7355]/10"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#C17B7B] hover:text-[#C17B7B] hover:bg-[#C17B7B]/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#8B7355] hover:text-[#8B7355] hover:bg-[#8B7355]/10"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="border-t border-[#C4B5A0] p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#A8A595]">Showing 1-10 of 150</div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-[#C4B5A0]"
                disabled
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 bg-[#8B7355] text-[#F5F1EA] border-[#8B7355]"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 px-3 border-[#C4B5A0]">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 px-3 border-[#C4B5A0]">
                3
              </Button>
              <span className="text-[#A8A595]">...</span>
              <Button variant="outline" size="sm" className="h-8 px-3 border-[#C4B5A0]">
                15
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 border-[#C4B5A0]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bulk Actions Bar */}
        {selectedUsers.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#8B7355] text-[#F5F1EA] p-4 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="font-medium">{selectedUsers.length} users selected</div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#F5F1EA] text-[#F5F1EA] hover:bg-[#F5F1EA]/10"
                >
                  Send Invitation
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F5F1EA] text-[#F5F1EA] hover:bg-[#F5F1EA]/10"
                >
                  Export Selected
                </Button>
                <Button className="bg-[#C17B7B] text-[#F5F1EA] hover:bg-[#C17B7B]/90">
                  Delete Selected
                </Button>
                <Button
                  variant="link"
                  className="text-[#F5F1EA]"
                  onClick={() => setSelectedUsers([])}
                >
                  Deselect All
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Add User Modal */}
        <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
          <DialogContent className="bg-[#F5F1EA] max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-[#2C2C2C] text-2xl font-playfair">
                Add New User
              </DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="manual" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#FAF7F2]">
                <TabsTrigger
                  value="manual"
                  className="data-[state=active]:bg-[#8B7355] data-[state=active]:text-[#F5F1EA]"
                >
                  Add Manually
                </TabsTrigger>
                <TabsTrigger
                  value="import"
                  className="data-[state=active]:bg-[#8B7355] data-[state=active]:text-[#F5F1EA]"
                >
                  Import from Google Classroom
                </TabsTrigger>
              </TabsList>

              <TabsContent value="manual" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#2C2C2C]">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    className="border-[#C4B5A0] focus:border-[#8B7355]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#2C2C2C]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="user@manipal.org"
                    className="border-[#C4B5A0] focus:border-[#8B7355]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#2C2C2C]">
                    WhatsApp Number <span className="text-[#A8A595]">(Optional for students)</span>
                  </Label>
                  <div className="flex gap-2">
                    <Select defaultValue="+91">
                      <SelectTrigger className="w-[100px] border-[#C4B5A0]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91 (IN)</SelectItem>
                        <SelectItem value="+1">+1 (US)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      placeholder="98765 43210"
                      className="flex-1 border-[#C4B5A0] focus:border-[#8B7355]"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[#2C2C2C]">Role</Label>
                  <RadioGroup value={newUserRole} onValueChange={setNewUserRole}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="teacher" id="teacher" />
                      <Label htmlFor="teacher" className="font-normal cursor-pointer">
                        Teacher
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parent" id="parent" />
                      <Label htmlFor="parent" className="font-normal cursor-pointer">
                        Parent
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="font-normal cursor-pointer">
                        Student
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="admin" id="admin" />
                      <Label htmlFor="admin" className="font-normal cursor-pointer">
                        Admin
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {newUserRole === "student" && (
                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF7F2] rounded-lg">
                    <div className="space-y-2">
                      <Label htmlFor="class" className="text-[#2C2C2C] text-sm">
                        Class/Grade
                      </Label>
                      <Input
                        id="class"
                        placeholder="10"
                        className="border-[#C4B5A0]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="section" className="text-[#2C2C2C] text-sm">
                        Section
                      </Label>
                      <Input
                        id="section"
                        placeholder="A"
                        className="border-[#C4B5A0]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roll" className="text-[#2C2C2C] text-sm">
                        Roll Number
                      </Label>
                      <Input
                        id="roll"
                        placeholder="15"
                        className="border-[#C4B5A0]"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-3 p-4 bg-[#FAF7F2] rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="google" />
                    <Label htmlFor="google" className="font-normal cursor-pointer text-[#2C2C2C]">
                      This user has a Google Classroom account
                    </Label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsAddUserOpen(false)}
                    className="border-[#C4B5A0]"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90">
                    Add User
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="import" className="space-y-4 mt-4">
                <div className="text-center py-8 text-[#A8A595]">
                  <Download className="h-12 w-12 mx-auto mb-4 text-[#8B7355]" />
                  <p className="mb-2">23 teachers and 456 students found in Google Classroom</p>
                  <Button className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90 mt-4">
                    Import Selected Users
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
