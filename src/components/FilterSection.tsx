import React from 'react';
import { X } from 'lucide-react';
import { industries } from '../data/products';

interface FilterSectionProps {
  selectedIndustry: string;
  selectedLetter: string;
  productCount: number;
  onIndustryChange: (industry: string) => void;
  onLetterChange: (letter: string) => void;
  onClearFilters: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedIndustry,
  selectedLetter,
  productCount,
  onIndustryChange,
  onLetterChange,
  onClearFilters
}) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Industry Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Filter Products by Industry
            </label>
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => onIndustryChange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Alphabetical Filter */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Filter Products Alphabetically
              </label>
              <span className="text-sm font-medium text-red-600">
                {productCount} Product{productCount !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onLetterChange('All')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedLetter === 'All'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => onLetterChange(letter)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    selectedLetter === letter
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters - Centered below */}
        <div className="flex justify-center mt-6">
          {(selectedIndustry !== 'All Industries' || selectedLetter !== 'All') && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4 mr-2" />
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;