import express from 'express';
import { products, faqs } from './data.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// API: Search products by serial number, product model, or part model
app.get('/api/search', (req, res) => {
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
});

// API: Get FAQs by product type
app.get('/api/faqs', (req, res) => {
  const { productType } = req.query;
  
  if (!productType) {
    return res.json(faqs);
  }

  const filtered = faqs.filter(faq => 
    faq.productType.toLowerCase() === productType.toLowerCase()
  );
  
  res.json(filtered);
});

// API: Get product detail by ID
app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Get related FAQs for this product type
  const relatedFaqs = faqs.filter(f => f.productType === product.productType);
  
  res.json({
    ...product,
    relatedFaqs
  });
});

// Serve static files and frontend
app.use(express.static(__dirname));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log(`Access from LAN: http://172.20.10.2:${PORT}`);
});
