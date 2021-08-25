import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Image from "next/image";
function Movie({ result }) {
  const [session] = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";


  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section>
          <div>
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());
  return {
    props: {
      session,
      result: request,
    },
  };
}
