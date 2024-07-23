import productDekstop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <main className="bg-cream min-w-screen text-regular font-montserrat text-dark-grayish-blue flex min-h-screen items-center justify-center px-6 py-8">
      <div className="grid w-fit max-w-sm overflow-hidden rounded-lg bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={productMobile} />
            <img
              src={productDekstop}
              alt="Perfume bottle on top of a table surrounding by leafes"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.25rem]">Perfume</p>
          <h1 className="font-fraunces text-very-dark-blue mb-7 text-3xl">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-5 flex items-center gap-5">
            <span className="font-fraunces text-dark-cyan text-3xl">
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="bg-dark-cyan flex w-full justify-center gap-4 rounded-lg p-4 text-white">
            <img src={cart} alt="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
