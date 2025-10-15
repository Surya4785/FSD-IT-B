function Book(props){
 const image=React.createElement("img",
    {
        src: props.image,
        width: 150,
        height: 150,
        alt: "Book Image"
    }
 );
 const h4=React.createElement("h4",null,"Price:"+props.price+"/-");
 const child=React.createElement("div",{className: "card"},image,h4);
 return (child);
}
const books=[{
    image: "https://tse3.mm.bing.net/th/id/OIP.nPxp5pTEGr50Lm_wUIF2GwHaEK?pid=Api&P=0&h=220",
    price: 235
},{
    image: "https://tse2.mm.bing.net/th/id/OIP.XdcrYecW6uCLwJOOe5048QHaED?pid=Api&P=0&h=220",
    price: 245
},{
    image: "https://tse3.mm.bing.net/th/id/OIP.ERLgTAXi1-EqL6h6dZLh0gHaEK?pid=Api&P=0&h=220",
    price: 335
}];
const bookele=books.map(p=>(
  React.createElement(Book,{image: p.image,price: p.price})  
))
const book=React.createElement("div",{className:"book-list"},bookele)
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);

root.render(book);