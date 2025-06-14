export function Header() {
    return <section id="header">
        <header>
            <span className="image avatar"
            ><img
                    src="https://avatars1.githubusercontent.com/u/7326391?s=460&v=4"
                    alt="" /></span>
            <h1 id="logo"><a href="#">snerks</a></h1>
            <p style={{ margin: "0 0 2.25em 0" }}>Full-stack software development</p>
        </header>
        <nav id="nav">
            <ul>
                <li><a href="#one" className="active">About</a></li>
                <li><a href="#two">Things I Can Do</a></li>
                <li><a href="#three">A Few Apps</a></li>
                <li><a href="#four">A Few DevOps Apps</a></li>
                {/* <li><a href="#five">Contact</a></li> */}
            </ul>
        </nav>
        <footer>
            <ul className="icons">
                {/* <li>
          <a href="#" className="icon brands fa-twitter"
          ><span className="label">Twitter</span></a
          >
        </li>
        <li>
          <a href="#" className="icon brands fa-facebook-f"
          ><span className="label">Facebook</span></a
          >
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram"
          ><span className="label">Instagram</span></a
          >
        </li> */}
                <li>
                    <a href="https://github.com/snerks" className="icon brands fa-github"
                    ><span className="label">Github</span></a>
                </li>

                {/* <li>
          <a href="#" className="icon solid fa-envelope"
          ><span className="label">Email</span></a
          >
        </li>  */}

            </ul>
        </footer>
    </section>;
}
