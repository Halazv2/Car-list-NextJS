import Link from "next/link";
const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h1>404</h1>
            <h2>Page not found</h2>
            <a>Go back to <Link href="/"> home page</Link></a>

        </div>
     );
}
 
export default NotFound;