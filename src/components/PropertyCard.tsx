
import React from 'react';
import { Building2, MapPin, ArrowUpRight, Banknote, TrendingUp, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  monthlyIncome: number;
  roi: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  monthlyIncome,
  roi,
  propertyType,
  bedrooms,
  bathrooms,
  squareFeet,
  imageUrl
}: PropertyCardProps) => {
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
  
  const formattedMonthlyIncome = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(monthlyIncome);
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-realestate-primary hover:bg-realestate-secondary">
          {propertyType}
        </Badge>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
          <h3 className="text-white font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            <span className="line-clamp-1">{address}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-realestate-dark">{formattedPrice}</span>
          <Badge variant="outline" className="border-realestate-success text-realestate-success">
            <TrendingUp className="w-3 h-3 mr-1" /> {roi}% ROI
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
            <span className="text-realestate-gray">Beds</span>
            <span className="font-medium">{bedrooms}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
            <span className="text-realestate-gray">Baths</span>
            <span className="font-medium">{bathrooms}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
            <span className="text-realestate-gray">Sq.ft</span>
            <span className="font-medium">{squareFeet.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-realestate-light rounded-lg mb-4">
          <div className="flex items-center">
            <Banknote className="w-4 h-4 text-realestate-success mr-2" />
            <span className="text-sm">Monthly Income</span>
          </div>
          <span className="font-bold text-realestate-success">{formattedMonthlyIncome}</span>
        </div>
        
        <Button variant="outline" className="w-full flex items-center justify-center border-realestate-primary text-realestate-primary hover:bg-realestate-primary hover:text-white">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>View Investment Details</span>
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
