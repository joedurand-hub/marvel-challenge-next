import styles from "./Index.module.css"
import Anchor from "../Anchor/Anchor"
import Image from "next/image"

function Comic({ data }) {
    return (
        <article key={data?.id} className={styles.marvel_container}>
            <h4 className={styles.marvel_title}>{data?.title}</h4>
            <Anchor path={`comic/${data?.id}`}>
                {data?.images.length > 0 && data.images !== null && data.images !== undefined && data.images.map((image, index) => (
                    <Image key={index} width={380} height={500} className={styles.marvel_image} src={`${image.path}.${image.extension}`} alt={data.description} />))}
            </Anchor>
            <p className={styles.marvel_description}>{`${data?.description?.substr(0, 65)}`}</p>

        </article>
    )
}

export default Comic;