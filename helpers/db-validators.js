const {User} = require('../models/user');



//verificar si el email existe
const validateEmail = async (email = '') => {
    const existsEmail = await User.findOne({email});
        if (existsEmail){
            throw new Error(`Email: ${email}, is registered`)
        }

        return true;
}





// Verificar si el teléfono existe
const validateTelephone = async (telephone = '') => {
    const existsTel = await User.findOne({ telephone });
    if (existsTel) {
        throw new Error(`Telephone: ${telephone}, is already registered`);
    }
    return true;
}




// Verificar si el DNI existe
const validateDni = async (dni = '') => {
    const existsDni = await User.findOne({ dni });
    if (existsDni) {
        throw new Error(`DNI: ${dni}, is already registered`);
    }
    return true;
}





//comprobamos si existe el usuario por el id
const userExistById = async(id) =>{

    const userExists = await User.findById(id);
    if(!userExists){
        throw new Error(`User doesnt exist: ${id}`);
    }

    return true;
}



/*
//comprobamos si existe la cateogiria por el id
const categoryExistById = async(id) =>{
    const categoryExist = await Category.findById(id);
    if(!categoryExist){
        throw new Error(`Category doesnt exist: ${id}`)
    }

    return true;
}

*/




//validamos las colecciones permitidas para actualizar imagenes
const allowedCollections = (collection = '', collections = []) => {

    const collectionInclude = collections.includes(collection);

    if(!collectionInclude){
        throw new Error(`The collection ${collection} is not allowed, ${collections}`);
    }

    return true;
}



module.exports = {
    validateEmail,
    validateTelephone,
    validateDni,
    userExistById,
    allowedCollections
}