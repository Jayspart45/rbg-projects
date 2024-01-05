import PropTypes from 'prop-types'
const GridBox = ({file}) => {
  return (
    <div className="h-44 w-40 bg-white rounded border border-solid border-Green border-opacity-30 shadow text-xs m-2 ">
    <div className="oveflow-hidden break-words h-fit w-1/2 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <span className='font-semibold text-xs'>
      {file.name}
    </span>
    <br/>
    {
      file.size/1000000<1 ? Math.round(file.size/1000)+"KB":Math.round(file.size/1000000)+"MB"
    }
    </div>
    </div>
  )
}

GridBox.propTypes = {
    file:PropTypes.object
}

export default GridBox