import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";

const Header = () => {
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Heading variant="h3" color="secondary">
          Citizen Dashboard
        </Heading>
        <Text color="secondary" size="medium" weight="semibold">
          Explore the citizens
        </Text>
      </div>
    </nav>
  );
};

export default Header;
