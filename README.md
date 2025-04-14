# EmployWise User Management System

A React-based user management system that integrates with the Reqres API to perform basic user management functions.

## Features

- **Authentication**: Secure login system using Reqres API
- **User Management**: View, edit, and delete users
- **Pagination**: Navigate through user lists
- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Built with Material-UI components
- **Real-time Feedback**: Toast notifications for user actions

## Prerequisites

- Node.js (v18.17.0 or higher)
- npm (v10.9.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd employee-project
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Locally preview the production build.

## Deployment to Render

1. **Create a Render Account**

   - Go to [render.com](https://render.com)
   - Sign up for a free account

2. **Connect Your Repository**

   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub/GitLab repository
   - Select the repository containing this project

3. **Configure Deployment**

   - Name: employwise-user-management
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run preview`
   - Select the branch to deploy (usually main/master)

4. **Environment Variables**

   - No environment variables are required for this project

5. **Deploy**
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Your application will be available at `https://employwise-user-management.onrender.com`

## Project Structure

```
src/
├── components/     # Reusable components
├── context/        # React context providers
├── pages/          # Page components
├── utils/          # Utility functions
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## API Integration

The application uses the Reqres API (https://reqres.in/) for:

- Authentication
- User management
- Data fetching

### API Endpoints Used

- Login: `POST /api/login`
- Get Users: `GET /api/users?page={page}`
- Update User: `PUT /api/users/{id}`
- Delete User: `DELETE /api/users/{id}`

## Login Credentials

Use the following credentials to log in:

- Email: eve.holt@reqres.in
- Password: cityslicka

## Technologies Used

- React
- React Router
- Material-UI
- Axios
- React Toastify

## Key Features Implementation

1. **Authentication**

   - Token-based authentication
   - Secure token storage
   - Protected routes

2. **User Management**

   - View user list with pagination
   - Edit user details
   - Delete users
   - Real-time updates

3. **UI/UX**
   - Responsive design
   - Material-UI components
   - Toast notifications
   - Loading states

## Assumptions and Considerations

1. **API Limitations**

   - The Reqres API is a mock API, so changes are not persisted
   - Some API endpoints might return mock data

2. **Security**

   - Tokens are stored in localStorage
   - API endpoints are hardcoded for simplicity

3. **Error Handling**

   - Basic error handling for API calls
   - User-friendly error messages

4. **Performance**
   - Pagination implemented for better performance
   - Optimized re-renders using React hooks

## Future Improvements

1. Add user search functionality
2. Implement user creation
3. Add more detailed user profiles
4. Implement proper form validation
5. Add unit tests
6. Implement proper error boundaries

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
