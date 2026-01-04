# Chef Claude

An AI-powered recipe generator built with React, Vite, and Google's Gemini API. Simply enter ingredients you have on hand, and Claude will generate creative recipe suggestions tailored to your available ingredients.

## Features

- **Ingredient Input**: Add ingredients to your list one at a time
- **AI Recipe Generation**: Uses Google Gemini 2.5 Flash model to generate creative recipes
- **Smart Formatting**: Recipes are formatted in Markdown for better readability
- **Real-time Updates**: Instant recipe generation with a simple click
- **Flexible Ingredients**: The AI can suggest recipes using some or all of your listed ingredients

## Tech Stack

- **Frontend**: React 18 with Hooks for state management
- **Build Tool**: Vite for fast development and optimized production builds
- **AI API**: Google Generative AI (Gemini)
- **Styling**: CSS with responsive design
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/roychrlstian/chef-claude.git
cd chef-claude
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the project root and add your API key:
```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port specified by Vite)

## Usage

1. **Add Ingredients**: Type an ingredient name in the input field and click "+ Add ingredient"
2. **Generate Recipe**: Once you have 4 or more ingredients, click "Get a recipe"
3. **View Recipe**: The AI-generated recipe will appear below with full instructions and ingredient details

## Project Structure

```
src/
├── Add.jsx        # Main component for ingredient input and recipe generation
├── App.jsx        # Root component
├── Header.jsx     # Header component
├── Main.jsx       # Application entry point
├── index.css      # Global styles
└── components/    # Additional reusable components
```

## How It Works

1. Users input ingredients into a form
2. The `getRecipe()` function sends ingredients to the Google Gemini API
3. The API processes the ingredients with a custom system prompt
4. A recipe suggestion is returned and displayed in Markdown format
5. Users can view full recipe details with ingredients and cooking instructions

## Environment Variables

The app requires the following environment variable:

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key (get one from [Google AI Studio](https://aistudio.google.com/app/apikey))

Note: The `VITE_` prefix is required for Vite to expose the variable to the browser.

## Development

### Running the Dev Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Future Enhancements

- [ ] Save favorite recipes
- [ ] Dietary restriction filters
- [ ] Cuisine type preferences
- [ ] Ingredient quantity and units
- [ ] Meal planning features
- [ ] User ratings and reviews
- [ ] Recipe history

## License

This project is open source and available under the MIT License.

## Author

Roy Christian - [GitHub](https://github.com/roychrlstian)
