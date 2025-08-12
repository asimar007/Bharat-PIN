import { Home, Map, Mailbox, Flag } from "lucide-react";

const DetailItem = ({ icon, label, value, iconColor }) => {
  const Icon = icon;
  return (
    <div className="flex items-center space-x-2 py-1">
      <Icon className={`w-3 h-3 ${iconColor} flex-shrink-0`} />
      <div className="min-w-0 flex-1">
        <span className="text-xs text-gray-500">{label}: </span>
        <span className="font-medium text-gray-800 text-xs truncate">
          {value || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default function AddressDetails({ address }) {
  //console.log(address);
  return (
    <div className="bg-gray-50 rounded-lg p-2 space-y-1">
      <DetailItem
        icon={Home}
        label="Town"
        value={address.county || address.neighbourhood}
        iconColor="text-gray-600"
      />
      <DetailItem
        icon={Map}
        label="District"
        value={address.state_district || address.city}
        iconColor="text-green-600"
      />
      <DetailItem
        icon={Mailbox}
        label="PIN"
        value={address.postcode}
        iconColor="text-red-600"
      />
      <DetailItem
        icon={Flag}
        label="State"
        value={address.state}
        iconColor="text-blue-600"
      />
    </div>
  );
}
