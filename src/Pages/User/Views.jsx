import { useEffect } from "react"
import { useState } from "react"

const files = [
  'file1',
  'file2',
  'file3',
  'file1',
  'file2',
  'file3',
  'file1',
  'file2',
  'file3',
  'file1',
  'file2',
  'file3'
]

const Views = () => {

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
    <div className="w-full h-screen">
        <div className="flex items-center justify-end w-full h-1/6">
            <button onClick={setGrid} className=
            {`my-2 mx-1 px-4 py-1 rounded ${theme.grid} `} >
                Grid
            </button>
            <button onClick={setList} className={`my-2 mx-1 px-4 py-1 rounded ${theme.list} `} >
                List    
            </button>
        </div>
        <div className="h-5/6">
          {
            view==='grid'?
              <div className="grid grid-cols-3 md:grid-cols-5 p-4 gap-4">
                {
                  files.map((file,index)=>(
                    <div key={index} className="bg-slate-400 bg-opacity-30 m-4 h-24 w-24 rounded-lg">
                      <p className="text-center">{file}</p>
                    </div>
                  ))
                }
              </div>
            : <div className="flex items-start flex-col">
                {
                  <ul className="w-full">
                  {files.map((file,index)=>(
                    <li key={index}  className="bg-slate-100 bg-opacity-30 my-2 px-4 w-full rounded-lg">
                      {file}
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