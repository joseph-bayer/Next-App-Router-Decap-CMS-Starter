export type NavItem = NavLink | NavDropdown;

export interface NavDropdown {
  type: "dropdown";
  title: string;
  links: {
    title: string;
    relativeUrl: string;
  }[];
}

export interface NavLink {
  type: "link";
  title: string;
  relativeUrl: string;
}
