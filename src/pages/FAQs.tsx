
import { ArrowLeft, HelpCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      category: "Puberty & Body Changes",
      questions: [
        {
          q: "Is masturbation bad or harmful?",
          a: "No, masturbation is a normal part of human sexuality and is not harmful when done in a healthy way. It's a natural way for people to explore their own bodies and can actually have some health benefits like stress relief. However, like anything else, if it becomes compulsive or interferes with daily life, schoolwork, or relationships, it might be worth talking to a counselor or healthcare provider."
        },
        {
          q: "Are mood swings during puberty normal?",
          a: "Yes, mood swings are completely normal during puberty! Hormonal changes in your body can cause you to feel happy one moment and sad or angry the next. Your brain is also developing, which affects how you process emotions. These feelings usually become more stable as you get older. If mood swings are severe or last for weeks, it's good to talk to a trusted adult."
        },
        {
          q: "Should I be ashamed of my body during puberty?",
          a: "Absolutely not! Your body is going through amazing changes to help you grow into an adult. Every person develops at their own pace - some earlier, some later, and all of it is normal. The changes you're experiencing (growth spurts, voice changes, body hair, etc.) are signs that your body is healthy and developing properly. You should never feel ashamed of natural biological processes."
        },
        {
          q: "When should I start using deodorant?",
          a: "Most people start needing deodorant when they begin to notice body odor, which usually happens during puberty (around ages 9-14). This varies from person to person. When you start sweating more or notice a different smell after physical activity, it's time to start using deodorant daily."
        }
      ]
    },
    {
      category: "Relationships & Attraction",
      questions: [
        {
          q: "Is it wrong to feel attracted to someone?",
          a: "No, feeling attracted to someone is completely natural and normal! Attraction is a normal part of human development, especially during puberty when hormones are changing. Whether you're attracted to people of the same gender, different gender, or both, these feelings are valid. What matters is that any relationships you have are based on mutual respect, consent, and are age-appropriate."
        },
        {
          q: "What exactly is consent?",
          a: "Consent means freely agreeing to something without pressure, threats, or manipulation. In relationships, consent means both people clearly want to participate in whatever is happening. True consent is: freely given (no pressure), clear (obvious yes or no), informed (understanding what you're agreeing to), and ongoing (can be changed at any time). Remember: silence isn't consent, and being in a relationship doesn't mean automatic consent to everything."
        },
        {
          q: "How do I know if someone likes me?",
          a: "Signs someone might like you include: wanting to spend time with you, paying special attention to you, remembering things you've said, making an effort to talk to you, and showing genuine interest in your thoughts and feelings. However, the best way to know is through honest communication. If you're interested in someone, it's okay to express your feelings respectfully and accept their response, whatever it may be."
        },
        {
          q: "What's the difference between love and just having a crush?",
          a: "A crush is usually intense but short-lived feelings of attraction, often based on limited knowledge of the person. Love develops over time through getting to know someone deeply, sharing experiences, and building trust and emotional connection. Both are normal! During your teenage years, most romantic feelings will be crushes, and that's perfectly fine as you learn about relationships and what you value in other people."
        }
      ]
    },
    {
      category: "Internet Safety & Content",
      questions: [
        {
          q: "Is watching adult content safe for teenagers?",
          a: "No, adult content is not safe or healthy for teenagers. Here's why: it creates unrealistic expectations about relationships and bodies, can become addictive and interfere with studies and social development, often depicts unhealthy or unsafe behaviors, and can affect your developing brain's understanding of healthy sexuality. Instead, learn about relationships and sexuality from trusted educational sources, parents, school counselors, or healthcare providers."
        },
        {
          q: "What should I do if I accidentally see inappropriate content online?",
          a: "Don't panic - this happens to most people online. Close the content immediately, clear your browser history if you're concerned, talk to a trusted adult about what happened (they won't be angry), and consider using better filtering tools to prevent it in the future. Remember, accidentally seeing something doesn't make you bad - it's how you respond that matters."
        },
        {
          q: "How can I tell if a website is safe?",
          a: "Safe websites usually: have 'https://' in the URL (the 's' means secure), are from known, reputable organizations, don't ask for personal information unnecessarily, don't have lots of pop-up ads, and don't contain adult content or violent material. When in doubt, ask a trusted adult or use our website checker tool. It's always better to be cautious online."
        },
        {
          q: "What should I do if someone online asks for my personal information?",
          a: "Never give personal information (real name, address, phone number, school name, photos) to strangers online. If someone asks for this information: don't provide it, tell a trusted adult immediately, block the person, save the conversation as evidence if needed, and report them to the platform. Remember: legitimate people and organizations won't ask children for personal information online."
        }
      ]
    },
    {
      category: "Mental Health & Emotions",
      questions: [
        {
          q: "How do I deal with stress from school and family?",
          a: "Healthy ways to manage stress include: talking to someone you trust about your feelings, getting regular exercise and enough sleep, practicing relaxation techniques like deep breathing, breaking big problems into smaller, manageable parts, maintaining hobbies and activities you enjoy, and asking for help when you need it. If stress feels overwhelming, don't hesitate to talk to a school counselor or healthcare provider."
        },
        {
          q: "Is it normal to feel sad or anxious sometimes?",
          a: "Yes, everyone feels sad, anxious, or worried sometimes - this is a normal part of life, especially during the teenage years when so much is changing. However, if these feelings last for weeks, interfere with your daily life, make it hard to sleep or eat, or include thoughts of hurting yourself, it's important to talk to a trusted adult or mental health professional right away."
        },
        {
          q: "How can I build confidence and self-esteem?",
          a: "Building confidence takes time, but you can: focus on your strengths and achievements, set small, achievable goals, practice self-compassion (be kind to yourself), surround yourself with supportive people, try new activities to discover your talents, take care of your physical health, and remember that everyone makes mistakes - they're opportunities to learn, not reasons to feel bad about yourself."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Frequently Asked Questions & Myth Busting</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-teal-100 to-blue-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <HelpCircle className="w-8 h-8 text-teal-600 mr-3" />
                Your Questions Answered
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                We know you have lots of questions about your changing body, relationships, and staying safe online. 
                Here are honest, science-based answers to the questions teenagers ask most often. Remember, no question 
                is too embarrassing or silly - curiosity is how we learn!
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800">
                  <strong>💡 Remember:</strong> If you don't find your question here, you can always ask it anonymously 
                  or talk to a trusted adult like a parent, teacher, or school counselor.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-600">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-primary">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4 pb-2">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-blue-800 leading-relaxed">{faq.a}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Myth Busting Section */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">🚫 Common Myths vs Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "If you masturbate, you'll go blind or grow hair on your palms"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> This is completely false. Masturbation doesn't cause any physical harm or unusual changes to your body. These are old myths that have no scientific basis.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "Girls can't get pregnant the first time they have sex"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> Pregnancy can happen any time sperm meets an egg, including the first time. This is why comprehensive sex education and protection are important when people are older and in appropriate relationships.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "Having crushes on people of the same gender means you're definitely gay"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> Sexual orientation can be fluid, especially during puberty. Having same-gender crushes might indicate you're gay, lesbian, or bisexual, or it might just be part of normal exploration. What matters is being true to yourself and knowing that all orientations are normal and valid.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "Adult content online shows what real relationships are like"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> Adult content is entertainment, not education. It often shows unrealistic, unhealthy, or even harmful behaviors that don't represent real, healthy relationships. Real relationships are based on communication, respect, and consent.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "You can't get addicted to video games or your phone"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> Behavioral addictions to gaming, social media, or phone use are real and can interfere with school, relationships, and mental health. Balance and moderation are important with all activities.</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">MYTH: "Periods are dirty or shameful"</h4>
                  <p className="text-green-800"><strong>FACT:</strong> Menstruation is a completely natural, healthy process that shows your body is developing normally. There's nothing dirty or shameful about periods - they're a sign of health!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Still Have Questions */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions? 🤔</h3>
              <p className="text-lg mb-6">
                It's completely normal to have more questions as you learn and grow. 
                Remember, asking questions shows maturity and a desire to make informed decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Ask Anonymously</h4>
                  <p className="text-purple-700 text-sm mb-3">
                    Submit your questions without revealing your identity
                  </p>
                  <Link 
                    to="/anonymous-questions" 
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    Ask Anonymous Question
                  </Link>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Talk to Someone</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Reach out to trusted adults or professional helplines
                  </p>
                  <Link 
                    to="/helpline" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View Support Resources
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
