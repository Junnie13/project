import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('page') || '1')
  );
  
  const PRODUCTS_PER_PAGE = 12;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const industryMatch = selectedIndustry === 'All Industries' || product.industry === selectedIndustry;
      const letterMatch = selectedLetter === 'All' || product.category === selectedLetter;
      return industryMatch && letterMatch;
    });
  }, [selectedIndustry, selectedLetter]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (industry === 'All Industries') {
      newParams.delete('industry');
    } else {
      newParams.set('industry', industry);
    }
    newParams.delete('page');
    setSearchParams(newParams);
  };

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
    const newParams = new URLSearchParams(searchParams);
    if (letter === 'All') {
      newParams.delete('letter');
    } else {
      newParams.set('letter', letter);
    }
    newParams.delete('page');
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedLetter('All');
    setCurrentPage(1);
    setSearchParams({});
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const newParams = new URLSearchParams(searchParams);
    if (page === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', page.toString());
    }
    setSearchParams(newParams);
    
    // Scroll to top of products section
    const main = document.querySelector('main');
    if (main) {
      main.scrollIntoView({ behavior: 'smooth' });
    }
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
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Results Info */}
                  <div className="text-sm text-gray-600">
                    Showing {((currentPage - 1) * PRODUCTS_PER_PAGE) + 1} to {Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        const isVisible = page === 1 || page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1);
                        
                        if (!isVisible) {
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return <span key={page} className="px-2 text-gray-400">...</span>;
                          }
                          return null;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                              currentPage === page
                                ? 'bg-red-600 text-white'
                                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </>
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