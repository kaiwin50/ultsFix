import { Head, NavBar } from '../components'
import styles from '../styles/Home.module.css'
import styled, { css, keyframes } from 'styled-components'
import Slider from 'react-slick';
import SliderWrapper from './SliderStyle'
//import { View, ScrollView } from 'react-native'

//components
import TextBG from '../components/TextBG'
import Container from '../components/Container'
import Card from '../components/NewsCard/Card'

const transL = keyframes`
    from{
        transform: translateX(0%);
        
    }
    to{
        transform: translateX(100%);
    }
`

const Title = styled.p`
    font-size: 4.5vw;
    color: #ece8e1;
    font-family: Kanit,sans-serif;
    font-weight: bold;
    text-indent: 7.5vw;
    padding-top: 20vh;
    margin: 0;
    @media (max-width: 1024px){
        text-indent: 0;
    }
`
const NewsRec = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #0f1923;
    top: 0;
    z-index: -1;
`

const HotNews = styled.div`
    width: 130vw;
    height: 80%;
    background: #0f1923;
    position: absolute;
    left: 20vw;
    overflow: visible;
    @media (max-width: 1024px){
        position: relative;
        margin-top: 10vh; 

        left: -8vw;
        display: block;
    }
`

const WrapNews = styled.div`
    position: absolute;
    height: 100%;
    left: 0;
    width: 100%;
    overflow-x: visible;
    transition: 1s;
    @media (max-width: 1024px){
        left: 8vw;
    }
`
const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
`


//page: News transform: ;



export default function News() {
    const data = require("../json/hotNews.json");
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
            </div>
          )
      };
    return (
    <>
        
        <Head title="สเปค VALORANT: ความต้องการขั้นต่ำ ที่แนะนำ และระดับสูง" />
        <NavBar />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;600&display=swap" rel="stylesheet"></link>
        <link href="//db.onlinewebfonts.com/c/0201813274259c3d4f78760d19270bab?family=DINNextLTW04-Medium" rel="stylesheet" type="text/css"/>
        <section>
        <NewsRec>
            <h2 className={ styles.stroke }>
                <TextBG className={ styles.textBackground1 }>WE ARE</TextBG>
                <TextBG className={ styles.textBackground2 }>VALORANT</TextBG>
            </h2>
        </NewsRec>
        <Container style={{ height: '100vh' }}>
            <Title className={ styles.resTitle }>แนะนำข่าวสาร</Title>
            <Container id="Recomend" style={{  height: '100vh', left: -1 }}>
                <HotNews>
                        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                        <WrapNews>
                            <SliderWrapper>
                            <SliderContainer>
                                <Slider {...settings}>
                                {
                                    data.map((card, index)=>{
                                    return  <Card data={card}/>
                                    })
                                }
                                </Slider>
                            </SliderContainer>
                            </SliderWrapper>

                        </WrapNews>
                </HotNews>
            </Container>
        </Container>
        </section>

    </>
    )

}



