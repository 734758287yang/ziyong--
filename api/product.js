const { products, faqs } = require('../data');

module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const product = products.find(p => p.id === parseInt(req.query.id));
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const relatedFaqs = faqs.filter(f => f.productType === product.productType);
  
  res.json({
    ...product,
    relatedFaqs
  });
}
