import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

export const startServer = async () => {
  try {
    await new Promise((resolve, reject) => {
      const server = app.listen(PORT, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(server);
        }
      });
    });
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
};
