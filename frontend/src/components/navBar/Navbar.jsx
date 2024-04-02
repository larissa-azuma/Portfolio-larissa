import React from 'react'
import {Link} from 'react-scroll';
import {logo} from "../../assets/images/index"
import { navLinksdata } from '../../constants';


function Navbar () {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center font-titlefont'>
    <div>
    <img src={logo} alt='la logo.png'/>
    </div>
    <div>
<ul className='flex items-center gap-10'>
  {
    navLinksdata.map(({_id,title,link})=>(
      <li className='text=base font normal  text-grey-400 tracking-wide cursor-pointer 
      hover:text-designColor duration-300 '
      key={_id}>
      <Link
      activeClass='active'
      to= {link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      > 
      
      {title}
        </Link> 
         </li>
    ))
  }
</ul>



    </div>
    </div>
  );
}

export default Navbar