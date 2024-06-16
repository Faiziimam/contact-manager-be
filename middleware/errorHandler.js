import {statusCode as code} from '../constants/statusCode.js';

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case code.VALIDATION_ERROR:
      res.json ({
        title: 'VALIDATION_ERROR',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case code.NOTFOUND:
      res.json ({
        title: 'NOTFOUND',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case code.UNAUTHORIZED:
      res.json ({
        title: 'UNAUTHORIZED',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case code.FORBIDDEN:
      res.json ({
        title: 'FORBIDDEN',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case code.SERVER:
      res.json ({
        title: 'SERVER_ERROR',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default: 
      console.log("Everything is OK")
      break;
  }
};
