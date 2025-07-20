import { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SettingsModalProps {
  modalOpen: boolean;
  onClose: () => void;
}
const SettingsModal: React.FC<SettingsModalProps> = ({
  modalOpen,
  onClose,
}) => {
  const [notifications, setNotifications] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlerts(true);
    setTimeout(() => {
      setShowAlerts(false);
      onClose();
    }, 1500);
  };
  return modalOpen ? (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 min-w-[320px] max-w-md w-full shadow-lg text-black dark:text-white">
        <h2 className="text-xl font-bold mb-4">Edit Settings</h2>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="notifications" className="font-medium">
            Notifications
          </label>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
            className="data-[state=checked]:bg-blue-500"
          />
        </div>
        {showAlerts && (
          <Alert className="mb-4">
            <CheckCircle2Icon color="#10B981" />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
        )}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="flex justify-end gap-2 mt-4 ">
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={onSave}>
              Save
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default SettingsModal;
