export default function ChatPage({ params }: { params: { matchId: string } }) {
  return (
    <div className="card">
      <h1 className="text-2xl font-semibold mb-2">Chat</h1>
      <p className="text-gray-600">Match-ID: {params.matchId}</p>
      <div className="mt-6 rounded-xl border p-4 text-gray-500">Realtime-Chat folgt (WebSocket/Pusher)</div>
    </div>
  );
}
