import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Seo from '../component/Seo';

export default function Layout({ children }){
	const router = useRouter();
	const title = {
		'/': 'Home',
		'/source': 'Source'
	}
	return <>
		<Seo title={title[router.pathname]} />
		<NavBar path={title[router.pathname]} />
        <div>{children}</div>
	</>
}