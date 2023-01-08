import Countdown from "../islands/Countdown.tsx";

export default function CountdownPage() {
  const target = new Date();
  target.setSeconds(target.getSeconds() + 10);
  return (
    <main>
      <h1>Countdown</h1>
      <Countdown target={target.toISOString()} />
    </main >
  );
}