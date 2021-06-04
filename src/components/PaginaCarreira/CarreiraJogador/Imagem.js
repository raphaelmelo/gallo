import styled from 'styled-components'


const ImagemWrapper = styled.article`
width:100%;
padding-top: 50px;
background-color: #020202;
`
const ImagemGallo = styled.img`
height:100%;
width:100%;
`

export default function Imagem() {
    return (
            <ImagemWrapper>
            <ImagemGallo src="https://res.cloudinary.com/gallo/image/upload/v1622762115/image_12_uczjai.png" alt="Gallo Jovem"/>
            </ImagemWrapper>
    );
}
