import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import { useRouter } from 'next/router';

export default function Home({ results }) {
  // const router = useRouter();
  // const moveToDetail = (id, title, poster) => {
  //   router.push({
  //     pathname: `/movies/${title}/${id}`,
  //     query: {
  //      poster
  //     }
  //   }, `/movies/${title}/${id}`);
  // };
  return (
    <>
    <div className={styles.container}>
      {results?.map(({ id, original_title, poster_path }) => (
          <Link href={{
              pathname: `/movies/${original_title}/${id}`,
              query: {
                poster_path
              },
            }}
            as={`/movies/${original_title}/${id}`}
            key={id}
          >
            <div className={styles.movie}>
              {/* <img onClick={() => {moveToDetail(id, original_title, poster_path)}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /> */}
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
              <h4>{original_title}</h4>
            </div>
          </Link>
        )
      )}
    </div>
    </>
  );
};

export async function getServerSideProps(){
	const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
	return {
		props: {
			results,
		}
	}
}
