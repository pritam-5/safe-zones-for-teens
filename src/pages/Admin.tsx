import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Question {
  id: number;
  question: string;
  createdAt: string;
}

const Admin = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/questions");
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError("Failed to load questions. Please try again.");
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Admin - View Submitted Questions</CardTitle>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500">{error}</p>}
            {questions.length === 0 && !error && <p>No questions submitted yet.</p>}
            {questions.length > 0 && (
              <ul className="space-y-4">
                {questions.map((q) => (
                  <li key={q.id} className="border p-4 rounded-lg">
                    <p><strong>Question:</strong> {q.question}</p>
                    <p><strong>Submitted:</strong> {new Date(q.createdAt).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
            <Button asChild variant="outline" className="mt-6">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;