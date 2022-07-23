{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

class ProductList  {
    products = [      
        {
            image: "image1.jpg",
            name: "fasfsdaf",
            desc: "fsafsadfasfsadf"
        },
        {
            image: "image2.jpg",
            name: "fasfsdaf1",
            desc: "fsafsadfasfsadf"
        },
        {
            image: "image1.jpg",
            name: "fasfsdaf2",
            desc: "fsafsadfasfsadf"
        },
        {
            image: "image2.jpg",
            name: "fasfsdaf3",
            desc: "fsafsadfasfsadf"
        },
    ]

    render() {
        const root = document.getElementById('root');

        for (const product of this.products) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = "18rem"

            const img = document.createElement('img');
            img.src = product.image
            img.className = 'card-img-top';

            const cardbody = document.createElement('div');
            cardbody.className = 'card-body';

            const h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.innerHTML = product.name

            const p = document.createElement('p');
            p.className = 'card-text';
            p.innerHTML = product.desc;
            
            cardbody.append(h5);
            cardbody.append(p);

            card.appendChild(img);
            card.append(cardbody);

            root.append(card)
        }
    }
}


let productList = new ProductList();
productList.render();