import React from 'react'
import styles from "./Index.module.css"
import Layout from '../Layout/Index'
import Image from "next/image"

const Index = ({ data }) => {
    return (
        <Layout>

            <article className={styles.container}>
                <div className={styles.container_image}>
                    {data.images.map((image, index) => (
                        <Image key={index} width={400} height={750} src={`${image.path}.${image.extension}`} alt={data.description} />
                    ))}
                </div>
                <div className={styles.container_content}>

                    <h4 className={styles.container_content_title}>Título:{data?.title}</h4>
                    <h5 className={styles.container_content_format}>Formato: {data?.format}</h5>
                    <h5 className={styles.container_content_creators}><strong>Creadores:</strong> {data?.creators.items?.map((creator) => (
                        <p>
                            Nombre: {creator.name} <br />
                            Rol: {creator.role}
                        </p>
                    )
                    )}
                    </h5>
                    <p className={styles.container_content_description}>Descripción: {data?.description}</p>
                    <p className={styles.container_content_modified}>Última fecha de modificación: {data?.modified}</p>
                </div>

            </article>
        </Layout>
    )
}

export default Index