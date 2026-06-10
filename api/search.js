const { products, faqs } = require('../data');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { keyword } = req.query;
  
  if (!keyword || !keyword.trim()) {
    return res.json({ results: [], total: 0 });
  }

  const searchKeyword = keyword.trim().toLowerCase();
  
  const results = products.filter(product => 
    product.serialNumber?.toLowerCase().includes(searchKeyword) ||
    product.productModel?.toLowerCase().includes(searchKeyword) ||
    product.partModel?.toLowerCase().includes(searchKeyword) ||
    product.productType?.toLowerCase().includes(searchKeyword) ||
    product.productSeries?.toLowerCase().includes(searchKeyword)
  );

  res.json({ results, total: results.length });
}
