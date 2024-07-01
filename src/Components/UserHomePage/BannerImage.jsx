import { BannerWrapper, BannerContent, GradientOverlay, Metrics, MetricItem } from '../../Styles/UserHomeStyle/BannerImageStyle'
import banner_image from '../../assets/images/banner_image.jpg'


const BannerImage = () => {
  return (
    <BannerWrapper style={{backgroundImage: `url(${banner_image})`}} >
        <GradientOverlay/>
        <BannerContent>
            <p>
                    Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.
                    Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.Lorem ipsum praesent
                    ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum .Vivamus est
                    mistLorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliqu
            </p>
            <Metrics>
                <MetricItem>
                    <h2>678+</h2>
                    <p>Happy Customers</p>
                </MetricItem>

                <MetricItem>
                    <h2>4.9</h2>
                    <p>Satisfaction Score</p>
                </MetricItem>

                <MetricItem>
                    <h2>40+</h2>
                    <p>Happy Employees</p>
                </MetricItem>
            </Metrics>
        </BannerContent>
    </BannerWrapper>
  )
}

export default BannerImage