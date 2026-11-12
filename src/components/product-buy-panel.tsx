'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { money } from '@/lib/products';
type Product = { id:string; name:string; category:string; price:number; image:string };
export function ProductBuyPanel({product}:{product:Product}) {
  const [flavour,setFlavour]=useState('Vanilla bean');
  const [customisation,setCustomisation]=useState('');
  const [added,setAdded]=useState(false);
  const {addItem}=useCart();
  return <div className="buy-panel">
    <label>Choose a flavour<select value={flavour} onChange={e=>setFlavour(e.target.value)}><option>Vanilla bean</option><option>Chocolate</option><option>Red velvet</option><option>Seasonal</option></select></label>
    <label>Custom details<textarea value={customisation} onChange={e=>setCustomisation(e.target.value)} placeholder="Tell us about your occasion, message or little details…"/></label>
    <button className="btn add-button" type="button" onClick={()=>{addItem({productId:product.id,name:product.name,category:product.category,image:product.image,unitPrice:product.price,flavour,customisation});setAdded(true)}}><ShoppingBag size={16}/>{added?'Added to basket':`Add to basket — ${money(product.price)}`}</button>
    {added&&<div className="added"><span>Lovely choice — it’s in your basket.</span><Link href="/cart">View basket ↗</Link></div>}
    <style>{`.buy-panel label{display:block;font-size:10px;letter-spacing:.1em;text-transform:uppercase;margin:17px 0}.buy-panel select,.buy-panel textarea{display:block;width:100%;margin-top:9px;padding:12px;background:#fffdf9;border:1px solid #e3d9cc;color:#38251e;font:13px 'DM Sans'}.buy-panel textarea{height:88px;resize:vertical}.add-button{width:100%;cursor:pointer}.added{display:flex;justify-content:space-between;gap:10px;margin-top:12px;font-size:11px;color:#76675c}.added a{color:#9c7047;border-bottom:1px solid #b38a55;padding-bottom:3px}`}</style>
  </div>;
}
