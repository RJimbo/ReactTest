import { Link } from "react-router-dom"

const Home = () =>
{
    return(
        <div>
            <h1>Welcome to my page!!</h1>
            <nav>
                <Link to="MaterialUITest">MaterialUI学習ページ</Link>
                <Link to="MS-FluentUITest">MS FluentUI学習ページ</Link>
            </nav>
        </div>
    )
}

export default Home