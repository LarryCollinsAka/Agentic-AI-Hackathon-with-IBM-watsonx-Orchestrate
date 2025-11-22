import express from "express";

const app = express();

const operationalData = {
  inventory: [
    { product: "Solar Panels", warehouse: "Douala Central", stock_level: 120, reorder_threshold: 100, status: "Sufficient" },
    { product: "Battery Packs", warehouse: "Douala Central", stock_level: 45, reorder_threshold: 50, status: "Below threshold" },
    { product: "Smart Meters", warehouse: "Douala Central", stock_level: 200, reorder_threshold: 150, status: "Sufficient" },
    { product: "LED Bulbs", warehouse: "Douala Central", stock_level: 80, reorder_threshold: 75, status: "Sufficient" }
  ],
  vendors: [
    {
      name: "EcoSupply Ltd.",
      region: "Northern Cameroon",
      risk_rating: "Low",
      preferred_language: "Fulfulde",
      last_delivery_status: "On time",
      incidents: [
        { date: "2025-06-18", issue: "Incorrect packaging format", resolution: "Auto-alert triggered; resolved in 24h" }
      ],
      sustainability: { waste_compliance_percent: 98, sdg9_alignment: "Strong", audit_score: "A" }
    },
    {
      name: "NovaTrade Inc.",
      region: "Lagos, Nigeria",
      risk_rating: "Medium",
      preferred_language: "English",
      last_delivery_status: "Delayed by 4 days",
      incidents: [
        { date: "2025-08-12", issue: "Shipment delayed by 4 days", resolution: "Reallocated from Douala warehouse" }
      ],
      sustainability: { waste_compliance_percent: 85, sdg9_alignment: "Moderate", audit_score: "B" }
    },
    {
      name: "SolaTech SARL",
      region: "Yaoundé, Cameroon",
      risk_rating: "High",
      preferred_language: "French",
      last_delivery_status: "On time",
      incidents: [
        { date: "2025-07-03", issue: "Missing sustainability report", resolution: "Escalated to compliance manager" }
      ],
      sustainability: { waste_compliance_percent: 60, sdg9_alignment: "Weak", audit_score: "C" }
    }
  ],
  policy: {
    approval_thresholds: [
      { range: "< $5,000", approval_level: "Auto-approved", approvers: [] },
      { range: "$5,000–$20,000", approval_level: "Procurement review", approvers: ["Procurement Officer"] },
      { range: "> $20,000", approval_level: "Dual approval", approvers: ["Finance", "Procurement"] }
    ],
    contract_terms: {
      vendor_name: "TransGlobal Freight Ltd.",
      delivery_sla_days: 7,
      penalty_percent: 2.0,
      escalation_steps: ["Alert Procurement Officer", "Escalate to Compliance Manager after 48h"]
    }
  },
  multilingual_alerts: {
    English: { subject: "Shipment Delay Alert", message: "Your shipment is delayed. Apex will reallocate inventory to minimize impact." },
    French: { subject: "Alerte de retard d’expédition", message: "Votre expédition est retardée. Apex réaffectera les stocks pour limiter l’impact." },
    Hausa: { subject: "Jinkirin jigilar kaya", message: "Jigilarku ta jinkirta. Apex zai sake rarraba kaya don rage tasiri." },
    Fulfulde: { subject: "Jokkondirde jiggirde", message: "Jiggirde maa jokkondirde. Apex ena waawi jokkondirde stock ngam waɗde fayde." }
  }
};

// Root endpoint
app.get("/", (req, res) => {
  res.json(operationalData);
});

// Export for Vercel
export default app;
