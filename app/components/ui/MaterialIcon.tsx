import dynamic from "next/dynamic";
import { TypeMaterialIcon } from "shared/types/icon.types";

const MaterialIcon: React.FC<{ name: TypeMaterialIcon; className?: string }> = ({
  name,
  className,
}) => {
  const IconComponent = dynamic(
    () => import("react-icons/md").then((mod) => mod[name]),
    {
      ssr: false,
      loading: () => <span className={className} />, // Заглушка при загрузке
    }
  );

  return <IconComponent className={className} />;
};

export default MaterialIcon;
