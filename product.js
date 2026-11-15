
var products = [
    {
        name: "Shirt",
        image: "shirt1.jpg",
        price: 500,
        category: "Casual Wear"
    },
    {
        name: "Shirt",
        image: "shirt2.jpg",
        price: 800,
        category: "Casual Wear"
    },
    {
        name: "Crop top",
        image: "croptop1.jpg",
        price: 200,
        category: "Crop Tops"
    },
    {
        name: "black Crop top",
        image: "croptop2.jpg",
        price: 700,
        category: "Crop Tops"
    },
    {
        name: "Crop top",
        image: "street.jpg",
        price: 500,
        category: "Casual Wear"
    },
    {
        name: "Yellow kurti",
        image: "kurti2.jpg",
        price: 500,
        category: "Kurti"
    },
    {
        name: "Kurti Set",
        image: "kurti1.jpg",
        price: 500,
        category: "Kurti"
    },
    {
        name: "Kurti",
        image: "kurti3.jpg",
        price: 500,
        category: "Kurti"
    }
];


// Display products

var container = document.querySelector(".Products");

products.forEach(function(item) {

    container.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" width="150">
            <h2>${item.name}</h2>
            <p>₹${item.price}</p>
            <p class="category" style="display:none">
                ${item.category}
            </p>
        </div>
    `;

});


// Filter products

var filterList = [];

var check = document.getElementsByName("check");

check.forEach(function(tag) {

    tag.addEventListener("change", function(e) {

        if(e.target.checked) {

            filterList.push(e.target.value);

        }

        else {

            filterList = filterList.filter(function(item) {
                return item !== e.target.value;
            });

        }

        update();

    });

});


// Update function

function update() {

    var productList = document.querySelectorAll(".product");

    for(var i = 0; i < productList.length; i++) {

        var product = productList[i];

        var category = product.querySelector(".category").innerHTML.trim();

        var check = filterList.includes(category);

        if(!check && filterList.length > 0) {

            product.style.display = "none";

        }

        else {

            product.style.display = "block";

        }

    }

}


var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {

  sidenav.style.right = 0
})


closenav.addEventListener("click", function () {

  sidenav.style.right = "-50%"
})
