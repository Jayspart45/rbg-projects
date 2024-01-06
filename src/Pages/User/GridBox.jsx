import PropTypes from 'prop-types'
const GridBox = ({file,submit}) => {
  return (
    <div className="h-44 w-40 bg-white rounded border border-solid border-Green border-opacity-30 shadow text-xs m-2 ">
    <div className="oveflow-hidden break-words flex flex-col justify-between h-fit w-1/2 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div>
    <span className='font-semibold text-xs'>
      {file.name}
    </span>
    <span>
    {
      file.size/1000000<1 ? Math.round(file.size/1000)+"KB":Math.round(file.size/1000000)+"MB"
    }
    </span>
    </div>
    <button onClick={()=>submit(file)} className="bg-Green w-fit p-1 my-1 rounded text-white border-black bg-opacity-90">
                      process
                    </button>
    </div>
    </div>
  )
}

GridBox.propTypes = {
    file:PropTypes.object,
    submit:PropTypes.func
}

export default GridBox