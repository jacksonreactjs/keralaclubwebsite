# The Kerala Club Website - Installation Guide

This document provides instructions on how to set up and run the Kerala Club website on your own server.

## Prerequisites

- Node.js v18+ and npm installed
- PostgreSQL database server
- Git (optional)

## Installation Steps

### 1. Database Setup

1. Create a new PostgreSQL database for the application
2. Note your database connection string, which will be in this format:
   ```
   postgresql://username:password@hostname:port/database_name
   ```

### 2. Application Setup

1. Extract the provided zip file to your server directory
2. Navigate to the application directory:
   ```bash
   cd kerala-club-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```
   Replace `your_postgresql_connection_string` with your actual PostgreSQL connection string.

### 3. Database Migration

Run the database migration to create the necessary tables:

```bash
npm run db:push
```

This will create the required tables based on the schema defined in `shared/schema.ts`.

### 4. Building the Application

Build the application for production:

```bash
npm run build
```

### 5. Starting the Application

Start the application in production mode:

```bash
npm start
```

The application should now be running on `http://localhost:5000` (or your configured port).

## Configuration Options

### Custom Port

By default, the application runs on port 5000. To use a different port, you can:

1. Add a `PORT` environment variable to your `.env` file:
   ```
   PORT=8080
   ```

2. Or run the application with the PORT environment variable:
   ```bash
   PORT=8080 npm start
   ```

### SSL/HTTPS

For production deployments, it's recommended to use HTTPS. You can:

1. Set up a reverse proxy like Nginx or Apache in front of the application
2. Configure SSL/TLS certificates with Let's Encrypt or similar services

### Production Server Setup

For a production environment, it's recommended to:

1. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "kerala-club" -- start
   ```

2. Set up automatic restarts:
   ```bash
   pm2 startup
   pm2 save
   ```

## Troubleshooting

### Database Connection Issues

- Verify your PostgreSQL server is running
- Check the DATABASE_URL in your .env file
- Ensure the database user has proper permissions

### Application Errors

- Check the application logs for detailed error messages
- Make sure all environmental variables are correctly set
- Verify that all dependencies were installed correctly

## Maintenance

### Database Backups

It's recommended to set up regular backups of your PostgreSQL database:

```bash
pg_dump -U username database_name > backup_file.sql
```

### Updating the Application

When updates are available:

1. Backup your database
2. Extract the new files
3. Run database migrations if applicable
4. Restart the application

## Contact

For support or questions, please contact the Kerala Club administrator.