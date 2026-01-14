# Invoice App

A simple invoice application implementing user authentication, invoice creation, and real-time activity feed.


## Features

- User authentication (signup/login) using Firebase.
- Create & view invoices.
- Real-time invoice activity feed simulation.
- Responsive design for desktop and mobile.
- Error handling for invalid input, network errors, and invalid routes.


## Tech Stack

- **Frontend:** Vue 3
- **Validation:** Vee-validate
- **Authentication:** Firebase
- **API / Mock Backend:** json-server
- **Real-time Simulation:** Custom interval-based activity feed

## Installation & Setup

1. Clone the repo:
```bash
git clone https://github.com/toriola998/Invoice-application.git
cd Invoice-application
```


2. Install dependencies:

```bash
npm install
```

3. Start the mock backend:

```bash
npm run mock-api
```

4. Start the frontend app:

```bash
npm run dev
```
5. Open in browser: http://localhost:5173 (or default port for Vite)

### Compile and Minify for Production

```sh
npm run build
```

### Format & Linting

```sh
npm run format
```


## Environment Variables

The project uses environment variables to configure API base URLs and Firebase authentication.  
Create a `.env` file in the root of the project with the following variables:

```env
VITE_BASE_URL=''
VITE_API_KEY=''
VITE_AUTH_DOMAIN=''
VITE_PROJECT_ID=''
VITE_STORAGE_BUCKET=''
VITE_MESSAGE_SENDER_ID=''
VITE_APP_ID=''
VITE_MEASUREMENT_ID=''
```

## Assumptions
- Loading spinners / skeleton loaders might not be visible for long when running on a local server due to fast responses.
- Real-time activity updates are simulated using intervals and may not reflect actual backend socket events, for **invoice activities**.
- Invoice IDs and user names are randomly generated for simulation purposes.
