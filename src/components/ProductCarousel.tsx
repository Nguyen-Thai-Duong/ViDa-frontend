import React, { useState, useEffect } from 'react';

interface ProductImage {
    id: number;
    emoji: string;
    title: string;
    description: string;
    color: string;
    imagePath?: string; // Đường dẫn đến hình ảnh thật
}

const ProductCarousel: React.FC = () => {
    // Dữ liệu sản phẩm với emoji và màu sắc
    const productImages: ProductImage[] = [
        {
            id: 1,
            emoji: "🛍️",
            title: "Túi Shopping Nhỏ",
            description: "Kích thước 25x30cm, phù hợp cho việc mua sắm hàng ngày",
            color: "from-green-400 to-green-500",
            imagePath: "/images/tui-shopping-nho.jpg"
        },
        {
            id: 2,
            emoji: "🛒",
            title: "Túi Shopping Lớn",
            description: "Kích thước 35x40cm, lý tưởng cho việc mua sắm lớn",
            color: "from-green-500 to-green-600",
            imagePath: "/images/tui-shopping-lon.jpg"
        },
        {
            id: 3,
            emoji: "👝",
            title: "Túi Cá Nhân",
            description: "Kích thước 20x25cm, hoàn hảo cho đồ dùng cá nhân",
            color: "from-green-600 to-green-700",
            imagePath: "/images/tui-ca-nhan.jpg"
        },
        {
            id: 4,
            emoji: "🥬",
            title: "Túi Thực Phẩm",
            description: "Kích thước 30x35cm, an toàn cho thực phẩm",
            color: "from-green-700 to-green-800",
            imagePath: "/images/tui-thuc-pham.jpg"
        },
        {
            id: 5,
            emoji: "🦠",
            title: "Quy Trình Sản Xuất",
            description: "Từ con scoby đến sản phẩm túi hoàn chỉnh",
            color: "from-emerald-400 to-emerald-600",
            imagePath: "/images/quy-trinh-san-xuat.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Tự động chuyển ảnh mỗi 4 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [productImages.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? productImages.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === productImages.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Images */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {productImages.map((product) => (
                        <div key={product.id} className="w-full flex-shrink-0 relative">
                            {/* Kiểm tra xem có hình ảnh thật không */}
                            {product.imagePath ? (
                                <div className="relative w-full h-96">
                                    <img
                                        src={product.imagePath}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Nếu không load được hình ảnh, fallback về design cũ
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="w-full h-96 bg-gradient-to-br ${product.color} flex flex-col items-center justify-center text-white relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10">
                              <div class="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                              <div class="absolute top-8 right-8 w-16 h-16 border-2 border-white rounded-full"></div>
                              <div class="absolute bottom-8 left-8 w-12 h-12 border-2 border-white rounded-full"></div>
                              <div class="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                            </div>
                            <div class="relative z-10 text-center px-8">
                              <div class="text-8xl mb-6 animate-bounce">${product.emoji}</div>
                              <h3 class="text-3xl font-bold mb-4">${product.title}</h3>
                              <p class="text-xl opacity-90 max-w-md">${product.description}</p>
                            </div>
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                    {/* Overlay với thông tin sản phẩm */}
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                                        <div className="p-6 text-white">
                                            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                            <p className="text-lg">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`w-full h-96 bg-gradient-to-br ${product.color} flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                                        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white rounded-full"></div>
                                        <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-white rounded-full"></div>
                                        <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center px-8">
                                        <div className="text-8xl mb-6 animate-bounce">{product.emoji}</div>
                                        <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
                                        <p className="text-xl opacity-90 max-w-md">{product.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-3">
                {productImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-green-600 w-8 scale-110'
                            : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                            }`}
                    />
                ))}
            </div>

            {/* Product Counter */}
            <div className="text-center mt-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    {currentIndex + 1} / {productImages.length}
                </span>
            </div>
        </div>
    );
};

export default ProductCarousel;