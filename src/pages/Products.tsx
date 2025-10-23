import React from 'react';
import ProductCarousel from '../components/ProductCarousel';

const Products: React.FC = () => {
    const productFeatures = [
        {
            title: "Hoàn toàn tự nhiên",
            description: "Được làm từ scoby 100% tự nhiên, không chứa hóa chất độc hại",
            icon: "🌿"
        },
        {
            title: "Phân hủy sinh học",
            description: "Tự phân hủy hoàn toàn trong môi trường tự nhiên, không gây ô nhiễm",
            icon: "♻️"
        },
        {
            title: "Bền và chắc",
            description: "Có độ bền cao, có thể sử dụng nhiều lần trước khi phân hủy",
            icon: "💪"
        },
        {
            title: "Thiết kế đa dạng",
            description: "Nhiều kích thước và kiểu dáng phù hợp với nhu cầu sử dụng",
            icon: "🎨"
        }
    ];

    const productionSteps = [
        {
            step: 1,
            title: "Nuôi dưỡng Scoby",
            description: "Chúng tôi nuôi scoby trong môi trường tự nhiên với chế độ dinh dưỡng đặc biệt. Quá trình này mất khoảng 2-3 tuần để scoby phát triển đủ dày và chắc.",
            image: "🦠"
        },
        {
            step: 2,
            title: "Thu hoạch cẩn thận",
            description: "Scoby được thu hoạch khi đạt độ dày tối ưu. Chúng tôi sử dụng kỹ thuật đặc biệt để đảm bảo không làm tổn thương cấu trúc cellulose.",
            image: "✂️"
        },
        {
            step: 3,
            title: "Làm sạch và chuẩn bị",
            description: "Scoby được rửa sạch bằng nước tinh khiết và loại bỏ các tạp chất. Sau đó được cắt theo kích thước phù hợp cho từng loại túi.",
            image: "🧼"
        },
        {
            step: 4,
            title: "Sấy khô đặc biệt",
            description: "Quá trình sấy khô được thực hiện ở nhiệt độ và độ ẩm được kiểm soát chặt chẽ để đảm bảo scoby giữ được độ bền và tính linh hoạt.",
            image: "🌡️"
        },
        {
            step: 5,
            title: "Tạo hình túi",
            description: "Scoby đã sấy khô được tạo hình thành các loại túi khác nhau. Chúng tôi sử dụng kỹ thuật đặc biệt để tạo ra các đường may chắc chắn.",
            image: "👜"
        },
        {
            step: 6,
            title: "Kiểm tra chất lượng",
            description: "Mỗi sản phẩm đều được kiểm tra kỹ lưỡng về độ bền, tính thẩm mỹ và an toàn trước khi đóng gói và phân phối.",
            image: "✅"
        }
    ];

    const productTypes = [
        {
            name: "Túi shopping nhỏ",
            description: "Kích thước 25x30cm, phù hợp cho việc mua sắm hàng ngày",
            capacity: "Chứa được 3-5kg"
        },
        {
            name: "Túi shopping lớn",
            description: "Kích thước 35x40cm, lý tưởng cho việc mua sắm lớn",
            capacity: "Chứa được 8-10kg"
        },
        {
            name: "Túi đựng đồ cá nhân",
            description: "Kích thước 20x25cm, hoàn hảo cho đồ dùng cá nhân",
            capacity: "Chứa được 2-3kg"
        },
        {
            name: "Túi đựng thực phẩm",
            description: "Kích thước 30x35cm, an toàn cho thực phẩm",
            capacity: "Chứa được 5-7kg"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sản phẩm ViDa</h1>
                        <p className="text-xl md:text-2xl text-green-100">
                            Túi thân thiện môi trường được làm từ scoby tự nhiên
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Gallery */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Hình ảnh sản phẩm
                        </h2>
                        <p className="text-xl text-gray-600">
                            Khám phá các sản phẩm túi Scoby của chúng tôi
                        </p>
                    </div>

                    <ProductCarousel />
                </div>
            </section>

            {/* Product Features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Đặc điểm nổi bật
                        </h2>
                        <p className="text-xl text-gray-600">
                            Những ưu điểm vượt trội của sản phẩm ViDa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {productFeatures.map((feature, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quy trình sản xuất chi tiết
                        </h2>
                        <p className="text-xl text-gray-600">
                            Từ con scoby đến sản phẩm túi hoàn chỉnh
                        </p>
                    </div>

                    <div className="space-y-8">
                        {productionSteps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}>
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                                    </div>
                                    <p className="text-lg text-gray-600">{step.description}</p>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-white p-8 rounded-lg shadow-lg">
                                        <div className="text-6xl text-center">{step.image}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Types */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Các loại sản phẩm
                        </h2>
                        <p className="text-xl text-gray-600">
                            Đa dạng kích thước và mục đích sử dụng
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {productTypes.map((product, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                                    {product.capacity}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Environmental Impact */}
            <section className="py-20 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Tác động tích cực đến môi trường
                        </h2>
                        <p className="text-xl text-green-100">
                            Mỗi sản phẩm Scoby góp phần bảo vệ hành tinh xanh
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold mb-2">Giảm rác thải nhựa</h3>
                            <p className="text-green-100">
                                Mỗi túi Scoby thay thế hàng trăm túi nhựa sử dụng một lần
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold mb-2">Phân hủy tự nhiên</h3>
                            <p className="text-green-100">
                                Hoàn toàn phân hủy trong 3-6 tháng, không để lại chất độc hại
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">♻️</div>
                            <h3 className="text-xl font-semibold mb-2">Tái sử dụng nhiều lần</h3>
                            <p className="text-green-100">
                                Có thể sử dụng hàng trăm lần trước khi cần thay thế
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;