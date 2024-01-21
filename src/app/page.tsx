import { UserButton, currentUser } from '@clerk/nextjs';

import { GetCurrentUserFromMongoDb } from '@/actions/users';

export default async function Home() {
  await GetCurrentUserFromMongoDb();
  const loggedInUser = await currentUser();

  const username =
    loggedInUser?.username ||
    `${loggedInUser?.firstName} ${loggedInUser?.lastName}`;
  return (
    <div className="p-20">
      <UserButton afterSignOutUrl="/sign-in" signInUrl="/sign-in" />
      <h1>Clerk user id: {loggedInUser?.id}</h1>
      <h1>Username: {username}</h1>
      <h1>Email: {loggedInUser?.emailAddresses[0]?.emailAddress}</h1>
    </div>
  );
}
