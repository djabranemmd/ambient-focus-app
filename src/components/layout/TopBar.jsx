import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

function TopBar() {
  const { theme, toggleTheme } =
    useTheme();

  const hour =
    new Date().getHours();

  // eslint-disable-next-line no-useless-assignment
  let greeting = "Hello";

  if (hour < 12)
    greeting = "Good Morning";
  else if (hour < 18)
    greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <div
      className="
        flex
        items-center
        justify-between
        mb-8
      "
    >
      <div>
        <h1 className="text-4xl font-bold">
          {greeting} 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Stay focused and reach your
          goals today.
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className="
          h-12
          w-12
          rounded-xl
          bg-white/10
          border
          border-white/10
          flex
          items-center
          justify-center
        "
      >
        {theme === "dark" ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>
    </div>
  );
}

export default TopBar;