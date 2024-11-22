const Footer = () => {
  const init = async () => {
    const { Input, Ripple, initTWE } = await import("tw-elements");
    initTWE({ Input, Ripple });
  };
  init();

  return (
    <footer className="footer">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
          <a
            target="_blank"
            href="https://www.facebook.com/Journal.Vuesdici"
            type="button"
            className="footerButton"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <span className="max-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>

          <a
            target="_blank"
            href=""
            type="button"
            className="footerButton"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
          </a>

          <a
            href="#!"
            type="button"
            className="footerButton"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>
        </div>

        <div>
          <form action="">
            <div className="grid-cols-1 grid items-center justify-items-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <p className="paragraph">Inscrivez-vous à notre newsletter !</p>
              </div>

              <div className="relative md:mb-6" data-twe-input-wrapper-init>
                <input
                  type="email"
                  className="peer block h-8 rounded border-0 bg-background text-black text-xs w-60 p-2"
                  id="exampleFormControlInputEmail"
                  placeholder="Adresse mail"
                />
                <label
                  htmlFor="exampleFormControlInputEmail"
                  className="pointer-events-none absolute left-3 text-xs top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-foreground transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >
                   </label>
              </div>

              <div className="mb-6 md:me-auto">
                <button
                  type="submit"
                  className="largeButton"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p className="paragraph">
            Un journal conçu par et pour les habitants des quartiers Jourdain,
            Belleville, Buttes-Chaumont, Place des Fêtes des XIXè et XXè
            arrondissements de Paris.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <a href="#!">Link 1</a>
          <a href="#!">Link 2</a>
          <a href="#!">Link 3</a>
          <a href="#!">Link 4</a>
        </div>
      </div>

      <div className="w-full p-4 text-center">
        © 2025 Copyright Vues d&apos;ici
      </div>
    </footer>
  );
};

export default Footer;
