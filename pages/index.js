import { Box } from "@prismane/core";

const Page = () => {
  return (
    <>
      <Box bg={["diamond", 300]}>Hello, world</Box>
      {/* Prismane Color */}
      <Box bg={["primary", 300]}>Hello, world</Box> {/* Theme Color */}
      <Box
        bg={(theme) => (theme.mode === "dark" ? ["red", 300] : ["red", 600])} // With Theme Object
      >
        Hello, world
      </Box>
      <Box bg={[["primary", 600], { hover: ["base", 700] }]}>Hello, world</Box>
    </>
  );
};

export default Page;
