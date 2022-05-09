function getAdmins(map) {
    let admins = []
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set("Andre", "Admin")
usuarios.set("Carlos", "User")
usuarios.set("Claudio", "User")
usuarios.set("Ster", "Admin")
usuarios.set("Pedro", "User")
usuarios.set("Filipe", "Admin")


console.log(getAdmins(usuarios))