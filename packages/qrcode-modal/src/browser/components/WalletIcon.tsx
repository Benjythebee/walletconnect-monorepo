// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

interface WalletIconProps {
  color: string;
  logo: string;
  href: string;
  name: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function WalletIcon(props: WalletIconProps) {
  const { color, href, name, logo, onClick } = props;
  return (
    <a
      className="walletconnect-connect__button__icon_anchor"
      href={href}
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className="walletconnect-connect__button__icon"
        style={{ background: `url('${logo}') ${color}`, backgroundSize: "100%" }}
      ></div>
      <div
        style={{ fontSize: `${name.length > 8 ? 2.5 : 2.7}vw` }}
        className={"walletconnect-connect__button__text"}
      >
        {name}
      </div>
    </a>
  );
}

export default WalletIcon;
