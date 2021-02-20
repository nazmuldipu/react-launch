export const navTree = [
  { label: "Dashboard", roles: [], path: "/dashboard", subNav: [] },
  {
    label: "Ship",
    path: "",
    roles: ["ROLE_ADMIN"],
    subNav: [
      { label: "Add", path: "/dashboard/ship-add" },
      { label: "Ships", path: "/dashboard/ships" },
      { label: "Ship map", path: "/dashboard/ship-map" },
    ],
  },
];
