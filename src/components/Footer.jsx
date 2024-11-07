const Footer = () => {
  return (
    <div className="bg-white w-10/12 mt-32 mx-auto">
      <div className="flex flex-col justify-center items-center my-10 space-y-2">
        <h1 className="font-bold font-soora text-3xl">Gadget Heaven</h1>
        <p className="font-soora text-gray-500 text-sm text-center">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>

      <hr className="my-6" />

      <footer className="flex flex-col items-center md:flex-row justify-between footer  text-gray-500 font-soora content p-10">
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover font-soora">Prdouct Support</a>
          <a className="link link-hover font-soora">Order Tracking</a>
          <a className="link link-hover font-soora">Shipping & Delivery</a>
          <a className="link link-hover font-soora">Returns</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover font-soora">About us</a>
          <a className="link link-hover font-soora">Careers</a>
          <a className="link link-hover font-soora">Contact</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover font-soora">Terms of use</a>
          <a className="link link-hover font-soora">Privacy policy</a>
          <a className="link link-hover font-soora">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
