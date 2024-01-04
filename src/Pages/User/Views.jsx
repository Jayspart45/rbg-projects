import { useEffect } from "react"
import { useState } from "react"
import GridBox from "./GridBox"
import Dashboard from "./Dashboard"


const Views = () => {
  const [dataArray, setDataArray] = useState([]);
  const handleDataFromChild = (data) => {
    setDataArray(data);
  };
  const [view, setView] = useState('grid')
  const [theme, setTheme] = useState({
    grid: 'bg-slate-100 bg-opacity-30',
    list: ''
  })

  //changing button background color on click

  useEffect(()=>{
    view==='grid'?setTheme({
      grid: 'bg-black text-white bg-opacity-65',
      list: ''
    }):setTheme({
      grid: '',
      list: 'bg-black text-white bg-opacity-65'
    })
  },[view])
  const setGrid = () =>{
    setView('grid')
  }
  const setList = () =>{
    setView('list')
  }

  //----------------------------------------------

    return (
    <div className="w-full max-h-screen">
        <div className="flex items-center justify-between w-full h-1/6 z-0">
          <Dashboard dataArray={dataArray} handleDataFromChild={handleDataFromChild}/>
          <div>
            <button onClick={setGrid} className=
            {`my-2 mx-1 px-4 py-1 rounded ${theme.grid} `} >
                Grid
            </button>
            <button onClick={setList} className={`my-2 mx-1 px-4 py-1 rounded ${theme.list} `} >
                List    
            </button>
          </div>
        </div>
        <div className="h-5/6 z-20">
          {
            view==='grid'?
              <div className="grid grid-cols-3 md:grid-cols-4 h-full overflow-y-auto gap-1">
                {
                  dataArray.map((file,index)=>(
                    <GridBox key={index} file={file}/>
                  ))
                }
              </div>
            : <div className="flex items-start h-full flex-col">
                {
                  <ul className="w-full p-4 h-full overflow-y-scroll">
                  {dataArray.map((file,index)=>(
                    <li key={index}  className="bg-slate-300 bg-opacity-30 h-12 flex items-center my-2 px-4 w-full rounded-lg">
                      {file.name+" "+ (file.size/1000000<1 ? Math.round(file.size/1000)+"KB":Math.round(file.size/1000000)+"MB")}
                    </li>
                  ))}
                  </ul>
                }
              </div>
          }
        </div>
    </div>
  )
}

export default Views