import { toast } from "react-toastify";

const addToCart = (Product) => {
  const pro = getProduct();
  pro.push(Product);
  localStorage.setItem("CartItem", JSON.stringify(pro));

  toast.success("Product is added to cart", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const getProduct = () => {
  const pro = localStorage.getItem("CartItem");

  if (pro) {
    const product = JSON.parse(pro);
    return product;
  } else {
    return [];
  }
};

const addWishlist = (product) => {
  const wishlist = getWishlist();

  const filter = wishlist.find(
    (item) => item.product_id === product.product_id
  );
  if (filter) {
    return toast.error("Already in wishlist", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  wishlist.push(product);
  localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  toast.success("Product is added to wishlist", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // wishlist.push(product);
  // localStorage.setItem("CartItem", JSON.stringify(wishlist));
};

const getWishlist = () => {
  const wishlist = localStorage.getItem("Wishlist");

  if (wishlist) {
    const product = JSON.parse(wishlist);
    return product;
  } else {
    return [];
  }
};

const removeWish = (id) => {
  console.log(id);
  const wishlist = getWishlist();
  const filter = wishlist.filter((item) => item.product_id !== id);
  localStorage.setItem("Wishlist", JSON.stringify(filter));
  toast.warn(" Removed from wishlist", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const removecart = (id) => {
  const wishlist = getProduct();
  // const filter = wishlist.filter((item) => item.product_id !== id);
  // localStorage.setItem("CartItem", JSON.stringify(filter));
  // alert("removed");
  const indexToRemove = wishlist.findIndex((item) => item.product_id === id);

  if (indexToRemove !== -1) {
    wishlist.splice(indexToRemove, 1);
    localStorage.setItem("CartItem", JSON.stringify(wishlist));
    toast.warn("Product is removed from cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    alert("Product not found");
  }
};
export {
  addToCart,
  getProduct,
  addWishlist,
  getWishlist,
  removeWish,
  removecart,
};
