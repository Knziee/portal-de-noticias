import { Container,Wrapper,Logo,Menu } from './styles'
import { Link } from 'react-router-dom';

function Header() {
return <Container>
    <Wrapper>
    <Link to='/'><Logo>Portal de Noticias</Logo></Link>
        <Menu>
            <Link to='/Tecnologia'>Tecnologia</Link>
            <Link to='/Esportes'>Esportes</Link>
            <Link to='/Entreterimento'>Entreterimento</Link>
            <Link to='/FotosDoHomemAranha'>Fotos do Homem-Aranha!</Link>
            
        </Menu>
    </Wrapper>
</Container>
}

export default Header;

