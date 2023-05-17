import { useRouter } from 'next/router';
import Seo from '../../component/Seo.js';

export default function Detail({ params }){
    const router = useRouter();
    const [title, id] = params || []
    
    return (
        <>
            <Seo title={title} />
            <img src={`https://image.tmdb.org/t/p/w500/${router.query.poster_path}`} />
            <h4>{title}</h4>
        </>
    )
}

export function getServerSideProps({params: {params}}){
    return {
        props:{
            params
        }
    }
}