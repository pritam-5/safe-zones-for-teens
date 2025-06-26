
import { ArrowLeft, AlertTriangle, Brain, GamepadIcon, Smartphone, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Addiction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Addiction Awareness & Prevention</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-100 to-red-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                Understanding Addiction Risks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                During teenage years, your brain is still developing, making it more vulnerable to addiction. 
                Understanding these risks helps you make informed decisions and recognize when habits might 
                be becoming harmful.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800">
                  <strong>Remember:</strong> Addiction can happen to anyone. It's not a sign of weakness - 
                  it's a medical condition that can be treated with the right help and support.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="digital" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="digital">Digital Addiction</TabsTrigger>
            <TabsTrigger value="substance">Substance Abuse</TabsTrigger>
            <TabsTrigger value="signs">Warning Signs</TabsTrigger>
            <TabsTrigger value="help">Getting Help</TabsTrigger>
          </TabsList>

          <TabsContent value="digital" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Porn Addiction */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Adult Content Addiction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Why It's Harmful for Students:</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Creates unrealistic expectations about relationships</li>
                      <li>• Can affect brain development during puberty</li>
                      <li>• May lead to problems with real relationships</li>
                      <li>• Can become compulsive and interfere with studies</li>
                      <li>• Often depicts unhealthy or unsafe behaviors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Healthy Alternatives:</h4>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Focus on real friendships and hobbies</li>
                      <li>• Learn about healthy relationships from trusted sources</li>
                      <li>• Practice sports or creative activities</li>
                      <li>• Talk to trusted adults about questions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile/Gaming Addiction */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                    Mobile & Gaming Addiction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Warning Signs:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Spending 4+ hours daily on phone/games</li>
                      <li>• Feeling anxious without your phone</li>
                      <li>• Ignoring friends, family, or studies</li>
                      <li>• Sleep problems from late-night usage</li>
                      <li>• Lying about screen time</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Healthy Phone Habits:</h4>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• Set specific times for phone use</li>
                      <li>• Keep phones out of bedroom at night</li>
                      <li>• Take regular breaks from screens</li>
                      <li>• Use apps to monitor and limit usage</li>
                      <li>• Have phone-free meal times</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <GamepadIcon className="w-5 h-5 mr-2 text-purple-600" />
                  Gaming Addiction Prevention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Set Time Limits</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• 1-2 hours on school days</li>
                      <li>• 2-3 hours on weekends</li>
                      <li>• Use timers or parental controls</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Balance Activities</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Physical exercise daily</li>
                      <li>• Face-to-face social time</li>
                      <li>• Creative hobbies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Monitor Content</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Choose age-appropriate games</li>
                      <li>• Avoid violent or addictive games</li>
                      <li>• Play with friends, not alone</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="substance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Alcohol */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Wine className="w-5 h-5 mr-2 text-red-600" />
                    Alcohol Risks for Teenagers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Why It's Especially Dangerous for Teens:</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Damages developing brain (until age 25)</li>
                      <li>• Affects memory and learning ability</li>
                      <li>• Increases risk of accidents and injuries</li>
                      <li>• Can lead to risky sexual behavior</li>
                      <li>• Higher chance of developing addiction</li>
                      <li>• Illegal for people under 21 in India</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Common Myths vs Facts:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-red-600">Myth:</strong> Beer isn't as bad as hard liquor
                      </div>
                      <div>
                        <strong className="text-green-600">Fact:</strong> All alcohol is harmful to developing brains
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Drugs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Drug Abuse Prevention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Common Substances to Avoid:</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Cigarettes and tobacco products</li>
                      <li>• Marijuana/ganja</li>
                      <li>• Prescription drugs (not prescribed to you)</li>
                      <li>• Inhalants (glue, paint, etc.)</li>
                      <li>• Any illegal drugs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">How to Say No:</h4>
                    <ul className="text-yellow-700 space-y-1 text-sm">
                      <li>• "No thanks, I'm good"</li>
                      <li>• "I have to go home"</li>
                      <li>• "I don't do that stuff"</li>
                      <li>• "My parents would kill me"</li>
                      <li>• Walk away if pressured</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Why People Start Using Substances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Common Reasons:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Peer pressure from friends</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Curiosity or wanting to try new things</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Stress from school or family problems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Wanting to feel grown up or cool</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span>Feeling sad, anxious, or depressed</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Healthier Alternatives:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span>Find friends who support healthy choices</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span>Try new hobbies like sports, music, or art</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span>Learn stress management techniques</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span>Build confidence through achievements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span>Talk to counselors about difficult feelings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-orange-600" />
                  Recognizing Addiction Warning Signs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">What is Addiction?</h4>
                  <p className="text-orange-700">
                    Addiction is when someone can't stop doing something even when it's causing problems 
                    in their life. It changes the brain in ways that make it very hard to quit without help.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-red-600">Physical & Behavioral Signs:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-red-800">Changes in Appearance</h5>
                        <ul className="text-red-700 text-sm space-y-1 mt-2">
                          <li>• Sudden weight loss or gain</li>
                          <li>• Red or bloodshot eyes</li>
                          <li>• Poor personal hygiene</li>
                          <li>• Shaking hands or tremors</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-800">Sleep & Energy Changes</h5>
                        <ul className="text-blue-700 text-sm space-y-1 mt-2">
                          <li>• Staying awake for days</li>
                          <li>• Sleeping much more than usual</li>
                          <li>• Extreme fatigue or hyperactivity</li>
                          <li>• Unusual sleep schedule</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">Emotional & Social Signs:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-800">Mood Changes</h5>
                        <ul className="text-purple-700 text-sm space-y-1 mt-2">
                          <li>• Extreme mood swings</li>
                          <li>• Increased irritability or anger</li>
                          <li>• Depression or anxiety</li>
                          <li>• Personality changes</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-800">Social Isolation</h5>
                        <ul className="text-green-700 text-sm space-y-1 mt-2">
                          <li>• Avoiding family and old friends</li>
                          <li>• New group of friends (possibly older)</li>
                          <li>• Secretive about activities</li>
                          <li>• Loss of interest in hobbies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">📚 School Problems</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Dropping grades</li>
                      <li>• Skipping classes</li>
                      <li>• Trouble concentrating</li>
                      <li>• Disciplinary issues</li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">🏠 Home Issues</h4>
                    <ul className="text-pink-700 text-sm space-y-1">
                      <li>• Lying or being secretive</li>
                      <li>• Stealing money or items</li>
                      <li>• Breaking curfew</li>
                      <li>• Aggressive behavior</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">💰 Money Problems</h4>
                    <ul className="text-teal-700 text-sm space-y-1">
                      <li>• Always asking for money</li>
                      <li>• Missing personal items</li>
                      <li>• Unexplained expensive items</li>
                      <li>• Financial secrecy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Getting Help and Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Remember: Recovery is Possible!</h4>
                  <p className="text-green-700">
                    Addiction is a medical condition, not a moral failing. With the right help and support, 
                    people can and do recover. The earlier someone gets help, the better the outcome.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">If You Need Help:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-800">Step 1: Recognize the Problem</h5>
                        <p className="text-blue-700 text-sm">Admitting you need help is brave and shows strength</p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-800">Step 2: Tell a Trusted Adult</h5>
                        <p className="text-purple-700 text-sm">Parent, teacher, counselor, or family member</p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-800">Step 3: Get Professional Help</h5>
                        <p className="text-green-700 text-sm">Doctor, therapist, or addiction counselor</p>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-orange-800">Step 4: Follow Treatment Plan</h5>
                        <p className="text-orange-700 text-sm">Stick with therapy, medication, or programs</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">If a Friend Needs Help:</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-800">Be Supportive</h5>
                        <ul className="text-purple-700 text-sm space-y-1 mt-2">
                          <li>• Listen without judging</li>
                          <li>• Encourage them to get help</li>
                          <li>• Don't enable their addiction</li>
                          <li>• Stay connected but set boundaries</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-yellow-800">Tell an Adult</h5>
                        <p className="text-yellow-700 text-sm">
                          If you're worried about a friend's safety, tell a trusted adult. 
                          This isn't betraying them - it's saving them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">🚨 Emergency Situations</h4>
                  <p className="text-red-700 mb-3">Call for immediate help if someone:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-red-700 space-y-1">
                      <li>• Has overdosed or is unconscious</li>
                      <li>• Is having trouble breathing</li>
                      <li>• Is talking about suicide</li>
                    </ul>
                    <ul className="text-red-700 space-y-1">
                      <li>• Is acting violently</li>
                      <li>• Has severe chest pain</li>
                      <li>• Is having seizures</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-2 bg-red-100 rounded">
                    <strong>Emergency Numbers: Police 100 | Ambulance 108 | Fire 101</strong>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-blue-800">National Helpline</h4>
                    <div className="text-2xl font-bold text-blue-600">1800-11-0031</div>
                    <div className="text-xs text-blue-600">Drug Abuse Prevention</div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-green-800">Mental Health</h4>
                    <div className="text-2xl font-bold text-green-600">9152987821</div>
                    <div className="text-xs text-green-600">NIMHANS Helpline</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-purple-800">Youth Helpline</h4>
                    <div className="text-2xl font-bold text-purple-600">1098</div>
                    <div className="text-xs text-purple-600">Childline India</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Prevention Focus */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Prevention is the Best Protection! 🛡️</h3>
              <p className="text-lg mb-6">
                The best way to avoid addiction is to never start. Build healthy habits, 
                make good friends, and remember that asking for help is always a sign of strength, not weakness.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white px-4 py-2 rounded-full">Stay Active & Healthy</span>
                <span className="bg-white px-4 py-2 rounded-full">Choose Good Friends</span>
                <span className="bg-white px-4 py-2 rounded-full">Talk to Trusted Adults</span>
                <span className="bg-white px-4 py-2 rounded-full">Focus on Your Goals</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Addiction;
