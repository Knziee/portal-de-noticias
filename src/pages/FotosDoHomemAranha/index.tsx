import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Card from '../../components/Card';
import { BackgroundColor, WrapperFeed } from '../../assets/styles/Global';


interface Article {
    title: string;
    url: string;
    description: string;
    urlToImage: string;
  }
  
function FotosDoHomemAranha() {

    const [articles, setArticles] = useState<Article[]>([])

    //array vazio executa apenas uma vez no momento da construção do componente
    useEffect(() => {

        // const getNoticias = async ()=> {
        //     // const response = await getTopHeadLines()
        //     const response = await getSpidermanPics()
        //     setArticles(response.articles)
        // };

        // getNoticias();

    },[])

    return (
        <div>
<Header/>
    <BackgroundColor>
        <WrapperFeed>
            {
                articles.map((article, index) => {
                    return ( 
                    <Card 
                    titulo={article.title} 
                    desc={article.description} 
                    link={article.url} 
                    imageUrl={article.urlToImage}
                    key={index}
                    />)
                })
            }
        </WrapperFeed>
    </BackgroundColor>
</div>
    )
}

export default FotosDoHomemAranha