import React from 'react'
import './Tour.css'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { FaClock } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Tour = () => {
  return (
    <>
    <Navbar/>
    
    <div className="cont1t">
      <div className="opac"></div>
      <div className="h1">Tour List</div>
    </div>
    <div className="cont2t">
        <div className="contentto">
            <div className="c2tl">
                <div className="c2tl1">
                    <form action="">
                        <label htmlFor=""><b>Sort by :</b></label>
                        <select name="" id="">
                            <option value="">Release Date</option>
                            <option value="">Tour Date</option>
                            <option value="">Title</option>
                            <option value="">Price</option>
                            <option value="">Popularity</option>
                            <option value="">Rating</option>
                            <option value="">Duration</option>
                        </select>
                        <select>
                            <option>Ascending</option>
                            <option selected="">Descending</option>
                        </select>
                    </form>
                </div>
                <div className="c2tl2">
                    <div className="c2tl2l">
                        <div className="c2tl2li"><div className="c2tic">ITALY</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>2 days</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>6 People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$1200</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="c2tl2l">
                        <div className="c2tl2li2"><div className="c2tic">GREECE</div><div className="c2tid">15% off</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>6 days 3 hours</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>15+ People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$2500</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c2tl3">
                    <div className="c2tl2l">
                        <div className="c2tl2li3"><div className="c2tic">SWITZERLAND</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>7 days 8 hours</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>50+ People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$750</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="c2tl2l">
                        <div className="c2tl2li"><div className="c2tic">ITALY</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>2 days</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>6 People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$1200</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c2tl4">
                    <div className="c2tl2l">
                        <div className="c2tl2li2"><div className="c2tic">GREECE</div><div className="c2tid">15% off</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>6 days 3 hours</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>15+ People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$2500</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="c2tl2l">
                        <div className="c2tl2li3"><div className="c2tic">SWITZERLAND</div></div>
                        <div className="c2tl2lc">
                            <div className="divh5">
                                <h5>Holiday Planners is a World Leading Online Tour Booking Platform</h5>
                            </div>
                            <div className="divp">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...</p>
                            </div>
                            <hr />
                            <div className="divic">
                                <div className="divicl">
                                    <div className="divicll">
                                        <div className="diviclli"><FaClock /></div>
                                    </div>
                                    <div className="diviclr">
                                        <h6>Duration</h6>
                                        <p>7 days 8 hours</p>
                                    </div>
                                </div>
                                <div className="divicr">
                                    <div className="divicrl">
                                        <div className="divicrli"><FaUserFriends /></div>
                                    </div>
                                    <div className="divicrr">
                                        <h6>Group Size</h6>
                                        <p>50+ People</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="divpr">
                                <div className="price"><b>$750</b></div>
                                <div className="button"><button><b>BOOK NOW</b></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c2tl5">
                    <button className='active'><b>1</b></button>
                    <button><b>2</b></button>
                    <button><b><IoIosArrowForward /></b></button>
                </div>
            </div>
            <div className="c2tr">
                <div className="c2tr1">
                    <form action="">
                        <div className="hdr">
                            <h2>Find Your Tour</h2>
                        </div>
                        <div className="srch">
                            <span><FaSearch /></span>
                            <input type="text" placeholder='Search Tour' />
                        </div>
                        <div className="whrt">
                            <span><FaLocationDot /></span>
                            <input type="text" placeholder='Where To?' />
                        </div>
                        <div className="mnth">
                            <span><FaCalendarAlt /></span>
                            <select name="" id="">
                                <option value="">Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                        </div>
                        <h5>Duration</h5>
                        <div className="drtn">                           
                            <select name="" id="">
                                <option value="">Any</option>
                                <option value="">1 Day Tour</option>
                                <option value="">2-4 Days Tour</option>
                                <option value="">5-7 Days Tour</option>
                                <option value="">7+ Days Tour</option>
                            </select>
                        </div>
                        <div className="prc">
                            <div>
                              <h5>Min Price</h5>
                              <div className="minprc">                                
                                <input type="number" placeholder='1' />
                              </div>
                            </div>
                            <div>
                              <h5>Max Price</h5>
                              <div className="maxprc">                               
                                <input type="number" placeholder='100' />
                              </div>
                            </div>
                        </div>
                        <div className="chck">
                            <div className="chcklbl">
                                <input type="checkbox" />
                                <label htmlFor="">Cultural</label>
                            </div>
                            <div className="chcklbl">
                                <input type="checkbox" />
                                <label htmlFor="">Adventure</label>
                            </div>
                            <div className="chcklbl">
                                <input type="checkbox" />
                                <label htmlFor="">Historical</label>
                            </div>
                            <div className="chcklbl">
                                <input type="checkbox" />
                                <label htmlFor="">Seaside</label>
                            </div>
                            <div className="chcklbl">
                                <input type="checkbox" />
                                <label htmlFor="">Discovery</label>
                            </div>
                        </div>
                        <div className="btn">
                            <button><b>FIND NOW</b></button>
                        </div>
                    </form>
                </div>
                <div className="c2tr2">
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
                <div className="c2tr3">
                    <div className="opac"></div>
                    <div className="c2tr3cont">
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
