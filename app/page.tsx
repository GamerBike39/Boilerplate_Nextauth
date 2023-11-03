import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="flex flex-col items-center justify-center p-24 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">BoilerPlate NextAuth</h1>
        <p>No UI library, just Tailwind</p>
      </div>

      <div>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    </main>
  );
}

{
  /* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            signIn();
          }}
        >
          signIn
        </button> */
}
