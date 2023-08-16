import Layout from "../../components/layout"
import Slider from "../../components/slider"
import MovieSlider from "../../components/movieSlider"
import MoviePromotion from "../../components/moviePromotion"
import MovieList from "../../components/movieList"
import nowayhome from "../../assets/images/nowayhome.jpg"
import avengers from "../../assets/images/avengers.jpg"
import civilwar from "../../assets/images/civilwar.jpg"
import homecoming from "../../assets/images/homecoming.jpg"
import sherlockhomes from "../../assets/images/sherlockhomes.jpg"

export default function Home() {
    const dataSlider = [
        {
            title: "Spiderman No Way Home",
            url: nowayhome
        },
        {
            title: "Avengers",
            url: avengers
        },
        {
            title: "Captain America Civil War",
            url: civilwar
        },
        {
            title: "Spiderman Homecoming",
            url: homecoming
        },
        {
            title: "Sherlock Holmes",
            url: sherlockhomes
        }
    ]

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