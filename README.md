# Image Search Application

This is a React application for searching and viewing images from Unsplash.

## Features

- Search for images using keywords
- Infinite scroll with "Load more" button
- Modal view for larger images with author information and likes
- Responsive design
- Toast notifications for user feedback
- Loading indicators

## Components

- **SearchBar** - Form for searching images
- **ImageGallery** - Grid display of image cards
- **ImageCard** - Individual image card component
- **Loader** - Loading indicator
- **ErrorMessage** - Error display component
- **LoadMoreBtn** - Button to load more images
- **ImageModal** - Modal window for viewing full-size images
- **App** - Main application component

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Unsplash API

1. Register at [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application
3. Get your Access Key from the application dashboard
4. Update the `ACCESS_KEY` in `src/services/unsplashApi.js`:

```javascript
const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
```

### 3. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/goit-js-hw-09/`

### 4. Build for production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Modal** - Modal windows
- **React Loader Spinner** - Loading indicators
- **CSS Modules** - Component styling

## Project Structure

```
src/
├── components/
│   ├── App/
│   │   ├── App.jsx
│   │   └── App.module.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.module.css
│   ├── ImageGallery/
│   │   ├── ImageGallery.jsx
│   │   └── ImageGallery.module.css
│   ├── ImageCard/
│   │   ├── ImageCard.jsx
│   │   └── ImageCard.module.css
│   ├── Loader/
│   │   ├── Loader.jsx
│   │   └── Loader.module.css
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.jsx
│   │   └── ErrorMessage.module.css
│   ├── LoadMoreBtn/
│   │   ├── LoadMoreBtn.jsx
│   │   └── LoadMoreBtn.module.css
│   └── ImageModal/
│       ├── ImageModal.jsx
│       └── ImageModal.module.css
├── services/
│   └── unsplashApi.js
├── main.jsx
└── index.css
```

## API Information

The application uses the [Unsplash API](https://unsplash.com/developers) to fetch images. The free tier allows up to 50 requests per hour.

## License

ISC
