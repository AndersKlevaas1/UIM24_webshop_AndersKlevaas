console.log(products)

let productsHTML = "<h2>NINJAGO</h2>"

products.map(product => productsHTML += `<article>
<img src="course/LEGOdudes_webshop/website_images/PROD_${product.imagefile}" alt="${product.title}">
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr. ${product.price}</span>
<button>Legg til i handlevogn</button>
</article>`)

console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML