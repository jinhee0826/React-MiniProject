import { Outlet } from "react-router-dom";
import PageLink from "../components/PageLink"

const Layout = () => {
  return (  
  <div>
    <PageLink />
    <div  className="mx-5 mt-3">
      <Outlet />
    </div>
  </div>
 );
}
 
export default Layout;