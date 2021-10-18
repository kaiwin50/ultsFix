import styled from 'styled-components'
import ContentText from './ContentText'
import Text from './Text'
import { keyframes } from 'styled-components'


const NewsCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #0f1923;
    left: 0;
`
const CardContent = styled.div`
    background: #0f1923;
    width: 100%;
    height: 25vh;
    button: 0;
    overflow: hidden;

`
const RecomendImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Picture = styled.div`
    border: 1px solid #ece8e1;
    width: 100%;
    height: 100%;
`
const Warp = styled.div`
    width: 50vw;
    height: 55vh;
    display: inline-block;
    position: relative;
    margin-right: 17.5vw;
    left: 0;

`

const Card = ({ data }) => {

    return (
        <>
        <Warp>
            <NewsCard>
                <Picture>
                    <RecomendImg src={ data.IMAGE }></RecomendImg>
                </Picture>
                <CardContent>
                    <div style={{ paddingLeft: '10%' }}>
                        <Text style={{ display: 'block' }}>{ data.DATE }</Text>
                        <ContentText>{ data.TOPIC }</ContentText>
                        <ContentText>{ data.DETAIL }</ContentText>
                    </div>
                </CardContent>
             </NewsCard>
        </Warp>
        </>
    )
}

export default Card

