import { Link } from "react-router-dom";
import { BookOpen, Shield, Heart, Users, AlertTriangle, HelpCircle, Phone, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "About Puberty",
      description: "Understanding physical and emotional changes during adolescence",
      link: "/puberty",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Shield,
      title: "Internet Safety",
      description: "Learn how to browse safely and block harmful content",
      link: "/internet-safety",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Heart,
      title: "Personal Hygiene",
      description: "Essential self-care and hygiene tips for teenagers",
      link: "/hygiene",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Users,
      title: "Healthy Relationships",
      description: "Understanding consent, boundaries, and respectful relationships",
      link: "/relationships",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: AlertTriangle,
      title: "Addiction Awareness",
      description: "Recognizing and preventing harmful addictions",
      link: "/addiction",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: HelpCircle,
      title: "FAQs & Myths",
      description: "Common questions and myth-busting for teenagers",
      link: "/faqs",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">SafeLearn India</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-foreground hover:text-primary">Home</Link>
              <Link to="/internet-safety" className="text-foreground hover:text-primary">Internet Safety</Link>
              <Link to="/helpline" className="text-foreground hover:text-primary">Help & Support</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Your Safe Space for Learning
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A trusted educational platform for Indian students aged 12-18. Learn about puberty, 
            relationships, internet safety, and personal development in a safe, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/internet-safety">Start Learning About Internet Safety</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/puberty">Learn About Puberty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Education Matters Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-orange-600" />
                Why This Education Matters
              </h3>
              
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      <strong>Lack of proper education leads to misinformation:</strong> Many teenagers rely on unreliable sources or myths, leading to confusion and poor decision-making about their health and relationships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      <strong>Online safety is crucial in digital age:</strong> With increasing internet access, young people need proper guidance to navigate digital spaces safely and avoid harmful content.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      <strong>Mental health and self-confidence:</strong> Proper education helps teenagers understand their changing bodies and emotions, reducing anxiety and building healthy self-esteem.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      <strong>Building respectful relationships:</strong> Understanding consent and boundaries helps create safer communities and prevents harassment and abuse.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Recent Statistics */}
              <div className="mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-bold text-orange-800 mb-3">Recent Research Highlights:</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• According to UNICEF India reports, over 50% of adolescents lack access to comprehensive health education</li>
                  <li>• National surveys indicate that 70% of teenagers get health information from unreliable online sources</li>
                  <li>• Child helpline data shows increasing reports of online harassment among school students</li>
                  <li>• Studies reveal that proper education significantly reduces risky behaviors among teenagers</li>
                </ul>
                <p className="text-xs text-orange-600 mt-3 italic">
                  Sources: UNICEF India, National Health Survey, Childline India Foundation
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
                <div className="text-center">
                  <AlertTriangle className="w-24 h-24 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-orange-800 mb-2">Knowledge is Protection</h4>
                  <p className="text-orange-700">
                    Proper education empowers young people to make informed decisions and stay safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Explore Our Educational Modules
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-6">Why Comprehensive Education Matters</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Every young person deserves accurate, age-appropriate information about their body, 
              relationships, and digital safety. Knowledge empowers you to make informed decisions 
              and stay safe both online and offline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Break the Myths</h4>
              <p className="text-muted-foreground">
                Get scientifically accurate information and debunk common misconceptions about puberty and relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Stay Safe Online</h4>
              <p className="text-muted-foreground">
                Learn essential digital literacy skills to protect yourself from harmful content and cyberbullying.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Build Confidence</h4>
              <p className="text-muted-foreground">
                Develop healthy relationships with yourself and others through understanding and self-respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Helpline */}
      <section className="py-12 px-4 bg-red-50 border-t border-red-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-xl font-bold text-red-800">Need Immediate Help?</h3>
          </div>
          <p className="text-red-700 mb-4">
            If you're facing any emergency or need someone to talk to:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-red-800">Childline India</div>
              <div className="text-2xl font-bold text-red-600">1098</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-bold text-red-800">Women's Helpline</div>
              <div className="text-2xl font-bold text-red-600">181</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-xl font-bold mb-4">SafeLearn India</h4>
          <p className="text-primary-foreground/80 mb-4">
            Empowering Indian students with safe, comprehensive education
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="hover:text-primary-foreground/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80">Terms of Use</Link>
            <Link to="/helpline" className="hover:text-primary-foreground/80">Support</Link>
            <Link to="/anonymous-questions" className="hover:text-primary-foreground/80">Ask Anonymous Questions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
