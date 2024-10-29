import React from 'react'
import './Contactus.css'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export const Contactus = () => {
  return (
    <>
    <Navbar/>

    <div className="cont1c">
      <div className="opac"></div>
      <div className="h1">Contact us</div>
    </div>
    <div className="cont2c">
        <div className="contentco">
            <div className="c2cl">
            <form action="">
                <div className="c2cl1">
                    <div className="c2cl1l">
                        <div className='c2cl1lic'><FaUser /></div>
                        <div className='c2cl1linp'>
                            <input type="text" placeholder='Full Name *' required />
                        </div>
                    </div>
                    <div className="c2cl1r">
                        <div className="c2cl1ric"><MdEmail /></div>
                        <div className="c2cl1rinp">
                            <input type="text" placeholder='Email *' required />
                        </div>
                    </div>
                </div>
                <div className="c2cl2">
                    <div className="c2cl1l">
                        <div className='c2cl1lic'><FaPhoneAlt /></div>
                        <div className='c2cl1linp'>
                            <input type="text" placeholder='Phone *' required />
                        </div>
                    </div>
                    <div className="c2cl1r">
                        <div className="c2cl1ric"><FaBook /></div>
                        <div className="c2cl1rinp">
                            <input type="text" placeholder='Services *' required />
                        </div>
                    </div>
                </div>
                <div className="c2cl3">
                    <textarea name="" rows={6} id="" placeholder='Message' required ></textarea>
                </div>
                <div className="c2cl4">
                    <button type='submit'><b>SUBMIT</b></button>
                </div>
            </form>
            </div>
            <div className="c2cr">
                <div className="c2cr2">
                    <div className="hdr">
                        <h2>Why Book With Us?</h2>
                    </div>
                    <div>
                           <div><div><RiArrowDropRightLine className='span' /></div><div className='c2tr2why'>Best Price Guarantee</div></div>
                           <div><div><RiArrowDropRightLine className='span' /></div><div className='c2tr2why'>Customer care available 24/7</div></div>
                           <div><div><RiArrowDropRightLine className='span' /></div><div className='c2tr2why'>Free Travel Insureance</div></div>
                           <div><div><RiArrowDropRightLine className='span' /></div><div className='c2tr2why'>Hand-picked Tours & Activities</div></div>
                    </div>
                </div>
                <div className="c2cr3">
                    <div className="opac"></div>
                    <div className="c2cr3cont">
                      <div className="hdr">
                        <h2>Get a Question?</h2>
                      </div>
                      <div className="pr">
                        <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                      </div>
                      <div className="eml">
                        <div className='emlic'>
                            <MdEmail />
                        </div>
                        <div className="emladdr">
                            <a href="">holidayplanners@gmail.com</a>
                        </div>
                      </div>
                      <div className="phn">
                        <div className="phnic">
                            <FaPhoneAlt />
                        </div>
                        <div className="phnnbr">
                            <a href="">+123 456 7890</a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
