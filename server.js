import { app, startServer } from './utils/initializer.js';
import contactRoutes from './router/contactRoutes.js';
import userRoutes from './router/userRoutes.js'
import { errorHandler } from './middleware/errorHandler.js';
import { connectDB } from './config/dbConnection.js';

// Database connection
connectDB()
// Middlewares
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler)
// Listener
startServer();
