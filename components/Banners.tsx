import { ReactNode } from "react";
import { Banner } from "flowbite-react";

interface MainPageBannerProps {
  children?: ReactNode;
}

export const MainPageBanner: React.FC<MainPageBannerProps> = ({ children }) => {
  return (
    <Banner>
      <p className="text-2xl font-bold">{children}</p>
    </Banner>
  );
};
