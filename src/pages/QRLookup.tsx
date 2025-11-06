import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

interface ProductInfo {
    id: string;
    name: string;
    type: string;
    productionDate: string;
    batchNumber: string;
    producer: string;
    description: string;
    website: string;
    lookupUrl: string;
}

const QRLookup: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<ProductInfo | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [scannedCode, setScannedCode] = useState('');

    // Mock data - trong thực tế sẽ gọi API
    const mockProducts: ProductInfo[] = useMemo(() => ([
        {
            id: 'ViDa-1703123456789-123',
            name: 'Túi Shopping Nhỏ',
            type: 'tui-shopping-nho',
            productionDate: '2024-01-15',
            batchNumber: 'BATCH-2024-001',
            producer: 'Nguyễn Ngọc Hân',
            description: 'Túi shopping nhỏ được làm từ scoby tự nhiên, kích thước 25x30cm',
            website: 'vida.com',
            lookupUrl: 'vida.com/qr-lookup/ViDa-1703123456789-123'
        }
    ]), []);

    const handleLookup = useCallback(async (id: string) => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/qr/lookup/${id}`);
            const result = await response.json();

            if (result.success) {
                setProduct(result.data);
            } else {
                setError(result.message || 'Không tìm thấy thông tin sản phẩm với mã này');
            }
        } catch (err) {
            console.error('❌ Lookup error:', err);
            setError('Có lỗi xảy ra khi tra cứu thông tin sản phẩm');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (productId) {
            handleLookup(productId);
        }
    }, [productId, handleLookup]);


    const handleManualLookup = (e: React.FormEvent) => {
        e.preventDefault();
        if (scannedCode.trim()) {
            handleLookup(scannedCode.trim());
        }
    };

    const getProductTypeName = (type: string) => {
        const typeMap: { [key: string]: string } = {
            'tui-shopping-nho': 'Túi Shopping Nhỏ',
            'tui-shopping-lon': 'Túi Shopping Lớn',
            'tui-ca-nhan': 'Túi Cá Nhân',
            'tui-thuc-pham': 'Túi Thực Phẩm'
        };
        return typeMap[type] || type;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Tra cứu sản phẩm ViDa</h1>
                    <p className="text-gray-600">Quét mã QR hoặc nhập mã sản phẩm để xem thông tin chi tiết</p>
                </div>

                {/* Form tra cứu thủ công */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Tra cứu thủ công</h2>
                    <form onSubmit={handleManualLookup} className="flex gap-4">
                        <input
                            type="text"
                            value={scannedCode}
                            onChange={(e) => setScannedCode(e.target.value)}
                            placeholder="Nhập mã sản phẩm (ví dụ: ViDa-1703123456789-123)"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50"
                        >
                            {loading ? 'Đang tra cứu...' : 'Tra cứu'}
                        </button>
                    </form>
                </div>

                {/* Kết quả tra cứu */}
                {loading && (
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Đang tra cứu thông tin sản phẩm...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                        <div className="flex items-center">
                            <div className="text-red-600 mr-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-red-800 font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {product && (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header sản phẩm */}
                        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                                    <p className="text-green-100">Sản phẩm chính hãng ViDa</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-green-200">Mã sản phẩm</p>
                                    <p className="font-mono text-lg">{product.id}</p>
                                </div>
                            </div>
                        </div>

                        {/* Thông tin chi tiết */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông tin sản phẩm</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Loại sản phẩm:</span>
                                            <span className="font-medium">{getProductTypeName(product.type)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Số lô sản xuất:</span>
                                            <span className="font-medium">{product.batchNumber}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Ngày sản xuất:</span>
                                            <span className="font-medium">{formatDate(product.productionDate)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Người sản xuất:</span>
                                            <span className="font-medium">{product.producer}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Đặc điểm sản phẩm</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <span className="text-green-600 mr-2">🌱</span>
                                            <span className="text-gray-700">100% tự nhiên từ scoby</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-green-600 mr-2">♻️</span>
                                            <span className="text-gray-700">Phân hủy sinh học hoàn toàn</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-green-600 mr-2">💪</span>
                                            <span className="text-gray-700">Độ bền cao, sử dụng nhiều lần</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-green-600 mr-2">🎨</span>
                                            <span className="text-gray-700">Thiết kế thẩm mỹ, đa dạng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {product.description && (
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Mô tả sản phẩm</h3>
                                    <p className="text-gray-700">{product.description}</p>
                                </div>
                            )}

                            {/* Thông tin bảo hành */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thông tin bảo hành</h3>
                                <div className="bg-green-50 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-green-600 mr-2">🛡️</span>
                                        <span className="font-medium text-green-800">Bảo hành chất lượng</span>
                                    </div>
                                    <p className="text-green-700 text-sm">
                                        Sản phẩm được bảo hành về chất lượng trong quá trình sử dụng bình thường.
                                        Liên hệ với chúng tôi nếu có bất kỳ vấn đề nào với sản phẩm.
                                    </p>
                                </div>
                            </div>

                            {/* Liên hệ */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Liên hệ hỗ trợ</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <span className="text-green-600 mr-3">📧</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Email</p>
                                            <p className="font-medium">info@vida.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-green-600 mr-3">📱</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Điện thoại</p>
                                            <p className="font-medium">(012) 345-6789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Hướng dẫn sử dụng */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Hướng dẫn sử dụng</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-blue-800 mb-2">Cách quét mã QR:</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• Mở camera điện thoại</li>
                                <li>• Quét mã QR trên sản phẩm</li>
                                <li>• Truy cập link hiển thị</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-blue-800 mb-2">Cách tra cứu thủ công:</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                                <li>• Tìm mã sản phẩm trên túi</li>
                                <li>• Nhập mã vào ô tra cứu</li>
                                <li>• Nhấn "Tra cứu"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRLookup;