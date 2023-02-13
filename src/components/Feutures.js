
import bed from '../assets/bed.png'
import chair from '../assets/chair.jpeg'
import lounch from '../assets/lounch.png'
import living from '../assets/living.png'

const Feutures = () => {
  return (
    <div>
      <h1 className="text-center text-xl">Feutures</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-14 mt-14'>
        <div className='flex items-center border-2 border-gray-600 rounded-full py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 translate-all duration-300 cursor-pointer' >
            <img src={bed} />
            <h1>Bedroom</h1>
        </div>

        <div className='flex items-center border-2 border-gray-600 rounded-full py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 translate-all duration-300 cursor-pointer' >
            <img src={chair} />
            <h1>Chair</h1>
        </div>

        <div className='flex items-center border-2 border-gray-600 rounded-full py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 translate-all duration-300 cursor-pointer' >
            <img src={lounch} />
            <h1>Lounch</h1>
        </div>

        <div className='flex items-center border-2 border-gray-600 rounded-full py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 translate-all duration-300 cursor-pointer' >
            <img src={living} />
            <h1>Living</h1>
        </div>
      </div>
    </div>
  )
}

export default Feutures
