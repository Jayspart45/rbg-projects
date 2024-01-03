import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        404 - Page Not Found
    </div>
  )
}

export default ErrorPage