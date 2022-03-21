
import { CardBackground, CardText, CardTitle, CardDescription } from './styles'

interface PropsCard {
    imageUrl: string;
    titulo: string;
    desc: string;
    link: string;

}

function Card(props: PropsCard) {
return (

  <CardBackground>
    <a href={props.link}><img src={props.imageUrl} alt="" />  </a>
    <CardText>
    <a href={props.link}> <CardTitle> {props.titulo}  </CardTitle> </a>
    <CardDescription>{props.desc}</CardDescription>
    </CardText>
 </CardBackground>
)

}

export default Card;

