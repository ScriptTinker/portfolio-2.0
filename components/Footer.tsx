import { Footer, FooterTitle } from "flowbite-react";

interface FooterProps {}

const CustomFooter: React.FC<FooterProps> = () => {
  return (
    <Footer className="mt-8">
      <FooterTitle
        title={"Made with Next.js"}
        className="place-items-center"
      ></FooterTitle>
    </Footer>
  );
};

export default CustomFooter;
