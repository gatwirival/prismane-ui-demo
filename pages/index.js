import { Card, Image, Text, Button, Flex, fr } from "@prismane/core";
import { Star, ShoppingCart } from "@phosphor-icons/react";


export default function App() {
  return (
    <Card w={360} h={540} gap={fr(2)}>
      <Image
        src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?size=626&ext=jpg&ga=GA1.1.460882575.1681882906&semt=sph"
        br="md"
        fit="cover"
        mb={fr(2)}
      />
      <Flex gap={fr(2)}>
        <Text fs="md" cl="green">
          <Star /> 4.5 (120 reviews)
        </Text>
        <Text fs="md" cl="blue">
          In Stock
        </Text>
      </Flex>
      <Text fs="lg" fw="bold" cl="black">
        Premium Headphones
      </Text>
      <Text cl="gray">
        Enjoy crystal-clear sound quality with our premium headphones, perfect
        for music lovers and audiophiles.
      </Text>
      <Text fw="bold" fs="2xl" cl="primary">
        $149.99
      </Text>
      <Flex gap={fr(4)} mt="auto">
        <Button cl="primary" bg="yellow" hoverBg="orange">
          Add to Wishlist
        </Button>
        <Button cl="white" bg="blue" hoverBg="darkblue">
          <ShoppingCart /> Add to Cart
        </Button>
      </Flex>
    </Card>
  );
}
