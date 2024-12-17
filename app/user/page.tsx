import axios from 'axios'
export default async function SignIn(){

    //dat fetching from frontend via NEXTJS

    const response=await axios.get("http://localhost:3000/api/v1/user/details");

    const data=response.data
    console.log(data)
    return <div>
    sign In page
    {data.name}
    {data.email}
    </div>
}