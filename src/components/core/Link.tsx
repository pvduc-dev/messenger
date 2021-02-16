import React, { FC, useRef, RefObject } from 'react';
import { useLink, AriaLinkOptions, LinkAria } from '@react-aria/link';

interface LinkProps extends AriaLinkOptions {
  href: string;
}

const Link: FC<LinkProps> = ({ href, children, ...props }) => {
  const ref: RefObject<any> = useRef<HTMLAnchorElement>();
  const { linkProps }: LinkAria = useLink({ children, ...props }, ref);
  return (
    <a href={href} {...linkProps}>
      {children}
    </a>
  );
};

export { Link };
