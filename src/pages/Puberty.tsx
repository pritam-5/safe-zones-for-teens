
import { ArrowLeft, Heart, User, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Puberty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Understanding Puberty</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-pink-100 to-blue-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Heart className="w-8 h-8 text-pink-600 mr-3" />
                Your Body is Changing - And That's Normal!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                <strong>Welcome to your puberty guide!</strong> Puberty is a completely natural process that every teenager goes through. 
                Your body is preparing to become an adult, and these changes are perfectly normal.
              </p>
              <p className="text-muted-foreground">
                Remember: Everyone goes through puberty at their own pace. Some start earlier, some later - both are completely normal!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="physical" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="physical">Physical Changes</TabsTrigger>
            <TabsTrigger value="emotional">Emotional Changes</TabsTrigger>
            <TabsTrigger value="menstruation">Menstruation</TabsTrigger>
            <TabsTrigger value="hygiene">Personal Hygiene</TabsTrigger>
          </TabsList>

          <TabsContent value="physical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* For Girls */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-pink-600">Physical Changes for Girls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Breast Development</h4>
                        <p className="text-sm text-muted-foreground">Usually the first sign, starting around ages 8-13</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Growth Spurt</h4>
                        <p className="text-sm text-muted-foreground">Rapid increase in height and weight</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Body Hair Growth</h4>
                        <p className="text-sm text-muted-foreground">In underarms, legs, and pubic area</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Hip Development</h4>
                        <p className="text-sm text-muted-foreground">Hips become wider</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Menstruation</h4>
                        <p className="text-sm text-muted-foreground">Monthly periods typically start 1-2 years after breast development</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Boys */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Physical Changes for Boys</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Voice Changes</h4>
                        <p className="text-sm text-muted-foreground">Voice "cracks" and becomes deeper</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Growth Spurt</h4>
                        <p className="text-sm text-muted-foreground">Rapid increase in height and muscle mass</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Facial Hair</h4>
                        <p className="text-sm text-muted-foreground">First mustache and beard hair appears</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Body Hair Growth</h4>
                        <p className="text-sm text-muted-foreground">In underarms, legs, chest, and pubic area</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Shoulder Broadening</h4>
                        <p className="text-sm text-muted-foreground">Shoulders become broader and stronger</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="emotional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-purple-600" />
                  Emotional Changes During Puberty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Your brain is also changing during puberty! This can cause emotional ups and downs - and that's completely normal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-600">What You Might Experience:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Mood swings (happy one moment, sad the next)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Feeling more sensitive or emotional</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Getting irritated more easily</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Feeling self-conscious about your body</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Wanting more independence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">How to Cope:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Talk to trusted adults (parents, teachers, counselors)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Keep a journal to express your feelings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Exercise regularly to manage stress</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Get enough sleep (8-10 hours per night)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Practice relaxation techniques like deep breathing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menstruation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-pink-600">Understanding Menstruation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">What is Menstruation?</h4>
                  <p className="text-pink-700">
                    Menstruation (periods) is a natural monthly process where the lining of the uterus is shed. 
                    It's a sign that your body is healthy and developing normally.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Period Basics:</h4>
                    <ul className="space-y-2">
                      <li>• Typically lasts 3-7 days</li>
                      <li>• Cycle is usually 21-35 days</li>
                      <li>• First period usually comes between ages 10-15</li>
                      <li>• May be irregular at first - this is normal</li>
                      <li>• Amount of flow varies from person to person</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Period Products:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Pads:</strong> Stick to underwear, easy for beginners</li>
                      <li>• <strong>Tampons:</strong> Inserted into vagina (with adult guidance)</li>
                      <li>• <strong>Menstrual cups:</strong> Reusable, eco-friendly option</li>
                      <li>• <strong>Period panties:</strong> Special absorbent underwear</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">When to See a Doctor:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Severe pain that interferes with daily activities</li>
                    <li>• Very heavy bleeding (changing pad/tampon every hour)</li>
                    <li>• Periods that last longer than 7 days</li>
                    <li>• No period by age 16</li>
                    <li>• Sudden changes in your cycle</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hygiene" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <User className="w-6 h-6 mr-2 text-green-600" />
                  Personal Hygiene During Puberty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Good hygiene becomes extra important during puberty because your body produces more sweat and oils.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-600">Daily Hygiene Routine:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Shower Daily:</strong> Use mild soap and warm water
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Use Deodorant:</strong> Apply to clean, dry underarms
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Brush Teeth:</strong> Twice daily with fluoride toothpaste
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Wash Hands:</strong> Frequently, especially before eating
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">Special Care Areas:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Face Care:</strong> Gentle cleanser for acne-prone skin
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Hair Care:</strong> Wash 2-3 times per week or as needed
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Genital Area:</strong> Gentle washing with water, avoid harsh soaps
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <strong>Clean Clothes:</strong> Fresh underwear daily, clean clothes regularly
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Keep extra period products in your school bag</li>
                    <li>• Carry hand sanitizer for times when you can't wash hands</li>
                    <li>• Change out of sweaty clothes after sports or exercise</li>
                    <li>• Don't share personal items like razors or toothbrushes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Reassurance Section */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Remember: You're Not Alone!</h3>
              <p className="text-lg mb-6">
                Every teenager goes through puberty. It's a natural, healthy part of growing up. 
                If you have questions or concerns, don't hesitate to talk to:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white px-4 py-2 rounded-full">Parents or Guardians</span>
                <span className="bg-white px-4 py-2 rounded-full">School Counselors</span>
                <span className="bg-white px-4 py-2 rounded-full">Teachers You Trust</span>
                <span className="bg-white px-4 py-2 rounded-full">Healthcare Providers</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Puberty;
