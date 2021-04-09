export const login = (user) => ({
    type: "LOGIN",
    data:{
        currentUser:user,
        authorization:user.roles
    }

})

export const logout = () => ({
    type: "LOGOUT",
    data:{
        currentUser:null,
        authorization:["PUBLIC"]
    }
})