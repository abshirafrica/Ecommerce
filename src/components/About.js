import image from '../assets/about.jpeg'

const About = () => {
  return (
    <div>
      <p className="text-center text-xl leading-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

      <div className='flex items-center flex-col md:flex-row space-x-3'>
        <div className='space-y-4 mt-5'>
            <img src={image} alt="Image"  />
            <h1 className='text-gray-400 text-sm leading-7'>OUR HISTORY</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>

        <div className='space-y-4 mt-5'>
            <img src={image} alt="Image"  />
            <h1 className='text-gray-400 text-sm leading-7'>OUR MESSION</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>


      </div>


    </div>
  )
}

export default About
