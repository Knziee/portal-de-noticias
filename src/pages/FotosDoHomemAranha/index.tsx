import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import CardSpider from '../../components/CardSpider';
import { WrapperFeed, BackgroundColor } from '../../assets/styles/Global';
import { CardBackgroundMeme, BackgroundSize } from './styles';


  
function FotosDoHomemAranha() {
    const photoLists = [
        {photoUrl: 'https://imgur.com/kGxFZGo'},
        {photoUrl: 'https://imgur.com/mR8RYG4'},
        {photoUrl: 'https://imgur.com/L11GuJ3'},
        {photoUrl: 'https://imgur.com/2sbdp7i'},
        {photoUrl: 'https://imgur.com/44DSWKT'},
        {photoUrl: 'https://imgur.com/m5GDi3w'},
        {photoUrl: 'https://imgur.com/IOcPYtr'},
        {photoUrl: 'https://imgur.com/PNWle72'},
        {photoUrl: 'https://imgur.com/PNWle72'},
        {photoUrl: 'https://imgur.com/A2G1DjS'},
    ];

    return (
        <div>
<Header/>
<BackgroundColor>
        <WrapperFeed>
          <CardBackgroundMeme/>
          <BackgroundSize>
            {
                photoLists.map((photoList, index) => {
                    return ( 
                    <CardSpider 

                    imageUrlSpider={photoList.photoUrl}

                    />)
                })
            }
          </BackgroundSize>
        </WrapperFeed>
        </BackgroundColor>
</div>
    )
}

export default FotosDoHomemAranha