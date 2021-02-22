import React from "react";
import { useHistory } from "react-router-dom";
import { menus } from "../../components/MainMenuThree";
import "./Footer.scss";
import icon from "../../doc/img/newsIcon.png";
import iconPar from "../../doc/img/dukLogo.png";
import { AiFillFacebook,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";




const Footer = () => {
  const history = useHistory();
  return (
    <div
      style={{ paddingTop: 50, backgroundColor: "#17222B" }}
      className="archives layout3 post post1 padding-top-30"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footerContent">
              <div className="contentTop">
                <div className="contentTopLeft">
                  <div className="contentTopLeftTop">
                    <img src={icon} alt="" />
                    <div className="contentTopLeftTopText">
                      <p>TELEGRAFI sh.p.k.</p>
                      <p>Rr. Rexhep Mala, Aktash, Nr.29, Prishtinë, Kosovë</p>
                      <p>info@telegrafi.com 038 224 093 - +383 48 222 355</p>
                    </div>
                  </div>
                  <div className="contentTopLeftBottom">
                    <p>
                      Ky portal mirëmbahet nga kompania "Telegrafi". Materialet
                      dhe informacionet në këtë portal nuk mund të kopjohen, të
                      shtypen, ose të përdoren në çfarëdo forme tjetër për
                      qëllime përfitimi, pa miratimin e drejtuesve të
                      "Telegrafit". Për ta shfrytëzuar materialin e këtij
                      portali obligoheni t'i pranoni Kushtet e përdorimit. 
                    </p>
                  </div>
                </div>
                <div className="contentTopRight">
                  <div className="partners">
                    <p>Partners</p>
                    <div className="partnersImgs">
                      <img src={iconPar} alt="" />
                      <img src={iconPar} alt="" />
                      <img src={iconPar} alt="" />
                      <img src={iconPar} alt="" />
                    </div>
                  </div>
                  <div className="menusDiv">
                    {[
                      ...menus,
                      { linkText: "Privacy policy", link: "/legalInfo" },
                    ].map((item, index) => (
                      <p onClick={() => {
                        history.push(item.link);
                        window.scroll({
                          top:0,
                          behavior:'smooth'
                        })
                      }}>
                        {item.linkText}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contentBottom">
                  <div className="contentBottomLeft">
                      <p>Follow Us :</p>
                      <AiFillFacebook className='socialIcon'/>
                      <AiFillInstagram className='socialIcon'/>
                      <AiFillTwitterCircle className='socialIcon'/>
                  </div>
                  <div className="contentBottomRight">
                      <p>&#169; Copyright {new Date().getFullYear()} News Portal</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
