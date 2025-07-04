"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DropdownItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <ExpandMoreIcon
          className={`transition-transform ${
            open ? "rotate-180" : "rotate-0"
          } text-gray-500`}
        />
      </button>
      {open && (
        <div className="px-4 py-2 text-sm text-gray-600 border-t border-gray-200">
          {content}
        </div>
      )}
    </div>
  );
}

export default function DropdownList() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 shadow border border-gray-200 rounded-md bg-white">
      <DropdownItem
        title="Using the Digital Health Assistant"
        content="The Digital Health Assistant helps guide users through symptom checking, answering health-related questions, and accessing different services like doctor chat or teleconsultation. It provides a user-friendly interface for faster triage and decision making."
      />
      <DropdownItem
        title="Using the Symptom checker service"
        content="This service allows users to input symptoms and receive possible causes, urgency advice, and recommendations for care. The system uses advanced AI and clinical guidelines to guide users through a safe and effective decision process."
      />
      <DropdownItem
        title="Using Doctor Chat"
        content="Users can chat live with qualified doctors through the chat feature. This enables quick consultations, prescriptions, and medical advice – all from the comfort of home."
      />
      <DropdownItem
        title="Using Teleconsultation"
        content="Teleconsultation allows video or voice calls with doctors. It is suitable for more complex discussions or visual diagnosis. Appointments can be booked directly through the platform."
      />
      <DropdownItem
        title="Security and Data Privacy"
        content="All user data is stored securely using encryption. The platform complies with local and international data protection regulations (such as HIPAA or GDPR). Users have control over their data access and sharing preferences."
      />
      <DropdownItem
        title="Compliments, complaints and concerns"
        content="We value your feedback. You can share compliments, complaints, or any concerns directly through the feedback section in your account, or contact our support team. All messages are handled confidentially."
      />
      <DropdownItem
        title="Why people love the Digital Health Assistant?"
        content="The Digital Health Assistant saves time, reduces unnecessary doctor visits, and provides instant help. Users appreciate its convenience, accuracy, and ease of use in managing everyday health concerns."
      />
    </div>
  );
}
    