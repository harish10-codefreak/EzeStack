export default function TeamGridSection() {
  const team = [
    {
      name: "Alice Johnson",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bob Smith",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Carol Lee",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}