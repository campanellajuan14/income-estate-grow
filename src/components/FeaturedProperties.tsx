
import React from 'react';
import PropertyCard, { PropertyCardProps } from './PropertyCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Sample property data
const properties: PropertyCardProps[] = [
  {
    id: '1',
    title: 'Modern Duplex with High Rental Yield',
    address: '1234 Investment Ave, Chicago, IL 60601',
    price: 485000,
    monthlyIncome: 4200,
    roi: 10.4,
    propertyType: 'Multi-Family',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Commercial Retail Space in Prime Location',
    address: '567 Business Blvd, Miami, FL 33101',
    price: 890000,
    monthlyIncome: 7500,
    roi: 10.1,
    propertyType: 'Commercial',
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Vacation Rental with Ocean View',
    address: '789 Paradise Dr, San Diego, CA 92109',
    price: 1250000,
    monthlyIncome: 12000,
    roi: 11.5,
    propertyType: 'Vacation Rental',
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-realestate-dark mb-2">Featured Income Properties</h2>
            <p className="text-realestate-gray">Handpicked investment opportunities with verified income potential</p>
          </div>
          <Button variant="ghost" className="text-realestate-primary hover:text-realestate-secondary hidden md:flex items-center">
            <span>View all properties</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button className="bg-realestate-primary hover:bg-realestate-secondary text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
