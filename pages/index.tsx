import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stefano Perfili - Senior Software Engineer - Melbourne, Australia</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <style jsx>{`
        :global(:root) {
          font-size: max(14px, min(24px, calc(25% + 2.5vh), calc(40% + 3vw)));
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          min-height: stretch;
        }

        :global(body) {
          text-align: center;
          font-size: 1rem;
          color: inherit;
          flex-grow: 1;
        }

        h1 {
          font-size: 1.25rem;
        }

        main {
          width: min(90%, 80rem);
          margin: auto;
          padding: 0.5em;
        }

        .photo {
          width: min(14rem, 100%, 800px);
          position: relative;
          margin: 1em auto;
        }
        .photo::before {
          content: "";
          display: block;
          padding-top: 100%;
        }
        .photo :global(img) {
          background: #2e2c2a;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: #0003 0 1rem 5rem;
        }

        p,
        ul {
          margin: 1em 0;
        }

        ul {
          list-style: none;
          padding: 0;
          gap: 1.25em;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>

      <main id="content" role="main">
        <div className="photo">
          <Image src="/sp.jpg" alt="Stefano Perfili" fill sizes="14rem" priority />
        </div>

        <h1>Stefano Perfili</h1>

        <p>
          Senior Software Engineer
          <br />
          Melbourne, Australia
        </p>

        <ul>
          <li>
            <a href="https://linkedin.com/in/stefanoperfili">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/stef7">GitHub</a>
          </li>
        </ul>
      </main>
    </>
  );
}
