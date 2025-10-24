// src/pages/QRAdmin.tsx
import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import * as QRCodeLib from 'qrcode';
import AdminAuth from '../components/AdminAuth';
import { api } from '../api';

interface Product {
    id: string;
    name: string;
    type: string;
    productionDate: string;
    batchNumber: string;
    producer: string;
    description: string;
    website?: string;
    lookupUrl?: string; // dùng để nhúng vào QR
}

const QRAdmin: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState<Product>({
        id: '',
        name: '',
        type: '',
        productionDate: '',
        batchNumber: '',
        producer: '',
        description: ''
    });
    const [showQR, setShowQR] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [busy, setBusy] = useState(false);

    // Đánh thức backend khi vào trang & restore đăng nhập
    useEffect(() => {
        const authStatus = sessionStorage.getItem('adminAuth');
        if (authStatus === 'true') setIsAuthenticated(true);

        api.health().catch(() => { /* ignore */ });
    }, []);

    const handleAuthSuccess = () => setIsAuthenticated(true);

    const handleCreateProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        if (busy) return;
        setBusy(true);

        try {
            const res = await api.createProduct({
                name: newProduct.name,
                type: newProduct.type,
                batchNumber: newProduct.batchNumber,
                producer: newProduct.producer,
                description: newProduct.description
            });

            const result = await res.json();

            if (result?.success) {
                const product: Product = result.data;
                // Lưu và show QR
                setProducts(prev => [product, ...prev]);
                setSelectedProduct(product);
                setShowQR(true);
                // Clear form
                setNewProduct({
                    id: '',
                    name: '',
                    type: '',
                    productionDate: '',
                    batchNumber: '',
                    producer: '',
                    description: ''
                });
                console.log('✅ Product created successfully:', product);
            } else {
                console.error('❌ Error creating product:', result?.message);
                alert('Lỗi tạo sản phẩm: ' + (result?.message || 'Không rõ nguyên nhân'));
            }
        } catch (error) {
            console.error('❌ Connection error:', error);
            alert('Không thể kết nối đến server. Hãy chắc chắn backend đã chạy và REACT_APP_API_URL đúng.');
        } finally {
            setBusy(false);
        }
    };

    // Giá trị đưa vào QR: ưu tiên lookupUrl từ backend (scan sẽ mở trang tra cứu)
    const generateQRData = (product: Product) => {
        return product.lookupUrl ?? product.id;
    };

    const downloadQR = async (product: Product) => {
        const qrData = generateQRData(product);
        const dataUrl = await QRCodeLib.toDataURL(qrData, { width: 512, margin: 2 });

        const link = document.createElement('a');
        link.download = `ViDa-QR-${product.id}.png`;
        link.href = dataUrl;
        link.click();
    };

    if (!isAuthenticated) {
        return <AdminAuth onSuccess={handleAuthSuccess} />;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý QR Code ViDa</h1>
                            <p className="text-gray-600">Tạo và quản lý mã QR cho sản phẩm túi scoby</p>
                        </div>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem('adminAuth');
                                setIsAuthenticated(false);
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form tạo sản phẩm */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Tạo sản phẩm mới</h2>
                        <form onSubmit={handleCreateProduct} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tên sản phẩm
                                </label>
                                <input
                                    type="text"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Ví dụ: Túi shopping nhỏ"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Loại sản phẩm
                                </label>
                                <select
                                    value={newProduct.type}
                                    onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                >
                                    <option value="">Chọn loại sản phẩm</option>
                                    <option value="tui-shopping-nho">Túi Shopping Nhỏ</option>
                                    <option value="tui-shopping-lon">Túi Shopping Lớn</option>
                                    <option value="tui-ca-nhan">Túi Cá Nhân</option>
                                    <option value="tui-thuc-pham">Túi Thực Phẩm</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Số lô sản xuất
                                </label>
                                <input
                                    type="text"
                                    value={newProduct.batchNumber}
                                    onChange={(e) => setNewProduct({ ...newProduct, batchNumber: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Ví dụ: BATCH-2024-001"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Người sản xuất
                                </label>
                                <select
                                    value={newProduct.producer}
                                    onChange={(e) => setNewProduct({ ...newProduct, producer: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                >
                                    <option value="">Chọn người sản xuất</option>
                                    <option value="Lê Thị Tố Như">Lê Thị Tố Như</option>
                                    <option value="Nguyễn Ngọc Hân">Nguyễn Ngọc Hân</option>
                                    <option value="Nguyễn Thu Minh">Nguyễn Thu Minh</option>
                                    <option value="Nguyễn Thái Dương">Nguyễn Thái Dương</option>
                                    <option value="Nguyễn Ngọc Thu Trang">Nguyễn Ngọc Thu Trang</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mô tả sản phẩm
                                </label>
                                <textarea
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    rows={3}
                                    placeholder="Mô tả chi tiết về sản phẩm..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={busy}
                                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-60"
                            >
                                {busy ? 'Đang tạo...' : 'Tạo sản phẩm & QR Code'}
                            </button>
                        </form>
                    </div>

                    {/* Hiển thị QR Code */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">QR Code sản phẩm</h2>

                        {showQR && selectedProduct ? (
                            <div className="text-center">
                                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                    <QRCode
                                        value={generateQRData(selectedProduct)}
                                        size={200}
                                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                                    />
                                </div>

                                <div className="text-left space-y-2 mb-4">
                                    <p><strong>ID:</strong> {selectedProduct.id}</p>
                                    <p><strong>Tên:</strong> {selectedProduct.name}</p>
                                    <p><strong>Loại:</strong> {selectedProduct.type}</p>
                                    <p><strong>Ngày sản xuất:</strong> {selectedProduct.productionDate}</p>
                                    <p><strong>Số lô:</strong> {selectedProduct.batchNumber}</p>
                                    <p><strong>Người sản xuất:</strong> {selectedProduct.producer}</p>
                                    {selectedProduct.lookupUrl && (
                                        <p className="truncate">
                                            <strong>Tra cứu:</strong>{' '}
                                            <a
                                                className="text-blue-600 underline"
                                                href={selectedProduct.lookupUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {selectedProduct.lookupUrl}
                                            </a>
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => downloadQR(selectedProduct)}
                                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Tải xuống QR Code
                                </button>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-8">
                                <p>Tạo sản phẩm để hiển thị QR Code</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Danh sách sản phẩm đã tạo */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-4">Sản phẩm đã tạo</h2>

                    {products.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tên sản phẩm
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Loại
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Ngày sản xuất
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Người sản xuất
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Hành động
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {product.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {product.type}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {product.productionDate}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {product.producer}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => {
                                                        setSelectedProduct(product);
                                                        setShowQR(true);
                                                    }}
                                                    className="text-green-600 hover:text-green-900 mr-3"
                                                >
                                                    Xem QR
                                                </button>
                                                <button
                                                    onClick={() => downloadQR(product)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    Tải QR
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-8">Chưa có sản phẩm nào được tạo</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QRAdmin;
