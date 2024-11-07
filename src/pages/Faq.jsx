import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faq | Gadget-Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={` bg-purple-500 py-12 space-y-2 `}>
        <h1 className="md:text-5xl text-white font-soora font-bold text-center">
          FAQ's Section
        </h1>
        <p className="text-xs md:text-sm font-soora text-white/80 text-center px-1 ">
          Check your selected products and wishlist from here. From smart
          devices to <br />
          the coolest accessories, we have it all!
        </p>
      </div>

      <div className="my-10 w-10/12 mx-auto space-y-6">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-soora text-xl font-medium font-soora">
            How long does shipping take?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              Shipping times vary depending on your location and the shipping
              method you choose. You can find estimated shipping times at
              checkout.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium font-soora font-soora">
            What are your shipping costs?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              Shipping costs vary depending on your location and the weight of
              your order. You can calculate shipping costs at checkout.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 font-soora">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium font-soora">
            Do you ship internationally?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              Yes, we ship internationally to many countries. Please check our
              shipping rates and policies for more information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 font-soora">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-soora font-medium">
            What happens if my order is lost or damaged?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              If your order is lost or damaged, please contact our customer
              support team immediately. We will do our best to resolve the issue
              as quickly as possible.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 font-soora">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-soora font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              We offer a 7-day return policy. You can return most items for a
              full refund within 3 days of purchase.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 font-soora">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-soora font-medium">
            How do I return an item?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              To return an item, please contact our customer support team to
              obtain a return authorization number. You will then need to ship
              the item back to us at your own expense.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 font-soora">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-soora font-medium">
            Is it safe to shop on your website?
          </div>
          <div className="collapse-content">
            <p className="font-soora">
              Yes, our website uses SSL encryption to protect your personal and
              financial information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
