import React from 'react';
import './App.css'; // Import global styles
import ProductCard from './Components/ProductCard';

function App() {
return (
<div className='appbg'>
<ProductCard prodtitle='Wireless headphones' description='Noise-cancelling, over-ear headphones' price={1999.99} imgurl='https://m.media-amazon.com/images/I/41jJycNOSmL._SL500_.jpg' />
</div>
);
}
export default App;