import { useParams } from "react-router"


export default function Contact() {
  const params=useParams()
  console.log(params);
  return (
   <h1>contact us</h1>
  )
}
