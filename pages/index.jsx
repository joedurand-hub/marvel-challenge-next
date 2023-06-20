import { useState, useEffect } from "react";
import Comic from "@/components/Comic/Index"
import Center from "@/components/Center/Index"
import Input from "@/components/Input/Input"
import useHttp from "@/hooks/useHttp";
import { BASE_URL, GET_COMIC, TIMESTAMP, PUBLIC_KEY, HASH } from "@/helpers/constants";
import Loader from "@/components/Loader/Index";
import Layout from "@/components/Layout/Index";

function Home() {
  const { loading, error, data, sendRequest } = useHttp()
  useEffect(() => {
    sendRequest(`${BASE_URL}${GET_COMIC}?limit=100&offset=0&ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`, 'GET')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [searchComic, setSearchComic] = useState('');

  const handleSearchComic = (event) => {
    setSearchComic(event.target.value);
  };

  const filteredComics = data?.data.results.filter((comic) => {
    if (comic.title.toLowerCase().includes(searchComic.toLowerCase())) {
      console.log(comic)
      return comic
    }
  }
  );

  return (
    <Layout text={data?.attributionText}>
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {error && (
        <Center>
          <p>Se ha producido un error: {error}</p>
        </Center>
      )}
      <Center>

        <Input label="Buscar comic" type="search" placeholder="Busca por nombre" onChange={handleSearchComic} />
      </Center>
      {data && (
        <section>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", maxWidth: "100vw", justifyContent: "center", alignItems: "center" }}>
            {filteredComics?.map((object) => {
              return (
                <div key={object.id}>
                  <Comic data={object} />
                </div>
              )
            })}
          </div>
        </section>
      )}
    </Layout>
  )
}
export default Home;
