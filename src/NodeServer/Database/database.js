const sql = require('mssql');

const config = {
  user: 'abdullah', // Your username
  password: '1234', // Your password
  server: 'localhost', // Or use your server's IP address or hostname
  database: 'Lost_And_Found',
  options: {
    encrypt: true, // Use encryption for secure connections
    trustServerCertificate: true, // Disable SSL validation (not recommended for production)
  },
};
async function connectDB( ) {
    try {
      if (!sql.connected) {
        await sql.connect(config);
        console.log('Connected to SQL Server');
      }
    } catch (err) {
      console.error('Database connection error:', err);
      throw err;
    }
  }
  
  module.exports = {
    sql,
    connectDB
  };

//🛠 How to Use in Other Files

