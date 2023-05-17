import Layout from "../component/Layout";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }){
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}