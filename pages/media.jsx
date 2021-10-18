import { Head, NavBar } from '../components'
import Container from '../components/Container'

const Media = () => {
    return (
        <>
            <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
            <NavBar />
            <Container style={{ background: 'red', height: '100vh'} }></Container>
            <h1>Media</h1>
        </>
    )
}

export default Media;
