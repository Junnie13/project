import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-red-600 mb-2">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
            {product.industry}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
        
        <p className="text-sm text-gray-700 mb-4">{product.longDescription}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => onViewDetails(product)}
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors group"
        >
          Click to view details
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;