# App Preview

![App Preview](amazonia.png)

<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logoColor=white&logo=Zod&color=3068b7" alt="zod" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=336791" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Drizzle_ORM-black?style=for-the-badge&logoColor=white&logo=drizzle&color=FF6B6B" alt="drizzle" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcn&color=2F855A" alt="shadcn" />
  </div>

  <h3 align="center">E-Commerce App</h3>

  <h4><a href="https://amazonia-ecommerce.vercel.app/" target="_blank">Deployed Live Website</a></h4>
</div>

### Authenticating

To authenticate as ADMIN and view the /admin/overview route, you can use the following credentials:

Email:

```bash
admin@example.com
```

Password:

```bash
123456
```
## 📋 <a name="table">Table of Contents</a>

1. 🛒 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Quick Start](#quick-start)

## <a name="introduction">🛒 Introduction</a>

This E-commerce app is built with Next.js and PostgreSQL, using Drizzle ORM for database interactions. It offers a seamless shopping experience with features like product listings, shopping cart management, user authentication, and order processing.

## <a name="tech-stack">⚙️ Tech Stack</a>

-   Next.js
-   Zod
-   PostgreSQL
-   Drizzle ORM
-   Tailwind CSS
-   Shadcn

## <a name="features">🔋 Features</a>

👉 **User Authentication**: Secure login and registration using social sign-on or traditional email and password methods.

👉 **Product Listings**: Browse through a variety of products, view detailed descriptions, and add items to the shopping cart.

👉 **Shopping Cart**: Manage your shopping cart, update quantities, and remove items before proceeding to checkout.

👉 **Order Processing**: Seamlessly process orders, including payment integration and order confirmation.

👉 **Admin Dashboard**: Admins can manage products, view orders, and handle customer queries through an intuitive dashboard.

👉 **Responsive Design**: Ensures optimal user experience across devices with a responsive and adaptive design.

👉 **Secure and Scalable**: Built with best practices for security and scalability in mind, ensuring data integrity and privacy.

and many more, including advanced search and filtering options.

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)
-   [pnpm](https://pnpm.io/) (Preferred Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Agamya-Samuel/Ecommerce-NextJS
cd Ecommerce-NextJS
```

**Installation**

Install the project dependencies using pnpm:

```bash

pnpm install
```

**Set Up Environment Variables**

Create a new file named .env in the root of your project and add the following content:

```envs
NEXTAUTH_SECRET=YOUR_SECRET

POSTGRES_URL=postgresql://user:password@localhost:5432/database

NEXT_PUBLIC_APP_NAME=YOUR_APP_NAME
NEXT_PUBLIC_APP_DESCRIPTION=YOUR_APP_DESCRIPTION

# Add other necessary environment variables
```

Replace the placeholder values with your actual PostgreSQL credentials and other necessary configuration.

**Running the Project**

```bash

pnpm run dev
```

Open http://localhost:3000 in your browser to view the project.

**Building for Production**

```bash

pnpm run build
pnpm start
```

This will start the production server.


**Contributing**

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

**License**

This project is licensed under the MIT License. See the LICENSE file for more information.

```css
Feel free to customize any section further based on the specific details of your project.
```
