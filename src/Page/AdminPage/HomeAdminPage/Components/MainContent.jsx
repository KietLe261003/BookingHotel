import { Card } from "@chakra-ui/react";
import InboxCard from "./InboxCard";
import WelcomeCard from "./WelcomeCard";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-row">
        <WelcomeCard />
        <InboxCard />
      </div>
      <div className="flex flex-row h-64 mt-6">
        <Card content="a" />
        <Card content="b" />
        <Card content="c" />
      </div>
    </>
  );
};
export default MainContent;
