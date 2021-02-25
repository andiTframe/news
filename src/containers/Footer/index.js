import React from "react";
import { useHistory } from "react-router-dom";
import { menus } from "../../components/MainMenuThree";
import "./Footer.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import img from '../../assets/birdPng.png'


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
                    <img src={img} alt="" />
                    <div className="contentTopLeftTopText">
                      <p>News Portal sh.p.k.</p>
                      <p>Rr. Berlin Germany, Nr.29, Berlin Germany</p>
                      <p>info@news.com 038 224 093 - +383 48 222 355</p>
                    </div>
                  </div>
                  <div className="contentTopLeftBottom">
                    <p>
                      This portal is maintained by the company "New Portal".
                      Materials and information on this portal may not be
                      copied, printed, or used in any other form for profit
                      purposes, without the approval of the directors of
                      "news portal". To utilize the material of this portal you
                      are obliged to accept the Terms of Use.
                    </p>
                  </div>
                </div>
                <div className="contentTopRight">
                  <div className="partners">
                    <p>Partners</p>
                    <div className="partnersImgs">
                      <img src={img} alt="" />
                      <img src={img} alt="" />
                      <img src={img} alt="" />
                      <img src={img} alt="" />
                    </div>
                  </div>
                  <div className="menusDiv">
                    {[
                      ...menus,
                      { linkText: "Privacy policy", link: "/legalInfo" },
                    ].map((item, index) => (
                      <p
                        onClick={() => {
                          history.push(item.link);
                          window.scroll({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {item.linkText}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contentBottom">
                <div className="contentBottomLeft">
                  <p>Follow Us :</p>
                  <AiFillFacebook className="socialIcon" />
                  <AiFillInstagram className="socialIcon" />
                  <AiFillTwitterCircle className="socialIcon" />
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
