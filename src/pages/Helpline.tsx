
import { ArrowLeft, Phone, MessageCircle, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Helpline = () => {
  const emergencyNumbers = [
    {
      name: "Childline India",
      number: "1098",
      description: "24/7 free helpline for children and teenagers in distress",
      type: "emergency",
      icon: "🆘"
    },
    {
      name: "Women's Helpline",
      number: "181",
      description: "Support for women and girls facing violence or harassment",
      type: "emergency", 
      icon: "👩"
    },
    {
      name: "Police Emergency",
      number: "100",
      description: "For immediate police assistance in dangerous situations",
      type: "emergency",
      icon: "🚔"
    },
    {
      name: "Medical Emergency",
      number: "108",
      description: "Ambulance and medical emergency services",
      type: "emergency",
      icon: "🏥"
    }
  ];

  const specializedHelplines = [
    {
      name: "NIMHANS Mental Health",
      number: "080-26995000",
      description: "Mental health support and counseling services",
      hours: "24/7",
      icon: "🧠"
    },
    {
      name: "Drug Abuse Prevention",
      number: "1800-11-0031",
      description: "Help for substance abuse and addiction",
      hours: "Mon-Fri 9 AM - 6 PM",
      icon: "🚫"
    },
    {
      name: "Cyber Crime Helpline",
      number: "1930",
      description: "Report online harassment, cyberbullying, or inappropriate content",
      hours: "24/7",
      icon: "💻"
    },
    {
      name: "iCall Suicide Prevention",
      number: "9152987821",
      description: "Professional counseling for emotional distress",
      hours: "Mon-Sat 8 AM - 10 PM",
      icon: "💚"
    }
  ];

  const onlineResources = [
    {
      name: "National Portal of India",
      url: "https://www.india.gov.in",
      description: "Official government portal with citizen services and information",
      icon: "🇮🇳"
    },
    {
      name: "Cyber Safe India",
      url: "https://cybersafe.gov.in",
      description: "Government initiative for cyber security awareness",
      icon: "🛡️"
    },
    {
      name: "Ministry of Women and Child Development",
      url: "https://wcd.nic.in",
      description: "Resources for child protection and women's safety",
      icon: "👶"
    },
    {
      name: "NCERT Educational Resources",
      url: "https://ncert.nic.in",
      description: "Educational content and curriculum resources",
      icon: "📚"
    }
  ];

  const mentalHealthApps = [
    {
      name: "Manas",
      description: "Government mental health app with free resources",
      features: "Meditation, mood tracking, counselor connection",
      cost: "Free"
    },
    {
      name: "InnerHour",
      description: "Self-help for anxiety, depression, and stress",
      features: "CBT exercises, mood tracking, progress monitoring",
      cost: "Free with premium options"
    },
    {
      name: "Wysa",
      description: "AI-powered mental health chatbot",
      features: "24/7 emotional support, coping techniques",
      cost: "Free with premium features"
    },
    {
      name: "Calm",
      description: "Meditation and sleep stories",
      features: "Guided meditation, relaxation exercises",
      cost: "Free trial, then subscription"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Help & Support Resources</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                You're Not Alone - Help is Available
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                If you're going through a difficult time, feeling unsafe, or just need someone to talk to, 
                there are many people and resources ready to help you. All of these services are confidential 
                and many are available 24/7.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800">
                  <strong>🌟 Important:</strong> Asking for help is a sign of strength, not weakness. 
                  Every person listed below wants to help you stay safe and healthy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Helplines */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-red-600">
                <Phone className="w-6 h-6 mr-2" />
                Emergency Helplines - Call Immediately If You're In Danger
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {emergencyNumbers.map((helpline, index) => (
                  <div key={index} className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{helpline.icon}</span>
                      <div>
                        <h4 className="font-bold text-red-800">{helpline.name}</h4>
                        <div className="text-3xl font-bold text-red-600">{helpline.number}</div>
                      </div>
                    </div>
                    <p className="text-red-700 text-sm">{helpline.description}</p>
                    <div className="mt-2 text-xs text-red-600 font-semibold">
                      ⏰ Available 24/7 | 📞 Free to call
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Specialized Support */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Specialized Support Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {specializedHelplines.map((helpline, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{helpline.icon}</span>
                      <div>
                        <h4 className="font-bold text-blue-800">{helpline.name}</h4>
                        <div className="text-2xl font-bold text-blue-600">{helpline.number}</div>
                      </div>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">{helpline.description}</p>
                    <div className="text-xs text-blue-600 font-semibold">
                      ⏰ {helpline.hours}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Online Resources */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-green-600">
                <Globe className="w-6 h-6 mr-2" />
                Trusted Online Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {onlineResources.map((resource, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{resource.icon}</span>
                      <h4 className="font-bold text-green-800">{resource.name}</h4>
                    </div>
                    <p className="text-green-700 text-sm mb-3">{resource.description}</p>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mental Health Apps */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Free Mental Health & Wellness Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {mentalHealthApps.map((app, index) => (
                  <div key={index} className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">📱 {app.name}</h4>
                    <p className="text-purple-700 text-sm mb-2">{app.description}</p>
                    <div className="text-xs text-purple-600 mb-2">
                      <strong>Features:</strong> {app.features}
                    </div>
                    <div className="text-xs font-semibold">
                      <span className={app.cost === "Free" ? "text-green-600" : "text-orange-600"}>
                        💰 {app.cost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">📱 App Safety Tips:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Download apps only from official app stores (Google Play, Apple App Store)</li>
                  <li>• Read reviews and check developer information before downloading</li>
                  <li>• Be cautious about sharing personal information in apps</li>
                  <li>• Apps are helpful but don't replace professional help when needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Local Support */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">People You Can Talk To In Your Community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <h4 className="font-semibold text-orange-800 mb-2">Healthcare Providers</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Family doctor</li>
                    <li>• School nurse</li>
                    <li>• Pediatrician</li>
                    <li>• Mental health counselor</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👩‍🏫</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">School Support</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• School counselor</li>
                    <li>• Trusted teachers</li>
                    <li>• Principal or vice principal</li>
                    <li>• Social worker</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h4 className="font-semibold text-green-800 mb-2">Family & Community</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Parents or guardians</li>
                    <li>• Trusted relatives</li>
                    <li>• Religious leaders</li>
                    <li>• Community counselors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-teal-100 to-blue-100 border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-teal-600">What to Expect When You Ask for Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-3">When You Call a Helpline:</h4>
                  <ul className="space-y-2 text-teal-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>A trained person will listen to you</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Your conversation will be confidential</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>They won't judge you or get angry</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>They'll help you think through your options</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>You can call as many times as you need</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">When You Talk to an Adult:</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>Choose someone you trust and feel comfortable with</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>You can start by saying "I need to talk to someone"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>It's okay to ask for privacy before sharing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>They may need to get additional help if you're in danger</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600">✓</span>
                      <span>You won't get in trouble for asking for help</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Anonymous Questions */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Have a Question You're Too Shy to Ask? 🤫</h3>
              <p className="text-lg mb-6">
                Sometimes it's easier to ask questions anonymously. You can submit any question 
                about puberty, relationships, safety, or anything else on your mind.
              </p>
              <Link 
                to="/anonymous-questions" 
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Ask Anonymous Question →
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Helpline;
