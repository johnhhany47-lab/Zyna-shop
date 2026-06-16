// =========================================
// ZYNA — Products Database
// =========================================

const PRODUCTS = [
  // WOMEN
  {
    id: 0, cat: 'women', name: 'Floral Wrap Dress',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
    price: 299, oldPrice: 750, disc: '-60%',
    rating: '4.8 (2.4k)', sizes: ['XS','S','M','L','XL'],
    colors: ['#ff9a9e','#a1c4fd','#ffeaa7'],
    details: 'Lightweight floral wrap dress. 100% viscose. Machine washable. True to size.'
  },
  {
    id: 1, cat: 'women', name: 'Satin Slip Dress',
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
    price: 389, oldPrice: 899, disc: '-57%',
    rating: '4.9 (5.7k)', sizes: ['XS','S','M','L'],
    colors: ['#2d3436','#fd79a8','#6c5ce7','#fdcb6e'],
    details: 'Premium satin slip dress with adjustable straps. Elegant and versatile.'
  },
  {
    id: 2, cat: 'women', name: 'Linen Crop Top',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    price: 159, oldPrice: 280, disc: '-43%',
    rating: '4.7 (876)', sizes: ['S','M','L','XL'],
    colors: ['#55efc4','#ffeaa7','#fd79a8'],
    details: 'Breathable linen crop top. Perfect for summer. Relaxed fit.'
  },
  {
    id: 3, cat: 'women', name: 'Mini Pleated Skirt',
    img: 'https://images.unsplash.com/photo-1583496661160-fb5218afa740?w=600&q=80',
    price: 179, oldPrice: 599, disc: '-70%',
    rating: '4.9 (4.1k)', sizes: ['XS','S','M','L','XL'],
    colors: ['#2d3436','#fd79a8','#a29bfe','#fdcb6e'],
    details: 'Trendy mini pleated skirt. High waist. Great for casual and evening looks.'
  },
  // TRENDS WOMEN
  {
    id: 4, cat: 'women', name: 'Yellow Puff Sleeve Dress',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    price: 320, oldPrice: 650, disc: '-51%',
    rating: '4.8 (3.2k)', sizes: ['XS','S','M','L'],
    colors: ['#ffd600','#ff8fab','#fff'],
    details: 'Romantic puff sleeve dress. Statement style for every occasion.'
  },
  {
    id: 5, cat: 'women', name: 'White Maxi Dress',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    price: 450, oldPrice: 900, disc: '-50%',
    rating: '4.7 (2.8k)', sizes: ['XS','S','M','L','XL'],
    colors: ['#fff','#eeeeee'],
    details: 'Flowy white maxi dress. Perfect for beach and evening events.'
  },
  // MEN
  {
    id: 6, cat: 'men', name: 'Oversized Street Tee',
    img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
    price: 199, oldPrice: 360, disc: '-45%',
    rating: '4.6 (1.1k)', sizes: ['S','M','L','XL','XXL'],
    colors: ['#2d3436','#fff','#74b9ff','#636e72'],
    details: 'Premium cotton oversized tee. Relaxed streetwear fit. Unisex.'
  },
  {
    id: 7, cat: 'men', name: 'Slim Fit Hoodie',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
    price: 449, oldPrice: 749, disc: '-40%',
    rating: '4.7 (2.9k)', sizes: ['S','M','L','XL','XXL'],
    colors: ['#636e72','#2d3436','#74b9ff'],
    details: 'Slim fit fleece hoodie. Kangaroo pocket. Ribbed cuffs and hem.'
  },
  {
    id: 8, cat: 'men', name: 'Cargo Joggers',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
    price: 350, oldPrice: 599, disc: '-42%',
    rating: '4.5 (890)', sizes: ['S','M','L','XL','XXL'],
    colors: ['#2d3436','#636e72','#8d6e63'],
    details: 'Multi-pocket cargo joggers. Elastic waist with drawstring. Tapered fit.'
  },
  {
    id: 9, cat: 'men', name: 'Linen Shirt',
    img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80',
    price: 280, oldPrice: 450, disc: '-38%',
    rating: '4.8 (1.5k)', sizes: ['S','M','L','XL'],
    colors: ['#fff','#f5f0e8','#74b9ff','#2d3436'],
    details: 'Breathable linen shirt. Button-down collar. Relaxed summer fit.'
  },
  // SHOES
  {
    id: 10, cat: 'shoes', name: 'Mary Jane Flats',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    price: 420, oldPrice: 750, disc: '-44%',
    rating: '4.6 (2.1k)', sizes: ['36','37','38','39','40','41'],
    colors: ['#2d3436','#c8a96e','#fff'],
    details: 'Classic Mary Jane flats. Cushioned insole. Leather upper.'
  },
  // ACCESSORIES
  {
    id: 11, cat: 'accessories', name: 'Mini Shoulder Bag',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    price: 349, oldPrice: 780, disc: '-55%',
    rating: '4.9 (3.2k)', sizes: ['One Size'],
    colors: ['#2d3436','#c8a96e','#e17055'],
    details: 'Compact shoulder bag with chain strap. Faux leather. Multiple pockets.'
  },
  // BEAUTY
  {
    id: 12, cat: 'beauty', name: 'Rare Beauty Lip Gloss',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    price: 800, oldPrice: null, disc: null,
    rating: '4.9 (8.1k)', sizes: ['One Size'],
    colors: ['#ff6b9d','#e17055','#fdcb6e'],
    details: 'Non-sticky lip gloss with plumping effect. Long-lasting. 8 shades.'
  },
  {
    id: 13, cat: 'beauty', name: 'MAC Foundation',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    price: 650, oldPrice: null, disc: null,
    rating: '4.8 (5.4k)', sizes: ['30ml'],
    colors: ['#f5e6d3','#e8c9a0','#c4956a','#8d6e63'],
    details: 'Full coverage foundation. SPF 15. 40 shades. 24hr wear.'
  },
  // KIDS
  {
    id: 14, cat: 'kids', name: 'Kids Cartoon Tee',
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80',
    price: 129, oldPrice: 220, disc: '-41%',
    rating: '4.7 (1.4k)', sizes: ['2Y','4Y','6Y','8Y','10Y','12Y'],
    colors: ['#ff7675','#74b9ff','#55efc4','#ffeaa7'],
    details: 'Soft cotton kids tee with fun cartoon print. Easy care fabric.'
  },
  {
    id: 15, cat: 'kids', name: 'Kids Denim Set',
    img: 'https://images.unsplash.com/photo-1471286174890-9c112ac6476c?w=600&q=80',
    price: 299, oldPrice: 499, disc: '-40%',
    rating: '4.6 (980)', sizes: ['2Y','4Y','6Y','8Y','10Y'],
    colors: ['#74b9ff','#2d3436'],
    details: 'Matching denim jacket and pants set. Comfortable stretch denim.'
  },
  // CURVE
  {
    id: 16, cat: 'curve', name: 'Plus Size Wrap Dress',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4a5a?w=600&q=80',
    price: 349, oldPrice: 699, disc: '-50%',
    rating: '4.8 (2.3k)', sizes: ['1X','2X','3X','4X','5X'],
    colors: ['#ff9a9e','#a1c4fd','#2d3436'],
    details: 'Flattering wrap dress for curves. Adjustable waist tie. Midi length.'
  },
  {
    id: 17, cat: 'curve', name: 'Plus Size Wide Leg Pants',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    price: 280, oldPrice: 520, disc: '-46%',
    rating: '4.7 (1.8k)', sizes: ['1X','2X','3X','4X'],
    colors: ['#2d3436','#636e72','#8d6e63'],
    details: 'High waist wide leg trousers. Elastic waistband. Flowy fabric.'
  },
  // MORE SHOES
  {
    id: 18, cat: 'shoes', name: 'White Sneakers',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    price: 550, oldPrice: 850, disc: '-35%',
    rating: '4.8 (4.2k)', sizes: ['36','37','38','39','40','41','42','43'],
    colors: ['#fff','#2d3436','#74b9ff'],
    details: 'Clean white leather sneakers. Cushioned sole. Everyday essential.'
  },
  // MORE ACCESSORIES
  {
    id: 19, cat: 'accessories', name: 'Straw Sun Hat',
    img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80',
    price: 249, oldPrice: 499, disc: '-50%',
    rating: '4.6 (987)', sizes: ['One Size'],
    colors: ['#deb887','#2d3436'],
    details: 'Wide brim straw hat. Adjustable inner band. UV protection.'
  },
];
      
