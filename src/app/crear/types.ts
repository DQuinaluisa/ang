export type Usuario = {
    _id?: string;
    nombre: string;
   apellido: string;
   nickname: string;
   email: string;
   passw: string;

}

export type Query = {
    getUsuarios: Usuario[];
}