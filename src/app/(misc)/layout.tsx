interface MiscPageLayoutProps {
  children: Readonly<React.ReactNode>;
}

export default function MiscPageLayout({ children }: MiscPageLayoutProps) {
  return <div className="h-full bg-cowboyHat">{children}</div>;
}
