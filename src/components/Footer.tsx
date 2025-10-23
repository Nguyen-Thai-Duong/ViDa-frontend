import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-green-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">ViDa</h3>
                        <p className="text-green-200">
                            Chúng tôi tạo ra những sản phẩm túi thân thiện với môi trường từ con scoby,
                            góp phần bảo vệ hành tinh xanh.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-green-200 hover:text-white transition-colors">Trang chủ</a></li>
                            <li><a href="/about" className="text-green-200 hover:text-white transition-colors">Về chúng tôi</a></li>
                            <li><a href="/products" className="text-green-200 hover:text-white transition-colors">Sản phẩm</a></li>
                            <li><a href="/future-plans" className="text-green-200 hover:text-white transition-colors">Dự định tương lai</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                        <p className="text-green-200">
                            Email: info@scoby.com<br />
                            Điện thoại: (012) 345-6789
                        </p>
                    </div>
                </div>

                <div className="border-t border-green-700 mt-8 pt-8 text-center">
                    <p className="text-green-200">
                        © 2024 ViDa. Tất cả quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;