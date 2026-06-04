function TopBar() {
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
    <div className="mb-8">
      <h1 className="text-4xl font-bold">
        {greeting} 👋
      </h1>

      <p className="text-gray-400 mt-2">
        Stay focused and reach your
        goals today.
      </p>
    </div>
  );
}

export default TopBar;