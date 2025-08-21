import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            // variant="ghost"
            type="submit"
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* <LogIn className="w-4 h-4" /> */}
            <span className="">Sign Out</span>
          </button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            // variant="ghost"
            type="submit"
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* <LogIn className="w-4 h-4" /> */}
            <span className="">Sign In</span>
          </button>
        </form>
      )}
    </div>
  );
}
