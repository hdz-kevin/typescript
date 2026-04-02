
// Enums: Permite definir un conjunto de constantes con nombre

/**
 * const enum A: { } genera menos código al compilar, ya que se sustituye por los valores de las constantes
 * enum A: { }: Genera más código al compilar creando un objeto con las constantes
 */

const enum ERROR_TYPE {
    NOT_FOUND = "not_found",
    UNAUTHORIZED = "unauthorized",
    FORBIDDEN = "forbidden",
    INTERNAL_SERVER_ERROR = "internal_server_error",
}

function showErrorMessage(errorType: ERROR_TYPE) {
    switch (errorType) {
        case ERROR_TYPE.NOT_FOUND:
            console.log("Resource not found")
            break
        case ERROR_TYPE.UNAUTHORIZED:
            console.log("You are not authorized")
            break
        case ERROR_TYPE.FORBIDDEN:
            console.log("You don't have permission to access this resource")
            break
        case ERROR_TYPE.INTERNAL_SERVER_ERROR:
            console.log("Something went wrong")
            break
    }
}

showErrorMessage(ERROR_TYPE.INTERNAL_SERVER_ERROR);
showErrorMessage(ERROR_TYPE.UNAUTHORIZED);
