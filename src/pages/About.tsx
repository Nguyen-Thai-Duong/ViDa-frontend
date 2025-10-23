import React from 'react';

const About: React.FC = () => {
    const teamMembers = [
        {
            name: "Lê Thị Tố Như",
            role: "CEO & Leader",
            description: "Lãnh đạo nhóm với tầm nhìn chiến lược về phát triển sản phẩm thân thiện môi trường. Có kinh nghiệm quản lý và định hướng phát triển bền vững.",
            avatar: "👩‍💼",
            gender: "Nữ"
        },
        {
            name: "Nguyễn Ngọc Hân",
            role: "Chuyên viên sản xuất",
            description: "Chuyên gia về quy trình nuôi và chăm sóc scoby. Đảm bảo chất lượng nguyên liệu đầu vào cho sản phẩm.",
            avatar: "👩‍🔬",
            gender: "Nữ"
        },
        {
            name: "Nguyễn Thu Minh",
            role: "Thiết kế sản phẩm",
            description: "Chịu trách nhiệm thiết kế các mẫu túi đa dạng và thẩm mỹ từ scoby. Tạo ra những sản phẩm vừa đẹp vừa thân thiện môi trường.",
            avatar: "👩‍🎨",
            gender: "Nữ"
        },
        {
            name: "Nguyễn Thái Dương",
            role: "CTO - Giám đốc Công nghệ",
            description: "Chuyên gia về công nghệ sấy khô và quy trình sản xuất. Đảm bảo hiệu quả và chất lượng trong toàn bộ quy trình sản xuất.",
            avatar: "👨‍💻",
            gender: "Nam"
        },
        {
            name: "Nguyễn Ngọc Thu Trang",
            role: "CMO - Giám đốc Marketing",
            description: "Chịu trách nhiệm phát triển thương hiệu ViDa và mở rộng thị trường. Xây dựng chiến lược marketing cho sản phẩm thân thiện môi trường.",
            avatar: "👩‍💼",
            gender: "Nữ"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Về chúng tôi</h1>
                        <p className="text-xl md:text-2xl text-green-100">
                            Đội ngũ 5 thành viên đam mê với sản phẩm thân thiện môi trường
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Sứ mệnh của chúng tôi
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Chúng tôi tin rằng việc bảo vệ môi trường không chỉ là trách nhiệm mà còn là cơ hội
                                để tạo ra những sản phẩm hữu ích và bền vững. Scoby ra đời từ niềm đam mê tạo ra
                                những sản phẩm thay thế cho nhựa, góp phần giảm thiểu rác thải nhựa ra môi trường.
                            </p>
                            <p className="text-lg text-gray-600">
                                Với quy trình sản xuất hoàn toàn tự nhiên, từ việc nuôi scoby đến sấy khô và tạo thành túi,
                                chúng tôi cam kết mang đến những sản phẩm chất lượng cao, thân thiện với môi trường.
                            </p>
                        </div>
                        <div className="bg-green-100 p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Giá trị cốt lõi</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3">🌱</span>
                                    <span className="text-green-700">Bền vững môi trường</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3">🔬</span>
                                    <span className="text-green-700">Đổi mới sáng tạo</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3">🤝</span>
                                    <span className="text-green-700">Hợp tác chặt chẽ</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-3">⭐</span>
                                    <span className="text-green-700">Chất lượng cao</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Đội ngũ của chúng tôi
                        </h2>
                        <p className="text-xl text-gray-600">
                            5 thành viên tài năng, cùng chung tay tạo ra sản phẩm ViDa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <div className="text-6xl mb-4">{member.avatar}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <div className="flex items-center justify-center mb-2">
                                    <span className="text-green-600 font-medium mr-2">{member.role}</span>
                                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                        {member.gender}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Câu chuyện của chúng tôi
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg mx-auto">
                            <p className="text-lg text-gray-600 mb-6">
                                Scoby bắt đầu từ một ý tưởng đơn giản: "Làm thế nào để tạo ra những sản phẩm
                                thay thế cho nhựa một cách tự nhiên và bền vững?" Sau nhiều thí nghiệm và nghiên cứu,
                                chúng tôi đã tìm ra câu trả lời từ con scoby - một loại vi khuẩn có khả năng tạo ra
                                cellulose tự nhiên.
                            </p>

                            <p className="text-lg text-gray-600 mb-6">
                                Quá trình phát triển không hề dễ dàng. Chúng tôi đã phải thử nghiệm hàng trăm lần
                                để tìm ra công thức nuôi scoby tối ưu, quy trình sấy khô phù hợp, và kỹ thuật chế tạo
                                túi bền đẹp. Mỗi thất bại đều là bài học quý giá, giúp chúng tôi hoàn thiện sản phẩm.
                            </p>

                            <p className="text-lg text-gray-600">
                                Ngày nay, Scoby tự hào là một trong những thương hiệu tiên phong trong việc sản xuất
                                túi thân thiện môi trường từ scoby. Chúng tôi cam kết tiếp tục đổi mới và phát triển
                                để mang đến những sản phẩm tốt nhất cho người tiêu dùng và môi trường.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;