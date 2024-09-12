import Facebook from "./Facebook";
import Instagram from "./Instagram";
import WhatsApp from "./WhatsApp";
import Telegram from "./Telegram";
import Gmail from "./Gmail";

const links = [
  {
    Icon: Gmail,
    color: "hover:text-[#EA4335]",
    href: "mailto:aahhmm122199@gmail.com",
  },
  {
    Icon: WhatsApp,
    color: "hover:text-[#25D366]",
    href: "https://wa.me/+201029686857",
  },
  {
    Icon: Telegram,
    color: "hover:text-[#26A5E4]",
    href: "https://www.instagram.com/benali.2a4?igsh=MXV5aTV4czV5N2dscg==",
  },
  {
    Icon: Facebook,
    color: "hover:text-[#0866FF]",
    href: "https://www.facebook.com/ahmedali.mohsen.90?mibextid=ZbWKwL",
  },
  {
    Icon: Instagram,
    color: "hover:text-[#E4405F]",
    href: "https://www.instagram.com/",
  },
];

export default function ContactDetails() {
  return (
    <ul className="flex gap-4">
      {links.map(({ Icon, color, href }, index) => (
        <li key={index}>
          <a href={href} className={color}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
