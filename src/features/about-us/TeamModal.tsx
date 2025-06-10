import { X } from "lucide-react";
import Image from "next/image";

const TeamModal = ({
  onClose,
  member,
}: {
  member: any;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8 relative overflow-scroll max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>
        <div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-36 h-36 relative rounded-full overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="italic text-sm text-gray-700">{member.title}</p>
            </div>
          </div>

          <div className="mt-6" style={{ whiteSpace: "pre-line" }}>
            {member.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
