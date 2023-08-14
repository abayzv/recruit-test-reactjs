import Layout from "../../components/layout"
import Slider from "../../components/slider"

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
        </Layout>
    )
}