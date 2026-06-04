import { useFocus } from "../../context/FocusContext";
import Card from "../ui/Card";

function SessionHistory() {
  const { sessions } = useFocus();

  const recentSessions = [...sessions]
    .reverse()
    .slice(0, 5);

  return (
    <Card>
      <h3 className="text-xl font-semibold">
        Recent Sessions
      </h3>

      <div className="mt-5 space-y-3">
        {recentSessions.length === 0 ? (
          <p className="text-gray-400">
            No sessions yet.
          </p>
        ) : (
          recentSessions.map(
            (session, index) => (
              <div
                key={index}
                className="
                  flex
                  justify-between
                  border-b
                  border-white/5
                  pb-2
                "
              >
                <span>
                  {session.duration / 60} min
                </span>

                <span className="text-gray-400 text-sm">
                  {new Date(
                    session.date
                  ).toLocaleDateString()}
                </span>
              </div>
            )
          )
        )}
      </div>
    </Card>
  );
}

export default SessionHistory;