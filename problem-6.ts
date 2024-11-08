{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(
    profile: Profile,
    updates: { name?: string; age?: number; email?: string }
  ): Profile {
    return { ...profile, ...updates };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  const UpdatedProfile = updateProfile(myProfile, { age: 26 });

  console.log(UpdatedProfile);

  //
}
