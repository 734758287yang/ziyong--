import { useState, useEffect } from 'react'

const productTypeLabels = {
  '服务器': 'server',
  '台式机': 'desktop',
  '笔记本': 'laptop'
}

function App() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)
  const [faqs, setFaqs] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!searchKeyword.trim()) return
    
    setLoading(true)
    try {
      const res = await fetch(`/api/search?keyword=${encodeURIComponent(searchKeyword)}`)
      const data = await res.json()
      setSearchResults(data.results)
      setHasSearched(true)
      setSelectedProduct(null)
    } catch (err) {
      console.error('Search failed:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  const handleProductClick = async (product) => {
    try {
      const res = await fetch(`/api/product/${product.id}`)
      const data = await res.json()
      setSelectedProduct(data)
      setFaqs(data.relatedFaqs || [])
    } catch (err) {
      console.error('Failed to load product detail:', err)
    }
  }

  const handleBackToResults = () => {
    setSelectedProduct(null)
  }

  const getTypeLabel = (type) => productTypeLabels[type] || 'default'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">浪潮云洲</h1>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              您可以在下框中通过主机序列号、产品型号、部件型号，获得与产品相关的所有下载信息
            </p>
          </div>
          <div className="flex justify-center gap-2 max-w-xl mx-auto">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="请输入主机序列号/产品型号/部件型号"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              disabled={loading || !searchKeyword.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? '查询中...' : '查询'}
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-6">
            {selectedProduct ? (
              // Product Detail View
              <div>
                <button
                  onClick={handleBackToResults}
                  className="mb-4 text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  ← 返回查询结果
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.productName}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{selectedProduct.productName}</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">产品型号</span>
                        <span className="font-medium">{selectedProduct.productModel}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">产品类型</span>
                        <span className="font-medium">{selectedProduct.productType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">产品系列</span>
                        <span className="font-medium">{selectedProduct.productSeries}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-500">主机序列号</span>
                        <span className="font-medium">{selectedProduct.serialNumber}</span>
                      </div>
                      <div className="py-2">
                        <span className="text-gray-500">产品描述</span>
                        <p className="mt-1 text-gray-700">{selectedProduct.description}</p>
                      </div>
                    </div>
                    {selectedProduct.specs && (
                      <div className="mt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">产品规格</h3>
                        <div className="space-y-2">
                          {Object.entries(selectedProduct.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                              <span className="text-gray-500 uppercase text-sm">{key}</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Related FAQs */}
                {faqs.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">该产品的常见问题</h3>
                    <div className="space-y-4">
                      {faqs.map((faq) => (
                        <div key={faq.id} className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{faq.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{faq.question}</p>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Search Results List
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">查询结果</h2>
                {searchResults.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>未找到匹配的产品信息</p>
                    <p className="text-sm mt-1">请检查输入内容后重试</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-sm font-semibold text-gray-600">产品型号</th>
                          <th className="px-4 py-3 text-sm font-semibold text-gray-600">产品类型</th>
                          <th className="px-4 py-3 text-sm font-semibold text-gray-600">产品系列</th>
                          <th className="px-4 py-3 text-sm font-semibold text-gray-600">驱动/软件名称</th>
                          <th className="px-4 py-3 text-sm font-semibold text-gray-600">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.map((product) => (
                          <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-3">{product.productModel}</td>
                            <td className="px-4 py-3">{product.productType}</td>
                            <td className="px-4 py-3">{product.productSeries}</td>
                            <td className="px-4 py-3">{product.partModel}</td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => handleProductClick(product)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                详情
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Categories Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { type: '笔记本', icon: '💻', description: '笔记本电脑相关问题和解决方案' },
            { type: '台式机', icon: '🖥️', description: '台式机工作站相关问题和解决方案' },
            { type: '服务器', icon: '', description: '服务器产品相关问题和解决方案' }
          ].map((item) => (
            <div
              key={item.type}
              className="group cursor-pointer"
              onClick={() => {
                setSearchKeyword(item.type)
                handleSearch()
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <span className="text-lg font-semibold">{item.type}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2026 浪潮云洲 版权所有</p>
        </div>
      </footer>
    </div>
  )
}

export default App
