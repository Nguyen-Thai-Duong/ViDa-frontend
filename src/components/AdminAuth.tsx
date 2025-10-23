import React, { useState } from 'react';

interface AdminAuthProps {
    onSuccess: () => void;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Mật khẩu admin - trong thực tế nên lưu ở server
    const ADMIN_PASSWORD = 'ViDa2024!';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate authentication delay
        await new Promise(resolve => setTimeout(resolve, 500));

        if (password === ADMIN_PASSWORD) {
            // Store auth state in sessionStorage
            sessionStorage.setItem('adminAuth', 'true');
            onSuccess();
        } else {
            setError('Mật khẩu không đúng');
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Đăng nhập Admin
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Nhập mật khẩu để truy cập trang quản lý QR Code
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                            placeholder="Nhập mật khẩu admin"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3">
                            <p className="text-red-800 text-sm">{error}</p>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                        >
                            {loading ? 'Đang xác thực...' : 'Đăng nhập'}
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">Thông tin</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-xs text-gray-500">
                        <p>Chỉ thành viên đội ngũ ViDa mới được truy cập trang này</p>
                        <p>Liên hệ: info@vida.com nếu bạn cần hỗ trợ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAuth;
