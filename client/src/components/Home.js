import './Home.css';

function Home(props) {

    const getJoke = () => {
        window.location.href = 'https://joshmainac.github.io/personal-website/portfolio.html'; // redirect to a new page
    }
    return (
        <body class="home-body">
            <nav>
                <div class="left-nav">
                    <ul>
                        <li class="active-nav-link"><a href="#">HOME</a></li>
                        <li ><a onClick={getJoke}>PORTFOLIO</a></li>

                        <li><a href="resume.html">RESUME</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </div>
                <div class="right-nav">JOSHUA LONG</div>
            </nav>
            <div class="box">
                <img src={require('../assets/profile5.jpg')} alt="" class="box-img" />
                <h1>Joshua Long</h1>
                <h5>Web Developer - Software Engineer</h5>
                <h4 style={{ color: "yellow" }}>Todays's Joke</h4>
                <p>{props.joke}</p>
                <h4 style={{ color: "yellow" }}>Today's Weather for Pullman</h4>
                <p>{props.weather}</p>
                <ul>
                    <li>
                        <a href="https://github.com/joshmainac"
                        ><i class="fab fa-github-square"></i
                        ></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joshua-long-42573122a/"
                        ><i class="fab fa-linkedin"></i
                        ></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                    </li>
                </ul>
            </div>
        </body>



    );
}

export default Home;