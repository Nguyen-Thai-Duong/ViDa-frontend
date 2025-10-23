import React from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Chào mừng đến với <span className="text-green-200">ViDa</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-green-100">
                            Sản phẩm túi thân thiện với môi trường từ con scoby
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/products"
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
                            >
                                Khám phá sản phẩm
                            </Link>
                            <Link
                                to="/about"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
                            >
                                Về chúng tôi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sản phẩm của chúng tôi
                        </h2>
                        <p className="text-xl text-gray-600">
                            Khám phá các loại túi ViDa đa dạng và thân thiện môi trường
                        </p>
                    </div>

                    <ProductCarousel />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tại sao chọn ViDa?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Chúng tôi cam kết tạo ra những sản phẩm bền vững và thân thiện với môi trường
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Thân thiện môi trường</h3>
                            <p className="text-gray-600">
                                Sản phẩm được làm từ scoby tự nhiên, hoàn toàn phân hủy sinh học
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Chất lượng cao</h3>
                            <p className="text-gray-600">
                                Quy trình sản xuất cẩn thận, đảm bảo độ bền và tính thẩm mỹ
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Đội ngũ chuyên nghiệp</h3>
                            <p className="text-gray-600">
                                5 thành viên giàu kinh nghiệm trong lĩnh vực sản xuất bền vững
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quy trình sản xuất
                        </h2>
                        <p className="text-xl text-gray-600">
                            Từ con scoby đến sản phẩm túi hoàn chỉnh
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Nuôi scoby</h3>
                            <p className="text-gray-600">Chăm sóc và nuôi dưỡng con scoby trong môi trường tự nhiên</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Thu hoạch</h3>
                            <p className="text-gray-600">Thu hoạch scoby khi đạt độ dày và chất lượng phù hợp</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Sấy khô</h3>
                            <p className="text-gray-600">Sấy khô scoby theo quy trình đặc biệt để tạo độ bền</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Tạo túi</h3>
                            <p className="text-gray-600">Chế tạo thành các sản phẩm túi đa dạng và tiện dụng</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Sẵn sàng tham gia hành trình xanh?
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        Khám phá thêm về sản phẩm và dự định tương lai của chúng tôi
                    </p>
                    <div className="space-x-4">
                        <Link
                            to="/products"
                            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
                        >
                            Xem sản phẩm
                        </Link>
                        <Link
                            to="/future-plans"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
                        >
                            Dự định tương lai
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;