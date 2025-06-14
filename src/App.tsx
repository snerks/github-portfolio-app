import './App.css'
import { Header } from './Header'
import HeaderImage from './assets/mike-carter-53.jpg'

function App() {

  return (
    <>
      <Header />

      <div id="wrapper">
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one">
            <div className="image main" data-position="center">
              {/* <img src="images/beach-shoreline-coast-summer.jpg" alt="" /> */}
              <img src={HeaderImage} alt="Header Image" />
            </div>
            <div className="container">
              <header className="major">
                <h2>About snerks</h2>
                <p>Full-Stack software development specialist<br /></p>
              </header>
            </div>
          </section>

          {/* Two */}
          <section id="two">
            <div className="container">
              <h3>Things I Can Do</h3>

              {/* <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer in
                curae ac faucibus integer non. Adipiscing cubilia elementum
                integer lorem ipsum dolor sit amet.
              </p>  */}

              <ul className="feature-icons">
                <li className="icon solid fa-code">.NET Core</li>
                <li className="icon solid fa-code">C#</li>
                {/* <li className="icon solid fa-code">NodeJs</li> */}
                <li className="icon solid fa-bolt">React</li>
                <li className="icon solid fa-angle-up">Angular</li>
                <li className="icon solid fa-code">TypeScript</li>
                {/* <li className="icon solid fa-code">Blazor</li> */}
                <li className="icon solid fa-cloud-upload-alt">DevOps</li>
                <li className="icon solid fa-cloud-upload-alt">Docker</li>
                {/* <li className="icon solid fa-vial">Unit Testing</li> */}
                <li className="icon solid fa-code">Lambda Functions</li>
              </ul>
            </div>
          </section>

          {/* Three */}
          <section id="three">
            <div className="container">
              <h3>A Few Apps</h3>
              <div className="features">
                <article>
                  <a
                    href="https://snerks.github.io/mui-recommended-gigs-01/"
                    className="image"
                  ><img
                      // src="images/snerks.github.io_mui-recommended-gigs-01.png"
                      src={'/images/snerks.github.io_mui-recommended-gigs-01.png'}
                      alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Event Management System</h4>
                    <p>An entertainment event management system.</p>
                    <ul>
                      <li>React Hooks</li>
                      <li>React Router</li>
                      <li>Firebase</li>
                      <li>Formik 2</li>
                      <li>Yup</li>
                      <li>Material UI</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/hr-workflow-app/"
                    className="image"
                  ><img src={"/images/hr-workflow-app.300.png"} alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Workflow System</h4>
                    <p>A configurable workflow system.</p>
                    <ul>
                      <li>React</li>
                      <li>Vite</li>
                      <li>React Router</li>
                      <li>TypeScript</li>
                      <li>Material UI</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="https://snerks.github.io/reversi-ts-app/" className="image"
                  ><img src={"/images/reversi-app-2025.300.png"} alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Reversi</h4>
                    <p>A board game, with computer player.</p>
                    <ul>
                      <li>React 19</li>
                      <li>TypeScript</li>
                      <li>Vite</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a
                    href="https://snerks.github.io/snooker-scorer-app/"
                    className="image"
                  ><img src="/images/snooker-scorer-app.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Snooker Scoring App</h4>
                    <p>Allows scoring for a snooker frame, in real time.</p>
                    <ul>
                      <li>React 19</li>
                      <li>TypeScript</li>
                      <li>Vite</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a href="https://snerks.github.io/fsa-ratings-ng/" className="image"
                  ><img src="images/fsa-ratings-ng.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Angular Food Business Rating System</h4>
                    <p>
                      A client app allowing search for the FSA Ratings for food
                      businesses in the UK.
                    </p>
                    <ul>
                      <li>Angular 12</li>
                      <li>Angular Material</li>
                      <li>REST API</li>
                      <li>Material UI</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a
                    href="https://snerks.github.io/fix-protocol-app/"
                    className="image"
                  ><img src="images/fixprotocol.decoder.app.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React FIX Protocol Message Decoder</h4>
                    <p>
                      A client app allowing FIX Messages to be decoded to a
                      human-readable form.
                    </p>
                    <ul>
                      <li>React 19</li>
                      <li>Vite</li>
                      <li>Material UI</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a href="https://snerks.github.io/Copilot-Todo/" className="image"
                  ><img src="images/todo-app.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Todo App</h4>
                    <p>A client app allowing users to manage daily tasks.</p>
                    <ul>
                      <li>React 19</li>
                      <li>Vite</li>
                      <li>Material UI</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a
                    href="https://snerks.github.io/reactive-forms01/"
                    className="image"
                  ><img
                      src="images/snerks.github.io_reactive-forms01_create.png"
                      alt=""
                    /></a>
                  <div className="inner">
                    <h4>Angular Event Management System</h4>
                    <p>An entertainment event management system.</p>
                    <ul>
                      <li>Angular</li>
                      <li>Reactive Forms</li>
                      <li>Firebase</li>
                      <li>Bootstrap</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/store-admin-panel/dashboard/"
                    className="image"
                  ><img
                      src="images/ng-dashboard.300.png"
                      alt="Angular Dashboard"
                    /></a>
                  <div className="inner">
                    <h4>Angular Dashboard System</h4>
                    <p>
                      A sample dashboard system, with Material UI and ChartJS.
                    </p>
                    <ul>
                      <li>Angular</li>
                      <li>Material UI</li>
                      <li>ChartJS</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/footballstats-ts-app/"
                    className="image"
                  ><img src="images/football-stats-01.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Chart App</h4>
                    <p>A responsive charting app, powered by ChartJs.</p>
                    <ul>
                      <li>React</li>
                      <li>ChartJs</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/exchange-rate-app/"
                    className="image"
                  ><img src="/images/react-ts-exchange-rates.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Exchange Rate App</h4>
                    <p>An app to view Exchange Rates</p>
                    <ul>
                      <li>REST API</li>
                      <li>Material UI</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="https://snerks.github.io/BlazorApp322/" className="image"
                  ><img src="/images/blazor-app-01.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Blazor WASM REST App</h4>
                    <p>A sample app, powered by Blazor WASM.</p>
                    <ul>
                      <li>Blazor WASM</li>
                      <li>REST API</li>
                      <li>Bootstrap</li>
                      <li>C#</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/react-bootstrap-ts-website/"
                    className="image"
                  ><img src="images/react-bootstrap-site-01.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>React Bootstrap Website</h4>
                    <p>A marketing web site, using React and Bootstrap.</p>
                    <ul>
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/my-blog-starter/"
                    className="image"
                  ><img src="images/gatsby-starter-blog.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Gatsby Blog</h4>
                    <p>A blog site, powered by Gatsby.</p>
                    <ul>
                      <li>Gatsby</li>
                      <li>React</li>
                      <li>Graphql</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://snerks.github.io/asteroids-react-ts-01/"
                    className="image"
                  ><img src="images/space-game.01.300.png" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Space Game</h4>
                    <p>A space game, implemented with React.</p>
                    <ul>
                      <li>React</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </article>


                {/* <article>
                  <a href="#" className="image"
                  ><img src="images/pic02.jpg" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Terraformed a small moon</h4>
                    <p>
                      Integer eu ante ornare amet commetus vestibulum blandit
                      integer in curae ac faucibus integer adipiscing ornare amet.
                    </p>
                  </div>
                </article>
                <article>
                  <a href="#" className="image"
                  ><img src="images/pic03.jpg" alt=""
                    /></a>
                  <div className="inner">
                    <h4>Snapped dark matter in the wild</h4>
                    <p>
                      Integer eu ante ornare amet commetus vestibulum blandit
                      integer in curae ac faucibus integer adipiscing ornare amet.
                    </p>
                  </div>
                </article>  */}

              </div>
            </div>
          </section>

          {/* Four */}
          <section id="four">
            <div className="container">
              <h3>A Few Devops Apps</h3>

              {/* <p>
                Integer eu ante ornare amet commetus vestibulum blandit integer in
                curae ac faucibus integer non. Adipiscing cubilia elementum
                integer. Integer eu ante ornare amet commetus.
              </p>  */}


              <div className="features">
                <article>
                  <a
                    href="https://github.com/snerks/DockerComposeApiDb01/"
                    className="image"
                  ><img
                      src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                      alt=""
                    /></a>
                  <div className="inner">
                    <h4>Docker Compose .NET Core Web App</h4>
                    <p>
                      Docker Compose sample with ASP.NET Core 3.1 Web API and SQL
                      Server.
                    </p>
                    <ul>
                      <li>.NET Core</li>
                      <li>ASP.NET Core</li>
                      <li>C#</li>
                      <li>REST API</li>
                      <li>SQL Server</li>
                      <li>Docker</li>
                      <li>Docker Compose</li>
                    </ul>
                  </div>
                </article>

                <article>
                  <a
                    href="https://github.com/snerks/CoreWebAppXUnit1/"
                    className="image"
                  ><img
                      src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                      alt=""
                    /></a>
                  <div className="inner">
                    <h4>.NET Core Web App</h4>
                    <p>A .NET Core Web App with CI/CD from Azure Pipelines.</p>
                    <ul>
                      <li>.NET Core</li>
                      <li>ASP.NET Core</li>
                      <li>C#</li>
                      <li>XUnit</li>
                      <li>Azure Pipelines</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a
                    href="https://github.com/snerks/pipelines-javascript/"
                    className="image"
                  ><img
                      src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                      alt=""
                    /></a>
                  <div className="inner">
                    <h4>NodeJs Web App</h4>
                    <p>A NodeJs Web App with CI/CD from Azure Pipelines.</p>
                    <ul>
                      <li>NodeJs</li>
                      <li>Javascript</li>
                      <li>Azure Pipelines</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>


        </div>
      </div>

      {/* Footer */}
      <section id="footer">
        <div className="container">
          <ul className="copyright">
            <li>&copy; snerks. All rights reserved.</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            <li>
              Banner:
              <a href="https://vole.wtf/buttystock/~mike-carter/53/"
              >Mike Carter, via vole.wtf</a
              >
            </li>
          </ul>
        </div>
      </section>

      {/*       
      <script src={"/js/jquery.min.js"}></script>
      <script src={"/js/jquery.scrollex.min.js"}></script>
      <script src={"/js/jquery.scrolly.min.js"}></script>
      <script src={"/js/browser.min.js"}></script>
      <script src={"/js/breakpoints.min.js"}></script>
      <script src={"/js/util.js"}></script>
      <script src={"/js/main.js"}></script>
      */}
    </>
  )
}

export default App


