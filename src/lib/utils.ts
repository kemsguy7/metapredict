import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock data generator for the price chart
export const generateChartData = (points: number = 100) => {
  const data = [];
  let price = 95000;
  
  for (let i = 0; i < points; i++) {
    price += (Math.random() - 0.5) * 1000;
    data.push({
      time: i,
      price: price,
      forecast: i < points / 2 ? price + Math.random() * 2000 : null
    });
  }
  
  return data;
}

// Format currency
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Format percentage
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value / 100);
}