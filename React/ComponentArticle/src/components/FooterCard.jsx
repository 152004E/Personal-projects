
import avatar from "../assets/images/Kisame.webp"
import { ShareButton } from "./ShareButton";
export const FooterCard = () => {

   
  return (
    <footer className="flex justify-center items-center gap-10   h-16  ">
        <img src={avatar} alt=""  className="w-15 rounded-full cursor-pointer transition-all duration-500 hover:scale-[1.08]" />
      <div>
        <p className="text-black/70 text-sm font-bold ">kisame hoshigaki</p>
        <p className="text-Very-Dark-Grayish-Blue/70 font-bold text-[11px]">28 de junio de 2025</p>
      </div>
        <ShareButton />
     
    </footer>
  );
};
