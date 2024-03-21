import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import bag from "../../assets/bag.svg";
import { Stripe, loadStripe } from "@stripe/stripe-js";

interface ItemIDsPrice {
  [itemId: string]: string;
}

interface ShoppingCart {
  [itemId: string]: number;
}

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  }
  return stripePromise;
};

const CartSummary = () => {
  const { plants, shoppingCart } = useContext(DataContext);

  const [promo, setPromo] = useState("");
  const [error, setError] = useState(false);

  const totalPrice = Object.entries(shoppingCart).reduce((acc, entry) => {
    const itemId = entry[0];
    const quantity = entry[1] as number;

    const item = plants.find((plant) => plant.id === itemId);

    const subtotal = item ? item.price * quantity : 0;

    return acc + subtotal;
  }, 0);

  const shoppingCartCopy: ShoppingCart = shoppingCart;

  const [stripeError, setStripeError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const itemIDsPrice: ItemIDsPrice = {
    "000001": "price_1OwhB502Z2sQOzes8RmqUtnp",
    "000002": "price_1OwhXa02Z2sQOzesSgSnNWDz",
    "000003": "price_1OwhYK02Z2sQOzesQ236N64i",
  };

  const shoppingAsArray = Object.keys(shoppingCart) as string[];

  const itemsArray = shoppingAsArray.map((item) => ({
    price: itemIDsPrice[item],
    quantity: shoppingCartCopy[item],
  }));

  console.log(itemsArray);

  const checkoutOptions = {
    lineItems: itemsArray,
    mode: "payment" as "payment" | "subscription" | undefined,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/order`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    if (stripe) {
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      console.log("Stripe checkout error", error);
    }
    if (error && typeof error === "object" && "message" in error)
      setStripeError((error as { message: string }).message);
    setLoading(false);
  };
  if (stripeError) alert(stripeError);

  return (
    <div className="cart__summary">
      <h3>Order Summary</h3>
      <div className="cart__summary__total">
        <p>
          TOTAL <span>&#40;excluding delivery&#41; </span>
        </p>
        <p>₱ {totalPrice}</p>
      </div>
      <div className="cart__promotion">
        <p>Apply a promotional code</p>
        <div className="cart__promotion__code">
          <input
            type="text"
            value={promo}
            onChange={(e) => {
              setPromo(e.target.value);
              setError(false);
            }}
            placeholder="Enter your code"
          />
          <button onClick={() => setError(true)}>APPLY CODE</button>
        </div>
        <p className={`invalid ${error ? "show" : "hide"}`}>
          The code you've entered is invalid. Please try again.
        </p>
      </div>
      <button
        className="cart__summary__checkout"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <img src={bag} alt="Shopping bag" />
        Checkout securely
      </button>
    </div>
  );
};

export default CartSummary;
