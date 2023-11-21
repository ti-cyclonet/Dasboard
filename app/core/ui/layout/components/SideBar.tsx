import * as Feather from "react-icons/fi";
import * as Feathers from "react-icons/fa";
import Link from "next/link";

function SideBar() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <div>
            <a className="sidebar-brand mb-3" href="index.html">
              <img src="img/pngegg.png" width="32px" />
              <span className="align-middle p-3">Base App</span>
            </a>

            <ul className="sidebar-nav">
              <li className="sidebar-item">
                <Link className="sidebar-link" href="dashboard">
                  <Feather.FiSliders size={18} className="align-middle me-3" />
                  <span className="align-middle">Dashboard</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" href="users">
                  <Feather.FiUsers size={18} className="align-middle me-3" />
                  <span className="align-middle">Usuarios</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" href="comparendos">
                  <Feather.FiBriefcase
                    size={18}
                    className="align-middle me-3"
                  />
                  <span className="align-middle">Comparendos</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" href="vehiculos">
                  <Feathers.FaBusAlt
                    size={18}
                    className="align-middle me-3"
                  />
                  <span className="align-middle">Vehiculos</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <a className="sidebar-link" href="projects.html">
                  <Feather.FiLayers size={18} className="align-middle me-3" />
                  <span className="align-middle">Opcion4</span>
                </a>
              </li>

              <li className="sidebar-item">
                <a className="sidebar-link" href="clients.html">
                  <Feather.FiAward size={18} className="align-middle me-3" />
                  <span className="align-middle">Opcion5</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
