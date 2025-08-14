import React, { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Mail, Shield, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-red-600 hover:text-red-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ fullName: '', email: '', message: '' });
  };

  const backUrl = `/products?${searchParams.toString()}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to={backUrl}
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </div>
      </div>

      <main className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Product Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                        {product.name}
                      </h1>
                      <div className="flex items-center mt-3 gap-3">
                        <span className="bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                          {product.industry}
                        </span>
                        <div className="flex items-center text-yellow-500">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <span className="ml-2 text-sm font-medium text-gray-700">Top Rated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                </div>

                <section className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-red-600 to-red-800 w-1 h-8 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {product.longDescription}
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-1 h-8 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-3 h-3 rounded-full mt-1.5 flex-shrink-0 shadow-sm"></div>
                          <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sticky top-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-red-600 to-red-800 w-12 h-1 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Get Started Today</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Interested in <span className="font-semibold text-red-600">{product.name}</span>? Fill out the form below and our team will contact you shortly.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start space-x-3">
                    <div className="bg-amber-200 p-2 rounded-full">
                      <Shield className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-800 mb-1">Your Privacy Matters</p>
                      <p className="text-sm text-amber-700">
                        Your information is secure and will only be used to contact you about this product.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 hover:border-gray-300"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 hover:border-gray-300"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        <Send className="w-4 h-4 inline mr-2" />
                        How can we help you? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={`Tell us about your interest in ${product.name} and how we can assist you...`}
                        rows={4}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 hover:border-gray-300 resize-vertical"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </button>

                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-600">
                        By submitting this form, you agree to be contacted by our team regarding <span className="font-semibold">{product.name}</span>.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;