import Head from 'next/head'
import PotreeComponent from '../components/potreeLogics'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="./potree-build/potree/potree.css" />
        <link rel="stylesheet" type="text/css" href="./libs/jquery-ui/jquery-ui.min.css"/>
        <link rel="stylesheet" type="text/css" href="./libs/openlayers3/ol.css"/>
        <link rel="stylesheet" type="text/css" href="./libs/spectrum/spectrum.css" />
        <link rel="stylesheet" type="text/css" href="./libs/jstree/themes/mixed/style.css" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://spybee-2-0-front.vercel.app/">Spybee</a>
        </h1>
        <div style={{
          position: 'relative',
          height: '50rem',
          width: '100%'
        }}>
          <div className="potree_container" style={{
              position: "absolute", width: "100%", height: "100%", left: "0px", top: "0px"
            }}>
            <div id="potree_render_area" style={{
              backgroundImage: "url('./potree-build/potree/resources/images/background.jpg')"
            }}>
            </div>
            <div id="potree_sidebar_container"> </div>
          </div>
        </div>


      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <script src="./libs/jquery/jquery-3.1.1.min.js"></script>
      <script src="./libs/spectrum/spectrum.js"></script>
      <script src="./libs/jquery-ui/jquery-ui.min.js"></script>

      <script src="./libs/other/BinaryHeap.js"></script>
      <script src="./libs/tween/tween.min.js"></script>
      <script src="./libs/d3/d3.js"></script>
      <script src="./libs/proj4/proj4.js"></script>
      <script src="./libs/openlayers3/ol.js"></script>
      <script src="./libs/i18next/i18next.js"></script>
      <script src="./libs/jstree/jstree.js"></script>
      <script src="./potree-build/potree/potree.js"></script>
      <script src="./libs/plasio/js/laslaz.js"></script>

      <div suppressHydrationWarning={true}>
        { process.browser && <PotreeComponent /> }
      </div>
    </div>
  )
}
