import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

function App({ Component: PageComponent, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${nunitoSans.style.fontFamily};
          background: #e4e2e0;
          color: #2e2c2a;
          letter-spacing: 0.02em;
          line-height: 1.5;
        }

        a {
          text-decoration: underline;
          display: inline-flex;
          min-height: 44px;
          min-width: 44px;
          align-items: center;
          justify-content: center;
          text-decoration-thickness: 0.09em !important;
          color: #1e6bb8;
          text-underline-offset: 0.2em;
        }
        a:hover,
        a:focus {
          color: #398bdc;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            background: #1b1b1a;
            color: #d6d5d3;
          }

          a {
            color: #5ca0e4;
          }
          a:hover,
          a:focus {
            color: #9ec3e7;
          }
        }
      `}</style>

      <PageComponent {...{ ...pageProps }} />
    </>
  );
}

export default App;
