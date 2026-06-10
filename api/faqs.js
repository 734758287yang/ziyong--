import { products, faqs } from '../data.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productType } = req.query;
  
  if (!productType) {
    return res.json(faqs);
  }

  const filtered = faqs.filter(faq => 
    faq.productType.toLowerCase() === productType.toLowerCase()
  );
  
  res.json(filtered);
}
