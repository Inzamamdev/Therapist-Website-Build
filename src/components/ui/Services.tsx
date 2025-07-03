import React from "react";
import Image from "next/image";
const therapyData = [
  {
    title: "Therapy for Healthcare Providers and Students",
    description:
      "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you’re in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may face.",
    image: "/first.jpg",
  },
  {
    title: "Therapy for Trauma and Grief",
    description:
      "Life’s challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.",
    image: "/sec.jpg",
  },
  {
    title: "Therapy for Second Generation Individuals In Immigrant Families",
    description:
      "Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.",
    image: "/third.jpg",
  },
];
function Services() {
  return (
    <div className="bg-[#f3f0e8] text-center">
      <p className="py-28 text-4xl font-[freightans]">Area Of Focus</p>
      <div className="w-[92%] mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 pb-10">
        {therapyData.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className=" mx-auto overflow-hidden rounded-full">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-gray-800 font-serif">
              {item.title}
            </h3>
            <p className="mt-4 text-sm text-gray-700 font-sans leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
