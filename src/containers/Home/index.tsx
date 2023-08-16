import Layout from "../../components/layout"
import Slider from "../../components/slider"
import MovieSlider from "../../components/MovieSlider"
import MoviePromotion from "../../components/moviePromotion"
import MovieList from "../../components/movieList"
import { dataSlider } from "../../utils/sliderData"

export default function Home() {
    return (
        <Layout>
            <Slider sliderData={dataSlider} />
            <MovieSlider title="Upcoming Movie" query="/movie/upcoming" />
            <MoviePromotion query="avengers endgame" />
            <MovieList title="Popular Movie" query="/movie/popular" maxList={10} />
            <MoviePromotion query="jujutsu kaisen 0" />
            <MovieList title="Top Movie" query="/movie/top_rated" maxList={10} />
        </Layout>
    )
}