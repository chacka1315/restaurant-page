import img from './assets/bkg.jpg';
function home() {
    const content = document.querySelector(".content");
    const divPesent = document.createElement("div");
    divPesent.classList.add("divPresent");
    const divTitle = document.createElement("div");
    
    const sideImg = document.createElement("img");
    sideImg.src = img;
    sideImg.alt = "frises with some coca";

    divTitle.innerHTML =  "<h1>Welcome to O'clock</h1><h1>Great Restaurant</h1>";

    const orderPBtn = document.createElement("button");
    orderPBtn.textContent = "Order Pickup";

    const orderDBtn = document.createElement("button");
    orderDBtn.textContent = "Order Delivery";

    const promo = document.createElement("div");
    promo.classList.add("promo")
    promo.innerHTML = `<h2>Deals & Promotions</h2>
                    <div>
                        <div>
                            <h3>Get a FREE sub w/$50 in gift cards</h3>
                            <p>Get a FREE Footlong for every $50
                                of gift cards purchased. It pairs
                                perfectly with a Happy Gilmore
                                movie night!
                            </p>
                        </div>
                        <div>
                            <h3>Get a FREE sub w/$50 in gift cards</h3>
                            <p>Get a FREE Footlong for every $50
                                of gift cards purchased. It pairs
                                perfectly with a Happy Gilmore
                                movie night!
                            </p>
                        </div>
                        <div>
                            <h3>Get a FREE sub w/$50 in gift cards</h3>
                            <p>Get a FREE Footlong for every $50
                                of gift cards purchased. It pairs
                                perfectly with a Happy Gilmore
                                movie night!
                            </p>
                        </div>
                    </div>`;
    
    
    divTitle.appendChild(orderDBtn);
    divTitle.appendChild(orderPBtn);
    divPesent.appendChild(sideImg);
    divPesent.appendChild(divTitle);
    divPesent.appendChild(sideImg);
    content.appendChild(divPesent);
    content.appendChild(promo);

}


export default home;