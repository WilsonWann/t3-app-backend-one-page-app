import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import PageLayout from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <AuthShowcase />
      </PageLayout>
    </>
  );
};

export default Home;
function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data, isLoading } = api.shoppingItem.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && (
          <>
            <span>Logged in as {sessionData.user?.name}</span>
            <br />
          </>
        )}
        {sessionData &&
          data?.length > 0 &&
          data.map((item, index) => (
            <>
              <span key={index}> {item.itemName} </span>
              <br />
            </>
          ))}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
