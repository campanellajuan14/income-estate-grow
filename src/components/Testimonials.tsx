
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  investmentType: string;
  roi: string;
  avatarUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Income Plus helped me find a multi-family property that generates $4,300 in monthly passive income. Their ROI calculator was spot on with my actual returns.",
    author: "Michael Johnson",
    role: "Real Estate Investor",
    investmentType: "Multi-Family",
    roi: "12.5% annual ROI",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a first-time investor, I was nervous about buying a rental property. The team at Income Plus guided me through every step and found me a property that cashflows from day one.",
    author: "Sarah Williams",
    role: "New Investor",
    investmentType: "Single Family Rental",
    roi: "9.8% annual ROI",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "I've been using Income Plus for my last three commercial property acquisitions. Their analysis tools and market insights are the best in the industry.",
    author: "David Chen",
    role: "Commercial Investor",
    investmentType: "Retail Space",
    roi: "14.2% annual ROI",
    avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonial = ({ quote, author, role, investmentType, roi, avatarUrl }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <Quote className="h-10 w-10 text-realestate-primary/20 mb-4" />
        <p className="text-realestate-dark mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-medium text-realestate-dark">{author}</p>
            <p className="text-sm text-realestate-gray">{role}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm">
          <span className="text-realestate-primary font-medium">{investmentType}</span>
          <span className="text-realestate-success font-medium">{roi}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-realestate-dark mb-2">Investor Success Stories</h2>
          <p className="text-realestate-gray max-w-xl mx-auto">
            See how IncomePlus has helped investors achieve their real estate investment goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
