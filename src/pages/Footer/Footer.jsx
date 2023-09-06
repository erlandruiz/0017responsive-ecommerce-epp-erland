import { FaFacebookSquare } from "react-icons/fa";
// import {FaSquareInstagram} from 'react-icons/fa';
// import {PiInstagramLogoFill} from 'react-icons/pi'
// import {AiFillInstagram} from 'react-icons/ai';
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <section className="epp-secction-footer container">
        <div className="epp-redes-sociales-row row">
          <div className="epp-redes-sociales-col col">
            <h5 className="epp-redes-sociales-titulo">Redes Sociales</h5>
            <div className="epp-redes-sociales-iconos">
              <FaFacebookSquare />
              <RiInstagramFill />
              <IoLogoYoutube />
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="epp-contactanos-row row">
          <div className="epp-contactanos-col col">
            <h5 className="epp-contactanos-titulo">Contáctanos</h5>
            <div className="epp-contactanos-iconos">
              <MdAttachEmail />
              <div className="epp-contactanos-email">peruepp@peruepp.com</div>
            </div>
            <div className="epp-contactanos-iconos">
              <FaPhoneAlt />
              <div className="epp-contactanos-telefono">+51 969 789 789</div>
            </div>
          </div>
        </div>

        <div className="epp-productos-row row">
          <div className="epp-productos-col col">
            <h5 className="epp-productos-titulo">Productos</h5>
            <div className="epp-productos-lista">
              <div className="epp-productos-detalle">Protección de Cabeza</div>
              <div className="epp-productos-detalle">Protección Auditiva</div>
              <div className="epp-productos-detalle">Protección de Manos</div>
            </div>
          </div>
        </div>

        <div className="epp-copyright">
          Copyright © 2023 EPP-Peru. Todos los derechos reservados.
        </div>
        <div className="epp-disenador">
          Sitio desarrollado por <span className="epp-disnador-company"> Erland Company</span>
        </div>
      </section>
    </>
  );
};
