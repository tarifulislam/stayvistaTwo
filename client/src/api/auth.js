import axiosSrcure from "."

// for save user in database --------------------------------
export const saveUser = async user => {
    const currentUser = {
        email : user.email,
        role: 'guest',
        // role: 'admin',
        status : 'Verified'
    }
    const {data} = await axiosSrcure.put(`/users/${user.email}`, currentUser)
    return data;

}

// get token from server ----------------------------------------

export const getToken = async email => {
    const {data} = await axiosSrcure.post(`/jwt`, email);
    console.log("token recicved from server", data);

    return data;
}

// clear token from browser  ----------------------------------------------------


export const clearCookie = async () => {
    const {data} = await axiosSrcure.get('/logout');
    return data;
}

