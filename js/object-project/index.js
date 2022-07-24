{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

class ProductList {
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

            let prodEl = new Product(product);

            const card = prodEl.render();

            root.append(card)
        }
    }
}

class Product {
    constructor(product) {
        this.product = product;
    }

    clickMe =  () => {
        console.log('click Me');
        console.log(this.product);
    }

    render() {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = "18rem"

        const img = document.createElement('img');
        img.src = this.product.image
        img.className = 'card-img-top';

        const cardbody = document.createElement('div');
        cardbody.className = 'card-body';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.innerHTML = this.product.name

        const p = document.createElement('p');
        p.className = 'card-text';
        p.innerHTML = this.product.desc;

        const button = document.createElement('button');
        button.id = `button-${this.product.name}`
        button.className = "btn btn-primary"
        button.innerHTML = "Click Me!"

        cardbody.append(h5);
        cardbody.append(p);
        cardbody.append(button);
        
        card.appendChild(img);
        card.append(cardbody);

        addEventListener("click", this.clickMe)

        // root.append(card)

        return card
    }
}

let productList = new ProductList();
productList.render();