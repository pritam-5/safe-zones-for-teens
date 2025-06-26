
import { useState } from "react";
import { ArrowLeft, Shield, Smartphone, Monitor, CheckCircle, AlertTriangle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

const InternetSafety = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [linkToCheck, setLinkToCheck] = useState("");
  const [linkCheckResult, setLinkCheckResult] = useState<{ safe: boolean; message: string } | null>(null);

  const checkLink = () => {
    if (!linkToCheck.trim()) return;
    
    const unsafeKeywords = ['porn', 'xxx', 'sex', 'hot', 'adult', 'nude', 'dating', 'cam', 'live'];
    const isUnsafe = unsafeKeywords.some(keyword => 
      linkToCheck.toLowerCase().includes(keyword)
    );
    
    setLinkCheckResult({
      safe: !isUnsafe,
      message: isUnsafe 
        ? "⚠️ Warning: This website may contain unsafe content. Please avoid."
        : "✅ This website appears safe to visit."
    });
  };

  const getDeviceInstructions = () => {
    switch (selectedDevice) {
      case "android":
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-green-700">Android Device Setup</h4>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                1. Enable Google SafeSearch
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Open Google app or Chrome browser</li>
                <li>• Go to Settings → Search Settings</li>
                <li>• Turn ON "SafeSearch filters"</li>
                <li>• Save settings</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                2. YouTube Restricted Mode
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Open YouTube app</li>
                <li>• Tap your profile picture</li>
                <li>• Go to Settings → General</li>
                <li>• Turn ON "Restricted Mode"</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                3. Install Safe Browser Apps
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Download "Safe Browser" from Play Store</li>
                <li>• Install "BlockerX" for additional protection</li>
                <li>• Set these as your default browsers</li>
              </ul>
            </div>
          </div>
        );
      
      case "iphone":
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-700">iPhone/iPad Setup</h4>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                1. Enable Screen Time Restrictions
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Go to Settings → Screen Time</li>
                <li>• Tap "Content & Privacy Restrictions"</li>
                <li>• Turn ON restrictions</li>
                <li>• Set "Web Content" to "Limit Adult Websites"</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                2. Safe Search Settings
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Open Safari → Settings</li>
                <li>• Go to Search Engine settings</li>
                <li>• Enable SafeSearch in Google</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                3. YouTube Restricted Mode
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Open YouTube app</li>
                <li>• Tap profile → Settings</li>
                <li>• Turn ON "Restricted Mode"</li>
              </ul>
            </div>
          </div>
        );
      
      case "windows":
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-purple-700">Windows PC Setup</h4>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                1. Set Up CleanBrowsing DNS
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Go to Control Panel → Network Settings</li>
                <li>• Change DNS to: 185.228.168.9 and 185.228.169.9</li>
                <li>• Restart your computer</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                2. Browser Safety Settings
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• Chrome: Settings → Privacy → SafeSearch</li>
                <li>• Edge: Settings → Family → SafeSearch</li>
                <li>• Enable all safety filters</li>
              </ul>
            </div>
          </div>
        );
      
      case "mac":
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-orange-700">Mac Setup</h4>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                1. Parental Controls
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• System Preferences → Parental Controls</li>
                <li>• Enable "Try to limit access to adult websites"</li>
                <li>• Customize restricted sites</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                2. DNS Settings
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• System Preferences → Network</li>
                <li>• Advanced → DNS</li>
                <li>• Add CleanBrowsing DNS: 185.228.168.9</li>
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Internet Safety & Content Blocking</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Why Internet Safety Matters for Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                <strong>Dear Students,</strong> the internet is a powerful learning tool, but it also contains content 
                that can be harmful to young minds. Here's why staying safe online is important:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">🧠 Protects Your Mind</h4>
                  <p className="text-sm">Adult content can create unrealistic expectations and affect your mental health and relationships.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-2">⚠️ Prevents Addiction</h4>
                  <p className="text-sm">Inappropriate content can become addictive and interfere with your studies and social life.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">🛡️ Keeps You Safe</h4>
                  <p className="text-sm">Safe browsing protects you from cyberbullying, scams, and inappropriate contact from strangers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Device Selection */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Smartphone className="w-6 h-6 mr-2" />
                Choose Your Device Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                <SelectTrigger className="w-full max-w-md">
                  <SelectValue placeholder="Select your device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="android">📱 Android Phone/Tablet</SelectItem>
                  <SelectItem value="iphone">📱 iPhone/iPad</SelectItem>
                  <SelectItem value="windows">💻 Windows PC/Laptop</SelectItem>
                  <SelectItem value="mac">💻 Mac Computer</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </section>

        {/* Device Instructions */}
        {selectedDevice && (
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Step-by-Step Safety Setup</CardTitle>
              </CardHeader>
              <CardContent>
                {getDeviceInstructions()}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Link Checker Tool */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Website Safety Checker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Not sure if a website is safe? Paste the link below and we'll help you check:
              </p>
              
              <div className="flex gap-4">
                <Input 
                  placeholder="Paste website URL here..."
                  value={linkToCheck}
                  onChange={(e) => setLinkToCheck(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={checkLink}>Check Safety</Button>
              </div>
              
              {linkCheckResult && (
                <Alert className={linkCheckResult.safe ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  <AlertTriangle className={`w-4 h-4 ${linkCheckResult.safe ? "text-green-600" : "text-red-600"}`} />
                  <AlertDescription className={linkCheckResult.safe ? "text-green-800" : "text-red-800"}>
                    {linkCheckResult.message}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Digital Safety Tips */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Essential Digital Safety Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Keep Personal Info Private</h4>
                      <p className="text-sm text-muted-foreground">Never share photos, phone numbers, or address online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Don't Talk to Strangers</h4>
                      <p className="text-sm text-muted-foreground">Avoid chatting with unknown people on social media or games</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Report Cyberbullying</h4>
                      <p className="text-sm text-muted-foreground">Tell a trusted adult if someone is bothering you online</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Think Before You Click</h4>
                      <p className="text-sm text-muted-foreground">Don't click suspicious links or download unknown apps</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Use Strong Passwords</h4>
                      <p className="text-sm text-muted-foreground">Create unique passwords and don't share them with friends</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Ask for Help</h4>
                      <p className="text-sm text-muted-foreground">Talk to parents or teachers if you see something that makes you uncomfortable</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Helpline & Support */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-red-800">
                <Phone className="w-6 h-6 mr-2" />
                Need Help? Contact These Numbers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Childline India</div>
                  <div className="text-2xl font-bold text-red-600">1098</div>
                  <div className="text-xs text-red-600">24/7 Free Helpline</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Women's Helpline</div>
                  <div className="text-2xl font-bold text-red-600">181</div>
                  <div className="text-xs text-red-600">24/7 Support</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Cyber Crime</div>
                  <div className="text-2xl font-bold text-red-600">1930</div>
                  <div className="text-xs text-red-600">Report Online Crime</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Mental Health</div>
                  <div className="text-2xl font-bold text-red-600">9152987821</div>
                  <div className="text-xs text-red-600">NIMHANS Helpline</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-red-700 mb-4">
                  <strong>Remember:</strong> It's always okay to ask for help. These services are confidential and free.
                </p>
                <Button asChild variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  <Link to="/helpline">View All Support Resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default InternetSafety;
