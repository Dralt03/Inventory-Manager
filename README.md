# Inventory Manager

## Overview

Inventory Manager is a web application designed to help users keep track of their products. Users can log in, create shops, add items to these shops, and manage the quantity of each item. The application is built using the MERN stack, with the frontend deployed on Vercel and the backend deployed on Render. User authentication is handled through ClerkAuth.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) (with TypeScript)
  - [Tailwind CSS](https://tailwindcss.com/)
  - Deployed on [Vercel](https://vercel.com/)
- **Backend:**

  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - Deployed on [Render](https://render.com/)

- **Database:**

  - [MongoDB](https://www.mongodb.com/)

- **Authentication:**
  - [ClerkAuth](https://clerk.dev/)

## Features

- **User Authentication:** Users can sign up and log in securely using ClerkAuth.
- **Shop Management:** Users can create multiple shops.
- **Item Management:** Within each shop, users can add items along with their quantities.
- **Responsive Design:** The application is fully responsive, providing an optimal user experience on both desktop and mobile devices.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- Vercel account (for frontend deployment)
- Render account (for backend deployment)

### Backend Setup

1. Clone the backend repository:

   ```bash
   git clone <backend-repo-url>
   cd backend-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your environment variables:

   ```env
   MONGODB_URI=<your-mongodb-uri>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Deploy the backend on Render following their deployment guidelines.

### Frontend Setup

1. Clone the frontend repository:

   ```bash
   git clone <frontend-repo-url>
   cd frontend-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your environment variables:

   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   NEXT_PUBLIC_BACKEND_URL=<your-backend-url>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Deploy the frontend on Vercel following their deployment guidelines.

## Project Structure

### Backend

backend/
├── db/
├── models/
├── middleware/
├── index.js
├── .env
├── package.json
└── README.md

### Frontend

frontend/
├── src/
│ ├── app/
| │ ├── api/
| │ ├── (auth)/
| │ ├── (main)/
| | │ ├── Inventory/
| | │ ├── Overview/
| │ └── page.tsx
| ├── components/
| ├── lib/
| │ ├── db.ts
| ├── middleware.ts
├── .env.local
├── package.json
└── README.md

## API Endpoints

### Shops

- **GET** `/api/users/:userId/shops` - Get all shops for the logged-in user
- **POST** `/api/users/:userId/shops` - Create a new shop
- **PUT** `/api/users/:userId/shops/:shopId` - Update a shop
- **DELETE** `/api/users/:userId/shops/:shopId` - Delete a shop

### Items

- **GET** `/api/users/:userId/shops/:shopId/items` - Get all items for a specific shop
- **POST** `/api/users/:userId/shops/:shopId/items` - Add a new item to a specific shop
- **DELETE** `/api/users/:userId/shops/:shopId/items/:itemId` - Delete an item from a specific shop

## Usage

1. **Sign Up / Log In:** Users can sign up or log in using the authentication page.
2. **Create Shops:** Once logged in, users can create new shops.
3. **Add Items:** Within each shop, users can add items along with their quantities.
4. **Manage Items:** Users can update or delete items as needed.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries, please contact [sharmasaurenb@gmail.com](mailto:sharmasaurenb@gmail.com).
