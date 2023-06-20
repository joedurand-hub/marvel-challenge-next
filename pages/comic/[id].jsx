import React from 'react'
import ComicDetail from "@/components/ComicDetail/Index"

const Index = ({ data }) => {
  return (
    data?.data.results.map((comic, index) => (
      <div key={index}>
        <ComicDetail data={comic} />
      </div>
    ))
  )
}

export default Index;

export async function getServerSideProps({ req, res, query }) {
  try {
    const { id } = query;
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=3a6e11fea456ed169451605d221b6cb2&hash=c5ba593bf5555830db20d78e57bc7677`)
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
