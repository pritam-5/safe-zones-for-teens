
import { useState } from "react";
import { ArrowLeft, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AnonymousQuestions = () => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Please enter your question",
        description: "Your question cannot be empty.",
        variant: "destructive"
      });
      return;
    }

    if (!category) {
      toast({
        title: "Please select a category",
        description: "This helps us provide better answers.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission (in a real app, this would send to a backend)
    setIsSubmitted(true);
    toast({
      title: "Question submitted successfully!",
      description: "Thank you for your question. Our experts will review it and provide an answer.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setQuestion("");
      setCategory("");
      setIsSubmitted(false);
    }, 3000);
  };

  const categories = [
    { value: "puberty", label: "Puberty & Body Changes" },
    { value: "relationships", label: "Relationships & Attraction" },
    { value: "internet-safety", label: "Internet Safety" },
    { value: "mental-health", label: "Mental Health & Emotions" },
    { value: "hygiene", label: "Personal Hygiene" },
    { value: "addiction", label: "Addiction Concerns" },
    { value: "safety", label: "Personal Safety" },
    { value: "other", label: "Other" }
  ];

  const sampleQuestions = [
    "Is it normal to feel confused about my sexuality?",
    "How do I deal with bullying at school?",
    "What should I do if I think I have an addiction?",
    "How can I talk to my parents about puberty?",
    "Is masturbation really normal and safe?",
    "How do I know if someone likes me?",
    "What should I do if I see inappropriate content online?",
    "How can I manage stress and anxiety?"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-4">Question Submitted!</h3>
            <p className="text-green-700 mb-6">
              Thank you for your question. Our team of experts will review it and provide 
              a helpful, age-appropriate answer that will be added to our FAQ section.
            </p>
            <Link to="/" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Return to Home
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-primary">Ask Anonymous Questions</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-none">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <MessageCircle className="w-8 h-8 text-purple-600 mr-3" />
                Your Safe Space to Ask Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Sometimes you have questions that feel too personal or embarrassing to ask someone directly. 
                This is your safe, anonymous space to ask anything about puberty, relationships, safety, 
                or any other topic on your mind.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🔒 Your Privacy is Protected:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• No names, email addresses, or personal information required</li>
                  <li>• Questions are reviewed by trained educators and counselors</li>
                  <li>• Answers are added to our FAQ section to help other students</li>
                  <li>• We never judge - all questions are welcome and important</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Question Form */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600">Submit Your Question</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    What category best fits your question? <span className="text-red-500">*</span>
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a category..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium mb-2">
                    Your Question <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question here... Remember, no question is too small or embarrassing. We're here to help!"
                    className="min-h-32"
                    maxLength={1000}
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {question.length}/1000 characters
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Tips for Good Questions:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Be as specific as possible - it helps us give better answers</li>
                    <li>• Don't worry about grammar or spelling - we understand</li>
                    <li>• Include your age group (like "I'm 14") if relevant to your question</li>
                    <li>• If it's urgent or you're in danger, please call a helpline instead</li>
                  </ul>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Question Anonymously
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Sample Questions */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Questions Other Students Have Asked</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Here are some examples of questions we've received. Remember, no question is too personal or embarrassing!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {sampleQuestions.map((q, index) => (
                  <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <p className="text-orange-800 text-sm">"{q}"</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link 
                  to="/faqs" 
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
                >
                  See Answers in Our FAQ Section
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alternative Help */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-100 to-pink-100 border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">Need Immediate Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                If you're in danger, feeling unsafe, or having thoughts of hurting yourself, 
                please don't wait for an answer - reach out for immediate help:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Emergency</div>
                  <div className="text-2xl font-bold text-red-600">1098</div>
                  <div className="text-xs text-red-600">Childline India</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Mental Health</div>
                  <div className="text-2xl font-bold text-red-600">9152987821</div>
                  <div className="text-xs text-red-600">iCall Counseling</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-bold text-red-800">Women's Safety</div>
                  <div className="text-2xl font-bold text-red-600">181</div>
                  <div className="text-xs text-red-600">Women's Helpline</div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <Link 
                  to="/helpline" 
                  className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                >
                  View All Support Resources
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Encouragement */}
        <section>
          <Card className="bg-gradient-to-r from-green-100 to-teal-100 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Remember: You're Brave for Asking Questions! 🌟</h3>
              <p className="text-lg text-muted-foreground">
                Curiosity and the desire to learn are signs of maturity and intelligence. 
                Every question you ask helps you make better decisions and helps us create 
                better resources for students like you.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AnonymousQuestions;
