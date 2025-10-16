import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have successfully signed in.",
      });
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    toast({
      title: "Google Sign In",
      description: "Google authentication would be triggered here.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#EDE8E3] flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-playfair font-bold">SchoolBot</span>
          </Link>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-playfair font-bold text-foreground">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your school dashboard
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-secondary border border-primary rounded-lg p-8 shadow-[0_4px_20px_rgba(139,115,85,0.1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@school.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/50 border-primary focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-white/50 border-primary focus:border-accent focus:ring-accent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-primary data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-foreground cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-accent hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-secondary shadow-[0_4px_12px_rgba(139,115,85,0.2)] hover:shadow-[0_6px_16px_rgba(139,115,85,0.3)] transition-all hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-secondary text-muted-foreground">OR</span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <Button
                type="button"
                variant="outline"
                className="w-full bg-white/50 border-primary hover:bg-secondary text-foreground"
                onClick={handleGoogleSignIn}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
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
                Sign in with Google
              </Button>
            </form>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-accent hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-secondary items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        {/* Testimonial Content */}
        <div className="relative z-10 max-w-lg space-y-8">
          {/* Large Quote Icon */}
          <div className="text-accent/20">
            <svg
              className="w-16 h-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-3xl font-playfair text-foreground leading-relaxed">
            "SchoolBot reduced our parent inquiry time by 80%. Parents love
            getting instant answers via WhatsApp."
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">PS</span>
            </div>
            <div>
              <div className="font-bold text-foreground">Dr. Priya Sharma</div>
              <div className="text-sm text-muted-foreground">
                Principal, Manipal International School
              </div>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-accent fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
