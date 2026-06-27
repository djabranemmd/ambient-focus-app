import { memo } from "react";
import { Play, Music, Timer } from "lucide-react";
import Card from "../ui/Card";
import { useNavigation, PAGES } from "../../context/NavigationContext";

function QuickStart() {
  const { setActivePage } = useNavigation();

  const actions = [
    {
      id: PAGES.FOCUS,
      title: "Start Focus",
      description: "Begin a focused work session.",
      icon: Timer,
    },
    {
      id: PAGES.SOUNDS,
      title: "Ambient Sounds",
      description: "Create your perfect environment.",
      icon: Music,
    },
  ];

  return (
    <Card>
      <div>
        <h3 className="text-xl font-semibold theme-text">Quick Start</h3>
        <p className="theme-text-muted mt-1">Jump directly into productivity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              type="button"
              onClick={() => setActivePage(action.id)}
              className="text-left rounded-2xl p-5 bg-black/5 dark:bg-white/5 hover:bg-purple-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                  <Icon size={22} className="text-purple-400" />
                </div>

                <Play
                  size={18}
                  className="theme-text-muted group-hover:text-purple-400 transition-colors"
                />
              </div>

              <h4 className="theme-text font-semibold mt-4">{action.title}</h4>
              <p className="theme-text-muted text-sm mt-2">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export default memo(QuickStart);