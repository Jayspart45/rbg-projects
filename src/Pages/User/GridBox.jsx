import PropTypes from 'prop-types'
const GridBox = ({file}) => {
  return (
    <div className="h-44 w-40 bg-slate-200 m-2">
    <div className="oveflow-hidden break-words h-fit w-2/3 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {file}
    </div>
    </div>
  )
}

GridBox.propTypes = {
    file:PropTypes.string
}

export default GridBox