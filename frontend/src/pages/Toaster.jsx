// Toaster.jsx

import { useToast } from "../services/ContextService";

export default function Toaster() {
  const { toast } = useToast();

  if (!toast) return null;

  const colorMap = {
    // success: "bg-[#49978B]",
    success: "bg-orange-400",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-yellow-600 text-black",
  };

  const bgColor = colorMap[toast.type] || colorMap.info;

  return (
    <div
      className={`fixed top-16 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-1/2 shadow-lg z-50 text-white ${bgColor} text-2xl`}
    >
      {toast.message}
    </div>
  );
}
