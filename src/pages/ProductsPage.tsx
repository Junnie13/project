import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterSection from '../components/FilterSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products, Product } from '../data/products';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedIndustry, setSelectedIndustry] = useState(
    searchParams.get('industry') || 'All Industries'
  );
  const [selectedLetter, setSelectedLetter] = useState(
    searchParams.get('letter') || 'All'
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const industryMatch = selectedIndustry === 'All Industries' || product.industry === selectedIndustry;
      const letterMatch = selectedLetter === 'All' || product.category === selectedLetter;
      return industryMatch && letterMatch;
    });
  }, [selectedIndustry, selectedLetter]);

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    const newParams = new URLSearchParams(searchParams);
    if (industry === 'All Industries') {
      newParams.delete('industry');
    } else {
      newParams.set('industry', industry);
    }
    setSearchParams(newParams);
  };

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    const newParams = new URLSearchParams(searchParams);
    if (letter === 'All') {
      newParams.delete('letter');
    } else {
      newParams.set('letter', letter);
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedLetter('All');
    setSearchParams({});
  };

  const handleViewDetails = (product: Product) => {
    const params = new URLSearchParams();
    if (selectedIndustry !== 'All Industries') {
      params.set('industry', selectedIndustry);
    }
    if (selectedLetter !== 'All') {
      params.set('letter', selectedLetter);
    }
    navigate(`/product/${product.id}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero
        title="Our Products"
        description="DataTech Analytics Solutions is the trusted data analytics provider for organizations seeking actionable insights to manage risks and improve results. We deliver targeted solutions for a wide range of industries including healthcare, financial services, technology and government that empower well-informed decisions while upholding the highest standards for security and privacy."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Our Products', href: '/products' }
        ]}
      />
      
      <FilterSection
        selectedIndustry={selectedIndustry}
        selectedLetter={selectedLetter}
        productCount={filteredProducts.length}
        onIndustryChange={handleIndustryChange}
        onLetterChange={handleLetterChange}
        onClearFilters={handleClearFilters}
      />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={handleClearFilters}
                className="mt-4 text-red-600 hover:text-red-700 font-medium"
              >
                Clear filters to see all products
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;