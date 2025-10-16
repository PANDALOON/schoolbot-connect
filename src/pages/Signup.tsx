import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Globe, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff,
  Check,
  X,
  GraduationCap,
  Users,
  Building,
  School
} from "lucide-react";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolDomain: "",
    adminEmail: "",
    adminPhone: "",
    password: "",
    confirmPassword: "",
    schoolSize: "",
  });

  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Password strength
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);
  const passwordRequirements = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };

  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== "";

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.schoolName) newErrors.schoolName = "School name is required";
    if (!formData.schoolDomain) newErrors.schoolDomain = "Domain is required";
    if (!formData.adminEmail) newErrors.adminEmail = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.adminEmail)) newErrors.adminEmail = "Invalid email format";
    if (!formData.adminPhone) newErrors.adminPhone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.adminPhone)) newErrors.adminPhone = "Enter 10 digit phone number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (passwordStrength < 4) newErrors.password = "Password doesn't meet requirements";
    if (!passwordsMatch) newErrors.confirmPassword = "Passwords don't match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreeToTerms && formData.schoolSize) {
      console.log("Form submitted:", formData);
      // Handle signup logic here
    }
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FAF8F5] to-[#EDE8E3]">
      <div className="w-full max-w-[600px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-playfair font-bold text-[#8B7355]">
            <GraduationCap className="w-8 h-8" />
            SchoolBot
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <div className={`flex items-center gap-2 ${currentStep >= 1 ? "text-[#8B7355]" : "text-[#A8A595]"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${currentStep >= 1 ? "bg-[#8B7355] text-[#F5F1EA]" : "bg-[#C4B5A0] text-[#2C2C2C]"}`}>
                1
              </div>
              <span className="text-sm font-medium hidden sm:inline">School Info</span>
            </div>
            <div className={`flex items-center gap-2 ${currentStep >= 2 ? "text-[#8B7355]" : "text-[#A8A595]"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${currentStep >= 2 ? "bg-[#8B7355] text-[#F5F1EA]" : "bg-[#C4B5A0] text-[#2C2C2C]"}`}>
                2
              </div>
              <span className="text-sm font-medium hidden sm:inline">Security</span>
            </div>
            <div className={`flex items-center gap-2 ${currentStep >= 3 ? "text-[#8B7355]" : "text-[#A8A595]"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${currentStep >= 3 ? "bg-[#8B7355] text-[#F5F1EA]" : "bg-[#C4B5A0] text-[#2C2C2C]"}`}>
                3
              </div>
              <span className="text-sm font-medium hidden sm:inline">Confirmation</span>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-[#C4B5A0]" />
        </div>

        {/* Form Card */}
        <div className="bg-[#F5F1EA] border border-[#C4B5A0] rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: School Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h1 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-2">
                    Create your school account
                  </h1>
                  <p className="text-[#A8A595]">Let's get you set up in minutes</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="schoolName" className="text-[#2C2C2C]">School Name</Label>
                    <div className="relative mt-1">
                      <Building2 className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                      <Input
                        id="schoolName"
                        placeholder="Manipal International School"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        className="pl-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                      />
                    </div>
                    {errors.schoolName && <p className="text-sm text-red-500 mt-1">{errors.schoolName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="schoolDomain" className="text-[#2C2C2C]">School Domain</Label>
                    <div className="relative mt-1">
                      <Globe className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                      <Input
                        id="schoolDomain"
                        placeholder="manipal"
                        value={formData.schoolDomain}
                        onChange={(e) => setFormData({ ...formData, schoolDomain: e.target.value })}
                        className="pl-10 pr-16 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                      />
                      <span className="absolute right-3 top-3 text-[#A8A595]">.org</span>
                    </div>
                    <p className="text-xs text-[#A8A595] mt-1">This will be used for email addresses</p>
                    {errors.schoolDomain && <p className="text-sm text-red-500 mt-1">{errors.schoolDomain}</p>}
                  </div>

                  <div>
                    <Label htmlFor="adminEmail" className="text-[#2C2C2C]">Admin Email Address</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                      <Input
                        id="adminEmail"
                        type="email"
                        placeholder="admin@manipal.org"
                        value={formData.adminEmail}
                        onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                        className="pl-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                      />
                    </div>
                    {errors.adminEmail && <p className="text-sm text-red-500 mt-1">{errors.adminEmail}</p>}
                  </div>

                  <div>
                    <Label htmlFor="adminPhone" className="text-[#2C2C2C]">Admin Phone Number</Label>
                    <div className="flex gap-2 mt-1">
                      <div className="relative w-20">
                        <select className="w-full h-10 px-3 border border-[#C4B5A0] rounded-md bg-white/50 text-[#2C2C2C]">
                          <option>+91</option>
                        </select>
                      </div>
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                        <Input
                          id="adminPhone"
                          placeholder="98765 43210"
                          value={formData.adminPhone}
                          onChange={(e) => setFormData({ ...formData, adminPhone: e.target.value.replace(/\D/g, "") })}
                          className="pl-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                        />
                      </div>
                    </div>
                    {errors.adminPhone && <p className="text-sm text-red-500 mt-1">{errors.adminPhone}</p>}
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleContinue}
                  className="w-full bg-[#8B7355] hover:bg-[#8B7355]/90 text-[#F5F1EA] shadow-lg hover:shadow-xl transition-all"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 2: Security */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h1 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-2">
                    Secure your account
                  </h1>
                  <p className="text-[#A8A595]">Create a strong password</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="password" className="text-[#2C2C2C]">Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-[#A8A595] hover:text-[#8B7355]"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    
                    {/* Password Strength */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1 flex-1 rounded ${
                                passwordStrength >= level
                                  ? passwordStrength === 1 || passwordStrength === 2
                                    ? "bg-orange-400"
                                    : "bg-[#A8A595]"
                                  : "bg-[#C4B5A0]"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-[#A8A595]">
                          {passwordStrength <= 2 ? "Weak" : passwordStrength === 3 ? "Medium" : "Strong"}
                        </p>
                      </div>
                    )}

                    {/* Requirements Checklist */}
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        {passwordRequirements.length ? (
                          <Check className="w-4 h-4 text-[#8B7355]" />
                        ) : (
                          <div className="w-4 h-4 border border-[#C4B5A0] rounded" />
                        )}
                        <span className={passwordRequirements.length ? "text-[#8B7355]" : "text-[#A8A595]"}>
                          At least 8 characters
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {passwordRequirements.uppercase ? (
                          <Check className="w-4 h-4 text-[#8B7355]" />
                        ) : (
                          <div className="w-4 h-4 border border-[#C4B5A0] rounded" />
                        )}
                        <span className={passwordRequirements.uppercase ? "text-[#8B7355]" : "text-[#A8A595]"}>
                          One uppercase letter
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {passwordRequirements.number ? (
                          <Check className="w-4 h-4 text-[#8B7355]" />
                        ) : (
                          <div className="w-4 h-4 border border-[#C4B5A0] rounded" />
                        )}
                        <span className={passwordRequirements.number ? "text-[#8B7355]" : "text-[#A8A595]"}>
                          One number
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {passwordRequirements.special ? (
                          <Check className="w-4 h-4 text-[#8B7355]" />
                        ) : (
                          <div className="w-4 h-4 border border-[#C4B5A0] rounded" />
                        )}
                        <span className={passwordRequirements.special ? "text-[#8B7355]" : "text-[#A8A595]"}>
                          One special character
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword" className="text-[#2C2C2C]">Confirm Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-[#8B7355]" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-[#A8A595] hover:text-[#8B7355]"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                      {formData.confirmPassword && (
                        <div className="absolute right-10 top-3">
                          {passwordsMatch ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="flex-1 border-[#C4B5A0] text-[#8B7355] hover:bg-[#F5F1EA]"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={handleContinue}
                    className="flex-1 bg-[#8B7355] hover:bg-[#8B7355]/90 text-[#F5F1EA] shadow-lg hover:shadow-xl transition-all"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: School Size & Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h1 className="text-3xl font-playfair font-bold text-[#2C2C2C] mb-2">
                    Tell us about your school
                  </h1>
                  <p className="text-[#A8A595]">Help us customize your experience</p>
                </div>

                <div>
                  <Label className="text-[#2C2C2C] mb-3 block">School Size</Label>
                  <RadioGroup value={formData.schoolSize} onValueChange={(value) => setFormData({ ...formData, schoolSize: value })}>
                    <div className="space-y-3">
                      <div
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.schoolSize === "small"
                            ? "bg-[#8B7355] border-[#8B7355] text-[#F5F1EA]"
                            : "border-[#C4B5A0] hover:border-[#8B7355] bg-white/50"
                        }`}
                      >
                        <RadioGroupItem value="small" id="small" className="border-current" />
                        <Label htmlFor="small" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Users className="w-5 h-5" />
                          <div>
                            <div className="font-medium">Small</div>
                            <div className="text-sm opacity-80">1-100 students</div>
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.schoolSize === "medium"
                            ? "bg-[#8B7355] border-[#8B7355] text-[#F5F1EA]"
                            : "border-[#C4B5A0] hover:border-[#8B7355] bg-white/50"
                        }`}
                      >
                        <RadioGroupItem value="medium" id="medium" className="border-current" />
                        <Label htmlFor="medium" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Building className="w-5 h-5" />
                          <div>
                            <div className="font-medium">Medium</div>
                            <div className="text-sm opacity-80">101-500 students</div>
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.schoolSize === "large"
                            ? "bg-[#8B7355] border-[#8B7355] text-[#F5F1EA]"
                            : "border-[#C4B5A0] hover:border-[#8B7355] bg-white/50"
                        }`}
                      >
                        <RadioGroupItem value="large" id="large" className="border-current" />
                        <Label htmlFor="large" className="flex items-center gap-3 cursor-pointer flex-1">
                          <School className="w-5 h-5" />
                          <div>
                            <div className="font-medium">Large</div>
                            <div className="text-sm opacity-80">501-1000 students</div>
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.schoolSize === "very-large"
                            ? "bg-[#8B7355] border-[#8B7355] text-[#F5F1EA]"
                            : "border-[#C4B5A0] hover:border-[#8B7355] bg-white/50"
                        }`}
                      >
                        <RadioGroupItem value="very-large" id="very-large" className="border-current" />
                        <Label htmlFor="very-large" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Building2 className="w-5 h-5" />
                          <div>
                            <div className="font-medium">Very Large</div>
                            <div className="text-sm opacity-80">1000+ students</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Summary */}
                <div className="bg-white/50 border border-[#C4B5A0] rounded-lg p-4">
                  <h3 className="font-semibold text-[#2C2C2C] mb-3">Review your information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#A8A595]">School:</span>
                      <span className="text-[#2C2C2C] font-medium">{formData.schoolName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A595]">Domain:</span>
                      <span className="text-[#2C2C2C] font-medium">{formData.schoolDomain}.org</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A595]">Email:</span>
                      <span className="text-[#2C2C2C] font-medium">{formData.adminEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A595]">Phone:</span>
                      <span className="text-[#2C2C2C] font-medium">+91 {formData.adminPhone}</span>
                    </div>
                    {formData.schoolSize && (
                      <div className="flex justify-between">
                        <span className="text-[#A8A595]">Size:</span>
                        <span className="text-[#2C2C2C] font-medium capitalize">{formData.schoolSize.replace("-", " ")}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm text-[#2C2C2C] cursor-pointer">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#8B7355] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#8B7355] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                    className="flex-1 border-[#C4B5A0] text-[#8B7355] hover:bg-[#F5F1EA]"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!agreeToTerms || !formData.schoolSize}
                    className="flex-1 bg-[#8B7355] hover:bg-[#8B7355]/90 text-[#F5F1EA] shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-6">
          <p className="text-[#A8A595]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#8B7355] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
