import Heading from "@/components/Typography/Heading";

const EmptySearch = () => {
  return (
    <div className="flex flex-col gap-6 h-75 items-center justify-center">
      <Heading variant="h4">No citizen found</Heading>
      <p>Try adjusting your search</p>
    </div>
  );
};

export default EmptySearch;
