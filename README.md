# SpiceRoute

A full-stack food delivery web application built as a portfolio project by Ashish Kumar Ojha. SpiceRoute lets users browse restaurants, explore menus, manage a cart, and complete payments — all in a responsive, dark-themed interface.

Live at: https://food-delivery-web-page-zby6.vercel.app

---

## The project

SpiceRoute was built to demonstrate real-world full-stack development — not a tutorial clone, but a complete application with its own backend, authentication, payment integration, and database. The frontend handles routing, state management, lazy loading, and a full checkout flow. The backend manages auth, cart persistence, restaurant data, and payment processing via Razorpay webhooks.

---

## Tech stack

| Layer | Technology |
|---|---|
| UI library | React 19 |
| Routing | React Router DOM 6 |
| State management | Redux Toolkit |
| Styling | Tailwind CSS 4 |
| HTTP client | Axios |
| Bundler | Parcel 2 |
| Testing | Jest + React Testing Library |

---

## Features

- Browse restaurants with infinite scroll (IntersectionObserver + paginated API)
- Search restaurants by name and cuisine
- Filter by top rated (above 4.2)
- Individual restaurant pages with categorized, collapsible menus
- Add to cart with quantity management, persisted to backend
- Full checkout flow with Razorpay payment integration
- Order history page showing past successful payments
- User authentication (signup, login, logout) with JWT and HTTP-only cookies
- Protected routes — cart and checkout redirect to login if unauthenticated
- Animated shimmer loading skeletons
- Responsive across mobile, tablet, and desktop
- Avatar dropdown with initials, built with a React portal to avoid header clipping
- Toast notifications for cart and payment feedback

---

## Project structure

```
src/
├── Components/
│   ├── About.js
│   ├── Accordian.js
│   ├── AddedToCart.js
│   ├── Body.js
│   ├── Card3.js
│   ├── Cart.js
│   ├── CartHeader.js
│   ├── CartItem.js
│   ├── CartItemsIndividual.js
│   ├── Contact.js
│   ├── Error.js
│   ├── Footer.js
│   ├── Header.js
│   ├── HomePage.js
│   ├── individualRes.js
│   ├── item.js
│   ├── LoginPage.js
│   ├── Order.js
│   ├── OrderHistory.js
│   ├── Shimmer.js
│   ├── sum.js
│   └── UserDropDown.js
├── utils/
│   ├── appStore.js
│   ├── CartSlice.js
│   ├── constants.js
│   ├── restaurantSlice.js
│   ├── useonlinestatus.js
│   ├── UserContext.js
│   ├── useRestra.js
│   └── userSlice.js
├── react.js
└── index.html
```

---

## Getting started

### Prerequisites

- Node.js v24.3.0 or higher
- npm

### Installation

```bash
git clone https://github.com/ashish0jha/SpiceRoute.git
cd SpiceRoute
npm install
```

### Environment setup

Create a `.env.development` file in the project root:

```
BASE_URL=http://localhost:8009
```

Create a `.env.production` file for production builds:

```
BASE_URL=https://fooddelivery-backend-gk18.onrender.com
```

### Running locally

```bash
npm start
```

The app runs at `http://localhost:1234` by default (Parcel's dev server port).

### Building for production

```bash
npm run build
```

---

## Environment variables

| Variable | Purpose |
|---|---|
| `BASE_URL` | Backend API base URL — localhost in development, Render URL in production |

---

## Deployment

Frontend is deployed on Vercel. Vercel reads `BASE_URL` from its environment variables dashboard — set this to the Render backend URL once and all future deployments pick it up automatically.

---

## Known limitations and planned improvements

- No real-time order tracking (status is static after placement)
- Tests cover core components only — coverage can be expanded
- No PWA support yet

---

## Author

Ashish Kumar Ojha.
Student, Kamla Nehru Institute of Technology, Sultanpur

GitHub: https://github.com/ashish0jha
LinkedIn: https://www.linkedin.com/in/ashish-kumar-ojha-b63428291