# Employee Management System

A modern, responsive web application for managing employee data, built with React and Tailwind CSS.

## Features

- **User Authentication**: Secure login system with JWT token management
- **Employee Management**: View, edit, and manage employee details
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant feedback on user actions
- **Error Handling**: Comprehensive error management and user notifications
- **API Integration**: Seamless integration with Reqres API for user data

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pkjaknap/employee-management-system.git
   cd employee-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
employee-management-system/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## API Integration

The application uses the Reqres API for authentication and user data:

- **Authentication**: `/api/login`
- **User Data**: `/api/users`

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS (for styling)
  - React Router (for navigation)
  - React Context API (for state management)
  - Axios (for API requests)
  - React Toastify (for notifications)

## Key Features

### Authentication

- JWT-based authentication
- Secure token storage
- Protected routes
- Automatic token refresh

### User Interface

- Clean and modern design
- Responsive layout
- Intuitive navigation
- Loading states
- Error handling

### Data Management

- Real-time data updates
- Efficient state management
- Optimized API calls
- Error handling and recovery

## Future Improvements

1. **Enhanced Security**:

   - Implement refresh token rotation
   - Add rate limiting
   - Implement CSRF protection

2. **Additional Features**:

   - User profile management
   - Role-based access control
   - Advanced search and filtering
   - Bulk operations
   - Export functionality

3. **UI/UX Enhancements**:

   - Dark mode support
   - Custom themes
   - Enhanced mobile responsiveness
   - Accessibility improvements

4. **Performance Optimization**:
   - Implement caching
   - Add lazy loading
   - Optimize bundle size
   - Add service workers

## Assumptions and Considerations

1. **API Limitations**:

   - Reqres API is used for demonstration
   - Some features are simulated
   - Data persistence is not implemented

2. **Security**:

   - Tokens are stored in localStorage (for demo purposes)
   - Production implementation would require more security measures

3. **Performance**:

   - Optimized for modern browsers
   - Responsive design considerations
   - Efficient state management
   - Simplified Tailwind CSS classes for better maintainability

4. **Scalability**:
   - Modular architecture
   - Reusable components
   - Easy to extend functionality
   - Simplified styling system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
