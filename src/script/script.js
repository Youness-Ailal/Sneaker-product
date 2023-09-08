//Imports
import mainImage1 from "../images/image-product-1.jpg";
import mainImage2 from "../images/image-product-2.jpg";
import mainImage3 from "../images/image-product-3.jpg";
import mainImage4 from "../images/image-product-4.jpg";

/// App Variables
const navBorder = document.querySelector(".header__item--border");
const navItem1 = document.querySelectorAll(".header__link")[0];
const navItem2 = document.querySelectorAll(".header__link")[1];
const navItem3 = document.querySelectorAll(".header__link")[2];
const navItem4 = document.querySelectorAll(".header__link")[3];
const navItem5 = document.querySelectorAll(".header__link")[4];
const navList = document.querySelector(".header__list");
const cartIcon = document.querySelector(".header__cart-icon");
const cart = document.querySelector(".header__cart");
const mainImageProduct = document.querySelector(
  ".product__main-image--container"
);
const productMainImage = document.querySelector(".product__main-image");
const mainImageModel = document.querySelector(".images__main-image--container");
const modelImage = document.querySelector(".images__main-image");
const imagesModel = document.querySelector(".images");
const backgroundModel = document.querySelector(".images__model-background");
const modelImagesClose = document.querySelector(".images__icon--close");
const secondImagesModel = document.querySelector(".images__second-images");

const addToCartBtn = document.querySelector(".product__add-to-cart");
//Front Images
const secondImages = document.querySelectorAll(
  ".product__second-image--container"
);

//Modal Images
const seconImagesModel = document.querySelectorAll(".images__second-image");
const nextBtn = document.querySelector(".images__icon--next");
const prevBtn = document.querySelector(".images__icon--prev");

const qtContainer = document.querySelector(".product__quantity");
const qtyPrice = document.querySelector(".qtNumber");

//cart
const orderNumber = document.querySelector(".header__cart-order-number");
const cartQyNumber = document.querySelector(".cart__qty");

const cartEmpty = document.querySelector(".header__cart--empty ");
const cartFull = document.querySelector(".cart");
const cartTotal = document.querySelector(".cart__total");
const trashBtn = document.querySelector(".cart__trash");

//Nav variables
const openNavBtn = document.querySelector(".header__menu-btn");
const closeNavBtn = document.querySelector(".header__close-btn");
const navigation = document.querySelector(".header__navigation");

//Main images mobile
const nextBtnMob = document.querySelector(".product-img__icon--next");
const prevBtnMob = document.querySelector(".product-img__icon--prev");
//Functions
const moveBorder = function (distance) {
  navBorder.classList.remove("invisible");
  navBorder.style.left = distance;
};

//Handles Navigation
navItem1.addEventListener("mouseover", e => {
  moveBorder("2rem");
});
navItem2.addEventListener("mouseover", e => {
  moveBorder("12rem");
});
navItem3.addEventListener("mouseover", e => {
  moveBorder("20.5rem");
});
navItem4.addEventListener("mouseover", e => {
  moveBorder("30rem");
});
navItem5.addEventListener("mouseover", e => {
  moveBorder("39rem");
});

//Handlesr Cart
navList.addEventListener("mouseleave", () => {
  navBorder.classList.add("invisible");
});

document.addEventListener("click", e => {
  if (
    !cart.contains(e.target) &&
    e.target !== cartIcon &&
    !addToCartBtn.contains(e.target) &&
    !qtContainer.contains(e.target)
  ) {
    cart.classList.add("hidden");
  }
});

cartIcon.addEventListener("click", e => {
  e.stopPropagation();
  cart.classList.toggle("hidden");
});

//Handels Image Model
const showModal = function () {
  imagesModel.classList.remove("hidden-model-images");
  backgroundModel.classList.remove("hidden-model-background");
};
const hideModal = function () {
  imagesModel.classList.add("hidden-model-images");

  backgroundModel.classList.add("hidden-model-background");
};
mainImageProduct.addEventListener("click", () => {
  if (window.visualViewport.width <= 890) return;
  showModal();
});
modelImagesClose.addEventListener("click", () => hideModal());
backgroundModel.addEventListener("click", () => hideModal());

document.addEventListener("click", e => {
  if (
    imagesModel.contains(e.target) &&
    !mainImageModel.contains(e.target) &&
    !secondImagesModel.contains(e.target)
  ) {
    hideModal();
  }
});

//Handels Front Images (Not modal)
let src1;
secondImages.forEach((el, index) => {
  el.addEventListener("click", e => {
    secondImages.forEach(el => el.classList.remove("active-thumbnail"));
    el.classList.add("active-thumbnail");
    if (index + 1 === 1) {
      src1 = mainImage1;
    }
    if (index + 1 === 2) {
      src1 = mainImage2;
    }
    if (index + 1 === 3) {
      src1 = mainImage3;
    }
    if (index + 1 === 4) {
      src1 = mainImage4;
    }

    productMainImage.style.opacity = "0";

    setTimeout(() => {
      productMainImage.setAttribute("src", src1);
      productMainImage.style.opacity = "1";
    }, 150);
  });
});

//Handels model images

let imageId = 1;
seconImagesModel.forEach((el, index) => {
  el.addEventListener("click", () => {
    const ImageSrc = `mainImage${index + 1}`;
    modelImage.style.opacity = "0";
    seconImagesModel.forEach(e => e.classList.remove("active-thumbnail"));
    el.classList.add("active-thumbnail");
    imageId = index + 1;
    setTimeout(() => {
      modelImage.style.opacity = "1";
      modelImage.setAttribute("src", ImageSrc);
    }, 100);
  });
});

//Next button
let src2;
nextBtn.addEventListener("click", () => {
  if (imageId !== 4) {
    imageId++;
  } else if (imageId === 4) {
    imageId = 1;
  }
  if (imageId === 1) {
    src2 = mainImage1;
  }
  if (imageId === 2) {
    src2 = mainImage2;
  }
  if (imageId === 3) {
    src2 = mainImage3;
  }
  if (imageId === 4) {
    src2 = mainImage4;
  }

  modelImage.style.opacity = "0";
  seconImagesModel.forEach(e => e.classList.remove("active-thumbnail"));
  seconImagesModel[imageId - 1].classList.add("active-thumbnail");

  setTimeout(() => {
    modelImage.style.opacity = "1";
    modelImage.setAttribute("src", src2);
  }, 100);
});
//Prev Button
let src3;
prevBtn.addEventListener("click", () => {
  if (imageId !== 1) {
    imageId--;
  } else if (imageId === 1) {
    imageId = 4;
  }
  if (imageId === 1) {
    src2 = mainImage1;
  }
  if (imageId === 2) {
    src2 = mainImage2;
  }
  if (imageId === 3) {
    src2 = mainImage3;
  }
  if (imageId === 4) {
    src2 = mainImage4;
  }

  modelImage.style.opacity = "0";
  seconImagesModel.forEach(e => e.classList.remove("active-thumbnail"));
  seconImagesModel[imageId - 1].classList.add("active-thumbnail");

  setTimeout(() => {
    modelImage.style.opacity = "1";
    modelImage.setAttribute("src", src2);
  }, 100);
});

//handels quantity btn
let qt = 1;
qtContainer.addEventListener("click", e => {
  const qtyNumber = document.querySelector(".product__quantity--number");
  if (e.target.classList.contains("product__quantity--plus") && qt < 99) {
    qt++;
    qtyNumber.style.opacity = "0";

    setTimeout(() => {
      qtyNumber.textContent = qt;
      qtyNumber.style.opacity = "1";
    }, 100);
  }
  if (e.target.classList.contains("product__quantity--minest") && qt > 1) {
    qt--;
    qtyNumber.style.opacity = "0";

    setTimeout(() => {
      qtyNumber.textContent = qt;
      qtyNumber.style.opacity = "1";
    }, 100);
  }
});

//handel add to cart Button

addToCartBtn.addEventListener("click", () => {
  orderNumber.textContent = cartQyNumber.textContent = qt;
  cartTotal.textContent = `${(qt * 125).toFixed(2)}`;

  [orderNumber, cartEmpty, cartFull].forEach(el => {
    el.style.opacity = "0";
  });
  setTimeout(() => {
    [orderNumber, cartEmpty, cartFull].forEach(el => {
      el.style.opacity = "1";
    });
    orderNumber.classList.remove("undisplay");
    cartEmpty.classList.add("undisplay");
    cartFull.classList.remove("undisplay");
  }, 300);
});

//Trach button in cart
trashBtn.addEventListener("click", () => {
  [orderNumber, cartEmpty, cartFull].forEach(el => {
    el.style.opacity = "0";
  });
  setTimeout(() => {
    [orderNumber, cartEmpty, cartFull].forEach(el => {
      el.style.opacity = "1";
    });
    orderNumber.classList.add("undisplay");
    cartEmpty.classList.remove("undisplay");
    cartFull.classList.add("undisplay");
  }, 300);
});

openNavBtn.addEventListener("click", () => {
  navigation.classList.remove("hiddenNav");
  backgroundModel.classList.remove("hidden-model-background");
});
closeNavBtn.addEventListener("click", () => {
  navigation.classList.add("hiddenNav");
  backgroundModel.classList.add("hidden-model-background");
});

document.addEventListener("click", e => {
  if (
    (!navigation.contains(e.target) &&
      !openNavBtn.contains(e.target) &&
      !navigation.classList.contains("hiddenNav")) ||
    e.target.closest("li")?.contains(e.target)
  ) {
    navigation.classList.add("hiddenNav");
    backgroundModel.classList.add("hidden-model-background");
  }
});

//handels nex prev in mobile images

let mobIndex = 1;
nextBtnMob.addEventListener("click", () => {
  mobIndex++;
  const src = `mainImage${mobIndex}`;
  productMainImage.style.opacity = "0";
  setTimeout(() => {
    productMainImage.style.opacity = "1";
    productMainImage.setAttribute("src", src);
  }, 100);
  if (mobIndex === 4) {
    mobIndex = 0;
  }
});

//prev btn
let src;
prevBtnMob.addEventListener("click", () => {
  mobIndex--;
  if (mobIndex <= 1) {
    mobIndex = 4;
  }
  if (mobIndex === 1) {
    src = mainImage1;
  }
  if (mobIndex === 2) {
    src = mainImage2;
  }
  if (mobIndex === 3) {
    src = mainImage3;
  }
  if (mobIndex === 4) {
    src = mainImage4;
  }

  productMainImage.style.opacity = "0";
  setTimeout(() => {
    productMainImage.style.opacity = "1";
    productMainImage.setAttribute("src", src);
  }, 100);
});
