import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import HeaderImage from './assets/mike-carter-53.jpg'
import { ProjectSummary } from './ProjectSummary'

interface ProjectSummaryNarrative {
  publishedUrl: string
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

function App() {

  const projectSummaries: ProjectSummaryNarrative[] = [
    {
      publishedUrl: 'https://snerks.github.io/mui-recommended-gigs-01/',
      imageUrl: '/images/snerks.github.io_mui-recommended-gigs-01.png',
      title: 'React Event Management System',
      description: 'An entertainment event management system.',
      technologies: ['React Hooks', 'React Router', 'Firebase', 'Formik 2', 'Yup', 'Material UI', 'TypeScript'],
    },

    {
      publishedUrl: 'https://snerks.github.io/hr-workflow-app/',
      imageUrl: '/images/hr-workflow-app.300.png',
      title: 'React Workflow System',
      description: 'A configurable workflow system.',
      technologies: ['React', 'Vite', 'React Router', 'TypeScript', 'Material UI'],
    },
    {
      publishedUrl: 'https://snerks.github.io/reversi-ts-app/',
      imageUrl: '/images/reversi-app-2025.300.png',
      title: 'React Reversi',
      description: 'A board game, with computer player.',
      technologies: ['React 19', 'TypeScript', 'Vite'],
    },
    {
      publishedUrl: 'https://snerks.github.io/snooker-scorer-app/',
      imageUrl: '/images/snooker-scorer-app.300.png',
      title: 'React Snooker Scoring App',
      description: 'Allows scoring for a snooker frame, in real time.',
      technologies: ['React 19', 'TypeScript', 'Vite'],
    },
    {
      publishedUrl: 'https://snerks.github.io/fsa-ratings-ng/',
      imageUrl: '/images/fsa-ratings-ng.300.png',
      title: 'Angular Food Business Rating System',
      description: 'A client app allowing search for the FSA Ratings for food businesses in the UK.',
      technologies: ['Angular 12', 'Angular Material', 'REST API', 'Material UI', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/fix-protocol-app/',
      imageUrl: '/images/fixprotocol.decoder.app.300.png',
      title: 'React FIX Protocol Message Decoder',
      description: 'A client app allowing FIX Messages to be decoded to a human-readable form.',
      technologies: ['React 19', 'Vite', 'Material UI', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/Copilot-Todo/',
      imageUrl: '/images/todo-app.300.png',
      title: 'React Todo App',
      description: 'A client app allowing users to manage daily tasks.',
      technologies: ['React 19', 'Vite', 'Material UI', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/reactive-forms01/',
      imageUrl: '/images/snerks.github.io_reactive-forms01_create.png',
      title: 'Angular Event Management System',
      description: 'An entertainment event management system.',
      technologies: ['Angular', 'Reactive Forms', 'Firebase', 'Bootstrap', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/store-admin-panel/dashboard/',
      imageUrl: '/images/ng-dashboard.300.png',
      title: 'Angular Dashboard System',
      description: 'A sample dashboard system, with Material UI and ChartJS.',
      technologies: ['Angular', 'Material UI', 'ChartJS', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/footballstats-ts-app/',
      imageUrl: '/images/football-stats-01.300.png',
      title: 'React Chart App',
      description: 'A responsive charting app, powered by ChartJs.',
      technologies: ['React', 'ChartJs', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/exchange-rate-app/',
      imageUrl: '/images/react-ts-exchange-rates.300.png',
      title: 'React Exchange Rate App',
      description: 'An app to view Exchange Rates',
      technologies: ['REST API', 'Material UI', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/BlazorApp322/',
      imageUrl: '/images/blazor-app-01.300.png',
      title: 'Blazor WASM REST App',
      description: 'A sample app, powered by Blazor WASM.',
      technologies: ['Blazor WASM', 'REST API', 'Bootstrap', 'C#'],
    },
    {
      publishedUrl: 'https://snerks.github.io/react-bootstrap-ts-website/',
      imageUrl: '/images/react-bootstrap-site-01.300.png',
      title: 'React Bootstrap Website',
      description: 'A marketing web site, using React and Bootstrap.',
      technologies: ['React', 'Bootstrap', 'TypeScript'],
    },
    {
      publishedUrl: 'https://snerks.github.io/my-blog-starter/',
      imageUrl: '/images/gatsby-starter-blog.300.png',
      title: 'Gatsby Blog',
      description: 'A blog site, powered by Gatsby.',
      technologies: ['Gatsby', 'React', 'Graphql'],
    },
    {
      publishedUrl: 'https://snerks.github.io/asteroids-react-ts-01/',
      imageUrl: '/images/space-game.01.300.png',
      title: 'Space Game',
      description: 'A space game, implemented with React.',
      technologies: ['React', 'TypeScript'],
    },
  ];

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

          {/* From JSON */}
          <section id="fromjson">
            <div className="container">
              <h3>A Few Recent Apps ({projectSummaries.length})</h3>
              <div className="features">
                {projectSummaries.map((project, index) => (
                  <ProjectSummary
                    key={index}
                    publishedUrl={project.publishedUrl}
                    imageUrl={project.imageUrl}
                    technologies={project.technologies}
                    title={project.title}
                    description={project.description} />
                ))}
              </div>
            </div>
          </section>


          {/* Three */}
          {/* <section id="three">
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
              </div>
            </div>
          </section> */}

          {/* Four */}
          <section id="four">
            <div className="container">
              <h3>A Few Devops Apps</h3>

              <div className="features">
                <article>
                  <a
                    href="https://github.com/snerks/DockerComposeApiDb01/"
                    className="image"
                  ><img
                      src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                      alt="" /></a>
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

      <Footer />

    </>
  )
}

export default App


