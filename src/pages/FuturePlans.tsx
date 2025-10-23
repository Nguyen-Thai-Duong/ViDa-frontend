import React from 'react';

const FuturePlans: React.FC = () => {
    const shortTermGoals = [
        {
            title: "Mở rộng quy mô sản xuất",
            description: "Tăng cường năng lực sản xuất để đáp ứng nhu cầu thị trường ngày càng tăng",
            timeline: "6 tháng tới",
            icon: "🏭"
        },
        {
            title: "Nghiên cứu sản phẩm mới",
            description: "Phát triển các sản phẩm khác từ scoby như hộp đựng, túi xách, v.v.",
            timeline: "3-6 tháng tới",
            icon: "🔬"
        },
        {
            title: "Mở rộng thị trường",
            description: "Đưa sản phẩm đến các thành phố lớn và các cửa hàng bán lẻ",
            timeline: "4-8 tháng tới",
            icon: "🌍"
        },
        {
            title: "Cải thiện quy trình",
            description: "Tối ưu hóa quy trình sản xuất để giảm chi phí và tăng chất lượng",
            timeline: "2-4 tháng tới",
            icon: "⚡"
        }
    ];

    const longTermGoals = [
        {
            title: "Trở thành thương hiệu hàng đầu",
            description: "Trở thành thương hiệu tiên phong trong lĩnh vực sản phẩm thân thiện môi trường tại Việt Nam",
            timeline: "2-3 năm tới",
            icon: "🏆"
        },
        {
            title: "Xuất khẩu ra thị trường quốc tế",
            description: "Mở rộng sang các thị trường Đông Nam Á và châu Á",
            timeline: "3-5 năm tới",
            icon: "✈️"
        },
        {
            title: "Phát triển công nghệ tiên tiến",
            description: "Đầu tư vào R&D để tạo ra các sản phẩm scoby thế hệ mới",
            timeline: "5 năm tới",
            icon: "🚀"
        },
        {
            title: "Hợp tác với các tổ chức môi trường",
            description: "Tham gia các chương trình bảo vệ môi trường và giáo dục cộng đồng",
            timeline: "1-2 năm tới",
            icon: "🤝"
        }
    ];

    const upcomingProjects = [
        {
            name: "Dự án Scoby Home",
            description: "Phát triển dòng sản phẩm cho gia đình: túi đựng thực phẩm, hộp đựng đồ, v.v.",
            status: "Đang nghiên cứu",
            progress: 30
        },
        {
            name: "Dự án Scoby Fashion",
            description: "Tạo ra các sản phẩm thời trang từ scoby như túi xách, ví, v.v.",
            status: "Giai đoạn đầu",
            progress: 15
        },
        {
            name: "Dự án Scoby Industrial",
            description: "Phát triển sản phẩm cho ngành công nghiệp: bao bì, vật liệu đóng gói, v.v.",
            status: "Lên kế hoạch",
            progress: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Dự định tương lai</h1>
                        <p className="text-xl md:text-2xl text-green-100">
                            Tầm nhìn và kế hoạch phát triển của ViDa
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tầm nhìn của chúng tôi
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Chúng tôi mong muốn trở thành thương hiệu tiên phong trong việc tạo ra các sản phẩm
                            thay thế nhựa, góp phần xây dựng một tương lai bền vững cho thế hệ mai sau.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
                        <div className="text-center">
                            <div className="text-6xl mb-6">🌱</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                                "Mỗi sản phẩm Scoby là một bước tiến nhỏ hướng tới tương lai xanh"
                            </h3>
                            <p className="text-lg text-green-700 max-w-3xl mx-auto">
                                Chúng tôi tin rằng việc bảo vệ môi trường không chỉ là trách nhiệm mà còn là cơ hội
                                để đổi mới và tạo ra giá trị bền vững cho cộng đồng.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Short-term Goals */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Mục tiêu ngắn hạn
                        </h2>
                        <p className="text-xl text-gray-600">
                            Những kế hoạch trong 6-12 tháng tới
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {shortTermGoals.map((goal, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start">
                                    <div className="text-4xl mr-4">{goal.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                                        <p className="text-gray-600 mb-3">{goal.description}</p>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {goal.timeline}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Long-term Goals */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Mục tiêu dài hạn
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tầm nhìn 3-5 năm tới
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {longTermGoals.map((goal, index) => (
                            <div key={index} className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start">
                                    <div className="text-4xl mr-4">{goal.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                                        <p className="text-green-100 mb-3">{goal.description}</p>
                                        <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {goal.timeline}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Dự án sắp tới
                        </h2>
                        <p className="text-xl text-gray-600">
                            Các dự án đang được phát triển
                        </p>
                    </div>

                    <div className="space-y-8">
                        {upcomingProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">{project.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Đang nghiên cứu' ? 'bg-blue-100 text-blue-800' :
                                        project.status === 'Giai đoạn đầu' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">Tiến độ: {project.progress}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tham gia hành trình cùng chúng tôi
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        Hãy cùng chúng tôi xây dựng một tương lai xanh và bền vững
                    </p>
                    <div className="space-x-4">
                        <a
                            href="/products"
                            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
                        >
                            Khám phá sản phẩm
                        </a>
                        <a
                            href="/about"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FuturePlans;