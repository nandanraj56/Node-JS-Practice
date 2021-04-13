const users = []

//addUser removeUser, getUser, getUsers

const addUser= ({id,username,room})=>{
    if(!username || !room){
        return {
            error:'Username and Password required'
        }
    }
    
    //Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate data
    if(!username || !room){
        return {
            error:'Username and Password required'
        }
    }

    //Check for existing User
    const existingUser = users.find((user)=>{
        return user.username === username && user.room === room
    })
    console.log(existingUser)

    //Validate username
    if(existingUser)
        return {
            error: 'Username is in use!'
        }
    
    //Store user
    const user = {id,username,room}
    users.push(user)
    return { user }
}

const removeUser = ({id,username,room})=>{

}

const getUser = ({id, username, room})=>{

}

const getUsers = ({id, username, room})=>{

}

const y =addUser({
    id:32,
    username:"test",
    room:"kjhk"
})
const x =addUser({
    id:32,
    username:"test",
    room:"kjhk"
})

//console.log(users)
console.log(y)