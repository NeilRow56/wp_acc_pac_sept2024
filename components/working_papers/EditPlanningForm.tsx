import React from "react";

interface EditPlanningFormProps {
  data: {
    slug: string;
    period: string;
    shortDate: number;
    periodStart: any;
    periodEnd: any;
    clientId: string;
    id: string;
  };
}

export default function EditPlanningForm({ data }: EditPlanningFormProps) {
  return <div>EditPlanningForm</div>;
}
