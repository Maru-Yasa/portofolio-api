import { DB_HOST, DB_PORT, DB_DATABASE, DB_ATLAS } from '@config';

export const dbConnection = {
  // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url : DB_ATLAS,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
