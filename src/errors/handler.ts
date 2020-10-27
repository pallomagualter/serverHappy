import { ErrorRequestHandler } from 'express'; //padrão de erros
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[]; //formato: chave string e valor array de string
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {}; //inicializando vazio
 
        error.inner.forEach(err => { //percorrendo cada um dos erros e retorna objeto
            errors[err.path] = err.errors;
        });
        
        return response.status(400).json({ message: 'Validation fails', errors });
    }


    console.error(error);

    return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;