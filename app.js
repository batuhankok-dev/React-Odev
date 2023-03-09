
import axios from "axios";

async function getData(item) {
    try{
        const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/" + item);
        const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + item);

    console.log("Users : " , users);
    console.log("Posts : " , posts);
    }
    catch(error){
        console.log(error);
    }
}

export default getData