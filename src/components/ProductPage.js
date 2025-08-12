import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import products from './productDetails';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // بيانات المنتج (يمكن تمريرها كـ props)
  const produc = products;
const product =produc[0];
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* قسم الصور */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                />
                
              </div>
              
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* قسم تفاصيل المنتج */}
            <div className="space-y-6">
              
              {/* العنوان والتقييم */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>
                
              </div>

              {/* الأسعار */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-600">
                  {product.price} ر.س
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice} ر.س
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full">
                  خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

              {/* الوصف */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">الوصف</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* المميزات */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">المميزات الرئيسية</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

             
                

                <div className="flex gap-3">
               

                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  اشتري الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
/*{
    id: 1,
    name: "ساعة ذكية متطورة",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 256,
    description: "ساعة ذكية عالية التقنية مع شاشة AMOLED عالية الدقة، مقاومة للماء، ومراقبة صحية متقدمة. تتميز بعمر بطارية يصل إلى 7 أيام وأكثر من 100 نمط رياضي مختلف.",
    features: [
      "شاشة AMOLED 1.4 بوصة",
      "مقاومة للماء حتى 50 متر",
      "مراقبة معدل ضربات القلب",
      "أكثر من 100 نمط رياضي",
      "عمر البطارية 7 أيام",
      "نظام تشغيل متطور"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
    ]},
   { id: 1,
    name: "ساعة ذكية متطورة",
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 256,
    description: "ساعة ذكية عالية التقنية مع شاشة AMOLED عالية الدقة، مقاومة للماء، ومراقبة صحية متقدمة. تتميز بعمر بطارية يصل إلى 7 أيام وأكثر من 100 نمط رياضي مختلف.",
    features: [
      "شاشة AMOLED 1.4 بوصة",
      "مقاومة للماء حتى 50 متر",
      "مراقبة معدل ضربات القلب",
      "أكثر من 100 نمط رياضي",
      "عمر البطارية 7 أيام",
      "نظام تشغيل متطور"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
    ]},
    {
        id: 1,
        name: "ساعة ذكية متطورة",
        price: 899,
        originalPrice: 1299,
        rating: 4.8,
        reviews: 256,
        description: "ساعة ذكية عالية التقنية مع شاشة AMOLED عالية الدقة، مقاومة للماء، ومراقبة صحية متقدمة. تتميز بعمر بطارية يصل إلى 7 أيام وأكثر من 100 نمط رياضي مختلف.",
        features: [
          "شاشة AMOLED 1.4 بوصة",
          "مقاومة للماء حتى 50 متر",
          "مراقبة معدل ضربات القلب",
          "أكثر من 100 نمط رياضي",
          "عمر البطارية 7 أيام",
          "نظام تشغيل متطور"
        ],
        images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop"
        ]}*/