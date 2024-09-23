import { ProfileProps } from "@/lib/interface";
import Image from "next/image";

const Profile: React.FC<ProfileProps> = ({ gambar, className }) => {
  return (
    <div className={className}>
      <Image
        src={gambar}
        alt="profile"
        width={400}
        height={400}
        className="rounded-full bg-neoyellow-200 border-2 border-black"
        priority
        loading="eager"
      />
    </div>
  );
};

export default Profile;
