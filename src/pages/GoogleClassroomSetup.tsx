import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  Lock,
  AlertCircle,
  Info,
  Users,
  Settings,
  MessageCircle,
  Copy,
  Check,
  Shield,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GoogleClassroomSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [oauthConnected, setOauthConnected] = useState(false);
  const [delegationCompleted, setDelegationCompleted] = useState(false);
  const [importOption, setImportOption] = useState("all");
  const [copiedClient, setCopiedClient] = useState(false);
  const [copiedScopes, setCopiedScopes] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  const clientId = "123456789012345678901.apps.googleusercontent.com";
  const scopes = `https://www.googleapis.com/auth/classroom.courses.readonly,
https://www.googleapis.com/auth/classroom.rosters.readonly,
https://www.googleapis.com/auth/classroom.student-submissions.students.readonly,
https://www.googleapis.com/auth/classroom.profile.emails`;

  const handleCopyClientId = () => {
    navigator.clipboard.writeText(clientId);
    setCopiedClient(true);
    setTimeout(() => setCopiedClient(false), 2000);
    toast({
      title: "Copied!",
      description: "Client ID copied to clipboard",
    });
  };

  const handleCopyScopes = () => {
    navigator.clipboard.writeText(scopes);
    setCopiedScopes(true);
    setTimeout(() => setCopiedScopes(false), 2000);
    toast({
      title: "Copied!",
      description: "OAuth scopes copied to clipboard",
    });
  };

  const handleOAuthConnect = () => {
    // Simulate OAuth connection
    setTimeout(() => {
      setOauthConnected(true);
      toast({
        title: "Authorization Successful!",
        description: "Google Classroom connected",
      });
    }, 1500);
  };

  const handleTestConnection = () => {
    if (delegationCompleted) {
      setCurrentStep(4);
      toast({
        title: "Connection Test Passed!",
        description: "Successfully connected to Google Classroom",
      });
    }
  };

  const handleImportUsers = () => {
    // Simulate import
    setTimeout(() => {
      setSetupComplete(true);
      toast({
        title: "Import Complete!",
        description: "Successfully imported 45 teachers and 823 students",
      });
    }, 2000);
  };

  const renderProgressBar = () => {
    const steps = [
      { num: 1, label: "Intro" },
      { num: 2, label: "OAuth" },
      { num: 3, label: "Delegation" },
      { num: 4, label: "Import" },
    ];

    return (
      <div className="flex items-center justify-center gap-2 mb-8">
        {steps.map((step, index) => (
          <div key={step.num} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step.num < currentStep
                    ? "bg-[#A8B991] text-[#2C2C2C]"
                    : step.num === currentStep
                    ? "bg-[#8B7355] text-[#F5F1EA] scale-110"
                    : "bg-transparent border-2 border-[#C4B5A0] text-[#C4B5A0]"
                }`}
              >
                {step.num < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.num
                )}
              </div>
              <span className="text-xs text-[#A8A595] mt-1">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 mx-2 ${
                  step.num < currentStep ? "bg-[#A8B991]" : "bg-[#C4B5A0]"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-4xl">📚</span>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-3xl font-playfair text-[#2C2C2C]">
          Connect Google Classroom
        </h2>
        <p className="text-[#A8A595]">
          Follow these simple steps to integrate your school's Google Classroom
          with SchoolBot
        </p>
      </div>

      <div className="bg-[#8B7355]/10 border border-[#C4B5A0] rounded-lg p-6 space-y-3">
        <h3 className="font-semibold text-[#2C2C2C] flex items-center gap-2">
          <Info className="w-5 h-5 text-[#8B7355]" />
          Before you start, make sure you have:
        </h3>
        <div className="space-y-2 ml-7">
          <div className="flex items-center gap-2 text-[#2C2C2C]">
            <CheckCircle2 className="w-4 h-4 text-[#8B7355]" />
            <span>Google Workspace admin access</span>
          </div>
          <div className="flex items-center gap-2 text-[#2C2C2C]">
            <CheckCircle2 className="w-4 h-4 text-[#8B7355]" />
            <span>Your school's domain (e.g., manipal.org)</span>
          </div>
          <div className="flex items-center gap-2 text-[#2C2C2C]">
            <CheckCircle2 className="w-4 h-4 text-[#8B7355]" />
            <span>5 minutes to complete setup</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-[#2C2C2C]">We'll request access to:</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-[#2C2C2C]">
            <span className="text-[#8B7355]">•</span>
            <span>View courses and rosters (read-only)</span>
          </div>
          <div className="flex items-start gap-2 text-[#2C2C2C]">
            <span className="text-[#8B7355]">•</span>
            <span>View student grades and assignments (read-only)</span>
          </div>
          <div className="flex items-start gap-2 text-[#2C2C2C]">
            <span className="text-[#8B7355]">•</span>
            <span>View student profiles (read-only)</span>
          </div>
        </div>
      </div>

      <div className="bg-[#A8B991]/10 border border-[#A8B991] rounded-lg p-4 flex items-start gap-3">
        <Lock className="w-5 h-5 text-[#A8B991] mt-0.5 flex-shrink-0" />
        <p className="text-[#2C2C2C] text-sm">
          We only request <strong>read-only</strong> access. SchoolBot will never
          modify, delete, or post anything to Google Classroom.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => navigate("/dashboard")}
          className="border-[#C4B5A0] text-[#2C2C2C]"
        >
          Cancel
        </Button>
        <Button
          onClick={() => setCurrentStep(2)}
          className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90"
        >
          Continue to OAuth →
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-5xl">G</span>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-3xl font-playfair text-[#2C2C2C]">
          Sign in with Google
        </h2>
        <p className="text-[#A8A595]">
          Authorize SchoolBot to access your Google Classroom
        </p>
      </div>

      <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-6 space-y-4">
        <ol className="space-y-3 list-decimal list-inside text-[#2C2C2C]">
          <li>Click the button below to open Google's authorization page</li>
          <li>Sign in with your school admin account (@manipal.org)</li>
          <li>Review the permissions carefully</li>
          <li>Click "Allow" to grant access</li>
        </ol>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button
          onClick={handleOAuthConnect}
          disabled={oauthConnected}
          className="bg-white text-[#2C2C2C] border-2 border-[#4285F4] hover:bg-gray-50 px-8 py-6 text-lg shadow-lg"
        >
          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {oauthConnected ? "✅ Connected" : "Sign in with Google"}
        </Button>

        {oauthConnected ? (
          <p className="text-[#A8B991] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Authorization successful!
          </p>
        ) : (
          <p className="text-[#A8A595] text-sm">
            Waiting for authorization...
          </p>
        )}
      </div>

      <div className="bg-[#F5F1EA]/50 border border-[#C4B5A0] rounded-lg p-4">
        <p className="text-sm text-[#A8A595] text-center">
          You'll be redirected to Google. After authorizing, you'll return here
          automatically.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(1)}
          className="border-[#C4B5A0] text-[#2C2C2C]"
        >
          ← Back
        </Button>
        <Button
          onClick={() => setCurrentStep(3)}
          disabled={!oauthConnected}
          className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90 disabled:opacity-50"
        >
          Continue →
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <AlertCircle className="w-24 h-24 text-[#D4A574]" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-3xl font-playfair text-[#2C2C2C]">
          Enable Domain-Wide Delegation
        </h2>
        <p className="text-[#A8A595]">
          Required step - This allows SchoolBot to access Google Classroom on
          behalf of all teachers
        </p>
      </div>

      <div className="bg-[#D4A574]/10 border border-[#D4A574] rounded-lg p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
        <p className="text-[#2C2C2C] text-sm">
          Without domain-wide delegation, each teacher would need to authorize
          individually. This step enables school-wide access.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#8B7355] text-[#F5F1EA] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
              1
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-[#2C2C2C]">Go to Google Admin Console</p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://admin.google.com", "_blank")
                }
                className="border-[#8B7355] text-[#8B7355]"
              >
                Open Admin Console →
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#8B7355] text-[#F5F1EA] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
              2
            </div>
            <div className="flex-1">
              <p className="text-[#2C2C2C] mb-2">
                Navigate to: Security → Access and data control → API Controls →
                Domain-wide Delegation
              </p>
              <div className="text-sm text-[#A8A595] bg-[#F5F1EA] p-2 rounded border border-[#C4B5A0]">
                Security / Access / API Controls / Domain-wide Delegation
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#8B7355] text-[#F5F1EA] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
              3
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-[#2C2C2C]">
                Click 'Add new' and enter this Client ID:
              </p>
              <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-3 flex items-center justify-between">
                <code className="text-sm text-[#2C2C2C] break-all font-mono">
                  {clientId}
                </code>
                <Button
                  size="sm"
                  onClick={handleCopyClientId}
                  className="ml-2 bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90"
                >
                  {copiedClient ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#8B7355] text-[#F5F1EA] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
              4
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-[#2C2C2C]">Add these OAuth Scopes:</p>
              <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-3 space-y-2">
                <code className="text-xs text-[#2C2C2C] block whitespace-pre-wrap font-mono">
                  {scopes}
                </code>
                <Button
                  size="sm"
                  onClick={handleCopyScopes}
                  className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90"
                >
                  {copiedScopes ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Scopes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-[#8B7355] text-[#F5F1EA] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
              5
            </div>
            <div className="flex-1">
              <p className="text-[#2C2C2C]">
                Click 'Authorize' in the Google Admin Console
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="delegation-complete"
            checked={delegationCompleted}
            onCheckedChange={(checked) =>
              setDelegationCompleted(checked as boolean)
            }
            className="border-[#8B7355] data-[state=checked]:bg-[#8B7355]"
          />
          <Label
            htmlFor="delegation-complete"
            className="text-[#2C2C2C] cursor-pointer"
          >
            I have completed domain-wide delegation in Google Admin Console
          </Label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(2)}
          className="border-[#C4B5A0] text-[#2C2C2C]"
        >
          ← Back
        </Button>
        <Button
          onClick={handleTestConnection}
          disabled={!delegationCompleted}
          className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90 disabled:opacity-50"
        >
          Test Connection
        </Button>
      </div>
    </div>
  );

  const renderStep4 = () => {
    if (setupComplete) {
      return (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CheckCircle2 className="w-32 h-32 text-[#A8B991] animate-scale-in" />
              <Sparkles className="w-8 h-8 text-[#D4A574] absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-4xl font-playfair text-[#2C2C2C]">
              You're All Set!
            </h2>
            <p className="text-[#A8B991] text-lg">
              Google Classroom is connected and users are imported
            </p>
          </div>

          <div className="bg-[#A8B991]/10 border border-[#A8B991] rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#2C2C2C]">
              <CheckCircle2 className="w-5 h-5 text-[#A8B991]" />
              <span>Google Classroom connected</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2C2C]">
              <CheckCircle2 className="w-5 h-5 text-[#A8B991]" />
              <span>45 teachers imported</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2C2C]">
              <CheckCircle2 className="w-5 h-5 text-[#A8B991]" />
              <span>823 students imported</span>
            </div>
            <div className="flex items-center gap-2 text-[#2C2C2C]">
              <CheckCircle2 className="w-5 h-5 text-[#A8B991]" />
              <span>All systems operational</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#2C2C2C] text-lg">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-[#8B7355]" />
                <h4 className="font-semibold text-[#2C2C2C]">Review Users</h4>
                <p className="text-sm text-[#A8A595]">
                  Check imported users and add WhatsApp numbers
                </p>
                <Button
                  variant="outline"
                  onClick={() => navigate("/dashboard/users")}
                  className="w-full border-[#8B7355] text-[#8B7355]"
                >
                  Go to Users →
                </Button>
              </div>

              <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
                <Settings className="w-8 h-8 text-[#8B7355]" />
                <h4 className="font-semibold text-[#2C2C2C]">
                  Configure Settings
                </h4>
                <p className="text-sm text-[#A8A595]">
                  Customize bot responses and permissions
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#8B7355] text-[#8B7355]"
                >
                  Open Settings →
                </Button>
              </div>

              <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 space-y-3 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-8 h-8 text-[#8B7355]" />
                <h4 className="font-semibold text-[#2C2C2C]">Test WhatsApp</h4>
                <p className="text-sm text-[#A8A595]">
                  Send a test message to verify everything works
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#8B7355] text-[#8B7355]"
                >
                  Send Test →
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90 px-12 py-6 text-lg"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-24 h-24 text-[#A8B991] animate-scale-in" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-playfair text-[#2C2C2C]">
            Connection Successful!
          </h2>
          <p className="text-[#A8B991]">
            SchoolBot is now connected to your Google Classroom
          </p>
        </div>

        <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-[#A8A595]">Connected as:</span>
            <span className="text-[#2C2C2C] font-semibold">
              admin@manipal.org
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A8A595]">Domain:</span>
            <span className="text-[#2C2C2C] font-semibold">manipal.org</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#A8A595]">Connection status:</span>
            <span className="text-[#A8B991] font-semibold flex items-center gap-1">
              Active <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-[#2C2C2C] text-lg">We found:</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#8B7355]">15</div>
              <div className="text-sm text-[#A8A595] mt-1">Courses</div>
            </div>
            <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#8B7355]">45</div>
              <div className="text-sm text-[#A8A595] mt-1">Teachers</div>
            </div>
            <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#8B7355]">823</div>
              <div className="text-sm text-[#A8A595] mt-1">Students</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-[#2C2C2C] text-lg">Import Users</h3>
          <p className="text-[#A8A595] text-sm">
            Import teachers and students from Google Classroom into SchoolBot
          </p>

          <RadioGroup value={importOption} onValueChange={setImportOption}>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F1EA] rounded-lg border border-[#C4B5A0]">
              <RadioGroupItem value="all" id="all" className="border-[#8B7355]" />
              <Label htmlFor="all" className="text-[#2C2C2C] cursor-pointer">
                Import all teachers and students (recommended)
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F1EA] rounded-lg border border-[#C4B5A0]">
              <RadioGroupItem
                value="specific"
                id="specific"
                className="border-[#8B7355]"
              />
              <Label htmlFor="specific" className="text-[#2C2C2C] cursor-pointer">
                Select specific courses to import
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F1EA] rounded-lg border border-[#C4B5A0]">
              <RadioGroupItem value="skip" id="skip" className="border-[#8B7355]" />
              <Label htmlFor="skip" className="text-[#2C2C2C] cursor-pointer">
                Skip for now (import manually later)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="bg-[#A8B991]/10 border border-[#A8B991] rounded-lg p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#A8B991] mt-0.5 flex-shrink-0" />
          <p className="text-[#2C2C2C] text-sm">
            All imported data is encrypted and stored securely. Users can request
            deletion anytime.
          </p>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(3)}
            className="border-[#C4B5A0] text-[#2C2C2C]"
          >
            ← Back
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="border-[#C4B5A0] text-[#2C2C2C]"
            >
              Skip Import
            </Button>
            <Button
              onClick={handleImportUsers}
              className="bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90"
            >
              Import Users
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Simple Header */}
      <header className="bg-[#F5F1EA] border-b border-[#C4B5A0] p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-2xl font-playfair text-[#2C2C2C] hover:text-[#8B7355] transition-colors"
          >
            SchoolBot
          </button>
          <h1 className="text-xl font-playfair text-[#2C2C2C]">
            Setup Google Classroom
          </h1>
          <div className="text-sm text-[#A8A595]">Step {currentStep} of 4</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Step Content Card */}
          <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg shadow-lg p-8">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoogleClassroomSetup;
