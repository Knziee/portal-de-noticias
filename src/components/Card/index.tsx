import { CardBackground, CardText, CardTitle, CardDescription, CardButton } from './styles'

interface PropsCard {
    imageUrl: string;
    titulo: string;
    desc: string;
    link: string;

}

function Card(props: PropsCard) {
return (
  <CardBackground>
<img src={props.imageUrl} alt="" />  
    <CardText>
    <CardTitle> {props.titulo}  </CardTitle>
    <CardDescription>{props.desc}</CardDescription>
    </CardText>
    <CardButton> Ir para notícia </CardButton>
 </CardBackground>
)

}

export default Card;

