import { MenuSection } from "@/components/MenuSection";
import { Card } from "@/components/ui/card";

const Index = () => {
  const breakfastItems = [
    {
      name: "1. Potato & Egg Skillet",
      description: "Cooked on our Spanish cast-iron pans brought from Europe.",
      newWorld: "Potatoes",
      oldWorld: "Eggs, onions, cheese"
    },
    {
      name: "2. Sweet Bread with Chocolate Spread",
      description: "Made using wheat ground by our new water-powered mills from Europe.",
      newWorld: "Wheat bread, milk, sugar",
      oldWorld: "Cacao (chocolate), vanilla"
    }
  ];

  const lunchItems = [
    {
      name: "3. Turkey Sandwich",
      newWorld: "Turkey, tomatoes",
      oldWorld: "Wheat bread, onions"
    },
    {
      name: "4. Bean & Rice Bowl",
      newWorld: "Beans",
      oldWorld: "Rice"
    }
  ];

  const dinnerItems = [
    {
      name: "5. Chicken with Peppers & Corn",
      newWorld: "Bell peppers, corn",
      oldWorld: "Chicken, onions, black pepper"
    },
    {
      name: "6. Beef, Potato & Carrot Stew",
      newWorld: "Potatoes",
      oldWorld: "Cattle (beef), carrots"
    }
  ];

  const dessertItems = [
    {
      name: "7. Chocolate & Peanut Treats",
      newWorld: "Cacao (chocolate), peanuts",
      oldWorld: "Sugar, milk"
    },
    {
      name: "8. Pineapple & Cinnamon Apples",
      newWorld: "Pineapple",
      oldWorld: "Apples, cinnamon"
    }
  ];

  const drinkItems = [
    {
      name: "9. Hot Chocolate",
      newWorld: "Cacao",
      oldWorld: "Sugar, milk"
    },
    {
      name: "10. Citrus Tea",
      newWorld: "Pineapple slice",
      oldWorld: "Tea, citrus fruits (lemons/oranges)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12 px-4 text-center border-b-4 border-accent">
        <h1 className="text-5xl md:text-6xl font-bold mb-3">New and Old World Café</h1>
        <p className="text-lg md:text-xl opacity-90">A Culinary Journey Through the Columbian Exchange</p>
      </header>

      {/* Menu Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <MenuSection title="Breakfast" items={breakfastItems} />
        <MenuSection title="Lunch" items={lunchItems} />
        <MenuSection title="Dinner" items={dinnerItems} />
        <MenuSection title="Desserts" items={dessertItems} />
        <MenuSection title="Drinks" items={drinkItems} />

        {/* Health Warning */}
        <Card className="mt-12 p-6 bg-destructive/10 border-destructive">
          <h2 className="text-2xl font-bold text-destructive mb-4 text-center">
            Health & Safety Warning
          </h2>
          <div className="text-sm text-foreground space-y-3">
            <p className="font-semibold">Due to global travel of foods and people:</p>
            <div>
              <p className="font-semibold text-destructive">Diseases from Europe/Africa to the Americas:</p>
              <p>Smallpox, measles, influenza, bubonic plague, cholera, malaria</p>
            </div>
            <div>
              <p className="font-semibold text-destructive">Diseases from the Americas to Europe:</p>
              <p>Syphilis</p>
            </div>
            <p className="font-bold text-center text-lg mt-4">
              Please wash your hands and don't share cups.
            </p>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 text-center mt-12">
        <p className="text-sm opacity-80">
          Arnav Nemade, Kavin Elangovan, Krish, Group 26 WHAP Project 11/6/25
        </p>
      </footer>
    </div>
  );
};

export default Index;
