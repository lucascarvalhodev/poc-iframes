import { useEffect, useState } from "react";

interface Props {
  name: string;
  src: string;
  pathname: string;
}

export function IFrame({ name, src, pathname }: Props) {
  useEffect(() => {
    (window as any).initialPathname = pathname;
  }, [name]);

  return (
    <iframe title={name} src={src} style={{ width: "100%", height: "500px" }} />
  );
}
