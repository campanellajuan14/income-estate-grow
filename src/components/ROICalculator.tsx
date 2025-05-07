
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, DollarSign, AreaChart, Percent } from "lucide-react";

const ROICalculator = () => {
  // Input states
  const [propertyValue, setPropertyValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(20); // percentage
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyRentalIncome, setMonthlyRentalIncome] = useState(4000);
  const [vacancyRate, setVacancyRate] = useState(5); // percentage
  const [operatingExpenses, setOperatingExpenses] = useState(35); // percentage of rental income
  
  // Calculated states
  const [mortgagePayment, setMortgagePayment] = useState(0);
  const [netOperatingIncome, setNetOperatingIncome] = useState(0);
  const [cashOnCashReturn, setCashOnCashReturn] = useState(0);
  const [capRate, setCapRate] = useState(0);
  
  // Helper functions
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value.replace(/\D/g, '')) || 0);
    setPropertyValue(value);
  };
  
  const handleRentalIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value.replace(/\D/g, '')) || 0);
    setMonthlyRentalIncome(value);
  };
  
  // Calculations
  useEffect(() => {
    // Calculate mortgage payment
    const loanAmount = propertyValue * (1 - downPayment / 100);
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    let monthlyPayment = 0;
    if (monthlyInterestRate > 0) {
      monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      monthlyPayment = loanAmount / numberOfPayments;
    }
    
    setMortgagePayment(monthlyPayment);
    
    // Calculate net operating income
    const annualRentalIncome = monthlyRentalIncome * 12;
    const effectiveGrossIncome = annualRentalIncome * (1 - vacancyRate / 100);
    const annualOperatingExpenses = effectiveGrossIncome * (operatingExpenses / 100);
    const noi = effectiveGrossIncome - annualOperatingExpenses;
    
    setNetOperatingIncome(noi);
    
    // Calculate cap rate
    const calculatedCapRate = (noi / propertyValue) * 100;
    setCapRate(calculatedCapRate);
    
    // Calculate cash on cash return
    const downPaymentAmount = propertyValue * (downPayment / 100);
    const closingCosts = propertyValue * 0.03; // Estimate closing costs as 3% of property value
    const totalInvestment = downPaymentAmount + closingCosts;
    const annualMortgagePayment = monthlyPayment * 12;
    const annualCashFlow = noi - annualMortgagePayment;
    const calculatedCashOnCash = (annualCashFlow / totalInvestment) * 100;
    
    setCashOnCashReturn(calculatedCashOnCash);
    
  }, [propertyValue, downPayment, interestRate, loanTerm, monthlyRentalIncome, vacancyRate, operatingExpenses]);
  
  return (
    <section className="py-16 bg-realestate-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-realestate-dark mb-2">Investment Property ROI Calculator</h2>
          <p className="text-realestate-gray max-w-xl mx-auto">
            Analyze potential returns on your real estate investments with our easy-to-use calculator
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-realestate-primary" />
                  Property Details
                </CardTitle>
                <CardDescription>Enter your investment property information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Value */}
                  <div className="space-y-2">
                    <Label htmlFor="propertyValue" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-realestate-gray" />
                      Property Value
                    </Label>
                    <Input
                      id="propertyValue"
                      value={formatCurrency(propertyValue).replace('$', '')}
                      onChange={handlePropertyValueChange}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[propertyValue]}
                      min={100000}
                      max={2000000}
                      step={10000}
                      onValueChange={(value) => setPropertyValue(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>$100k</span>
                      <span>$2M</span>
                    </div>
                  </div>
                  
                  {/* Down Payment */}
                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="flex items-center">
                      <Percent className="h-4 w-4 mr-1 text-realestate-gray" />
                      Down Payment (%)
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      min="0"
                      max="100"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Math.min(100, Math.max(0, Number(e.target.value))))}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[downPayment]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setDownPayment(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  {/* Interest Rate */}
                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="flex items-center">
                      <Percent className="h-4 w-4 mr-1 text-realestate-gray" />
                      Interest Rate (%)
                    </Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      min="0"
                      max="20"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Math.min(20, Math.max(0, Number(e.target.value))))}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[interestRate]}
                      min={1}
                      max={10}
                      step={0.1}
                      onValueChange={(value) => setInterestRate(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>1%</span>
                      <span>10%</span>
                    </div>
                  </div>
                  
                  {/* Loan Term */}
                  <div className="space-y-2">
                    <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      min="5"
                      max="40"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Math.min(40, Math.max(5, Number(e.target.value))))}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[loanTerm]}
                      min={5}
                      max={40}
                      step={1}
                      onValueChange={(value) => setLoanTerm(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>5y</span>
                      <span>40y</span>
                    </div>
                  </div>
                  
                  {/* Monthly Rental Income */}
                  <div className="space-y-2">
                    <Label htmlFor="rentalIncome" className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-realestate-gray" />
                      Monthly Rental Income
                    </Label>
                    <Input
                      id="rentalIncome"
                      value={formatCurrency(monthlyRentalIncome).replace('$', '')}
                      onChange={handleRentalIncomeChange}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[monthlyRentalIncome]}
                      min={500}
                      max={15000}
                      step={100}
                      onValueChange={(value) => setMonthlyRentalIncome(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>$500</span>
                      <span>$15k</span>
                    </div>
                  </div>
                  
                  {/* Operating Expenses */}
                  <div className="space-y-2">
                    <Label htmlFor="operatingExpenses" className="flex items-center">
                      <Percent className="h-4 w-4 mr-1 text-realestate-gray" />
                      Operating Expenses (% of Income)
                    </Label>
                    <Input
                      id="operatingExpenses"
                      type="number"
                      min="0"
                      max="100"
                      value={operatingExpenses}
                      onChange={(e) => setOperatingExpenses(Math.min(100, Math.max(0, Number(e.target.value))))}
                      className="text-lg font-medium"
                    />
                    <Slider
                      value={[operatingExpenses]}
                      min={10}
                      max={70}
                      step={1}
                      onValueChange={(value) => setOperatingExpenses(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-realestate-gray">
                      <span>10%</span>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Results Card */}
          <div>
            <Card className="bg-realestate-primary text-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AreaChart className="mr-2 h-5 w-5" />
                  Investment Analysis
                </CardTitle>
                <CardDescription className="text-white/80">
                  Based on your inputs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-sm text-white/80 mb-1">Monthly Mortgage Payment</div>
                    <div className="text-2xl font-bold">
                      {formatCurrency(mortgagePayment)}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-sm text-white/80 mb-1">Net Operating Income (Annual)</div>
                    <div className="text-2xl font-bold">
                      {formatCurrency(netOperatingIncome)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-sm text-white/80 mb-1">Cap Rate</div>
                      <div className="text-2xl font-bold">
                        {capRate.toFixed(2)}%
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-sm text-white/80 mb-1">Cash on Cash</div>
                      <div className="text-2xl font-bold">
                        {cashOnCashReturn.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-realestate-secondary rounded-lg">
                    <div className="text-sm mb-1">Total Investment Required</div>
                    <div className="text-xl font-bold">
                      {formatCurrency(propertyValue * (downPayment / 100) + propertyValue * 0.03)}
                    </div>
                    <div className="text-xs text-white/70 mt-1">
                      Includes down payment and estimated closing costs
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
