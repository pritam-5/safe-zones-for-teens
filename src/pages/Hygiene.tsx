
import { ArrowLeft, Sparkles, Heart, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hygiene = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Personal Hygiene & Self-Care</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-100 to-teal-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Sparkles className="w-8 h-8 text-green-600 mr-3" />
                Taking Care of Your Body & Mind
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Good hygiene isn't just about looking clean - it's about feeling confident, staying healthy, 
                and taking care of your mental well-being too. During puberty, your body goes through many 
                changes, so it's extra important to develop good self-care habits.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="menstrual" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="menstrual">Menstrual Hygiene</TabsTrigger>
            <TabsTrigger value="genital">Genital Hygiene</TabsTrigger>
            <TabsTrigger value="skincare">Skincare</TabsTrigger>
            <TabsTrigger value="emotional">Emotional Care</TabsTrigger>
          </TabsList>

          <TabsContent value="menstrual" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Droplets className="w-6 h-6 mr-2 text-pink-600" />
                  Menstrual Hygiene Essentials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-pink-600">During Your Period:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Change regularly:</strong> Pads every 3-4 hours, tampons every 4-6 hours
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wash hands:</strong> Before and after changing period products
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Shower daily:</strong> Use warm water and mild soap
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wear clean underwear:</strong> Cotton is best for breathability
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">Disposal & Storage:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wrap properly:</strong> Wrap used pads in toilet paper or wrapper
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Never flush:</strong> Pads and tampons can block toilets
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Keep supplies handy:</strong> In school bag, home, and bathroom
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Track your cycle:</strong> Use a calendar or period app
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">💡 Period Tips for School:</h4>
                  <ul className="text-pink-700 space-y-1">
                    <li>• Keep a small pouch with extra pads/tampons in your bag</li>
                    <li>• Wear darker clothes on heavy flow days</li>
                    <li>• Tell a trusted female teacher if you need help</li>
                    <li>• Stay hydrated and eat nutritious food</li>
                    <li>• It's okay to ask for a break if you have cramps</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="genital" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-600">Genital Hygiene for Everyone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-800">
                    <strong>Important:</strong> Your genital area has its own natural cleaning system. 
                    Over-washing or using harsh products can actually cause problems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">For Girls:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wash gently:</strong> Use only warm water or mild, unscented soap on the outer area
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wipe correctly:</strong> Always front to back to prevent infections
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Avoid douching:</strong> The vagina cleans itself naturally
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Cotton underwear:</strong> Breathable fabric prevents moisture buildup
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">For Boys:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Daily washing:</strong> Gently clean with warm water and mild soap
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>If uncircumcised:</strong> Gently pull back foreskin to clean underneath
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Dry thoroughly:</strong> Pat dry with a clean towel
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Clean underwear:</strong> Change daily, especially after exercise
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ When to See a Doctor:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Unusual discharge, smell, or itching</li>
                    <li>• Pain or burning during urination</li>
                    <li>• Unusual bumps, rashes, or sores</li>
                    <li>• Any changes that worry you</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skincare" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-yellow-600" />
                  Skincare During Puberty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Hormonal changes during puberty can cause acne and oily skin. A simple, consistent routine is key!
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">Daily Skincare Routine:</h4>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-800">Morning:</h5>
                        <ol className="text-green-700 text-sm space-y-1 mt-2">
                          <li>1. Wash face with gentle cleanser</li>
                          <li>2. Pat dry with clean towel</li>
                          <li>3. Apply oil-free moisturizer</li>
                          <li>4. Use sunscreen (SPF 30+) if going outside</li>
                        </ol>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-800">Evening:</h5>
                        <ol className="text-blue-700 text-sm space-y-1 mt-2">
                          <li>1. Wash face to remove dirt and oil</li>
                          <li>2. Pat dry gently</li>
                          <li>3. Apply moisturizer</li>
                          <li>4. Use spot treatment for acne (if needed)</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-600">Acne Do's and Don'ts:</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-green-600 mb-2">✅ DO:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Wash face twice daily</li>
                          <li>• Use oil-free products</li>
                          <li>• Change pillowcases regularly</li>
                          <li>• Keep hair off your face</li>
                          <li>• Be patient - improvements take time</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-red-600 mb-2">❌ DON'T:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Pick, squeeze, or pop pimples</li>
                          <li>• Over-wash (more than twice daily)</li>
                          <li>• Use harsh scrubs</li>
                          <li>• Touch your face with dirty hands</li>
                          <li>• Use too many products at once</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">🌟 Extra Skincare Tips:</h4>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Drink plenty of water for healthy skin</li>
                    <li>• Eat fruits and vegetables</li>
                    <li>• Get enough sleep (8-10 hours)</li>
                    <li>• Exercise regularly to improve circulation</li>
                    <li>• If acne is severe, talk to a dermatologist</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emotional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-purple-600" />
                  Emotional Self-Care During Puberty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Taking care of your emotional health is just as important as physical hygiene. 
                  Puberty can be an emotional time, and that's completely normal!
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">Common Emotional Changes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Mood swings:</strong> Feeling happy, then sad, then angry quickly
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Body image concerns:</strong> Worrying about how you look
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Increased sensitivity:</strong> Feeling hurt or embarrassed more easily
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Identity questions:</strong> Figuring out who you are
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">Healthy Coping Strategies:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Talk to someone:</strong> Parents, friends, counselors, or teachers
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Keep a journal:</strong> Write about your feelings and experiences
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Exercise regularly:</strong> Physical activity improves mood
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Practice relaxation:</strong> Deep breathing, meditation, or yoga
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">😴 Sleep Well</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• 8-10 hours per night</li>
                      <li>• Regular bedtime routine</li>
                      <li>• No screens before bed</li>
                      <li>• Comfortable sleep environment</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">🥗 Eat Healthy</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Regular meals</li>
                      <li>• Fruits and vegetables</li>
                      <li>• Plenty of water</li>
                      <li>• Limit junk food</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">🎨 Find Hobbies</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Creative activities</li>
                      <li>• Sports or exercise</li>
                      <li>• Reading or learning</li>
                      <li>• Time with friends</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 When to Seek Help:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Feeling sad or hopeless for more than two weeks</li>
                    <li>• Having thoughts of hurting yourself</li>
                    <li>• Extreme anxiety or panic attacks</li>
                    <li>• Trouble eating or sleeping for extended periods</li>
                    <li>• Unable to do normal daily activities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Positive Affirmation Section */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">You Are Amazing Just As You Are! 💫</h3>
              <p className="text-lg mb-6">
                Taking care of yourself shows self-respect and confidence. Remember that everyone develops 
                at their own pace, and your worth isn't defined by how you look or how quickly you mature.
              </p>
              <div className="bg-white/70 p-4 rounded-lg">
                <p className="font-semibold text-purple-800">
                  "Self-care is not selfish. It's essential for your health, happiness, and success in life."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Hygiene;
