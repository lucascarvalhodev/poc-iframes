import { useEffect, useState } from "react";

interface Props {
  name: string;
  src: string;
  pathname: string;
}

export function IFrame({ name, src: initialSrc, pathname }: Props) {
  const [src, setSrc] = useState<string>(initialSrc + pathname);

  useEffect(() => {
    setSrc(initialSrc + pathname);
  }, [name]);

  return (
    <iframe title={name} src={src} style={{ width: "100%", height: "500px" }} />
  );
}
