import React from 'react'
import bannerImage from './banner.jpg'
import { BannerStyled } from './body.style'

function Banner() {
    return (
        <BannerStyled bg='https://unsplash.com/photos/qLYWxmIT7IU/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE2NDA4ODQ1MjM&force=true&w=2400'>
        <h1>Download High Quality Images by creators</h1>
        <p>Over 2.4 million+ stock Images by our talented community</p>
        </BannerStyled>
        
    )
}

export default Banner
