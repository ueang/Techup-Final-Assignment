
async function fetchingUserList () {
    let response = await fetch ("https://jsonplaceholder.typicode.com/users")
    let responseJson=await response.json()
    let newUsers=responseJson.map((user)=>user.name)
    console.log(newUsers)
   }
  
   fetchingUserList()