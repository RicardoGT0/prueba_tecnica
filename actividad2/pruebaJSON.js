// crear una copia de arr y alterar el nombre del cliente en la copia unicamente
const arr = [
    {
        "aseguradora": "AFIRME",
        "cotizacion": {
            "cliente": {
                "tipoPersona": "fisica",
                "nombre": "prueba",
                "apellidoPat": "prueba",
                "apellidoMat": "prueba",
                "rfc": "",
                "fechaNacimiento": "01-01-2005",
                "ocupacion": "",
                "curp": "",
                "direccion": {
                    "calle": "oriente 945",
                    "noExt": "410",
                    "noInt": "021",
                    "colonia": "prueba",
                    "codPostal": "56618",
                    "poblacion": "mexico",
                    "ciudad": "cdmx",
                    "pais": "mexico"
                },
                "edad": "18",
                "genero": "MASCULINO",
                "telefono": "",
                "email": ""
            }
        }
    }
]


const copy= JSON.parse(JSON.stringify(arr));
copy[0].aseguradora = "PATITO"
copy[0].cotizacion.cliente.nombre = "Ricardo"
copy[0].cotizacion.cliente.apellidoPat = "Gonzalez"
copy[0].cotizacion.cliente.apellidoMat = "Tello"
copy[0].cotizacion.cliente.direccion.calle = "Politecnico"


console.log(JSON.stringify(copy));
console.log(JSON.stringify(arr));

