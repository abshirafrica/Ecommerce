import { useEffect, useState } from "react"


const Projects = () => {
  const [date, setDate] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setDate(json))
  })
  return (
    <div>
      {/* top */}
      <div className="flex items-center justify-between bg-gray-300 p-3">
        <h1 className="text-center">28 Products</h1>
        <div>
          <select className="py-2 px-8">
            <option>Reelevence</option>
            <option>Nme(A-Z)</option>
          </select>
        </div>
      </div>

      {/* products card */}
      <div className="flex items-center justify-center flex-wrap">

        {
          date.map((item) =>(
            <div className="flex items-center justify-center p-5">   
              <div className="flex flex-col items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-2xl translate-x-1 duration-500"> 
                <img src={item.image} className="h-60 w-52" /> 
                <div className="flex flex-col items-center justify-center flex-wrap px-3 space-x-6"> 
                    <h1 className="text-gray-400">{item.title}</h1>
                    <p>{item.price}</p>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
