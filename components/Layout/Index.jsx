import styles from "./Index.module.css"
import Head from "@/components/Head/Index"
import Footer from "@/components/Footer/Index"
import Nav from "@/components/NavBar/Index"
import Center from "@/components/Center/Index";
import Anchor from "../Anchor/Anchor";

const Layout = ({ children,  }) => {
    const title = 'Título de la página';
    const description = 'Descripción de la página';
    const keywords = 'palabras clave, SEO, Next.js';
    const robots = 'index,follow';
    const ogTitle = 'Título de Open Graph';
    const ogDescription = 'Descripción de Open Graph';
    const ogImage = '/path/to/og-image.jpg';
    const canonical = 'https://example.com/my-page';

    return (
        <>
            <Head
                title={title}
                description={description}
                keywords={keywords}
                robots={robots}
                ogTitle={ogTitle}
                ogDescription={ogDescription}
                ogImage={ogImage}
                canonical={canonical}
            />
            <header>
                <Center>
                    <Nav>
                        <Anchor path="/">
                        <img className={styles.logo} src="/logo.png" alt="Logo" />
                        </Anchor>
                    </Nav>
                </Center>
            </header>
            <main>
                {children}
            </main>
            <Footer>

            </Footer>
        </>
    );
};

export default Layout;
