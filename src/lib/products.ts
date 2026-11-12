export const products=[
{id:'rose-cake',name:'The Rose Garden',category:'Custom cakes',price:6500,tag:'CUSTOM FAVOURITE',image:'photo-1578985545062-69928b1d9587',description:'Vanilla bean sponge, whipped buttercream and a garden of hand-piped roses.'},
{id:'strawberry-cupcakes',name:'Strawberry Cloud',category:'Cupcakes',price:1800,tag:'A LITTLE JOY',image:'photo-1486427944299-d1955d23e34d',description:'Soft vanilla cupcakes crowned with strawberry buttercream.'},
{id:'chocolate-pops',name:'Midnight Cake Pops',category:'Cake pops',price:1200,tag:'PARTY READY',image:'photo-1576618148400-f54bed99fcfd',description:'Chocolate cake truffles dipped in a delicate chocolate shell.'},
{id:'berry-sundae',name:'Berry & Cream Sundae',category:'Sundaes',price:950,tag:'SPOONFUL OF JOY',image:'photo-1563805042-7684c019e1cb',description:'A layered dessert with seasonal berries, cream and buttery crumbs.'}];
export const photo=(id:string,w=800)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const money=(n:number)=>`PKR ${n.toLocaleString('en-PK')}`;
