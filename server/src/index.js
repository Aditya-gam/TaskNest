const app = require('./app');
const { createConnection } = require('typeorm');

const PORT = process.env.PORT || 5000;

// Database connection
createConnection()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
