import { Link, useLocation } from "react-router-dom";
import { siteMenu } from "../../../Comomon/Config/SiteMenu";
import { useAppDispatch, useAppSelector} from "@/Hooks/Store";
import { setOpenModal } from "../../../Redux/Slice";
import { useEffect } from "react";
import FormLogin from '@/Components/FormLogin.jsx';
function NavBarSection() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: 9 }}
      >
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <a href="" className="navbar-brand">
            <h1 className="m-0 text-primary">
              <span className="text-dark">TRAVEL</span>ER
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" navbar-collapse justify-content-between px-3"
           
          >
            <div className="navbar-nav ml-auto py-0">
              {
                siteMenu.map((item,index)=>(
                  <Link to={item.href} key={index} className={`nav-item nav-link ${currentUrl===item.href && 'active'}`} style={{fontWeight: 'bold'}}>
                    {item.name}
                  </Link>
                ))
              }
            </div>
          </div>
        </nav>
      </div>
      <FormLogin></FormLogin>
    </div>
  );
}

export default NavBarSection;
