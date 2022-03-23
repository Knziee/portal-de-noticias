
import { CardBackgroundSpider } from './styles'


interface PropsCardSpider {
    imageUrlSpider: string;


}

function CardSpider(props: PropsCardSpider) {
return (

  <CardBackgroundSpider>

    <img src={props.imageUrlSpider + '.png'} alt="" />
 </CardBackgroundSpider>
)

}

export default CardSpider;

