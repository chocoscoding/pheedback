import { BarChart3Icon, FolderOpenIcon, ImportIcon } from "lucide-react";

export const PROCESS = [
  {
    title: "Create a project",
    description: "Create a project and add the desired site url.",
    icon: FolderOpenIcon,
  },
  {
    title: "Add to your site",
    description: "Import (Copy and Paste) the widget into your site.",
    icon: ImportIcon,
  },
  {
    title: "Analyze and Optimize",
    description: "Gain insights into project and optimize for better engagement.",
    icon: BarChart3Icon,
  },
] as const;
