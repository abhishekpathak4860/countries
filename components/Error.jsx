import { useRouteError } from "react-router"

export default function Error() {

    const error=useRouteError()
    
  return (
    <div>{error.status} Something Went Wrong.</div>
  )
}
