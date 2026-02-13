import { Footer, FooterTitle } from "flowbite-react";

interface FooterProps {}

const CustomFooter: React.FC<FooterProps> = () => {
  return (
    <Footer className="mt-8">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="grid place-items-center md:mt-5 md:mr-3">
          <FooterTitle title="Made with Next.js" />
        </div>
        <div>{/* Right column - empty or add content later */}</div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
