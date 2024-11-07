const addPrice = (price) => {
  const balance = getPrice();
  const newbalance = balance + price;

  localStorage.setItem("Price", JSON.stringify(newbalance));
};

const getPrice = () => {
  const currentbalance = localStorage.getItem("Price");
  if (currentbalance) {
    const balance = JSON.parse(currentbalance);
    return balance;
  } else {
    return 0;
  }
};

const removeprice = (price) => {
  const balance = getPrice();
  const newbalance = balance - price;
  localStorage.setItem("Price", JSON.stringify(newbalance));
};

const removecount = () => {
  const count = getcartItemCount();

  if (count > 0) {
    const counter = count - 1;
    localStorage.setItem("count", JSON.stringify(counter));
  }
};

const addcartItemCount = () => {
  const count = getcartItemCount();
  const counter = count + 1;
  localStorage.setItem("count", JSON.stringify(counter));
};

const getcartItemCount = () => {
  const count = localStorage.getItem("count");
  if (count) {
    const counter = JSON.parse(count);
    return counter;
  } else {
    return 0;
  }
};

const removelove = () => {
  const count = getloveItemCount();
  const counter = count - 1;
  localStorage.setItem("love", JSON.stringify(counter));
};

const addloveItemCount = () => {
  const count = getcartItemCount();
  const counter = count + 1;
  localStorage.setItem("love", JSON.stringify(counter));
};

const getloveItemCount = () => {
  const count = localStorage.getItem("love");
  if (count) {
    const counter = JSON.parse(count);
    return counter;
  } else {
    return 0;
  }
};

export {
  addloveItemCount,
  getloveItemCount,
  removelove,
  addPrice,
  getPrice,
  removeprice,
  addcartItemCount,
  getcartItemCount,
  removecount,
};
