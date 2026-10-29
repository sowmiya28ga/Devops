/**
 * Random Recipe Generator - script.js
 * Vanilla JavaScript application logic
 * Includes 18 sample recipes, localStorage favorites, category filtering,
 * live search, and error handling.
 */

// ==========================================
// 1. RECIPE DATABASE (18 Sample Recipes)
// ==========================================
const recipes = [
  {
    id: 1,
    name: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    dietary: "Vegetarian",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    description: "Golden, cloud-like pancakes bursting with sweet fresh blueberries, served warm with pure maple syrup.",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1 tbsp granulated sugar",
      "1/2 tsp salt",
      "1 1/4 cups whole milk",
      "1 large egg",
      "3 tbsp unsalted butter, melted",
      "1 cup fresh blueberries",
      "Warm maple syrup and butter for serving"
    ],
    instructions: [
      "In a large mixing bowl, whisk together the flour, baking powder, sugar, and salt.",
      "In a separate bowl, whisk together the milk, egg, and melted butter until well blended.",
      "Pour the wet mixture into the dry ingredients. Gently stir with a spatula until just combined (a few lumps are completely normal).",
      "Gently fold in 3/4 cup of the fresh blueberries, reserving some for topping.",
      "Heat a large non-stick skillet or griddle over medium heat and lightly grease with butter.",
      "Pour 1/4 cup of batter per pancake onto the hot skillet. Cook until bubbles appear on the surface (about 2-3 minutes).",
      "Carefully flip and cook the other side for 1-2 minutes until golden brown.",
      "Serve warm stacked high with fresh blueberries and generous maple syrup."
    ]
  },
  {
    id: 2,
    name: "Classic Eggs Benedict with Bacon",
    category: "Breakfast",
    dietary: "Non-Vegetarian",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    description: "Toasted English muffins topped with savory Canadian bacon, perfectly runny poached eggs, and silky homemade hollandaise sauce.",
    ingredients: [
      "4 large fresh eggs",
      "2 English muffins, split in half",
      "4 slices Canadian bacon or thick-cut ham",
      "3 egg yolks (for sauce)",
      "1 tbsp fresh lemon juice",
      "1/2 cup unsalted butter, melted & warm",
      "1 tbsp white vinegar (for poaching)",
      "Pinch of cayenne pepper and salt",
      "Fresh chopped chives for garnish"
    ],
    instructions: [
      "Make the hollandaise: In a heatproof bowl set over simmering water (double boiler), vigorously whisk egg yolks and lemon juice until thickened.",
      "Slowly drizzle in warm melted butter in a thin stream while whisking continuously until rich and creamy. Season with cayenne and salt; keep warm.",
      "Sear the Canadian bacon in a skillet over medium heat for 2 minutes per side until lightly browned.",
      "Poach eggs: Bring a pot of water with vinegar to a gentle simmer. Create a gentle whirlpool and slip in cracked eggs one at a time. Simmer 3-4 minutes.",
      "Toast the English muffin halves until crisp and golden.",
      "Assemble: Place muffin halves on plates, top with bacon, a poached egg, and spoon warm hollandaise sauce over each. Garnish with chives."
    ]
  },
  {
    id: 3,
    name: "Avocado Toast with Poached Egg & Feta",
    category: "Breakfast",
    dietary: "Vegetarian",
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    description: "Crispy artisan sourdough bread spread with creamy seasoned avocado, crumbled feta cheese, and crowned with a warm poached egg.",
    ingredients: [
      "2 thick slices artisan sourdough bread",
      "1 large ripe avocado",
      "2 fresh eggs",
      "2 tbsp crumbled feta cheese",
      "1 tbsp extra virgin olive oil",
      "1 tsp fresh lemon juice",
      "1/4 tsp red pepper chili flakes",
      "Flaky sea salt and freshly ground black pepper",
      "1 tbsp white vinegar for poaching water"
    ],
    instructions: [
      "Toast sourdough bread slices until golden brown and firm.",
      "Cut the avocado in half, remove pit, and scoop into a bowl. Add lemon juice, olive oil, salt, and black pepper. Mash with a fork to desired chunkiness.",
      "Poach eggs in simmering water with vinegar for 3 to 4 minutes until whites are firm and yolk is runny. Drain on paper towels.",
      "Generously spread mashed avocado over the warm toasted sourdough.",
      "Place a poached egg gently on top of each toast slice.",
      "Sprinkle crumbled feta, red pepper flakes, and a touch of flaky sea salt. Serve immediately."
    ]
  },
  {
    id: 4,
    name: "Shakshuka with Warm Pita",
    category: "Breakfast",
    dietary: "Vegetarian",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 3,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    description: "Eggs gently poached in a rich, spicy tomato and sweet bell pepper sauce fragrant with cumin, paprika, and fresh cilantro.",
    ingredients: [
      "4 large eggs",
      "1 can (14 oz) whole peeled San Marzano tomatoes, crushed",
      "1 medium yellow onion, diced",
      "1 red bell pepper, seeded and chopped",
      "2 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp sweet smoked paprika",
      "1/4 tsp cayenne pepper",
      "2 tbsp extra virgin olive oil",
      "Fresh cilantro or parsley, chopped",
      "Warm pita bread or crusty bread for dipping"
    ],
    instructions: [
      "Heat olive oil in a large deep skillet over medium heat.",
      "Add diced onion and chopped bell pepper; cook for about 5 minutes until tender.",
      "Stir in minced garlic, cumin, paprika, and cayenne; cook 1 minute until fragrant.",
      "Pour in crushed tomatoes, season with salt and black pepper, and simmer for 10 minutes until sauce thickens slightly.",
      "Use a spoon to create 4 small wells in the sauce. Crack an egg into each well.",
      "Cover skillet and cook gently on low heat for 5-8 minutes until egg whites are set and yolks remain soft.",
      "Garnish with chopped cilantro and serve piping hot straight from the skillet with warm pita."
    ]
  },
  {
    id: 5,
    name: "Authentic Italian Margherita Pizza",
    category: "Lunch",
    dietary: "Vegetarian",
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: 3,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    description: "Crispy crust topped with simple San Marzano tomato puree, creamy fresh mozzarella rounds, and fresh fragrant basil leaves.",
    ingredients: [
      "1 ball (approx. 250g) prepared pizza dough",
      "1/2 cup crushed San Marzano canned tomatoes",
      "6 oz fresh mozzarella cheese, sliced and drained",
      "Fresh basil leaves",
      "1 tbsp extra virgin olive oil",
      "1/2 tsp kosher salt",
      "1 tbsp fine semolina or cornmeal for dusting"
    ],
    instructions: [
      "Preheat your oven to the maximum setting (ideally 475°F to 500°F / 250°C) with a pizza stone or heavy baking sheet inside.",
      "Stretch pizza dough by hand on a lightly floured parchment paper into a 10-12 inch circle.",
      "Spread crushed tomatoes evenly across the dough, leaving a 1/2-inch border for the crust.",
      "Distribute fresh mozzarella slices evenly over the sauce and lightly season with salt.",
      "Transfer onto the hot baking stone or sheet. Bake for 10-12 minutes until crust is blistered and cheese is bubbly and golden.",
      "Remove from oven, immediately scatter fresh basil leaves over the top, drizzle with olive oil, slice and serve."
    ]
  },
  {
    id: 6,
    name: "Crispy Chicken Caesar Salad",
    category: "Lunch",
    dietary: "Non-Vegetarian",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    description: "Crispy seasoned chicken strips served over chilled romaine hearts with savory Caesar dressing, garlic croutons, and parmesan curls.",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "1 large head romaine lettuce, washed and torn",
      "1/2 cup garlic herb croutons",
      "1/3 cup Caesar dressing",
      "1/3 cup shaved Parmigiano-Reggiano cheese",
      "1/2 cup panko breadcrumbs",
      "1 large egg, beaten",
      "2 tbsp olive oil",
      "Lemon wedges for serving",
      "Salt and cracked black pepper"
    ],
    instructions: [
      "Pound chicken breasts to an even 1/2-inch thickness. Season with salt and pepper.",
      "Dip chicken into beaten egg, then coat thoroughly in panko breadcrumbs.",
      "Heat olive oil in a skillet over medium heat. Pan-fry chicken for 5-6 minutes per side until crispy and cooked through (165°F internal). Rest 5 minutes, then slice.",
      "In a large salad bowl, toss torn crisp romaine lettuce with creamy Caesar dressing.",
      "Top salad with sliced crispy chicken, crunchy croutons, and freshly shaved parmesan.",
      "Finish with freshly cracked black pepper and serve with lemon wedges."
    ]
  },
  {
    id: 7,
    name: "Mediterranean Greek Salad",
    category: "Lunch",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Sun-ripened tomatoes, crisp cucumbers, red onions, Kalamata olives, and rich feta block tossed in extra virgin olive oil and oregano.",
    ingredients: [
      "3 large ripe vine tomatoes, cut into wedges",
      "1 English cucumber, sliced into thick half-moons",
      "1/2 small red onion, thinly sliced",
      "1/2 cup pitted Kalamata olives",
      "1 block (7 oz) authentic Greek feta cheese",
      "3 tbsp extra virgin olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp dried Greek oregano",
      "Sea salt and freshly ground pepper"
    ],
    instructions: [
      "In a wide salad bowl, combine tomato wedges, sliced cucumber, and thinly sliced red onions.",
      "Gently fold in Kalamata olives.",
      "In a small jar, shake together olive oil, red wine vinegar, salt, and pepper to create vinaigrette.",
      "Drizzle dressing over the vegetables and toss gently to coat.",
      "Place the whole slab or thick cubes of feta on top of the salad.",
      "Generously dust dried oregano and drizzle an extra teaspoon of olive oil over the feta. Serve with warm crusty bread."
    ]
  },
  {
    id: 8,
    name: "Double Smash Burger with Caramelized Onions",
    category: "Lunch",
    dietary: "Non-Vegetarian",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Two crispy-edged smashed beef patties layered with melted sharp American cheddar and sweet caramelized onions on toasted brioche.",
    ingredients: [
      "1/2 lb 80/20 ground chuck beef, divided into 4 balls",
      "2 brioche burger buns, split",
      "4 slices American cheddar cheese",
      "1 large yellow onion, thinly sliced",
      "2 tbsp unsalted butter",
      "3 tbsp mayonnaise mixed with 1 tbsp ketchup & 1 tsp relish (burger sauce)",
      "Kosher salt and coarse black pepper"
    ],
    instructions: [
      "Melt 1 tbsp butter in a pan over medium-low heat. Cook sliced onions with a pinch of salt for 15 minutes until deep golden brown and caramelized.",
      "Spread butter on the cut sides of brioche buns and toast in a dry skillet until golden; set aside.",
      "Heat a heavy cast-iron skillet over high heat until smoking hot.",
      "Place 2 beef balls onto the dry skillet. Using a heavy spatula, press down firmly to smash them ultra-thin. Season liberally with salt and pepper.",
      "Cook undisturbed for 2 minutes until dark crispy crust forms. Flip patties, immediately place cheese slices on top, and cook 1 more minute.",
      "Spread burger sauce on both bun halves, stack two cheesy smashed patties onto each bottom bun, top with caramelized onions, close bun and enjoy!"
    ]
  },
  {
    id: 9,
    name: "Creamy Tuscan Garlic Chicken",
    category: "Dinner",
    dietary: "Non-Vegetarian",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    description: "Tender pan-seared chicken breasts smothered in a velvety garlic parmesan cream sauce packed with sun-dried tomatoes and wilted spinach.",
    ingredients: [
      "2 large chicken breasts, halved horizontally into 4 cutlets",
      "1 cup heavy whipping cream",
      "1/2 cup chicken broth",
      "4 cloves garlic, finely minced",
      "1/2 cup sun-dried tomatoes, drained and sliced",
      "2 cups fresh baby spinach leaves",
      "1/2 cup freshly grated Parmesan cheese",
      "2 tbsp olive oil",
      "1 tsp Italian seasoning (oregano, thyme, basil)",
      "Salt and freshly cracked black pepper"
    ],
    instructions: [
      "Season chicken cutlets with Italian seasoning, salt, and pepper.",
      "Heat olive oil in a large skillet over medium-high heat. Sear chicken 5 minutes per side until golden and cooked through. Transfer to a plate.",
      "In the same skillet, add minced garlic and sun-dried tomatoes; sauté for 1 minute until fragrant.",
      "Pour in chicken broth and heavy cream. Bring to a simmer, scraping up any browned bits from the pan.",
      "Stir in grated parmesan cheese and cook for 3 minutes until sauce begins to thicken.",
      "Add fresh baby spinach and stir until gently wilted.",
      "Return seared chicken cutlets along with any resting juices into the sauce. Simmer 2 minutes and serve over pasta or mashed potatoes."
    ]
  },
  {
    id: 10,
    name: "Paneer Butter Masala",
    category: "Dinner",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    description: "Soft cubes of cottage cheese bathed in an aromatic, velvety tomato, butter, and cashew gravy infused with aromatic Indian spices.",
    ingredients: [
      "250g paneer (Indian cottage cheese), cubed",
      "4 large ripe tomatoes, pureed",
      "1 large onion, finely chopped",
      "10 raw cashews soaked in warm water & ground to paste",
      "2 tbsp unsalted butter",
      "1 tbsp cooking oil",
      "1 tbsp ginger-garlic paste",
      "1 tsp Kashmiri chili powder",
      "1 tsp garam masala",
      "1/2 tsp ground turmeric",
      "1 tbsp dried fenugreek leaves (kasuri methi), crushed",
      "3 tbsp fresh heavy cream"
    ],
    instructions: [
      "Heat oil and 1 tbsp butter in a pan over medium heat. Sauté chopped onions until golden brown.",
      "Add ginger-garlic paste and cook 1 minute until raw aroma dissipates.",
      "Add tomato puree, chili powder, turmeric, and salt. Cook covered for 10 minutes until oil separates from the gravy.",
      "Stir in cashew paste and 1/2 cup warm water; simmer on low heat for 5 minutes until rich and smooth.",
      "Add paneer cubes and garam masala. Gently stir and simmer 3-4 minutes so paneer absorbs the flavors.",
      "Crush kasuri methi between palms and sprinkle into gravy. Stir in heavy cream and remaining 1 tbsp butter.",
      "Serve warm garnished with a swirl of cream alongside garlic naan or basmati rice."
    ]
  },
  {
    id: 11,
    name: "Grilled Lemon Herb Salmon",
    category: "Dinner",
    dietary: "Non-Vegetarian",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    description: "Succulent salmon fillets brushed with garlic-herb infused butter and grilled to flaky perfection with charred lemons.",
    ingredients: [
      "2 fresh salmon fillets (approx. 6 oz each)",
      "2 tbsp olive oil or melted butter",
      "2 cloves garlic, finely grated",
      "1 tbsp fresh lemon juice & zest of 1 lemon",
      "1 tbsp fresh dill, chopped",
      "1 tsp fresh parsley, chopped",
      "1/2 tsp kosher salt",
      "1/4 tsp black pepper",
      "1 lemon, sliced into rounds for grilling"
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season both sides with salt and black pepper.",
      "In a small dish, mix melted butter (or olive oil), grated garlic, lemon zest, lemon juice, dill, and parsley.",
      "Brush the herb marinade generously over both sides of salmon fillets.",
      "Preheat grill or stovetop grill pan to medium-high heat and oil the grates lightly.",
      "Place salmon skin-side up and cook for 4-5 minutes without moving to develop grill marks.",
      "Carefully flip fillets using a fish spatula. Cook skin-side down for another 4-5 minutes until fish flakes easily with a fork.",
      "Grill lemon slices for 2 minutes alongside salmon. Serve hot with grilled lemon slices and extra fresh dill."
    ]
  },
  {
    id: 12,
    name: "Creamy Wild Mushroom Risotto",
    category: "Dinner",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    description: "Creamy slow-simmered Arborio rice infused with earthy cremini and shiitake mushrooms, white wine, and aged parmesan.",
    ingredients: [
      "1 1/2 cups Arborio rice",
      "8 oz mixed mushrooms (cremini, shiitake), sliced",
      "4 cups warm vegetable broth",
      "1/2 cup dry white wine (or extra broth with splash of lemon)",
      "1 medium shallot, finely minced",
      "2 cloves garlic, minced",
      "3 tbsp unsalted butter",
      "2 tbsp olive oil",
      "1/2 cup freshly grated Parmigiano-Reggiano",
      "2 tbsp fresh chopped parsley",
      "Salt and freshly ground black pepper"
    ],
    instructions: [
      "Keep vegetable broth warm in a small saucepan over low heat.",
      "In a large Dutch oven or skillet, heat 1 tbsp olive oil and 1 tbsp butter over medium-high heat. Sauté mushrooms until browned and tender (about 5-6 minutes). Set half aside for garnish.",
      "Add remaining olive oil and shallot to the pan; cook 2 minutes until translucent. Stir in minced garlic and cook 30 seconds.",
      "Add Arborio rice and toast for 2 minutes, stirring constantly until edges turn translucent.",
      "Pour in white wine and simmer until completely absorbed by the rice.",
      "Add warm broth one ladleful (about 1/2 cup) at a time, stirring frequently until liquid is mostly absorbed before adding the next ladleful (approx. 20 minutes total).",
      "Once rice is creamy and al dente, remove from heat. Vigorously stir in remaining butter and parmesan cheese.",
      "Season with salt and pepper. Plate in shallow bowls, topped with reserved browned mushrooms and fresh parsley."
    ]
  },
  {
    id: 13,
    name: "Crisp Vegetable Stir-Fry with Tofu",
    category: "Dinner",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 3,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Golden crispy tofu cubes and fresh vibrant vegetables tossed in a savory ginger-garlic soy glaze, served over jasmine rice.",
    ingredients: [
      "14 oz extra-firm tofu, drained, pressed, and cubed",
      "2 cups broccoli florets",
      "1 red bell pepper, thinly sliced",
      "1 medium carrot, julienned",
      "1 cup snap peas",
      "3 tbsp low-sodium soy sauce",
      "1 tbsp hoisin sauce or maple syrup",
      "1 tbsp toasted sesame oil",
      "1 tbsp cornstarch",
      "2 cloves garlic & 1 tsp fresh ginger, grated",
      "2 tbsp vegetable oil for frying",
      "Toasted sesame seeds and sliced scallions for garnish"
    ],
    instructions: [
      "Toss cubed pressed tofu with 1 tbsp cornstarch and a pinch of salt until coated.",
      "Heat 2 tbsp vegetable oil in a wok or large skillet over medium-high heat. Fry tofu cubes for 6-8 minutes, turning until crispy and golden on all sides. Remove to paper towels.",
      "In a small bowl, whisk together soy sauce, hoisin sauce, remaining cornstarch, sesame oil, and 3 tbsp water.",
      "In the same wok, stir-fry broccoli, carrots, and bell peppers for 3-4 minutes until crisp-tender.",
      "Add minced garlic, grated ginger, and snap peas; stir-fry for 1 minute.",
      "Return crispy tofu to wok, pour sauce over vegetables and tofu, and toss continuously for 1-2 minutes until sauce bubbles and thickens into a glossy glaze.",
      "Garnish with sesame seeds and scallions; serve over steamed rice."
    ]
  },
  {
    id: 14,
    name: "Spanish Chicken & Chorizo Paella",
    category: "Dinner",
    dietary: "Non-Vegetarian",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Spanish short-grain rice cooked with saffron, smoked paprika, tender chicken thighs, cured chorizo, and sweet peas.",
    ingredients: [
      "1 1/2 cups Spanish Bomba or Arborio rice",
      "1 lb boneless chicken thighs, cut into bite-sized pieces",
      "4 oz Spanish dry-cured chorizo, sliced",
      "1 medium onion, diced",
      "1 red bell pepper, sliced",
      "3 cloves garlic, minced",
      "3 cups chicken broth, warmed",
      "A generous pinch of saffron threads",
      "1 tsp smoked paprika",
      "1/2 cup frozen sweet green peas",
      "2 tbsp olive oil",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Crush saffron threads into warm chicken broth and let steep.",
      "Heat olive oil in a wide paella pan or large skillet over medium-high heat. Brown chicken pieces for 5 minutes, then remove.",
      "Add sliced chorizo and cook 2 minutes until flavorful paprika oils are released.",
      "Add diced onion, red bell pepper, and garlic; sauté for 4 minutes until softened.",
      "Stir in smoked paprika and Bomba rice, coating each grain in the savory oils for 1 minute.",
      "Pour in warm saffron-infused broth and return chicken to pan. Distribute ingredients evenly; do not stir after this point.",
      "Simmer uncovered on medium-low heat for 18-20 minutes until rice absorbs broth.",
      "Scatter sweet peas over top during the last 5 minutes. Cook on high for the final 2 minutes to create the famous crispy bottom layer ('socarrat').",
      "Rest 5 minutes, garnish with lemon wedges and serve."
    ]
  },
  {
    id: 15,
    name: "Decadent Molten Chocolate Lava Cake",
    category: "Desserts",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description: "Warm individual chocolate cakes with rich, flowing molten chocolate centers. Pure dessert heaven when paired with vanilla ice cream.",
    ingredients: [
      "1/2 cup (1 stick) unsalted butter",
      "6 oz high-quality semi-sweet or bittersweet chocolate, chopped",
      "2 large whole eggs + 2 large egg yolks",
      "1/4 cup granulated sugar",
      "1/8 tsp fine salt",
      "2 tbsp all-purpose flour",
      "Unsweetened cocoa powder (for dusting ramekins)",
      "Powdered sugar and fresh raspberries for garnish"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter four 6-ounce ramekins and dust inside with cocoa powder, tapping out excess.",
      "Melt chopped chocolate and butter together in a heatproof bowl set over simmering water (or in microwave in 30-sec bursts), stirring until smooth. Cool slightly.",
      "In a medium bowl, whisk whole eggs, egg yolks, sugar, and salt with an electric mixer or whisk until pale and slightly thickened.",
      "Gently fold melted chocolate mixture and flour into the eggs with a spatula until smooth.",
      "Divide batter evenly between prepared ramekins. Place on a baking sheet.",
      "Bake for 12 to 14 minutes until sides are firm but center is still soft and jiggly.",
      "Let sit for 1 minute, run a thin butter knife along edges, invert onto dessert plates. Dust with powdered sugar and serve immediately."
    ]
  },
  {
    id: 16,
    name: "Classic New York Cheesecake with Berry Compote",
    category: "Desserts",
    dietary: "Vegetarian",
    prepTime: "25 mins",
    cookTime: "55 mins",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-velvety, rich baked cheesecake on a buttery cinnamon graham cracker crust topped with warm homemade berry compote.",
    ingredients: [
      "16 oz cream cheese, room temperature",
      "1/2 cup granulated sugar",
      "2 large eggs, room temperature",
      "1/2 cup sour cream",
      "1 tsp pure vanilla extract",
      "1 tbsp fresh lemon juice",
      "1 cup graham cracker crumbs",
      "3 tbsp unsalted butter, melted",
      "1 cup mixed berries (blueberries, raspberries, strawberries)",
      "2 tbsp sugar + 1 tsp lemon juice (for berry compote)"
    ],
    instructions: [
      "Preheat oven to 325°F (165°C). Combine graham cracker crumbs and melted butter; press firmly into bottom of a 7 or 8-inch springform pan. Bake crust 8 minutes, cool.",
      "Beat softened cream cheese and sugar with an electric mixer on medium-low speed until creamy and lump-free.",
      "Add eggs one at a time, mixing on low speed just until incorporated. Do not overmix.",
      "Blend in sour cream, vanilla extract, and 1 tbsp lemon juice until silky.",
      "Pour batter over crust. Bake at 325°F for 45-55 minutes until edges are set and center has a slight wobble.",
      "Turn off oven, prop door open 1 inch, and let cool inside for 1 hour. Chill in refrigerator for at least 4 hours.",
      "For compote: Simmer mixed berries, 2 tbsp sugar, and 1 tsp lemon juice in a saucepan for 5 minutes until syrupy.",
      "Spoon berry compote over chilled cheesecake slices before serving."
    ]
  },
  {
    id: 17,
    name: "Traditional Italian Tiramisu",
    category: "Desserts",
    dietary: "Vegetarian",
    prepTime: "25 mins",
    cookTime: "0 mins",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    description: "Light crisp ladyfinger biscuits dipped in strong espresso and coffee liqueur, layered with ethereal sweetened mascarpone cream and cocoa.",
    ingredients: [
      "1 package (approx. 24) Italian Savoiardi ladyfinger cookies",
      "8 oz mascarpone cheese, room temperature",
      "1 cup heavy whipping cream",
      "1/2 cup granulated sugar",
      "1 tsp pure vanilla extract",
      "1 1/4 cups freshly brewed strong espresso, cooled",
      "2 tbsp coffee liqueur (optional)",
      "2 tbsp Dutch-process unsweetened cocoa powder for dusting"
    ],
    instructions: [
      "In a shallow dish, combine cooled brewed espresso and coffee liqueur.",
      "In a mixing bowl, whip heavy cream, sugar, and vanilla extract until stiff peaks form.",
      "Gently fold in softened mascarpone cheese with a spatula until creamy and smooth.",
      "Quickly dip ladyfingers into espresso mixture (about 1-2 seconds per side—do not soak soggy).",
      "Arrange dipped cookies in a single snug layer in an 8x8 inch dish.",
      "Spread half of the mascarpone cream mixture evenly over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and top with remaining cream.",
      "Cover and chill in refrigerator for at least 4 hours (overnight preferred). Dust generously with cocoa powder right before serving."
    ]
  },
  {
    id: 18,
    name: "Mango Sticky Rice with Coconut Cream",
    category: "Desserts",
    dietary: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    description: "Sweet coconut-infused glutinous sticky rice served with sweet, sliced ripe yellow mango and rich salted coconut sauce.",
    ingredients: [
      "1 cup Thai glutinous sweet rice (sticky rice)",
      "1 can (13.5 oz) full-fat coconut milk",
      "1/3 cup granulated sugar",
      "1/2 tsp salt",
      "2 ripe sweet yellow Champagne or honey mangoes, peeled and sliced",
      "1 tsp cornstarch mixed with 1 tbsp water",
      "1 tbsp toasted white sesame seeds or mung beans for garnish"
    ],
    instructions: [
      "Rinse sticky rice until water runs clear; soak in warm water for at least 1 hour (or overnight), then drain.",
      "Steam sticky rice in a steamer basket lined with cheesecloth or a fine strainer for 20-25 minutes until tender and translucent.",
      "In a small saucepan, warm 3/4 cup coconut milk, 1/3 cup sugar, and 1/4 tsp salt over low heat until dissolved (do not boil).",
      "Transfer cooked hot sticky rice to a bowl, pour warm coconut sauce over it, stir gently, cover, and let rest 20 minutes to absorb.",
      "Make sauce: Heat remaining coconut milk, 1/4 tsp salt, and cornstarch slurry until lightly thickened.",
      "Scoop coconut sticky rice onto plates, fan fresh mango slices alongside, drizzle with salted coconut cream, and sprinkle toasted sesame seeds."
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT & STORAGE CONSTANTS
// ==========================================
const STORAGE_KEY = "flavorcraft_saved_recipes";
let currentRecipe = null;
let activeCategory = "all";
let currentSearchQuery = "";

// ==========================================
// 3. LOCAL STORAGE FUNCTIONS
// ==========================================

/**
 * Safely retrieve saved recipe IDs from localStorage
 * @returns {number[]} Array of recipe IDs
 */
function getSavedRecipeIds() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return [];
  }
}

/**
 * Safely persist saved recipe IDs to localStorage
 * @param {number[]} ids - Array of recipe IDs
 */
function setSavedRecipeIds(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
}

/**
 * Check if a recipe ID is in favorites
 * @param {number} id 
 * @returns {boolean}
 */
function isFavourite(id) {
  const savedIds = getSavedRecipeIds();
  return savedIds.includes(id);
}

/**
 * Toggle favourite status for a given recipe ID
 * @param {number} id 
 */
function toggleFavourite(id) {
  let savedIds = getSavedRecipeIds();
  const index = savedIds.indexOf(id);
  const recipe = recipes.find(r => r.id === id);
  const recipeTitle = recipe ? recipe.name : "Recipe";

  if (index > -1) {
    // Remove from favorites
    savedIds.splice(index, 1);
    showToast(`Removed "${recipeTitle}" from favourites.`);
  } else {
    // Add to favorites
    savedIds.push(id);
    showToast(`Added "${recipeTitle}" to favourites! ❤️`);
  }

  setSavedRecipeIds(savedIds);
  updateFavouriteBadge();
  updateFeaturedFavouriteButton();
  updateExploreCardButtons();

  // If the favourites modal is currently open, re-render it
  const modal = document.getElementById("favouritesModal");
  if (modal && modal.classList.contains("active")) {
    renderFavouritesModalList();
  }
}

/**
 * Update the header badge counter showing total saved favorites
 */
function updateFavouriteBadge() {
  const badge = document.getElementById("favBadge");
  if (badge) {
    const count = getSavedRecipeIds().length;
    badge.textContent = count;
    badge.setAttribute("aria-label", `${count} favourite recipes saved`);
  }
}

// ==========================================
// 4. CATEGORY & FILTERING LOGIC
// ==========================================

/**
 * Returns human-readable display name for any category slug
 * @param {string} cat
 * @returns {string}
 */
function getCategoryDisplayName(cat) {
  const map = {
    all: "All Recipes",
    vegetarian: "Vegetarian",
    "non-vegetarian": "Non-Vegetarian",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    desserts: "Desserts"
  };
  return map[(cat || "").trim().toLowerCase()] || "Category";
}

/**
 * Returns all recipes belonging to a specific category.
 * Matches exact categories and dietary fields (case-insensitive).
 * Ensures that 'Lunch' returns ONLY lunch recipes, 'Vegetarian' returns ONLY vegetarian recipes, etc.
 * @param {string} category 
 * @returns {object[]}
 */
function getRecipesByCategory(category = activeCategory) {
  const cat = (category || "all").trim().toLowerCase();

  if (cat === "all") {
    return recipes;
  }

  if (cat === "vegetarian") {
    return recipes.filter(r => (r.dietary || "").trim().toLowerCase() === "vegetarian");
  }

  if (cat === "non-vegetarian" || cat === "nonvegetarian") {
    return recipes.filter(r => (r.dietary || "").trim().toLowerCase() === "non-vegetarian");
  }

  // Matches meal category: breakfast, lunch, dinner, desserts
  return recipes.filter(r => (r.category || "").trim().toLowerCase() === cat);
}

/**
 * Return recipes filtered strictly within the active category,
 * optionally filtered further by the search query.
 * @returns {object[]} Filtered recipes array
 */
function getFilteredRecipes() {
  // Always scope search and filtering strictly to the active category
  const categoryRecipes = getRecipesByCategory(activeCategory);

  if (!currentSearchQuery || currentSearchQuery.trim() === "") {
    return categoryRecipes;
  }

  const q = currentSearchQuery.trim().toLowerCase();
  return categoryRecipes.filter(recipe => {
    const inName = (recipe.name || "").toLowerCase().includes(q);
    const inCategory = (recipe.category || "").toLowerCase().includes(q);
    const inDietary = (recipe.dietary || "").toLowerCase().includes(q);
    const inIngredients = Array.isArray(recipe.ingredients) &&
      recipe.ingredients.some(ing => ing.toLowerCase().includes(q));
    return inName || inCategory || inDietary || inIngredients;
  });
}

/**
 * Helper to escape HTML characters in dynamic search text
 */
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/**
 * Highlight the search query inside the matching recipe title
 */
function highlightMatch(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * Display empty state in the featured recipe section when no recipes match
 * @param {string} message 
 */
function displayFeaturedEmptyState(message = "No recipes found in this category") {
  const card = document.getElementById("featuredRecipeCard");
  const empty = document.getElementById("featuredEmptyState");
  const emptyTitle = document.getElementById("featuredEmptyTitle");
  const emptyText = document.getElementById("featuredEmptyText");
  if (card) card.classList.add("hidden");
  if (empty) {
    empty.classList.remove("hidden");
    if (emptyTitle) emptyTitle.textContent = "No recipes found in this category";
    if (emptyText) {
      emptyText.textContent = currentSearchQuery.trim()
        ? `No recipes matching "${currentSearchQuery.trim()}" found in ${getCategoryDisplayName(activeCategory)}.`
        : `There are currently no recipes available in this category.`;
    }
  }
}

/**
 * Hide the empty state in the featured recipe section and restore the recipe card
 */
function hideFeaturedEmptyState() {
  const card = document.getElementById("featuredRecipeCard");
  const empty = document.getElementById("featuredEmptyState");
  if (card) card.classList.remove("hidden");
  if (empty) empty.classList.add("hidden");
}

/**
 * Render the instant autocomplete dropdown directly under the search bar.
 * Strictly respects the currently selected category!
 */
function renderSearchDropdown() {
  const dropdown = document.getElementById("searchDropdown");
  if (!dropdown) return;

  const query = currentSearchQuery.trim();
  if (query.length === 0) {
    dropdown.innerHTML = "";
    dropdown.classList.add("hidden");
    return;
  }

  // Filter strictly within active category
  const matches = getFilteredRecipes();

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div class="search-dropdown-empty">
        <p>🔍 No recipes found in this category</p>
        <p style="font-size: 0.82rem; margin-top: 0.4rem; color: var(--text-light);">
          No recipes matching "${escapeHtml(query)}" were found in <strong>${getCategoryDisplayName(activeCategory)}</strong>.
        </p>
      </div>
    `;
    dropdown.classList.remove("hidden");
    return;
  }

  // Display top 5 matches
  const topMatches = matches.slice(0, 5);
  dropdown.innerHTML = "";

  topMatches.forEach(recipe => {
    const item = document.createElement("div");
    item.className = "search-dropdown-item";
    item.setAttribute("role", "option");
    item.setAttribute("tabindex", "0");

    const highlightedName = highlightMatch(escapeHtml(recipe.name), query);

    item.innerHTML = `
      <img 
        src="${recipe.image}" 
        alt="${recipe.name}" 
        class="search-dropdown-thumb"
        onerror="this.onerror=null; this.src='${getFallbackImageSvg(recipe.name)}';"
      />
      <div class="search-dropdown-info">
        <div class="search-dropdown-name">${highlightedName}</div>
        <div class="search-dropdown-meta">
          <span>🍽️ ${recipe.category}</span>
          <span>•</span>
          <span>⏱️ ${recipe.prepTime}</span>
          <span>•</span>
          <span>${recipe.dietary === 'Vegetarian' ? '🌱 Veg' : '🍗 Non-Veg'}</span>
        </div>
      </div>
    `;

    item.addEventListener("click", () => {
      displayFeaturedRecipe(recipe);
      dropdown.classList.add("hidden");
      document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
      showToast(`Showing "${recipe.name}" 🍳`);
    });

    dropdown.appendChild(item);
  });

  // Footer summary
  const footer = document.createElement("div");
  footer.className = "search-dropdown-footer";
  footer.innerHTML = `
    <span>${matches.length} ${matches.length === 1 ? 'recipe' : 'recipes'} found in ${getCategoryDisplayName(activeCategory)}</span>
    <span>Press <strong>Enter</strong> to view</span>
  `;
  dropdown.appendChild(footer);

  dropdown.classList.remove("hidden");
}

/**
 * Execute search on Enter key or Search button click:
 * Loads the best matching recipe in the current category into the showcase card
 */
function executeSearch() {
  const dropdown = document.getElementById("searchDropdown");
  if (dropdown) dropdown.classList.add("hidden");

  const query = currentSearchQuery.trim();
  if (!query) {
    showToast("Please enter a recipe name to search.");
    return;
  }

  // Get matching recipes strictly within the selected category
  const matches = getFilteredRecipes();

  if (matches.length > 0) {
    displayFeaturedRecipe(matches[0]);
    document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
    showToast(`Showing "${matches[0].name}"! 🍳`);
  } else {
    displayFeaturedEmptyState("No recipes found in this category");
    document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
    showToast(`No recipes found in this category.`);
  }

  renderExploreGrid();
}

// ==========================================
// 5. RANDOM RECIPE GENERATION
// ==========================================

/**
 * Select a random recipe matching ONLY the active category filter (and search if present).
 * If no recipes match, shows "No recipes found in this category" and never picks from other categories.
 */
function generateRandomRecipe() {
  const pool = getFilteredRecipes();

  // If no recipes match the selected category
  if (!pool || pool.length === 0) {
    currentRecipe = null;
    displayFeaturedEmptyState("No recipes found in this category");
    return;
  }

  hideFeaturedEmptyState();

  // If more than 1 choice in this category, avoid picking the exact same recipe consecutively
  let candidatePool = pool;
  if (currentRecipe && pool.length > 1) {
    const withoutCurrent = pool.filter(r => r.id !== currentRecipe.id);
    if (withoutCurrent.length > 0) {
      candidatePool = withoutCurrent;
    }
  }

  const randomIndex = Math.floor(Math.random() * candidatePool.length);
  const selected = candidatePool[randomIndex];

  displayFeaturedRecipe(selected);
}

// ==========================================
// 6. UI RENDERING
// ==========================================

/**
 * SVG fallback string for broken or offline images
 */
function getFallbackImageSvg(title = "Delicious Food") {
  const safeTitle = title.replace(/"/g, '&quot;');
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23f4f1ea"/><circle cx="400" cy="270" r="110" fill="%232d6a4f" opacity="0.12"/><text x="400" y="280" font-size="80" text-anchor="middle" dominant-baseline="middle">🍲</text><text x="400" y="420" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="28" font-weight="bold" fill="%232d6a4f" text-anchor="middle">${safeTitle}</text><text x="400" y="460" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="18" fill="%236c757d" text-anchor="middle">Recipe generator ready to cook</text></svg>`;
}

/**
 * Render the main featured recipe showcase card
 * @param {object} recipe 
 */
function displayFeaturedRecipe(recipe) {
  if (!recipe) {
    displayFeaturedEmptyState("No recipes found in this category");
    return;
  }
  hideFeaturedEmptyState();
  currentRecipe = recipe;

  const card = document.getElementById("featuredRecipeCard");
  if (!card) return;

  // Add subtle pulse/fade animation
  card.classList.remove("fade-in");
  // Trigger reflow to restart animation
  void card.offsetWidth;
  card.classList.add("fade-in");

  // Populate data
  document.getElementById("featuredTitle").textContent = recipe.name;
  document.getElementById("featuredDescription").textContent = recipe.description;
  document.getElementById("featuredCategoryBadge").textContent = `${recipe.category}`;
  document.getElementById("featuredDietaryBadge").textContent = recipe.dietary;

  // Dietary style modifier
  const dietaryBadge = document.getElementById("featuredDietaryBadge");
  if (recipe.dietary === "Vegetarian") {
    dietaryBadge.className = "badge badge-dietary badge-veg";
  } else {
    dietaryBadge.className = "badge badge-dietary badge-nonveg";
  }

  document.getElementById("featuredPrepTime").textContent = recipe.prepTime;
  document.getElementById("featuredCookTime").textContent = recipe.cookTime;
  document.getElementById("featuredServings").textContent = `${recipe.servings} Servings`;
  document.getElementById("featuredDifficulty").textContent = recipe.difficulty;

  // Image setup with graceful fallback
  const imgElem = document.getElementById("featuredImage");
  imgElem.src = recipe.image;
  imgElem.alt = recipe.name;
  imgElem.onerror = function() {
    this.onerror = null;
    this.src = getFallbackImageSvg(recipe.name);
  };

  // Render Ingredients Checklist
  const ingredientsList = document.getElementById("featuredIngredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((ing, index) => {
    const li = document.createElement("li");
    li.className = "ingredient-item";
    li.innerHTML = `
      <label class="checkbox-container">
        <input type="checkbox" id="ing-${recipe.id}-${index}">
        <span class="checkmark" aria-hidden="true"></span>
        <span class="ingredient-text">${ing}</span>
      </label>
    `;
    ingredientsList.appendChild(li);
  });

  // Render Instructions Steps
  const instructionsList = document.getElementById("featuredInstructions");
  instructionsList.innerHTML = "";
  recipe.instructions.forEach((step, index) => {
    const li = document.createElement("li");
    li.className = "instruction-step";
    li.innerHTML = `
      <div class="step-number">${index + 1}</div>
      <div class="step-text">${step}</div>
    `;
    instructionsList.appendChild(li);
  });

  // Update favourite button status
  updateFeaturedFavouriteButton();
}

/**
 * Updates the state of the "Add to Favourites" button in the featured card
 */
function updateFeaturedFavouriteButton() {
  const btn = document.getElementById("featuredFavBtn");
  if (!btn || !currentRecipe) return;

  const isFav = isFavourite(currentRecipe.id);
  if (isFav) {
    btn.classList.add("is-favourite");
    btn.innerHTML = `<span class="icon">❤️</span> <span class="text">Saved in Favourites</span>`;
    btn.setAttribute("aria-label", "Remove this recipe from favourites");
  } else {
    btn.classList.remove("is-favourite");
    btn.innerHTML = `<span class="icon">🤍</span> <span class="text">Add to Favourites</span>`;
    btn.setAttribute("aria-label", "Save this recipe to favourites");
  }
}

/**
 * Render the explore / search results grid
 */
function renderExploreGrid() {
  const gridContainer = document.getElementById("recipesGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const exploreTitle = document.getElementById("exploreSectionTitle");
  if (!gridContainer) return;

  const filtered = getFilteredRecipes();

  // Dynamic Section Header Title
  if (exploreTitle) {
    const catName = getCategoryDisplayName(activeCategory);
    if (currentSearchQuery.trim() !== "") {
      exploreTitle.textContent = activeCategory === "all"
        ? `Search Results for "${currentSearchQuery.trim()}"`
        : `Search Results in ${catName} for "${currentSearchQuery.trim()}"`;
    } else if (activeCategory !== "all") {
      exploreTitle.textContent = `${catName} Recipes`;
    } else {
      exploreTitle.textContent = "Browse All Recipes";
    }
  }

  // Results count text
  if (resultsCount) {
    const total = filtered.length;
    resultsCount.textContent = `Showing ${total} ${total === 1 ? "recipe" : "recipes"}`;
  }

  // Handle empty state
  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    if (emptyState) {
      emptyState.classList.remove("hidden");
      const emptyTitle = emptyState.querySelector(".empty-title");
      if (emptyTitle) {
        emptyTitle.textContent = "No recipes found in this category";
      }
      const emptyQueryElem = document.getElementById("emptyStateQuery");
      if (emptyQueryElem) {
        emptyQueryElem.textContent = currentSearchQuery.trim()
          ? `No recipes matching "${currentSearchQuery.trim()}" were found in ${getCategoryDisplayName(activeCategory)}.`
          : "No recipes found in this category.";
      }
    }
    return;
  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }

  gridContainer.innerHTML = "";

  filtered.forEach(recipe => {
    const isFav = isFavourite(recipe.id);
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "region");
    card.setAttribute("aria-label", recipe.name);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img 
          src="${recipe.image}" 
          alt="${recipe.name}" 
          loading="lazy" 
          class="card-img"
          onerror="this.onerror=null; this.src='${getFallbackImageSvg(recipe.name)}';"
        >
        <span class="card-badge ${recipe.dietary === 'Vegetarian' ? 'badge-veg' : 'badge-nonveg'}">
          ${recipe.dietary === 'Vegetarian' ? '🌱 Veg' : '🍗 Non-Veg'}
        </span>
        <button 
          class="card-fav-btn ${isFav ? 'active' : ''}" 
          data-id="${recipe.id}" 
          title="${isFav ? 'Remove from favourites' : 'Save to favourites'}"
          aria-label="${isFav ? 'Remove ' + recipe.name + ' from favourites' : 'Save ' + recipe.name + ' to favourites'}"
        >
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="meta-tag">🍽️ ${recipe.category}</span>
          <span class="meta-tag">⏱️ ${recipe.prepTime}</span>
        </div>
        <h3 class="card-title">${recipe.name}</h3>
        <p class="card-snippet">${recipe.description}</p>

        <div class="card-actions">
          <button class="btn btn-outline btn-sm view-recipe-btn" data-id="${recipe.id}">
            View Recipe Details
          </button>
        </div>
      </div>
    `;

    // Event listener to view recipe
    const viewBtn = card.querySelector(".view-recipe-btn");
    viewBtn.addEventListener("click", () => {
      displayFeaturedRecipe(recipe);
      // Smoothly scroll to the showcase section
      document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
    });

    // Event listener for quick favourite button
    const favBtn = card.querySelector(".card-fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavourite(recipe.id);
    });

    gridContainer.appendChild(card);
  });
}

/**
 * Update heart icons on cards without full re-render
 */
function updateExploreCardButtons() {
  const favButtons = document.querySelectorAll(".card-fav-btn");
  favButtons.forEach(btn => {
    const id = parseInt(btn.getAttribute("data-id"), 10);
    const isFav = isFavourite(id);
    if (isFav) {
      btn.classList.add("active");
      btn.innerHTML = "❤️";
      btn.title = "Remove from favourites";
    } else {
      btn.classList.remove("active");
      btn.innerHTML = "🤍";
      btn.title = "Save to favourites";
    }
  });
}

// ==========================================
// 7. FAVOURITES MODAL
// ==========================================

function openFavouritesModal() {
  const modal = document.getElementById("favouritesModal");
  if (!modal) return;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll
  renderFavouritesModalList();
}

function closeFavouritesModal() {
  const modal = document.getElementById("favouritesModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background scroll
}

function renderFavouritesModalList() {
  const container = document.getElementById("modalFavouritesList");
  const emptyState = document.getElementById("modalEmptyState");
  if (!container) return;

  const savedIds = getSavedRecipeIds();
  const savedRecipes = recipes.filter(r => savedIds.includes(r.id));

  if (savedRecipes.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  container.innerHTML = "";
  savedRecipes.forEach(recipe => {
    const item = document.createElement("div");
    item.className = "fav-modal-item";
    item.innerHTML = `
      <img 
        src="${recipe.image}" 
        alt="${recipe.name}" 
        class="fav-item-thumb"
        onerror="this.onerror=null; this.src='${getFallbackImageSvg(recipe.name)}';"
      />
      <div class="fav-item-info">
        <h4 class="fav-item-title">${recipe.name}</h4>
        <div class="fav-item-meta">
          <span>${recipe.category}</span> • <span>⏱️ ${recipe.prepTime}</span> • <span>${recipe.dietary}</span>
        </div>
      </div>
      <div class="fav-item-actions">
        <button class="btn btn-outline btn-sm modal-view-btn" data-id="${recipe.id}">
          View
        </button>
        <button class="btn btn-danger-ghost btn-sm modal-remove-btn" data-id="${recipe.id}" title="Remove from favourites">
          ✕
        </button>
      </div>
    `;

    // View button
    item.querySelector(".modal-view-btn").addEventListener("click", () => {
      displayFeaturedRecipe(recipe);
      closeFavouritesModal();
      document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
    });

    // Remove button
    item.querySelector(".modal-remove-btn").addEventListener("click", () => {
      toggleFavourite(recipe.id);
    });

    container.appendChild(item);
  });
}

// ==========================================
// 8. TOAST NOTIFICATION
// ==========================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ==========================================
// 9. EVENT LISTENERS INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State Setup
  updateFavouriteBadge();
  generateRandomRecipe();
  renderExploreGrid();

  // 2. Main Hero "Generate Random Recipe" Button
  const heroGenerateBtn = document.getElementById("heroGenerateBtn");
  if (heroGenerateBtn) {
    heroGenerateBtn.addEventListener("click", () => {
      generateRandomRecipe();
      document.getElementById("featuredRecipeSection").scrollIntoView({ behavior: "smooth" });
    });
  }

  // 3. Featured Card "Next Recipe" Button
  const nextRecipeBtn = document.getElementById("nextRecipeBtn");
  if (nextRecipeBtn) {
    nextRecipeBtn.addEventListener("click", () => {
      generateRandomRecipe();
    });
  }

  // 4. Featured Card "Favourite" Toggle Button
  const featuredFavBtn = document.getElementById("featuredFavBtn");
  if (featuredFavBtn) {
    featuredFavBtn.addEventListener("click", () => {
      if (currentRecipe) {
        toggleFavourite(currentRecipe.id);
      }
    });
  }

  // 5. Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      activeCategory = btn.getAttribute("data-category") || "all";

      // 1. Immediately update the explore grid with recipes from the selected category
      renderExploreGrid();

      // 2. Immediately update the featured recipe card with a random recipe from this category
      generateRandomRecipe();

      // 3. Immediately refresh search dropdown if search text is active
      if (currentSearchQuery.trim().length > 0) {
        renderSearchDropdown();
      }
    });
  });

  // 6. Search Bar Inputs & Actions
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const searchSubmitBtn = document.getElementById("searchSubmitBtn");

  if (searchInput) {
    // Live typing input handler: searches STRICTLY within the active category
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;

      if (searchClearBtn) {
        if (currentSearchQuery.length > 0) {
          searchClearBtn.classList.remove("hidden");
        } else {
          searchClearBtn.classList.add("hidden");
        }
      }

      // Filter recipes strictly within current category and search query
      renderSearchDropdown();
      renderExploreGrid();

      const matches = getFilteredRecipes();
      if (matches.length === 0) {
        displayFeaturedEmptyState("No recipes found in this category");
      } else if (!currentRecipe || !matches.some(m => m.id === currentRecipe.id)) {
        displayFeaturedRecipe(matches[0]);
      }
    });

    // Pressing Enter executes search immediately
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeSearch();
      }
    });

    // Show dropdown again on focus if search text is already entered
    searchInput.addEventListener("focus", () => {
      if (currentSearchQuery.trim().length > 0) {
        renderSearchDropdown();
      }
    });
  }

  // Click Search Button
  if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener("click", () => {
      executeSearch();
    });
  }

  // Click Clear Search Button
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      searchClearBtn.classList.add("hidden");
      const dropdown = document.getElementById("searchDropdown");
      if (dropdown) dropdown.classList.add("hidden");
      generateRandomRecipe();
      renderExploreGrid();
      if (searchInput) searchInput.focus();
    });
  }

  // Close search dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const searchBox = document.querySelector(".search-box-wrap");
    const dropdown = document.getElementById("searchDropdown");
    if (searchBox && dropdown && !searchBox.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });

  // 7. Reset Search from Empty State
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      activeCategory = "all";
      filterBtns.forEach(b => {
        if (b.getAttribute("data-category") === "all") {
          b.classList.add("active");
          b.setAttribute("aria-pressed", "true");
        } else {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        }
      });
      if (searchClearBtn) searchClearBtn.classList.add("hidden");
      const dropdown = document.getElementById("searchDropdown");
      if (dropdown) dropdown.classList.add("hidden");
      generateRandomRecipe();
      renderExploreGrid();
    });
  }

  // 8. Favourites Modal Controls
  const openFavsBtn = document.getElementById("openFavouritesBtn");
  const closeFavsBtn = document.getElementById("closeFavouritesModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalExploreBtn = document.getElementById("modalExploreBtn");

  if (openFavsBtn) {
    openFavsBtn.addEventListener("click", openFavouritesModal);
  }

  if (closeFavsBtn) {
    closeFavsBtn.addEventListener("click", closeFavouritesModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeFavouritesModal);
  }

  if (modalExploreBtn) {
    modalExploreBtn.addEventListener("click", () => {
      closeFavouritesModal();
      document.getElementById("exploreSection").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Keyboard accessibility: Close modal on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("favouritesModal");
      if (modal && modal.classList.contains("active")) {
        closeFavouritesModal();
      }
    }
  });
});
