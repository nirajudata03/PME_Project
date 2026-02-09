import highEfficiency from '../assets/highEfficiency.png'
import instantDrying from '../assets/instantDrying.png'
import smartMonitoring from '../assets/smartMonitoring.png'

const featureData = [
  {
    title: "High Efficiency Drying",
    description:
      "Solar-powered dehydration system designed to maximize efficiency while reducing energy costs.",
    points: [
      "Optimized solar energy usage",
      "Uniform heat distribution",
      "Low operational cost",
    ],
    image: highEfficiency,
  },
  {
    title: "Instant & Natural Drying",
    description:
      "Advanced airflow system ensures fast, hygienic, and natural dehydration without chemicals.",
    points: [
      "Hot air circulation system",
      "No preservatives required",
      "Maintains natural color & taste",
    ],
    image: instantDrying,
    reverse: true,
  },
  {
    title: "Smart Monitoring & Control",
    description:
      "Easy-to-monitor system ensures consistent dehydration results for every batch.",
    points: [
      "Temperature control",
      "Batch-wise monitoring",
      "Scalable for commercial use",
    ],
    image: smartMonitoring,
  },
];
export default featureData;