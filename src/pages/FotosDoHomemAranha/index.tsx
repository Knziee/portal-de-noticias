import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import CardSpider from '../../components/CardSpider';
import { WrapperFeed, BackgroundColor } from '../../assets/styles/Global';
import { CardBackgroundMeme, BackgroundSize } from './styles';


  
function FotosDoHomemAranha() {
    const photoLists = [
        {photoUrl: 'https://imgur.com/YLsNDts'},
        {photoUrl: 'https://imgur.com/J1VOqPD'},
        {photoUrl: 'https://imgur.com/BuiAtqw'},
        {photoUrl: 'spider4'},
        {photoUrl: 'spider5'},
        {photoUrl: 'spider6'},
        {photoUrl: 'spider7'},
        {photoUrl: 'spider8'},
        {photoUrl: 'spider9'},
        {photoUrl: 'spider10'},
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