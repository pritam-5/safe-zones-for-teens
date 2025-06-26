
import { ArrowLeft, Heart, Users, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Relationships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Healthy Relationships & Consent</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Heart className="w-8 h-8 text-purple-600 mr-3" />
                Building Healthy Relationships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Healthy relationships are built on respect, trust, and communication. Understanding the difference 
                between friendship and attraction, setting boundaries, and recognizing consent are essential life skills 
                that will help you build meaningful connections throughout your life.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="friendship" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="friendship">Friendship vs Attraction</TabsTrigger>
            <TabsTrigger value="boundaries">Boundaries & Respect</TabsTrigger>
            <TabsTrigger value="consent">Understanding Consent</TabsTrigger>
            <TabsTrigger value="safety">Good vs Bad Touch</TabsTrigger>
          </TabsList>

          <TabsContent value="friendship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Understanding Different Types of Relationships
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">Friendship</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="mb-3 font-semibold">Friendship is about:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>Enjoying each other's company</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>Sharing interests and activities</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>Supporting each other</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>Trust and loyalty</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>Feeling comfortable being yourself</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-pink-600">Romantic Attraction</h4>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="mb-3 font-semibold">Romantic feelings include:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span>Wanting to spend special time together</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span>Feeling butterflies or excitement</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span>Thinking about them often</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span>Wanting physical affection (appropriate for your age)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <span>Feeling special or unique connection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">💚 It's Normal To Feel:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-green-700 space-y-1">
                      <li>• Confused about your feelings sometimes</li>
                      <li>• Attracted to people of the same or different gender</li>
                      <li>• Nervous about talking to someone you like</li>
                    </ul>
                    <ul className="text-green-700 space-y-1">
                      <li>• Different levels of interest in romance</li>
                      <li>• Curious about relationships</li>
                      <li>• Uncertain about your sexual orientation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">🌟 Remember:</h4>
                  <p className="text-purple-700">
                    Both friendships and romantic relationships should make you feel good about yourself. 
                    Healthy relationships involve mutual respect, trust, and communication. You should never 
                    feel pressured, scared, or uncomfortable in any relationship.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="boundaries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-green-600" />
                  Setting and Respecting Boundaries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">What are Boundaries?</h4>
                  <p className="text-green-700">
                    Boundaries are the limits you set for yourself about what you're comfortable with. 
                    They help you feel safe and respected in all relationships.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">Types of Boundaries:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-800">Physical Boundaries</h5>
                        <p className="text-blue-700 text-sm">What kind of touch you're comfortable with</p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-800">Emotional Boundaries</h5>
                        <p className="text-purple-700 text-sm">What personal information you want to share</p>
                      </div>
                      
                      <div className="bg-pink-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-pink-800">Digital Boundaries</h5>
                        <p className="text-pink-700 text-sm">What you're comfortable sharing online</p>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-orange-800">Time Boundaries</h5>
                        <p className="text-orange-700 text-sm">How much time you want to spend together</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">How to Set Boundaries:</h4>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Be clear:</strong> Say exactly what you're comfortable with
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Be firm:</strong> Don't apologize for having boundaries
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Be consistent:</strong> Stick to your boundaries
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Be respectful:</strong> Listen to others' boundaries too
                        </div>
                      </li>
                    </ul>
                    
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">Example Phrases:</h5>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• "I'm not comfortable with that"</li>
                        <li>• "I'd prefer if we didn't..."</li>
                        <li>• "That makes me feel uncomfortable"</li>
                        <li>• "I need some space right now"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🚩 Red Flags - When Someone:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-red-700 space-y-1">
                      <li>• Ignores your "no"</li>
                      <li>• Makes you feel guilty for setting boundaries</li>
                      <li>• Pressures you to change your mind</li>
                    </ul>
                    <ul className="text-red-700 space-y-1">
                      <li>• Gets angry when you set limits</li>
                      <li>• Tries to isolate you from friends/family</li>
                      <li>• Makes you feel bad about yourself</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-600">Understanding Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">What is Consent?</h4>
                  <p className="text-teal-700">
                    Consent means freely agreeing to something. It's about making sure everyone involved 
                    wants to participate and feels comfortable. Consent applies to all kinds of interactions, 
                    from hugs to more serious physical contact.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">Consent Must Be:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-800">🆓 Freely Given</h5>
                        <p className="text-green-700 text-sm">Not pressured, forced, or manipulated</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-800">📢 Clear</h5>
                        <p className="text-blue-700 text-sm">Obvious yes or no - not guessing</p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-800">🧠 Informed</h5>
                        <p className="text-purple-700 text-sm">Understanding what you're agreeing to</p>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-orange-800">🔄 Ongoing</h5>
                        <p className="text-orange-700 text-sm">Can be changed or withdrawn anytime</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-pink-600">Important Points:</h4>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Silence isn't consent</strong> - Need a clear yes
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>You can change your mind</strong> - Even if you said yes before
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Age matters</strong> - Young people can't legally consent to certain things
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Being in a relationship</strong> doesn't mean automatic consent
                        </div>
                      </li>
                    </ul>
                    
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">How to Ask for Consent:</h5>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        <li>• "Is this okay?"</li>
                        <li>• "Do you want to...?"</li>
                        <li>• "Are you comfortable with this?"</li>
                        <li>• "How are you feeling?"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">💙 Remember:</h4>
                  <p className="text-blue-700">
                    Asking for consent shows respect and care. It's not awkward - it's responsible! 
                    Good relationships are built on communication and making sure everyone feels safe and respected.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                  Good Touch vs Bad Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Important Safety Information</h4>
                  <p className="text-red-700">
                    Understanding the difference between appropriate and inappropriate touch is crucial for your safety. 
                    Trust your instincts - if something feels wrong, it probably is.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">✅ Good/Safe Touch:</h4>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-green-700">
                        <li>• Hugs from family and friends (when you want them)</li>
                        <li>• High-fives and handshakes</li>
                        <li>• Medical examinations by doctors (with parent present)</li>
                        <li>• Help with hair or clothing from trusted adults</li>
                        <li>• Appropriate physical affection between peers your age</li>
                        <li>• Touch that makes you feel happy, safe, and respected</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Good Touch:</h5>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• You want it to happen</li>
                        <li>• Makes you feel good and safe</li>
                        <li>• Is appropriate for your relationship</li>
                        <li>• Happens openly, not in secret</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-red-600">❌ Bad/Unsafe Touch:</h4>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-red-700">
                        <li>• Touch on private parts (areas covered by bathing suit)</li>
                        <li>• Any touch you don't want</li>
                        <li>• Touch that feels uncomfortable or scary</li>
                        <li>• Touch that you're told to keep secret</li>
                        <li>• Inappropriate touch from adults or older teens</li>
                        <li>• Touch that makes you feel confused or upset</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-800 mb-2">Warning Signs:</h5>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Being told "this is our secret"</li>
                        <li>• Threats or bribes</li>
                        <li>• Making you feel guilty or ashamed</li>
                        <li>• Happening when you're alone</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">🛡️ Body Safety Rules:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-purple-700 space-y-1">
                      <li>• Your body belongs to YOU</li>
                      <li>• You have the right to say NO</li>
                      <li>• Trust your feelings</li>
                      <li>• No secrets about touch</li>
                    </ul>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Tell a trusted adult immediately</li>
                      <li>• It's never your fault</li>
                      <li>• Keep telling until someone believes you</li>
                      <li>• You won't get in trouble for telling</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">📞 Who to Tell:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold text-yellow-700">At Home:</h5>
                      <ul className="text-yellow-600 text-sm">
                        <li>• Parents or guardians</li>
                        <li>• Other trusted family members</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-700">At School:</h5>
                      <ul className="text-yellow-600 text-sm">
                        <li>• Teachers you trust</li>
                        <li>• School counselors</li>
                        <li>• Principal</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-700">Emergency:</h5>
                      <ul className="text-yellow-600 text-sm">
                        <li>• Childline: 1098</li>
                        <li>• Police: 100</li>
                        <li>• Women's Helpline: 181</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">💚 Remember:</h4>
                  <p className="text-green-700">
                    <strong>You are never to blame</strong> for inappropriate touch or behavior from others. 
                    Adults and older teens should always respect your boundaries. If someone makes you 
                    uncomfortable, trust your feelings and tell a trusted adult right away.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Support Resources */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-none">
            <CardHeader>
              <CardTitle className="text-2xl">Need Someone to Talk To?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                Building healthy relationships takes practice. If you have questions, concerns, or need support:
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-blue-800">Childline India</div>
                  <div className="text-2xl font-bold text-blue-600">1098</div>
                  <div className="text-xs text-blue-600">Free & Confidential</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-purple-800">Women's Helpline</div>
                  <div className="text-2xl font-bold text-purple-600">181</div>
                  <div className="text-xs text-purple-600">24/7 Support</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-green-800">School Counselor</div>
                  <div className="text-lg font-bold text-green-600">Talk to them</div>
                  <div className="text-xs text-green-600">Safe & Private</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-orange-800">Trusted Adults</div>
                  <div className="text-lg font-bold text-orange-600">Family & Teachers</div>
                  <div className="text-xs text-orange-600">They Care About You</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Relationships;
