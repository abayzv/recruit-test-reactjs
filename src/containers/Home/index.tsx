import Layout from "../../components/layout"
import Slider from "../../components/slider"
import MovieSlider from "../../components/movieSlider"
import MoviePromotion from "../../components/moviePromotion"
import MovieList from "../../components/movieList"

export default function Home() {
    const dataSlider = [
        {
            title: "Spiderman No Way Home",
            url: "https://script.viserlab.com/playlab/demo/assets/images/slider/62c4309c1a3801657024668.jpg"
        },
        {
            title: "Avengers",
            url: "https://script.viserlab.com/playlab/demo/assets/images/slider/62c41979da4871657018745.jpg"
        }
    ]

    return (
        <Layout>
            <Slider sliderData={dataSlider} />
            <MovieSlider title="Upcoming Movie" query="/movie/upcoming" />
            <MoviePromotion query="avengers endgame" />
            <MovieList title="Popular Movie" query="/movie/popular" />
            <MoviePromotion query="jujutsu kaisen 0" />
            <MovieList title="Top Movie" query="/movie/top_rated" />
        </Layout>
    )
}