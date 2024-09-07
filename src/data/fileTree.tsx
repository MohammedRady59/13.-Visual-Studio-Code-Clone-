import { v4 as uuidv4 } from "uuid";
import { IFile } from "../Interface";
export const fileTree: IFile = {
  name: " Vs Code Clone",
  isFolder: true,
  id: uuidv4(),
  children: [
    {
      name: "node_modules",
      isFolder: true,
      id: uuidv4(),
      children: [
        {
          name: ".vite",
          isFolder: true,
          id: uuidv4(),
          children: [
            {
              name: "react.js",
              isFolder: false,
              id: uuidv4(),
            },
          ],
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      id: uuidv4(),
      children: [
        {
          name: "components",
          isFolder: true,
          id: uuidv4(),
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
              id: uuidv4(),
            },
            {
              name: "Button.tsx",
              isFolder: false,
              id: uuidv4(),
            },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      id: uuidv4(),

      children: [
        {
          name: "index.html",
          isFolder: false,
          id: uuidv4(),
        },
      ],
    },
  ],
};

/*  name: "VS Code ",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.js",
              isFolder: false,
              content: "",
            },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
  ], */
