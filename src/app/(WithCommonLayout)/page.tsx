"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <h1>Welcome to SnapBuy</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default HomePage;
