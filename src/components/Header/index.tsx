import { Container,Wrapper,Logo1, Logo2, Logo3 ,Menu } from './styles'
import { Link } from 'react-router-dom';

function Header() {
return <Container>
    <Wrapper>
    <Link to='/'><Logo1>The</Logo1></Link>
    <Link to='/'><Logo2>Daily</Logo2></Link>
    <Link to='/'><Logo3>Bugle</Logo3></Link>
        <Menu>
            <Link to='/Tecnologia'>Tecnologia</Link>
            <Link to='/Esportes'>Esportes</Link>
            <Link to='/Entreterimento'>Entreterimento</Link>
            <Link to='/FotosDoHomemAranha'>Homem-Aranha!</Link>
            
        </Menu>
    </Wrapper>
</Container>
}

export default Header;

