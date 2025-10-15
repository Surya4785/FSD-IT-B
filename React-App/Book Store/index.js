function Book(){
    const image=React.createElement("img",{
        src: "https://tse3.mm.bing.net/th/id/OIP.xYhT5xWHEnvkRkszvwdOPAHaJ7?pid=Api&P=0&h=220",
        width: "200px",
        height: "200px",
        alt: "Book Image"
    },null);
    const h3=React.createElement("h3",{},"Title: Physics");
    const h4=React.createElement("h4",{},"Price: $351/-");
    const btn=React.createElement("button",null,"Add to Cart");
    const child=React.createElement("div",{className:"card"},image,h3,h4,btn);
    return child;
}
// comment
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent).render(React.createElement(Book));
root.render(React.createElement(Book));