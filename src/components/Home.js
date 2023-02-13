
import {Link} from 'react-router-dom'
import chair from '../assets/homeImage.png'
import Feutures from './Feutures'

const Home = () => {
 
    return (
      <>
    <div className='flex items-center flex-col-reverse md:flex-row justify-between '>

      {/* left */}
        <div className='md:w-1/2 space-y-5 mt-14 md:mt-0'>
          <h5 className='text-2xl'>New Products</h5>
          <h1 className='text-3xl'>Flexible Chair</h1>
          <p className='text-lg text-gray-500'>It is a long established fact that a reader will be <br /> distracted by the readable content of a page when looking</p>
          <button className='bg-orange-600 px-5 text-white hover:text-orange-500 hover:bg-white py-2 shadow translate-all duration-500'>
            <Link to="/products">Show Now</Link>
          </button>

        </div>

        {/* right */}
        <div >
          <img src={chair} alt="" />
        </div>
    </div>
 
      <Feutures />
  </>
  )

}


export default Home
